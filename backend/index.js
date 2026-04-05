require('dotenv').config();

const express = require("express"); 
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const {HoldingsModel}= require('./model/HoldingsModel');
const {PositionsModel}= require('./model/PositionsModel');
const {OrdersModel}= require('./model/OrdersModel');
const {FundsModel}= require('./model/FundsModel');
const { requireAuth } = require('./Middlewares/AuthMiddleware');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

const extraOrigins = [
  process.env.FRONTEND_URL,
  process.env.DASHBOARD_URL,
].filter(Boolean);

// CORS configuration for credentials
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:5173',
    ...extraOrigins,
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use("/", authRoute);


mongoose.connect(uri)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));




// app.get('/addPositions',async(req,res)=>{
//     let temppositions = [{
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ]

// temppositions.forEach((item)=>{
//    let newPositions = new PositionsModel({

//     product: item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss: item.isLoss,
//    });

//    newPositions.save();
// });
// res.send("done");
// });



app.get('/holdings', requireAuth, async (req, res) => {
  const holdings = await HoldingsModel.find({ userId: req.user._id });
  res.json(holdings);
});

app.get('/positions', requireAuth, async (req, res) => {
  const positions = await PositionsModel.find({ userId: req.user._id });
  res.json(positions);
});

app.get('/orders', requireAuth, async (req, res) => {
  const orders = await OrdersModel.find({ userId: req.user._id }).sort({ createdAt: -1 });
  res.json(orders);
});

app.get('/funds', requireAuth, async (req, res) => {
  let funds = await FundsModel.findOne({ userId: req.user._id });
  if (!funds) {
    funds = await FundsModel.create({ userId: req.user._id });
  }
  res.json(funds);
});

app.post('/funds/add', requireAuth, async (req, res) => {
  const amount = Number(req.body.amount);
  if (!amount || amount <= 0) {
    return res.status(400).json({ success: false, message: 'Amount must be greater than 0.' });
  }

  let funds = await FundsModel.findOne({ userId: req.user._id });
  if (!funds) {
    funds = await FundsModel.create({ userId: req.user._id });
  }

  funds.availableCash += amount;
  funds.availableMargin += amount;
  funds.openingBalance += amount;
  funds.payin += amount;
  await funds.save();

  res.json({ success: true, funds });
});

app.post('/funds/withdraw', requireAuth, async (req, res) => {
  const amount = Number(req.body.amount);
  if (!amount || amount <= 0) {
    return res.status(400).json({ success: false, message: 'Amount must be greater than 0.' });
  }

  let funds = await FundsModel.findOne({ userId: req.user._id });
  if (!funds) {
    funds = await FundsModel.create({ userId: req.user._id });
  }

  if (amount > funds.availableCash) {
    return res.status(400).json({ success: false, message: 'Insufficient available cash to withdraw.' });
  }

  funds.availableCash -= amount;
  funds.availableMargin = Math.max(0, funds.availableMargin - amount);
  funds.openingBalance = Math.max(0, funds.openingBalance - amount);
  await funds.save();

  res.json({ success: true, funds });
});

app.post('/newOrder', requireAuth, async (req, res) => {
  const { name, qty, price, mode } = req.body;

  if (!name || !qty || !price || !mode) {
    return res.status(400).json({ error: 'Missing order fields' });
  }

  const order = new OrdersModel({
    userId: req.user._id,
    name,
    qty,
    price,
    mode,
  });

  await order.save();

  const holding = await HoldingsModel.findOne({ userId: req.user._id, name });
  const qtyNumber = Number(qty);
  const priceNumber = Number(price);

  if (mode === 'BUY') {
    if (holding) {
      const totalCost = holding.avg * holding.qty + priceNumber * qtyNumber;
      const newQty = holding.qty + qtyNumber;
      holding.qty = newQty;
      holding.avg = totalCost / newQty;
      holding.price = priceNumber;
      holding.net = `${((priceNumber / holding.avg - 1) * 100).toFixed(2)}%`;
      holding.day = `${((priceNumber / holding.avg - 1) * 100).toFixed(2)}%`;
      holding.isLoss = priceNumber < holding.avg;
      await holding.save();
    } else {
      await HoldingsModel.create({
        userId: req.user._id,
        name,
        qty: qtyNumber,
        avg: priceNumber,
        price: priceNumber,
        net: '+0.00%',
        day: '+0.00%',
        isLoss: false,
      });
    }
  } else if (mode === 'SELL') {
    if (holding) {
      const remainingQty = holding.qty - qtyNumber;
      if (remainingQty <= 0) {
        await HoldingsModel.deleteOne({ _id: holding._id });
      } else {
        holding.qty = remainingQty;
        holding.price = priceNumber;
        holding.net = `${((priceNumber / holding.avg - 1) * 100).toFixed(2)}%`;
        holding.day = `${((priceNumber / holding.avg - 1) * 100).toFixed(2)}%`;
        holding.isLoss = priceNumber < holding.avg;
        await holding.save();
      }
    }
  }

  let position = await PositionsModel.findOne({ userId: req.user._id, name });
  if (!position) {
    position = await PositionsModel.create({
      userId: req.user._id,
      product: 'EQ',
      name,
      qty: qtyNumber,
      avg: priceNumber,
      price: priceNumber,
      net: `${((priceNumber / priceNumber - 1) * 100).toFixed(2)}%`,
      day: '+0.00%',
      isLoss: false,
    });
  } else {
    position.qty = mode === 'BUY' ? position.qty + qtyNumber : Math.max(0, position.qty - qtyNumber);
    position.price = priceNumber;
    position.net = `${((priceNumber / position.avg - 1) * 100).toFixed(2)}%`;
    position.day = `${((priceNumber / position.avg - 1) * 100).toFixed(2)}%`;
    position.isLoss = priceNumber < position.avg;
    if (position.qty <= 0) {
      await PositionsModel.deleteOne({ _id: position._id });
    } else {
      await position.save();
    }
  }

  res.json({ success: true, order });
});

app.listen(PORT, () => {
    console.log("app is listning on port", PORT);
});

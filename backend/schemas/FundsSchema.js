const {Schema}=require("mongoose");

const FundsSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  availableMargin: { type: Number, default: 4043.1 },
  usedMargin: { type: Number, default: 3757.3 },
  availableCash: { type: Number, default: 4043.1 },
  openingBalance: { type: Number, default: 4043.1 },
  payin: { type: Number, default: 4064.0 },
  span: { type: Number, default: 0.0 },
  deliveryMargin: { type: Number, default: 0.0 },
  exposure: { type: Number, default: 0.0 },
  optionsPremium: { type: Number, default: 0.0 },
  liquidCollateral: { type: Number, default: 0.0 },
  equityCollateral: { type: Number, default: 0.0 },
});

module.exports = { FundsSchema };
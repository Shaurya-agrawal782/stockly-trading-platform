const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req) => {
  const token = req.cookies.token;
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.TOKEN_KEY);
  } catch (err) {
    return null;
  }
};

module.exports.userVerification = async (req, res) => {
  const data = verifyToken(req);
  if (!data) {
    return res.json({ status: false });
  }
  const user = await User.findById(data.id);
  if (!user) return res.json({ status: false });
  return res.json({
    status: true,
    user: {
      username: user.username,
      email: user.email,
    },
  });
};

module.exports.requireAuth = async (req, res, next) => {
  const data = verifyToken(req);
  if (!data) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = await User.findById(data.id);
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  req.user = user;
  next();
};
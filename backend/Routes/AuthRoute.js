const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { UserModel } = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");

const router = express.Router();

const isProduction = process.env.NODE_ENV === "production" || process.env.RENDER === "true";

const cookieOptions = {
  httpOnly: true,
  sameSite: isProduction ? "none" : "lax",
  secure: isProduction,
  maxAge: 3 * 24 * 60 * 60 * 1000,
};

const sanitizeUser = (userDoc) => ({
  _id: userDoc._id,
  username: userDoc.username,
  email: userDoc.email,
});

router.post("/", async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.json({ status: false });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await UserModel.findById(decoded.id).select("-password");

    if (!user) {
      return res.json({ status: false });
    }

    return res.json({ status: true, user: sanitizeUser(user) });
  } catch (error) {
    return res.json({ status: false });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    const existingUser = await UserModel.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(409).json({ success: false, message: "Email already in use." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      email: email.toLowerCase(),
      username,
      password: hashedPassword,
    });

    const token = createSecretToken(user._id);
    res.cookie("token", token, cookieOptions);

    return res.status(201).json({ success: true, user: sanitizeUser(user), token });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Signup failed." });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required." });
    }

    const user = await UserModel.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid credentials." });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ success: false, message: "Invalid credentials." });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, cookieOptions);

    return res.json({ success: true, user: sanitizeUser(user), token });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Login failed." });
  }
});

router.post("/logout", async (req, res) => {
  res.clearCookie("token", cookieOptions);
  return res.json({ success: true });
});

module.exports = router;

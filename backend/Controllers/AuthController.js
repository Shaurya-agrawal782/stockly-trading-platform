const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res, next) => {
  try {
    console.log("Signup request received:", req.body);
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed up successfully", success: true, user });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Signup failed", success: false, error: error.message });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
      sameSite: 'lax',
    });
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true, user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed", success: false, error: error.message });
  }
};

module.exports.Logout = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: false,
    expires: new Date(0),
    sameSite: 'lax',
  });
  res.status(200).json({ message: "Logged out successfully", success: true });
};
const express = require("express");
const jwt = require('jsonwebtoken');
const loginUserModel = require("../models/loginModel");
const { JWT_SECRET_KEY } = require("../config/config");
const verifyUser = require("../middleware/verifyUser");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  try {
    const existingUser = await loginUserModel.findOne({ email });
    if (!existingUser) {
      if (password === confirmPassword) {
        await loginUserModel.create({ email, password })
          .then(() => {
            return res.json({ status: "success", message: "You are registered successfully" });
          });
      } else {
        return res.json({ status: "password error", message: "Password and confirm password do not match" });
      }
    } else {
      return res.json("Email already in use");
    }
  } catch (err) {
    console.error(err);
    return res.json({ status: "error", message: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginUserModel.findOne({ email });
    if (user) {
      if (password === user.password) {
        jwt.sign({ userId: user._id, email: user.email, password: user.password }, JWT_SECRET_KEY, { expiresIn: '1d' }, (err, token) => {
          if (err) {
            console.error(err);
            return res.json({ error: "Token generation failed" });
          }
          return res.status(200).json({ status: "success", data: token });
        });
      } else {
        return res.json("Incorrect password");
      }
    } else {
      return res.json({ status: "user not found", message: "User not found" });
    }
  } catch (err) {
    console.error(err);
    return res.json({ status: "error", message: "Internal Server Error" });
  }
});

router.get("/verifyUser", verifyUser, (req, res) => {
  return res.json({ status: "success", data: req.email });
});

module.exports = router;
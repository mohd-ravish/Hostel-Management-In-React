const express = require("express");
const registerUserModel = require("../models/registerModel");
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    await registerUserModel.create(req.body)
      .then((data) => {
        console.log("Details submitted");
        return res.json({ status: "success", message: "Details submitted"});
      });
  } catch (err) {
    console.error(err);
    res.json({status: "error", message: "Internal Server Error"});
  }
});

module.exports = router;
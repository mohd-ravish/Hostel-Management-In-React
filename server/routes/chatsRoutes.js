const express = require("express");
const chatsUserModel = require("../models/chatsModel");
const router = express.Router();

router.post("/submitchat", async (req, res) => {
  try {
    await chatsUserModel.create(req.body)
      .then(() => {
        return res.json({status: "success", message: "Message sent!"});
      });
  } catch (err) {
    console.error(err);
    res.json({status: "error", message: "Internal Server Error"});
  }
});

router.get("/readChats", async (req, res) => {
  try {
    const results = await chatsUserModel.find({}).sort({ _id: -1 });
    return res.json({status: "success", data: results});
  } catch (err) {
    console.error(err);
    res.json({status: "error", message: "Internal Server Error"});
  }
});

module.exports = router;
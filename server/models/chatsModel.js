const mongoose = require("../db/connection");

const chatsSchemaData = new mongoose.Schema({
  chat: String,
}, {
  timestamps: true
});

const chatsUserModel = mongoose.model("chats", chatsSchemaData);

module.exports = chatsUserModel;
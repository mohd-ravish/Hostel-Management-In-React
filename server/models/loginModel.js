const mongoose = require("../db/connection");

const loginSchemaData = new mongoose.Schema({
  email: String,
  password: String,
}, {
  timestamps: true
});

const loginUserModel = mongoose.model("students", loginSchemaData);

module.exports = loginUserModel;
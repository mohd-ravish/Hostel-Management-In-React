const mongoose = require("../db/connection");

const registerSchemaData = new mongoose.Schema({
  name: String,
  dob: String,
  father: String,
  phone: String,
  gender: String,
  email: String,
  id: String,
  enrollno: String,
  faculty: String,
  department: String,
  issuedate: String,
  expirydate: String,
  addresstype: String,
  nationality: String,
  state: String,
  district: String,
  blockno: String,
  wardno: String,
}, {
  timestamps: true
});

const registerUserModel = mongoose.model("details", registerSchemaData);

module.exports = registerUserModel;
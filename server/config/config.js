require("dotenv").config();

const config = {
  DB: process.env.MONGODB_URI,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  PORT: process.env.PORT,
};

module.exports = config;
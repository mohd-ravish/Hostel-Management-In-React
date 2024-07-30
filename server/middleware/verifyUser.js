const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require("../config/config");

const verifyUser = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.json({ error: "You are not authorized" });
  } else {
    jwt.verify(token, JWT_SECRET_KEY, {}, (err, decoded) => {
      if (err) {
        return res.json({ error: "Token is not valid" });
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
};

module.exports = verifyUser;
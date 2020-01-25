var jwt = require("jsonwebtoken");
let secret = "dbnnf45d";


const createToken = async (userId, email, name, refNumber, createdAt) => {
  const timestamp = new Date().getTime();
  return await jwt.sign({
    sub: userId,
    lat: timestamp,
    email,
    name,
    refNumber,
    createdAt,
  }, secret);
};

const jwtChecker = async (req, res, next) => {
  let token = req.headers["authorization"];
  try {
    var decoded = await jwt.verify(token, secret);
    if (decoded.sub) {
      next();
    } else {
      return res.status(401).json({
        error: "login is required"
      });
    }
  } catch (error) {
    return res.status(401).json({
      error: "login is required"
    });
  }
};

module.exports = {
  createToken,
  jwtChecker
};
const {
  jwtChecker
} = require("../src/auth/jwtHelper");

const dashboard = app => {
  app.get("/dashboard", jwtChecker, async (req, res) => {
    try {
      return res.status(200).json("hello");
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  });
};





module.exports = {
  dashboard,
};
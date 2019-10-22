const { getUserByEmail } = require("../src/queries/user");

const validateEmail = app => {
  app.get("/validateEmail/", async (req, res) => {
    const { email } = req.query;

    try {
      let user = await getUserByEmail(email);
      if (!user) {
        return res.status(201).json({ message: "good" });
      }

      return res.status(201).json({ email: "user exists" });
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  });
};

module.exports = { validateEmail };

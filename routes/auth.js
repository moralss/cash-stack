const {
  bycryptPassword,
  checkPasswordMatch
} = require("../src/auth/passwordHelper");
const {
  createToken
} = require("../src/auth/jwtHelper");
const {
  creatUser
} = require("../src/commands/register");
const {
  validateNewUser
} = require("../src/validations/registerError");
const {
  getUserByEmail,
  getRefs
} = require("../src/queries/user");
const {
  generateRef
} = require("../src/utils/refs");
const { changePassword }
  = require("../src/updates/password");

const authRoutes = app => {
  app.post("/api/signin", async (req, res) => {
    const data = req.body;

    try {
      const {
        isValid,
        errors
      } = await validateNewUser(data);
      if (!isValid) {
        return res.status(400).json({
          errors
        });
      }

      let hashedPassword = await bycryptPassword(data.password);

      let refNumber = generateRef();

      let userId = await creatUser({
        ...data,
        hashedPassword,
        refNumber
      });


      let user = await getUserByEmail(data.email);

      let token = await createToken(userId, user.email, user.first_name,
        refNumber);
      return res.status(200).json({
        refNumber: refNumber,
        token: token
      });

    } catch (e) {
      console.log(e)
      return res.status(500).json(e);
    }
  });

  app.post("/api/login", async (req, res) => {
    const data = req.body;
    try {
      const user = await getUserByEmail(data.email);
      if (!user) {
        return res.status(400).json({
          error: "email or password is incorrect"
        });
      }
      const isMatch = await checkPasswordMatch(
        data.password,
        user.hashed_password
      );

      if (!isMatch) {
        return res.status(400).json({
          error: "email or password is incorrect"
        });

      }
      let userFound = await getRefs(data.email);
      let token = await createToken(user.id, user.email, user
        .first_name, userFound.ref_number);
      return res.status(200).json({
        token
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json();
    }
  });

  app.put("/api/change-password", async (req, res) => {
    const { newPassword, userId } = req.body;
    console.log(req.body);
    try {
      let hashedPassword = await bycryptPassword(
        newPassword
      );
      changePassword(hashedPassword, userId)
      return res.send(201)

    } catch (e) {
      console.log(e);
      return res.status(500).json();
    }
  });
};

module.exports = {
  authRoutes
};
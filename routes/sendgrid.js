const {
  sendMessage
} = require("../src/sendGrid");
const sgMail = require('@sendgrid/mail');
const { getUserByEmail } = require("../src/queries/user");
var Chance = require('chance');



const sendEmail = app => {
  app.post("/api/send-email", async (req, res) => {
    try {
      const {
        email,
        subject,
        message
      } = req.body;
      sendMessage(
        subject,
        message,
        email,
      );
      return res.status(200).json("hello");
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  });



  const listOfComfirms = [];


  app.post("/api/check-confirmation", async (req, res) => {
    try {
      const {
        email,
        code,
      } = req.body;

      console.log("body body", req.body)

      for (var i in listOfComfirms) {
        if (listOfComfirms[i].email == email) {
          if (listOfComfirms[i].code == code) {
            delete listOfComfirms[i];
            return res.json({ message: "correct" })
          }
        }
      }

      return res.status(201).json({ code: "incorrect code" });
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  });


  app.post("/api/send-confirmation", async (req, res) => {

    try {
      const data = req.body;
      console.log("data", data.email);

      const generatedCode = () => {
        const confirmCode = Math.floor(1000 + Math.random() * 900000)
        return confirmCode;
      }

      const newcode = generatedCode();
      const pattern = { email: data.email, code: newcode }
      listOfComfirms.push(pattern);


      console.log("list", listOfComfirms)
      sendMessage(
        "confirmation code",
        `${newcode}`,
        data.email
      );
      return res.status(200).json({ message: "success" });
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  });

  app.get("/api/password-recovery", async (req, res) => {

    try {
      const { _email } = req.query;
      const user = await getUserByEmail(_email);
      if (user) {
        return res.send({ userId: user.id })
      }

      if (!user) {
        return res.status(400);
      }


      // const link = `http://localhost:3000/passwordRecovery/${userId}`;

      console.log(_email, user);
      // sendMessage(
      //   "confirmation code",
      //   `${newcode}`,
      //   data.email
      // );
      return res.status(200).json({ message: "success" });
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  });



};



module.exports = {
  sendEmail,

};
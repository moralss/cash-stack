const {
  sendMessage
} = require("../src/sendGrid");
const sgMail = require('@sendgrid/mail');

const sendEmail = app => {
  app.post("/send-email", async (req, res) => {
    try {
      const {
        email,
        subject,
        message
      } = req.body;
      sendMessage(email,
        subject,
        message);
      return res.status(200).json("hello");
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  });

};



module.exports = {
  sendEmail,

};
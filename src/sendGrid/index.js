const sgMail = require('@sendgrid/mail');
const apiKey =
  "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";


sgMail.setApiKey(apiKey);

const sendMessage = async (subject, message, toEmail) => {

  try {
    const msg = {
      to: toEmail,
      from: "stackcash612@gmail.com",
      subject: subject,
      text: message,
      html: `<h1> ${message}</h1>`,
    };
    return await sgMail.send(msg)
  } catch (e) {
    console.log(e);
  }
}

const sendUsMessage = async (email, subject, image) => {

  try {
    const msg = {
      to: "jeramoral@gmail.com",
      from: email,
      subject: subject,
      text: image,
      html: `<h1> <img style="width:12rem; height:16rem" src=${image} /></h1>`,
    };
    console.log("show us email")
    return await sgMail.send(msg)
  } catch (e) {
    console.log(e);
  }
}


module.exports = {
  sendMessage,
  sendUsMessage
};
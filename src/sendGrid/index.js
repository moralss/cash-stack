const sgMail = require('@sendgrid/mail');
const apiKey =
  "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";


sgMail.setApiKey(apiKey);

const sendMessage = async (email, subject, message) => {
  const mainEmail = "jeramoral@gmail.com"

  try {
    const msg = {
      to: 'stackcash612@gmail.com',
      from: email,
      subject: subject,
      text: message,
      html: `<strong>${message}</strong>`,
    };
    return await sgMail.send(msg)
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  sendMessage
};
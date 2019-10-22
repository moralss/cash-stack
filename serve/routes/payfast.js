function postPaymentToPayFast(payFastUrl, merchantId, merchantKey,
  returnUrl, cancelUrl, notifyUrl, nameFirst,
  nameLast, emailAddress, paymentId, amount,
  itemName, itemDescription, emailConfirmation,
  confirmationAddress) {
  // Sandbox merchant.
  if (merchantId == '10000100') {
    alert('Use the password \'clientpass\' to login and ' +
      'make the test purchase.');
  }

  postToURL(payFastUrl, {
    'merchant_id': merchantId,
    'merchant_key': merchantKey,
    'return_url': returnUrl,
    'cancel_url': cancelUrl,
    'notify_url': notifyUrl,
    'name_first': nameFirst,
    'name_last': nameLast,
    'email_address': emailAddress,
    'm_payment_id': paymentId,
    'amount': amount,
    'item_name': itemName,
    'item_description': itemDescription,
    'email_confirmation': emailConfirmation,
    'confirmation_address': confirmationAddress
  });
}

const activeAccount = app => {




  //   app.get("/AllMembers", async (req, res) => {
  //     const {
  //       _userId
  //     } = req.query;
  //     console.log(_userId);
  //     try {
  //       const members = await getAllMembers(_userId);
  //       console.log(members)
  //       return res.status(200).json({
  //         members: members
  //       });

  //     } catch (e) {
  //       console.log(e);
  //       return res.status(200).json();
  //     }
  //   });
}




module.exports = {
  activeAccount
};
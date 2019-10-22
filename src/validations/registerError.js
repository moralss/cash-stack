const _ = require("lodash");
const { getUserByEmail } = require("../queries/user");
// const { getBusinessOwnerByUsername } = require("../queries/business-owner");

const validateNewUser = async data => {
  let user = await getUserByEmail(data.email);
//   let businessOwnerUserName = await getBusinessOwnerByUsername(data.userName);

  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const errors = {};

  if (user !== undefined) {
    errors.email = "email already exists";
  }

//   if(businessOwnerUserName !== undefined){
//     errors.userName = "user name already exists";    
//   }

//   if (data.userName === undefined) {
//     errors.userName = "user name is required";
//   }

//   if (data.email !== undefined && !re.test(data.email)) {
//     errors.email = "email is invalid";
//   }

//   if (data.password === undefined) {
//     errors.password = "password is required";
//   }

//   if (data.password !== undefined && !data.password.match(/^[a-z0-9]{5,20}$/)) {
//     errors.pasword = "password should consist of numbers and letters";
//   }

//   if (data.confirmPassword === undefined) {
//     errors.confirmPassword = "password confirm is required";
//   }

//   if (
//     data.confirmPassword === undefined &&
//     data.confirmPassword !== data.password
//   ) {
//     errors.confirmPassword = "password does not match";
//   }

  return {
    errors,
    isValid: _.isEmpty(errors)
  };
};

module.exports = {
    validateNewUser
};
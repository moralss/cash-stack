import axios from "axios";
// import undefined from "firebase/empty-import";




const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }

  var letters = /^[0-9a-zA-Z]+$/;
  var regex = /^[0-9-+()]*$/;

  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.contact) {
    errors.contact = "Required";
  }

  if (values.contact !== undefined && !values.contact.match(regex)) {
    errors.contact = "Invalid phone number";
  }

  if (values.contact !== undefined && values.contact.split('').length < 10) {
    errors.contact = "Invalid phone number";
  }



  if (!values.pioneerRefs) {
    errors.pioneerRefs = "Required";
  }
  if (!values.sex) {
    errors.sex = "Required";
  }
  if (!values.city) {
    errors.city = "Required";
  }

  return errors;
};

export default validate;
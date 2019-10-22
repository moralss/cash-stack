import axios from "axios";




const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }


  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.contact) {
    errors.contact = "Required";
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
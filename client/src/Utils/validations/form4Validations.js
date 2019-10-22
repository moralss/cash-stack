const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values
    .email)) {
    errors.email = "Invalid email address";
  }


  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }

  if (values.confirmPassword !== values.password && values.password !== "" &&
    values
    .confirmPassword !== "") {
    errors.confirmPassword = "password should match!";
  }


  return errors;
};

export default validate;
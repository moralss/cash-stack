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

  if (values.password !== undefined && values.password.split("").length < 6) {
    errors.password = "minimun of 6 characters";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  if (!values.OTP) {
    errors.OTP = "Required";
  }

  if (values.confirmPassword !== values.password && values.password !== "" &&
    values
      .confirmPassword !== "") {
    errors.confirmPassword = "password should match!";
  }



  if (!values.emailConfirm) {
    errors.emailConfirm = "Required";
  }


  return errors;
};

export default validate;
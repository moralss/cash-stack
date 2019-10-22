var saIdParser = require('south-african-id-parser');

const validate = values => {
  const errors = {};

  if (!values.city) {
    errors.city = "Required";
  }

  if (!values.Id) {
    errors.Id = "Required";
  }

  // if (values.Id) {
  //   var info = saIdParser.parse(values.Id);
  //   console.log("show ......................", info)
  //   if (info.isValid == false) {
  //     errors.Id = "invalid";
  //   }
  // }

  if (!values.sex) {
    errors.sex = "Required";
  }

  //  console.log("errord " + values.sex)


  return errors;
};

export default validate;
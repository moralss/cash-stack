import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import validate from "../../Utils/validations/form1Validations";
import renderField from "./RenderField";
import Button from '@material-ui/core/Button';

class Form1 extends Component {
  constructor() {
    super();
  }

  async handleSubmit(data) {
    // Todo
    this.props.nextPage();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form
        onSubmit={handleSubmit(data => this.handleSubmit(data))}
      >
        <Field
          name="firstName"
          component={renderField}
          type="text"
          label="Name"
          placeholder="Enter name"
        />

        <Field
          name="lastName"
          component={renderField}
          label="Surname"
          type="text"
          placeholder="Enter Surname"
        />
        <Field
          name="contact"
          component={renderField}
          type="text"
          label="Contact"
          placeholder="Enter Contacts"
        />

        <Button
          variant="contained"
          className="btn-block btn col "
          type="submit"
          color="primary">
          Next
           </Button>

        {/* <button type="submit" className="btn  col btn-block">
          Next
        </button> */}
      </form>
    );
  }
}

export default reduxForm({
  form: "form1", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(Form1);

// export default Form1;

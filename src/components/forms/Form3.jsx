import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import validate from "../../Utils/validations/form4Validations";
import history from "../../routes/history";
import renderField from "./RenderField";
import { connect } from "react-redux";
import * as thunks from "../../actions/auth";
import { validateEmail } from "../../Utils/validations/asyncValidation";
import { SubmissionError } from "redux-form";

class Form3 extends Component {
  handleSubmit = async data => {
    try {
      const error = await validateEmail(data.email);

      if (error.email) {
        throw new SubmissionError({
          error
        });
      }
    } catch (e) {
      console.log(e);
    }

    this.props.registerUser({
      ...this.props.form.form1.values,
      ...this.props.form.form2.values,
      ...data
    });

    console.log("data", this.props);
    history.push("/dashboard");
  };

  render() {
    const { handleSubmit, pristine, previousPage, submitting } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <Field
            name="pioneerRefs"
            component={renderField}
            type="text"
            label="Pioneer Refs no"
            placeholder="Enter Refs no"
          />

          <Field
            name="email"
            component={renderField}
            type="text"
            label="email"
            placeholder="Enter Email"
          />

          <Field
            type="password"
            name="confirmPassword"
            component={renderField}
            label="confirm password"
            placeholder="Enter password"
          />
          <Field
            type="password"
            component={renderField}
            label="Password"
            name="password"
            placeholder="Password"
          />

          <div>
            <button
              type="submit"
              className="btn btn-block space"
              disabled={pristine || submitting}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-block space"
              onClick={previousPage}
            >
              Previous
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { form: state.form };
}

const reduxForm3 = reduxForm({
  form: "Form4", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(Form3);

function mapDispatchToProps(dispatch) {
  return {
    registerUser: data => dispatch(thunks.registerUser(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm3);

import { reset } from "redux-form";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import validate from "../../Utils/validations/form4Validations";
import history from "../../routes/history";
import renderField from "./RenderField";
import { connect } from "react-redux";
import * as thunks from "../../actions/auth";
import { validateEmail, checkConfirmation } from "../../Utils/validations/asyncValidation";
import { SubmissionError } from "redux-form";
import { sendConfirmation } from '../../actions/queries'
// import EmailConfirmation from "";


class Form3 extends Component {

  handleSubmit = async data => {
    try {
      const error = await validateEmail(data.email)
      const errorOTP = await checkConfirmation({ email: data.email, code: data.OTP });

      if (error.data.email == "user exists") {
        throw new SubmissionError({
          email: "Email exists"
        });
      }

      if (errorOTP.data.code == "incorrect code") {
        throw new SubmissionError({
          OTP: "Invalid code"
        });
      }
    } catch (e) {
      const error = JSON.parse(JSON.stringify(e));
      throw new SubmissionError({
        ...error.errors
      });
    }

    this.props.registerUser({
      ...this.props.form.form1.values,
      ...this.props.form.form2.values,
      ...data
    });
    history.push("/dashboard");
  };


  sendConfirmations() {
    const enteredEmail = this.props.form['object Object'].values.email;
    this.props.sendConfirmation(enteredEmail)
  }

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
            name="password"
            type="password"
            component={renderField}
            label="Password"
            placeholder="Password"
          />

          <Field
            name="confirmPassword"
            type="password"
            component={renderField}
            label="confirm password"
            placeholder="confirm password"
          />

          <button onClick={() => this.sendConfirmations()}>Send OTP code</button>
          <Field
            name="OTP"
            component={renderField}
            type="text"
            // label="Enter email confirm P code"
            placeholder="Enter email confirmation OTP code"
          />

          <div>
            <button
              type="submit"
              className="btn btn-block space"
              disabled={pristine || submitting}
            >
              Send
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
    registerUser: data => dispatch(thunks.registerUser(data)),
    sendConfirmation: data => dispatch(sendConfirmation(data)),
    // checkConfirmation: data => dispatch(checkConfirmation(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm3);

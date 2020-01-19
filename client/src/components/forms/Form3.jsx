import { reset } from "redux-form";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import validate from "../../Utils/validations/form4Validations";
import history from "../../routes/history";
import renderField from "./RenderField";
import { connect } from "react-redux";
import * as auth from "../../redux/user/actions/auth";
import { validateEmail, checkConfirmation } from "../../Utils/validations/asyncValidation";
import { SubmissionError } from "redux-form";
import * as approvals from '../../redux/approval/actions/approvals'
import Button from '@material-ui/core/Button';



class Form3 extends Component {

  handleSubmit = async data => {
    try {
      const error = await validateEmail(data.email)
      const errorOTP = await checkConfirmation({ email: data.email, code: data.OTP });

      console.log("error", errorOTP);
      if (error.data.email == "email already exists") {
        throw new SubmissionError({
          email: "Email exists"
        });
        return
      }

      if (errorOTP.data.code == "incorrect code") {
        throw new SubmissionError({
          OTP: "Invalid code"
        });
      }
    } catch (e) {
      const error = JSON.parse(JSON.stringify(e));
      console.log(error, e);
      throw new SubmissionError({
        ...error.errors
      });
      return
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
            placeholder="Enter email confirmation OTP code"
          />

          <div>
            <Button
              style={{ marginBottom: "1rem" }}
              variant="contained"
              className="btn-block btn col "
              type="submit"
              color="primary"
              disabled={pristine || submitting}
            >
              Send
           </Button>
            <Button
              className="btn-block btn col "
              onClick={previousPage}
              color="primary"
              onClick={previousPage}
            >
              Previous
           </Button>
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
    registerUser: data => dispatch(auth.registerUser(data)),
    sendConfirmation: data => dispatch(approvals.sendConfirmation(data)),
    // checkConfirmation: data => dispatch(checkConfirmation(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm3);

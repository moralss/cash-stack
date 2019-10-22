import React, { Component } from "react";
import renderField from "./RenderField";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as thunks from "../../actions/auth";
import history from "../../routes/history";

class LoginForm extends Component {
  handleSubmit = async data => {
    await this.props.login(data);
    console.log("auth ", this.props.auth);
    if (this.props.auth) {
      history.push("/dashboard");
    }
  };

  render() {
    const { handleSubmit, pristine, submitting, authError } = this.props;
    console.log("eerroo", this.props.authError);
    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <Field
          component={renderField}
          type="text"
          label="email"
          name="email"
          type="email"
          placeholder="Enter email"
        />
        <Field
          component={renderField}
          type="text"
          label="Password"
          name="password"
          type="password"
          placeholder="Enter password"
        />
        <span className="error">
          {authError !== undefined ? authError.error : null}
        </span>
        <button
          type="submit"
          disabled={pristine || submitting}
          className="btn-block btn col "
        >
          send
        </button>
      </form>
    );
  }
}

LoginForm.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    login: data => dispatch(thunks.login(data))
  };
}

function mapStateToProps(state) {
  return {
    authError: state.user.error,
    auth: state.user.auth
  };
}

const loginForm = reduxForm({
  form: "login", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(LoginForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(loginForm);

// export default LoginForm;

import React, { Component } from "react";
import renderField from "./RenderField";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as thunks from "../../redux/user/actions/auth";
import history from "../../routes/history";
import { recoverPassword } from '../../redux/user/actions/auth';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',

    }
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    await this.props.login({ email, password });
    if (this.props.auth) {
      history.push("/profile");
    }
  };

  recoverPassword = () => {
    this.props.recoverPassword(this.state.email)
    if (this.props.userIdPasswordChange !== undefined) {
    }
  }

  render() {
    const { authError } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          style={{ width: "100%", margin: "0.6rem 0rem" }}
          id="standard-basic"
          type="email"
          label="Email"
          name="email"
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <TextField
          style={{ width: "100%", margin: "0.6rem 0rem" }}
          id="standard-basic"
          label="Password"
          name="password"
          type="password"
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <span className="error">
          {authError !== undefined ? authError.error : null}
        </span>

        <span onClick={() => this.recoverPassword()}> password recover </span>
        <Button
          variant="contained"
          className="btn-block btn col "
          type="submit" color="primary">
          Send
           </Button>
      </form>
    );
  }
}

LoginForm.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    login: data => dispatch(thunks.login(data)),
    recoverPassword: (email) => dispatch(recoverPassword(email))
  };
}

function mapStateToProps(state) {
  return {
    authError: state.user.error,
    auth: state.user.auth,
    profile: state.user.profile,
    userIdPasswordChange: state.user.passwordChangeInfo.userId
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

// export default LoginForm;

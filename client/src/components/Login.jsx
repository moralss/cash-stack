import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginForm from "./forms/LoginForm";
import { checkAuth } from "../routes/checker";

class Login extends Component {
  componentWillMount() {
    checkAuth();
  }

  render() {
    return (
      <div
        style={{ margin: "0rem 2rem" }}
        className="container">
        <h3> Login </h3>
        <LoginForm />
      </div>
    );
  }
}

Login.propTypes = {};

export default Login;

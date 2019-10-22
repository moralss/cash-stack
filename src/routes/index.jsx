import React from "react";
import { Router, Route, Redirect } from "react-router-dom";
import Register from "../components/Register";
import history from "./history.js";
import Navbar from "../components/Navbar";
import jwtDecode from "jwt-decode";
import HomePage from "../components/HomePage";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import { PrivateRoute } from "./privateRoute";
import Members from "../components/Members";
import Active from "../components/Active";

export const callCheck = async () => {
  // const check = await checkUser();
  // return check
};

const mainRoute = () => {
  return (
    <Router history={history}>
      <Navbar />
      <div>
        <Route
          exact
          path="/register"
          component={props => <Register {...props} />}
        />
        <Route exact path="/" component={props => <HomePage {...props} />} />
        <Route exact path="/login" component={props => <Login {...props} />} />
        <Route
          exact
          path="/users"
          component={props => <Members {...props} />}
        />
        <PrivateRoute
          exact
          path="/dashboard"
          component={props => <Dashboard {...props} />}
        />
        <PrivateRoute
          exact
          path="/active"
          component={props => <Active {...props} />}
        />
      </div>
    </Router>
  );
};

export default mainRoute;

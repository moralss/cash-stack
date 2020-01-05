import React from "react";
import { Router, Route, Redirect } from "react-router-dom";
import Register from "../components/Register";
import history from "./history.js";
import Navbar from "../components/Navbar";
import jwtDecode from "jwt-decode";
import HomePage from "../components/HomePage";
import Login from "../components/Login";
import Profile from "../components/Profile";
import { PrivateRoute } from "./privateRoute";
import Members from "../components/Members";
import MemberProfile from "../components/MemberProfile";
import Active from "../components/Active";
import Settiings from "../components/Settings"
import PasswordRecovery from "../components/PasswordRecovery"
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
          // strict
          path="/memberprofile"
          component={props => <MemberProfile {...props} />}
        />
        <Route
          exact
          // strict
          path="/recoverpassword/"
          component={props => <PasswordRecovery {...props} />}
        />

        <PrivateRoute
          exact
          path="/users"
          // strict
          component={props => <Members {...props} />}
        />
        <PrivateRoute
          exact
          // strict
          path="/profile"
          component={props => <Profile {...props} />}
        />

        <PrivateRoute
          exact
          // strict
          path="/active"
          component={props => <Active {...props} />}
        />

        <PrivateRoute
          exact
          // strict
          path="/setting"
          component={props => <Settiings {...props} />}
        />
      </div>
    </Router>
  );
};

export default mainRoute;

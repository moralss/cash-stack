import React from "react";
import { Router, Route } from "react-router-dom";
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
import Account from "../components/Register/Account/Account";
import Settings from "../components/Settings"
import PasswordRecovery from "../components/PasswordRecovery"
import Step1 from '../components/Register/Step1'
import Step2 from '../components/Register/Step2'
import MainForm from '../components/Register/MainForm';

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
          path="/new-register"
          component={props => <MainForm {...props} />}
        />
        <Route
          exact
          path="/register"
          component={props => <Register {...props} />}
        />
        <Route exact path="/" component={props => <HomePage {...props} />} />
        <Route exact path="/login" component={props => <Login {...props} />} />
        <Route
          exact
          path="/memberprofile"
          component={props => <MemberProfile {...props} />}
        />
        <Route
          exact
          path="/recoverpassword/"
          component={props => <PasswordRecovery {...props} />}
        />

        <PrivateRoute
          exact
          path="/users"
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
          path="/account"
          component={props => <Account {...props} />}
        />

        <PrivateRoute
          exact
          // strict
          path="/setting"
          component={props => <Settings {...props} />}
        />

      </div>
    </Router>
  );
};

export default mainRoute;

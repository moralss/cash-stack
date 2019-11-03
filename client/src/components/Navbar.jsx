import React, { Component } from "react";
import history from "../routes/history";
import { connect } from "react-redux";
import * as actions from "../actions/system";
import * as quiers from "./../actions/queries";

class Navbar extends Component {
  changeRoute(route) {
    //   console.log("ID", this.props.userId);
    //   if (route === "users") {
    //     this.props.getMembers(this.props.userId);
    //   }

    history.push(route);
  }

  logout() {
    this.props.logout();
  }

  privateNav() {
    return (
      <div class="navbar-fixed">
        <div class="navbar-fixed">
          <nav class="teal">
            <div class="container">
              <div class="nav-wrapper">
                <a href="#!" class="brand-logo">
                  Logo
                </a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger">
                  <i class="material-icons">menu</i>
                </a>
                <ul class="right hide-on-med-and-down">
                  <li>
                    <a onClick={() => this.changeRoute("users")}>MEMBER</a>
                  </li>
                  <li>
                    <a onClick={() => this.changeRoute("dashboard")}>PROFILE</a>
                  </li>
                  <li>
                    <a onClick={() => this.logout()}>LOGOUT</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <ul class="sidenav" id="mobile-demo">
          <li>
            <a onClick={() => this.changeRoute("users")}>MEMBER</a>
          </li>
          <li>
            <a onClick={() => this.changeRoute("dashboard")}>PROFILE</a>
          </li>
          <li>
            <a onClick={() => this.logout()}>LOGOUT</a>
          </li>
        </ul>
      </div>
    );
  }

  VisitorNav() {
    return (
      <div class="navbar-fixed">
        <div class="navbar-fixed">
          <nav class="teal">
            <div class="container">
              <div class="nav-wrapper">
                <a href="#!" class="brand-logo">
                  Logo
                </a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger">
                  <i class="material-icons">menu</i>
                </a>
                <ul class="right hide-on-med-and-down">
                  {/* <ul id="nav-mobile" className="right hide-on-down"> */}
                  <li>
                    <a onClick={() => this.changeRoute("")}>HOME</a>
                  </li>
                  <li>
                    <a onClick={() => this.changeRoute("register")}>REGISTER</a>
                  </li>
                  <li>
                    <a onClick={() => this.changeRoute("login")}>LOGIN</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <ul class="sidenav" id="mobile-demo">
          {/* <ul id="nav-mobile" className="right hide-on-down"> */}
          <li>
            <a onClick={() => this.changeRoute("")}>HOME</a>
          </li>
          <li>
            <a onClick={() => this.changeRoute("register")}>REGISTER</a>
          </li>
          <li>
            <a onClick={() => this.changeRoute("login")}>LOGIN</a>
          </li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div>
        {/* <nav> */}
        {this.props.authenticated ? this.privateNav() : this.VisitorNav()}
        {/* </nav> */}
      </div>
    );
  }
}

Navbar.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(actions.logout()),
    getMembers: id => dispatch(quiers.getMembers(id))
  };
}

function mapStateToProps(state) {
  return {
    authenticated: state.user.auth,
    userId: state.user.profile.id
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);

// export default Navbar;

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
      <div class="nav-wrapper blue">
        <a href="#" className="brand-logo left">
          Logo
        </a>

        <ul id="nav-mobile" className="right hide-on-down">
          <li>
            <a onClick={() => this.changeRoute("active")}>ACTIVATE ACCOUNT</a>
          </li>
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
      <div class="nav-wrapper blue">
        <a href="#" className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-down">
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
        <nav>
          {this.props.authenticated ? this.privateNav() : this.VisitorNav()}
        </nav>
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

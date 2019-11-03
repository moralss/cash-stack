import React, { Component } from "react";
import { connect } from "react-redux";
import Dialog from "./Dialog";
import Footer from "./Footer";
import * as actions from "../actions/queries";
import history from "../routes/history";
import DashoardNav from "./example/DashoardNav";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false
    };
  }
  componentWillMount() {
    this.props.getMembers(this.props.profile.id);
    this.setState({ isLoading: true });
    var interval = setInterval(() => {
      this.props.getMembers(this.props.profile.id);
      this.setState({ isLoading: false });
    }, 4000);
    clearInterval(interval);
  }

  changeRoute(route) {
    //   console.log("ID", this.props.userId);
    //   if (route === "users") {
    //     this.props.getMembers(this.props.userId);
    //   }

    history.push(route);
  }

  render() {
    return (
      <div>
        <h4 style={{ textAlign: "center" }}>Profile </h4>
        <div style={{ textAlign: "center" }} className="profile  card md-pa-sm">
          <div>
            <label className=" grey-text">name </label>
            <h6> {this.props.profile.name} </h6>
          </div>
          <div>
            <label className=" grey-text">refs </label>
            <h6> {this.props.profile.refNumber} </h6>
          </div>
          <div>
            <label className="grey-text">status </label>
            <h6 className="red-text"> not active</h6>
          </div>
          <button
            onClick={() => this.changeRoute("/active")}
            style={{ textAbuttongn: "center" }}
            className="btn"
          >
            ACTIVATE ACCOUNT
          </button>
        </div>
        <h4 style={{ textAlign: "center" }} className="primary">
          {!this.isLoading ? this.props.memberCount : "loading.."} active
          members
        </h4>
        <Dialog />
        <Footer />
      </div>
    );
  }
}

Dashboard.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    getMembers: data => dispatch(actions.getMembers(data))
  };
}

function mapStateToProps(state) {
  return {
    profile: state.user.profile,
    memberCount: state.user.memberCount
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

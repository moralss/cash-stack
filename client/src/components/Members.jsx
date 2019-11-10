import React, { Component } from "react";
import { connect } from "react-redux";
import Dialog from "./Dialog";
import Footer from "./Footer";
import * as quiers from "../actions/queries";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }
  componentDidMount() {
    this.getMembers();
    var interval = setInterval(() => {
      this.getMembers();
    }, 10000);
  }

  getMembers() {
    this.props.getMembers(this.props.userId);
  }

  render() {
    return (
      <div class="row">
        <h4>Currently members</h4>
        <div className="member-wrapper blue-text">
          {this.props.members
            ? this.props.members.map(member => (
                <div
                  className="col err card memeber-item"
                  style={{ margin: "0rem", width: "100%", padding: "1rem" }}
                >
                  <div>
                    <label className=" grey-text"> First Name</label>
                    <h6>{member.first_name}</h6>
                  </div>
                  <div>
                    <label className=" grey-text"> email</label>
                    <br />
                    <span>{member.email}</span>
                  </div>
                  <div>
                    <label className=" grey-text"> join date</label>
                    <br />
                    <span>date 2019/06/04 15:00am</span>
                  </div>
                  <div>
                    <label className=" grey-text">member count</label>
                    <br />
                    <span>{member.total}</span>
                  </div>
                  <div>
                    {/* <label className=" grey-text">status </label>{" "} */}
                    {/* <h6 className="red-text"> not active</h6> */}
                  </div>
                  <button
                    className="btn"
                    onClick={() => this.setState({ show: !this.state.show })}
                  >
                    Show Info
                  </button>
                  <Dialog />
                </div>
              ))
            : null}
        </div>
        <Footer />
      </div>
    );
  }
}

Users.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    getMembers: id => dispatch(quiers.getMembers(id))
  };
}

function mapStateToProps(state) {
  return {
    members: state.user.allMembers,
    userId: state.user.profile.id
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

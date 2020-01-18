import React, { Component } from "react";
import { connect } from "react-redux";
import Dialog from "./Dialog";
import Footer from "./Footer";
import * as actions from "../redux/approval/actions/approvals";
import * as members from '../redux/members/actions/members';
import * as role from '../redux/user/actions/role'
import { updateRole } from '../redux/user/actions/role'
import history from "../routes/history";
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

class Profile extends Component {
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
    this.props.getApprovalType()
    if (this.props.approvalType !== "ACCESS") {
      history.push("/account");
    }
  }

  componentDidMount() {
    this.props.getRole(this.props.profile.id)
  }

  changeRoute(route) {
    history.push(route);
  }

  submit(value) {
    if (value === "standAlone") {
      this.props.updateRole(value, this.props.profile.id)
      this.props.getRole(this.props.profile.id)
    }

    if (value == "pioneerRefs") {
      this.props.saveRefs(this.state.refNumber, this.props.profile.id)
      this.props.updateRole(value, this.props.profile.id);
      this.props.getRole(this.props.profile.id)
    }
  }

  handleChange(e) {
    this.setState({ status: e.target.value })
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
            <label className="grey-text">ruby stage </label>
            <h6 className="red-text"> {this.props.stage}</h6>
          </div>

          {/* <div>
            <label className="grey-text">status </label>
          </div> */}
          {/* <button
            onClick={() => this.changeRoute("/active")}
            style={{ textAbuttongn: "center" }}
            className="btn"
          >
            ACCOUNT STATUS
          </button> */}
        </div>
        <h4 style={{ textAlign: "center" }} className="primary">
          {!this.isLoading ? this.props.memberCount : "loading.."} active
          members
        </h4>
        {!this.props.role ?
          <div>
            <Select
              native
              value={this.state.age}
              onChange={(e) => this.handleChange(e)}
              inputProps={{
                name: 'age',
                id: 'filled-age-native-simple',
              }}
            >
              <option value="" />
              <option value={"standAlone"}>Stand alone</option>
              <option value={"pioneerRefs"}>Pioneer ref</option>
            </Select>
            {this.state.status == "pioneerRefs" ?
              <div>
                <input label="refs" type="text" placeholder="pioneer Refs"
                  onChange={(e) => this.setState({ refNumber: e.target.value })} />
                <button onClick={() => this.submit("pioneerRefs")}> submit </button>
              </div>
              : this.state.status == "standAlone" ?
                <div>
                  stand alone
            < button onClick={() => this.submit("standAlone")}> submit </button>
                </div>
                : null}
          </div> : null}
      </div>
    );
  }
}

Profile.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    getMembers: data => dispatch(members.getMembers(data)),
    getApprovalType: data => dispatch(actions.getApprovalType(data)),
    saveRefs: (refNumber, userId) => dispatch(actions.saveRefs(refNumber, userId)),
    getRole: (userId) => dispatch(role.getRole(userId)),
    updateRole: (role, userId) => dispatch(updateRole(role, userId)),
    getRugbyStage: (userId) => dispatch(actions.getRugbyStage(userId)),
  };
}
function mapStateToProps(state) {
  return {
    profile: state.user.profile,
    memberCount: state.members.memberCount,
    role: state.user.role,
    approvalType: state.approval.approvalType,
    stage: state.approval.stage
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

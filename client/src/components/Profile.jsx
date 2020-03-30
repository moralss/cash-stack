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
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent'
import AppLoader from './progessLoader/AppLoader'

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false
    };
  }
  componentWillMount () {
    this.props.getMembers(this.props.profile.id);
    var interval = setInterval(() => {
      this.props.getMembers(this.props.profile.id);
      // this.setState({ isLoading: false });
    }, 4000);
    clearInterval(interval);
    this.props.getApprovalType()
    if (this.props.approvalType !== "ACCESS") {
      history.push("/account");
    }
  }

  componentDidMount () {
    this.props.getRole(this.props.profile.id)
  }

  changeRoute (route) {
    history.push(route);
  }

  submit (value) {
    this.setState({ isLoading: true });
    if (value === "standAlone") {
      this.props.updateRole(value, this.props.profile.id)
      this.props.getRole(this.props.profile.id)
      // this.setState({ isLoading: false });
      return
    }

    if (value == "pioneerRefs") {
      // this.setState({ isLoading: true });
      this.props.saveRefs(this.state.refNumber, this.props.profile.id)
      this.props.updateRole(value, this.props.profile.id);
      this.props.getRole(this.props.profile.id)
      // this.setState({ isLoading: false });
      return
    }
  }

  handleChange (e) {
    this.setState({ status: e.target.value })
  }

  render () {
    return (
      <div>
        <h3 className="header-header" style={{
          marginTop: "5rem",
          marginBottom: "1rem"
        }}>
          Profile </h3>
        <div className="card-margin">
          <Card>
            <CardContent>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                <div>
                  <label className="label-text">
                    First Name  </label>
                  <br />
                  <span className="blue-text">
                    {this.props.profile.name}
                  </span>
                </div>

                <div>
                  <label className="label-text">
                    Refs  </label>
                  <br />
                  <span className="blue-text">
                    {this.props.profile.refNumber}
                  </span>
                </div>

                <div >
                  <label className="label-text">
                    Stage  </label>
                  <br />
                  <span className="blue-text">
                    {this.props.stage}
                  </span>
                </div>
                <div>
                  <label className="label-text">
                    Join Date  </label>
                  <br />
                  <span className="blue-text">
                    {this.props.profile.createdAt ?
                      new Date(this.props.profile.createdAt).toDateString() : null}
                  </span>
                </div>
                <div style={{ fontSize: "1.4rem", marginTop: "1rem" }}>
                  <label className="label-text">
                    Active Members : </label>
                  <span className="blue-text">
                    {!this.isLoading ? this.props.memberCount : "loading.."}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
        </div>

        {/* {this.state.isLoading ? <AppLoader /> : <div> */}

        {
          !this.props.role ?
            <div style={{ marginLeft: " 2rem" }}>
              <label htmlFor="">Pioneer Ref/Stand Alone </label>
              <br />
              {/* {this.state.isLoading ? <AppLoader /> : <div> */}
              <Select
                native
                value={this.state.age}
                onChange={(e) => this.handleChange(e)}
                inputProps={{
                  name: 'age',
                  id: 'filled-age-native-simple',
                }}
              >
                <option value={"standAlone"} />
                <option value={"standAlone"}>Stand Alone</option>
                <option value={"pioneerRefs"}>Pioneer Ref</option>
              </Select>

              {this.state.status == "pioneerRefs" ?
                <div>
                  <input label="refs" type="text" placeholder="pioneer Refs"
                    onChange={(e) => this.setState({ refNumber: e.target.value })} />
                  <button onClick={() => this.submit("pioneerRefs")}> submit </button>
                </div>
                : this.state.status == "standAlone" ?
                  <div>
                    <p>stand alone</p>
                    < button onClick={() => this.submit("standAlone")}> submit </button>
                  </div>
                  : null}
              <br />
              <label style={{ color: "red" }} htmlFor="">Member's, please add your correct Pioneer's Ref if not Stand Alone </label>
            </div> : null
        }
      </div >
    );
  }
}

Profile.propTypes = {};

function mapDispatchToProps (dispatch) {
  return {
    getMembers: data => dispatch(members.getMembers(data)),
    getApprovalType: data => dispatch(actions.getApprovalType(data)),
    saveRefs: (refNumber, userId) => dispatch(actions.saveRefs(refNumber, userId)),
    getRole: (userId) => dispatch(role.getRole(userId)),
    updateRole: (role, userId) => dispatch(updateRole(role, userId)),
    getRugbyStage: (userId) => dispatch(actions.getRugbyStage(userId)),
  };
}
function mapStateToProps (state) {
  return {
    profile: state.user.profile,
    memberCount: state.members.memberCount,
    role: state.user.role,
    approvalType: state.approval.approvalType,
    stage: state.approval.stage

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

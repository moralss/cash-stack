import React, { Component } from "react";
import { connect } from "react-redux";
import Dialog from "./Dialog";
import Footer from "./Footer";
// import * as quiers from "../actions/queries";
import * as members from '../redux/members/actions/members';
import history from '../routes/history'
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import { textAlign } from "@material-ui/system";

class MemberProfile extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
    }
    componentWillMount() {
        const { members } = this.props;
    }


    render() {

        return (
            <div class="row">
                <h4>
                    Downliner profile
                </h4>
                {this.props.nextMembers.downliner ?
                    this.props.nextMembers.downliner.map(member => (

                        <div>
                            <div className="col err card memeber-item"
                                style={
                                    {
                                        margin: "0rem",
                                        width: "100%",
                                        padding: "1rem"
                                    }
                                }>
                                <div>
                                    <label className=" grey-text">
                                        First Name</label>
                                    <h6>{
                                        member.first_name
                                    }</h6>
                                </div>
                                <div>
                                    <label className=" grey-text">
                                        email</label>
                                    <br />
                                    <span>{
                                        member.email
                                    }</span>
                                </div>
                                <div>
                                    <label className=" grey-text">
                                        join date</label>
                                    <br />
                                    <span>date 2019/06/04 15:00am</span>
                                </div>
                                <div>
                                    <label className=" grey-text">member count</label>
                                    <span>{member.downliner ?
                                        member.downliner.length : null
                                    } </span>
                                    <br />
                                    <span>{member.downliner ?
                                        member.downliner.map(member =>
                                            <div>
                                                <li> {
                                                    member.email

                                                } </li>
                                                <span style={{ position: "absolute", right: 5, marginBottom: '1rem' }}>
                                                    <Chip
                                                        // icon={<FaceIcon />}
                                                        label={`${member.downliner ? member.downliner.length : 0}`}
                                                        color="secondary"
                                                    />
                                                </span>
                                            </div>

                                        )
                                        : null}</span>
                                </div>
                                <div> {/* <label className=" grey-text">status </label>{" "} */}
                                    {/* <h6 className="red-text"> not active</h6> */} </div>
                                {/* <button className="btn"
                                onClick={
                                    () => this.showProfile(member.id)
                            }>
                                Show Member Profile
                            </button> */} </div>
                        </div>
                    ))
                    : null}

                {/* {data.id} */} </div>
        );
    }
}

MemberProfile.propTypes = {};

function mapDispatchToProps(dispatch) {
    return {
        getMembers: id => dispatch(members.getMembers(id))
    };
}

function mapStateToProps(state) {
    return {
        nextMembers: state.members.nextMembers,
        userId: state.user.profile.id
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberProfile);

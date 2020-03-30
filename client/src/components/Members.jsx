import React, { Component } from "react";
import { connect } from "react-redux";
import Dialog from "./Dialog";
import Footer from "./Footer";
import MemberProfile from './MemberProfile';
// import * as quiers from "../actions/queries";
import * as members from '../redux/members/actions/members';
import history from '../routes/history';
import { Link } from "react-router-dom";
import Chip from '@material-ui/core/Chip';
import { textAlign } from "@material-ui/system";
import openSocket from "socket.io-client";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


class Users extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
    }

    componentDidMount () {
        this.getMembers();
        var interval = setInterval(() => {
            this.getMembers();
        }, 20000);
    }

    getMembers () {
        this.props.getMembers(this.props.userId);
    }

    showProfile (id) {
        const { members } = this.props;
        for (var i in members) {
            if (members[i].id == id) {
                this.props.setNextMembers(members[i])
            }
        }

        history.push('/memberprofile');
    }

    render () {
        return (
            <div class="row">
                <h3 className="header-header" style={{
                    marginTop: "5rem",
                    marginBottom: "1rem"
                }}>
                    Current Members </h3>
                <div className="member-wrapper blue-text">
                    {
                        this.props.members.length !== 0 ? this.props.members.map(member => (
                            <div className="col err card memeber-item"
                                style={
                                    {
                                        margin: "0rem",
                                        width: "100%",
                                        padding: "1rem",
                                    }
                                }>
                                <Card >
                                    <CardContent>
                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2 , 1fr)" }}>
                                            <div>
                                                <label className="margin-right label-text">
                                                    First Name</label>
                                                <br />
                                                <span className="blue-text">
                                                    {
                                                        member.first_name
                                                    }
                                                </span>
                                            </div>
                                            <div>
                                                <label className="margin-right label-text"> Last Name </label>
                                                <br />
                                                <span className="blue-text">
                                                    {
                                                        member.last_name
                                                    }
                                                </span>
                                            </div>
                                            <div>
                                                <label className="margin-right label-text"> Join Date</label>
                                                <br />
                                                <span className="blue-text">
                                                    {member.created_at ? new Date(member.created_at).toDateString() : null}
                                                </span>
                                            </div>
                                            <div>
                                                <label className="margin-right label-text"> Member count </label>
                                                <br />
                                                <span className="blue-text">
                                                    {
                                                        member.downliner ? member.downliner.length : null
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            onClick={
                                                () => this.showProfile(member.id)
                                            }
                                            variant="contained" color="primary">
                                            Show Member Profile
                                    </Button>
                                    </CardActions>
                                </Card>
                            </div>
                        )) : <div>
                                <p> You have no current members. </p>
                                <p>Register members for them to appear here here. </p>
                                <p> Pioneers, give your members your ref number after they have registered.</p>
                                <p>Members, ask for your Pioneer's ref number</p>

                            </div>
                    } </div>
            </div>
        );
    }
}

Users.propTypes = {};

function mapDispatchToProps (dispatch) {
    return {
        getMembers: id => dispatch(members.getMembers(id)),
        setNextMembers: data => dispatch(members.setNextMembers(data))
    };
}

function mapStateToProps (state) {
    return {
        members: state.members.allMembers,
        userId: state.user.profile.id
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

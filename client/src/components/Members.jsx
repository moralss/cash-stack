import React, { Component } from "react";
import { connect } from "react-redux";
import Dialog from "./Dialog";
import Footer from "./Footer";
import MemberProfile from './MemberProfile';
// import * as quiers from "../actions/queries";
import * as members from '../redux/members/actions/members';
// import Link from
import history from '../routes/history';
import { Link } from "react-router-dom";
// import { setNextMembers } from '../actions/queries'
import Chip from '@material-ui/core/Chip';
import { textAlign } from "@material-ui/system";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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
        }, 20000);
    }

    getMembers() {
        this.props.getMembers(this.props.userId);
    }

    showProfile(id) {
        const { members } = this.props;

        for (var i in members) {
            if (members[i].id == id) {
                console.log("eeea", members[i])
                this.props.setNextMembers(members[i])
            }
        }


        history.push('/memberprofile');
    }

    render() {
        return (
            <div class="row">
                <h4>Currently members</h4>
                <div className="member-wrapper blue-text">
                    {
                        this.props.members ? this.props.members.map(member => (
                            <div className="col err card memeber-item"
                                style={
                                    {
                                        margin: "0rem",
                                        width: "100%",
                                        padding: "1rem"
                                    }
                                }>
                                <Card >
                                    <CardContent>
                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2 , 1fr)" }}>
                                            <div>
                                                <label className="margin-right grey-text">
                                                    First Name</label>
                                                <br />
                                                <span className="blue-text">
                                                    {
                                                        member.first_name
                                                    }
                                                </span>
                                            </div>
                                            <div>
                                                <label className="margin-right grey-text"> Last Name </label>
                                                <br />
                                                <span className="blue-text">
                                                    {
                                                        member.last_name
                                                    }
                                                </span>
                                            </div>
                                            <div>
                                                <label className="margin-right grey-text"> Join Date</label>
                                                <br />
                                                <span className="blue-text">
                                                    {member.created_at ? new Date(member.created_at).toDateString() : null}
                                                </span>
                                            </div>
                                            <div>
                                                <label className="margin-right grey-text"> Member count </label>
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
                        )) : null
                    } </div>
                <Footer />
            </div>
        );
    }
}

Users.propTypes = {};

function mapDispatchToProps(dispatch) {
    return {
        getMembers: id => dispatch(members.getMembers(id)),
        setNextMembers: data => dispatch(members.setNextMembers(data))


    };
}

function mapStateToProps(state) {
    return {
        members: state.members.allMembers,
        userId: state.user.profile.id
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

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
        }, 10000);
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
                    {/* <Card >
                        <CardContent>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(2 , 1fr)" }}>
                                <Typography color="" gutterBottom>
                                    <label htmlFor="">First Name</label>
                                    <span> moral</span >
                                </Typography>
                                <Typography color="textSecondary" gutterBottom>
                                    <label htmlFor=""> email </label>
                                    <span> sur </span >
                                </Typography>
                            </div>

                            <Typography variant="body2" component="p">

                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card> */}
                    {/* <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="h2">
                                be{bull}nev{bull}o{bull}lent
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                adjective
                             </Typography>
                            <Typography variant="body2" component="p">
                                well meaning and kindly.
                               <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card> */}
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
                                    <span>{member.created_at ? new Date(member.created_at).toDateString() : null}</span>
                                </div>
                                <div>
                                    <label className=" grey-text">member count</label>
                                    <span>{
                                        member.downliner ? member.downliner.length : null
                                    } </span>
                                    <br />
                                    <span>{
                                        member.downliner ? member.downliner.map(member =>
                                            <div style={{ margin: "1rem 0rem;" }}>
                                                <span>
                                                    {member.email}
                                                </span>
                                                <span style={{ position: "absolute", right: 5, marginBottom: '1rem' }}>
                                                    <Chip
                                                        // icon={<FaceIcon />}
                                                        label={`${member.downliner ? member.downliner.length : 0}`}
                                                        color="secondary"
                                                    />
                                                    {/* {member.downliner ? member.downliner.length : 0} */}
                                                </span>

                                            </div>)
                                            : null}</span>
                                </div>
                                <div> {/* <label className=" grey-text">status </label>{" "} */}
                                    {/* <h6 className="red-text"> not active</h6> */} </div>
                                <Button
                                    onClick={
                                        () => this.showProfile(member.id)
                                    }
                                    variant="contained" color="primary">
                                    Show Member Profile
                                 </Button>
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

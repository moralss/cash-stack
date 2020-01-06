import React, { Component } from "react";
import { connect } from "react-redux";
import * as members from '../redux/members/actions/members';
import history from '../routes/history'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


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
        console.log("next members : ", this.props.nextMembers)

        return (
            <div class="row">
                <h4>Downliner </h4>
                <div className="member-wrapper blue-text">
                    {
                        this.props.nextMembers.downliner ?
                            this.props.nextMembers.downliner.map(member => (
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
                                        </CardActions>
                                    </Card>
                                </div>
                            )) : null
                    }
                </div>
            </div>
        );
    }
}


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

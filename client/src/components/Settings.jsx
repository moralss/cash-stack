import React, { Component } from "react";
import { connect } from "react-redux";
// import * as quiers from "../actions/queries";
import * as members from '../redux/members/actions/members';
import history from '../routes/history'
import PasswordPanel from '../components/PasswordPanel';

class Settings extends Component {
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
                <h6> Settings </h6>

                <PasswordPanel />

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

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

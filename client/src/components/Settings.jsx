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
                <h3 className="header-header" style={{
                    marginTop: "5rem",
                    marginBottom: "1rem"
                }}>
                    Settings </h3>
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

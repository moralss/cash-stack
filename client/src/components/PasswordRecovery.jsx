import React, { Component } from "react";
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import LoginForm from "./forms/LoginForm";
import { checkAuth } from "../routes/checker";
import { changePassword } from '../redux/user/actions/auth';
class PasswordRecovery extends Component {
    constructor() {
        super()
        this.state = {
            password: ''

        }
    }

    componentWillMount() {
        console.log("props props", this.props);
    }

    changePassword() {
            this.props.changePassword(this.state.password, this.props.userIdPasswordChange);
    }

    render() {
        return (
            <div className="container">
                <h3> Password Recovery </h3>
                <input placeholder="password" value={this.state.password} onChange={(e) => this.setState({
                    password: e.target.value
                })} />
                <input placeholder="newPassword" />
                <button onClick={() => this.changePassword()}> Send </button>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        changePassword: (password, userId) => dispatch(changePassword(password, userId))
    };
}

function mapStateToProps(state) {
    return {
        profile: state.user.profile,
        userIdPasswordChange: state.user.passwordChangeInfo.userId
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PasswordRecovery);




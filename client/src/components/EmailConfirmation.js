import React, { Component } from "react";
import { connect } from "react-redux";
import ImageUploader from "react-images-upload";
import Button from "@material-ui/core/Button";
import DefaultImg from "../images/index";
import axios from "axios";
import { storage } from "../firebase";
import { saveReceiptUrl, getApprovalType } from '../actions/queries';
import history from '../routes/history';

const API_URL = "http://localhost:3001/";

class EmailConfirmation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageDetails: '',
        };
    }

    // function to capture base64 format of an image
    render() {
        return (
            <div className="image-container">
                <h1> Confirm</h1>
            </div >
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveReceiptUrl: id => dispatch(saveReceiptUrl(id)),
        getApprovalType: userId => dispatch(getApprovalType(userId))
    };

}

function mapStateToProps(state) {
    return {
        profile: state.user.profile,
        approvalType: state.approval.approvalType
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailConfirmation);


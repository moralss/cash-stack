import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import DefaultImg from "../images/index";
import axios from "axios";
import { storage } from "../firebase";
import { saveReceiptUrl, getApprovalType } from '../actions/queries';
import history from '../routes/history';

const API_URL = "http://localhost:3001/";

class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageDetails: '',
    };
  }

  componentWillMount() {
    this.props.getApprovalType()
    console.log("approvaldfdsfdfsdfdfsdfdfsd", this.props.approvalType);
    // if (this.props.approvalType == "ACCESS") {
    //   console.log("dfsdfdfs", history)
    //   history.push("/dashboard");
    //   // this.props.history.push("/dashboard")
    // }
  }



  confirmImage() {
    const { refNumber, id } = this.props.profile;
    let currentImageName = "firebase-image-" + "/" + refNumber + "/" + new Date().getTime() + "-" + id;
    let folder = "images";
    storage
      .ref(folder + "/" + currentImageName)
      .put(this.state.imageDetails)
      .then(res => {
        res.ref.getDownloadURL().then(url => {
          this.props.saveReceiptUrl(url)
          this.props.getApprovalType()
        });
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({ imageDetails: '' })
    this.fileInput.value = "";
    this.props.getApprovalType()
  }


  uploadImage(e) {
    this.setState({ imageDetails: e.target.files[0] });
  }

  cancel() {
    this.setState({ imageDetails: '' })
    this.fileInput.value = "";

  }

  render() {
    return (
      <div className="image-container">
        {this.props.approvalType === "WAITING" ?
          <h1>Waiting for approval</h1> :
          <div>
            <h4 className="process__heading">Capture Receipt</h4>
            <input
              style={{ display: "block" }}
              type="file"
              className="process__upload-btn"
              onChange={e => this.uploadImage(e)}
              ref={ref => this.fileInput = ref}
            />
            <p>
              {this.state.imageDetails.lastModifiedDate ? this.state.imageDetails.lastModifiedDate.toLocaleDateString() : ''}
            </p>
            <button onClick={() => this.cancel()}> Cancel </button>
            <button onClick={() => this.confirmImage()}> Confirm </button>
          </div>
        }

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

export default connect(mapStateToProps, mapDispatchToProps)(Upload);


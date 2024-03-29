import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import DefaultImg from "../../../images/index";
import axios from "axios";
import { storage } from "../../../firebase";
import { saveReceiptUrl, changeLoading, getApprovalType, getRugbyStage } from '../../../redux/approval/actions/approvals';
import history from '../../../routes/history';
import CustomButton from '../../button/CustomButton';
import CashTable from "../../CashTable";
import WaitingApprovalSpinner from '../../progessLoader/WaitingApprovalSpinner'

const API_URL = "http://localhost:3001/";

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageDetails: '',
    };
  }

  componentWillMount () {
    this.props.getApprovalType()
    this.props.getRugbyStage(this.props.profile.id)
    var internal = setInterval(() => {
      this.props.getApprovalType()
    }, 10000);

    if (this.props.approvalType == "ACCESS") {
      clearInterval(internal)
    }
  }



  confirmImage () {
    const { refNumber, id } = this.props.profile;
    let currentImageName = "firebase-image-" + "/" + refNumber + "/" + new Date().getTime() + "-" + id;
    let folder = "images";
    // this.props.changeLoading(true)
    storage
      .ref(folder + "/" + currentImageName)
      .put(this.state.imageDetails)
      .then(res => {
        res.ref.getDownloadURL().then(url => {
          this.props.saveReceiptUrl(url)
          this.props.getApprovalType()
          // this.props.changeLoading(false)
        }).catch(e => {
          console.log(e)
        });
      })
      .catch(err => {
        // this.props.changeLoading(false)
        console.log(err);
      });

    this.props.getApprovalType()
    this.setState({ imageDetails: '' })
    this.fileInput.value = "";
  }

  testCode () {
    this.props.saveReceiptUrl("url");
    this.props.getApprovalType()
  }


  uploadImage (e) {
    this.setState({ imageDetails: e.target.files[0] });
  }

  cancel () {
    this.setState({ imageDetails: '' })
    this.fileInput.value = "";

  }

  render () {
    return (
      <div className="image-container" style={{ margin: "0rem 1rem" }}>
        {this.props.approvalType === "WAITING" ?
          <div>
            <h1 style={{ marginTop: "5rem" }}>Waiting for approval</h1>
            <WaitingApprovalSpinner />
            This will take several minutes before your account has been approved...
            <div style={{ position: "absolute", bottom: 0 }}>
              <div>
                <span> NB: Tab "SETTINGS" </span>
              </div>
              <div>
                <span>
                  "ACCOUNT INFO"
                </span>
              </div>
              <div>
                <span>
                  "Add your account information"
                </span>
              </div>
            </div>
          </div>
          : this.props.approvalType == "ACCESS" ?
            <div>
              <h3 className="header-header" style={{
                marginTop: "5rem",
                marginBottom: "1rem"
              }}> Next Receipt</h3>

              {this.props.stage !== this.props.prodectedStage ?
                <div>
                  <h6> pay for rubystage {this.props.prodectedStage}</h6>
                </div>
                : null}
              <h7>Branch Name: FNB</h7>
              <br />
              <h7>Account Name: Cash Stack</h7>

              <br />
              <h7>Account Number: 62791005442</h7>
              <br />
              <input
                style={{ marginTop: "1rem", display: "block" }}
                type="file"
                className="process__upload-btn"
                onChange={e => this.uploadImage(e)}
                ref={ref => this.fileInput = ref}

              />
              <p>
                {this.state.imageDetails ? this.state.imageDetails.lastModifiedDate.toLocaleDateString() : ''}
              </p>

              <Button variant="contained"
                onClick={() => this.confirmImage()}
                color="primary"
                style={{ marginRight: "2rem" }}
              >
                Confirm
              </Button>
              <Button onClick={() => this.cancel()}
                variant="contained" color="secondary">
                Cancel
              </Button>
              <CashTable />
            </div>
            : <div>
              <h3 className="header-header" style={{
                marginTop: "5rem",
                marginBottom: "1rem"
              }}> Capture Receipt</h3>

              <h7>Branch Name: FNB</h7>
              <br />
              <h7>Account Name: Cash Stack</h7>
              <br />
              <h7>Account Number: 62791005442</h7>
              <br />
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
              <Button variant="contained"
                onClick={() => this.confirmImage()}
                color="primary"
                style={{ marginRight: "2rem" }}
              >
                Confirm
              </Button>
              <Button onClick={() => this.cancel()}
                variant="contained" color="secondary">
                Cancel
                </Button>
              <CashTable />
            </div>
        }

      </div >
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    saveReceiptUrl: id => dispatch(saveReceiptUrl(id)),
    getApprovalType: userId => dispatch(getApprovalType(userId)),
    getRugbyStage: userId => dispatch(getRugbyStage(userId)),
    changeLoading: (status) => dispatch(changeLoading(status))
  }
}

function mapStateToProps (state) {
  return {
    profile: state.user.profile,
    approvalType: state.approval.approvalType,
    prodectedStage: state.approval.prodectedStage,
    stage: state.approval.stage,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);


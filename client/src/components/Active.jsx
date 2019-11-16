import React, { Component } from "react";
import { connect } from "react-redux";
import ImageUploader from "react-images-upload";
import Button from "@material-ui/core/Button";
import DefaultImg from "../images/index";
import axios from "axios";
import FileBase from "react-file-base64";
import { imagePic } from "./baseImage";
import { storage } from "../firebase";

const API_URL = "http://localhost:3001/";

class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      multerImage: DefaultImg,
      firebaseImage: DefaultImg,
      baseImage: DefaultImg
    };
  }

  setDefaultImage(uploadType) {
    if (uploadType === "firebase") {
      this.setState({
        firebaseImage: DefaultImg
      });
    } else {
      this.setState({
        baseImage: DefaultImg
      });
    }
  }

  uploadImage(e, method) {
    if (method === "firebase") {
      let currentImageName = "firebase-image-" + Date.now();
      let folder = "images";
      storage
        .ref(folder + "/" + currentImageName)
        .put(e.target.files[0])
        .then(res => {
          res.ref.getDownloadURL().then(url => {
            console.log("done", url);
            this.setState({
              firebaseImage: url
            });
          });
        })
        .catch(err => {
          console.log(err);
        });

      // let uploadImage = storage
      //   .ref(`images/${currentImageName}`)
      //   .put(e.target.files[0]);

      // uploadImage.on(
      //   "state_changed",
      //   snapshot => {},
      //   error => {
      //     alert(error);
      //   },
      //   () => {
      //     storage
      //       .ref("images")
      //       .child(currentImageName)
      //       .getDownloadURL()
      //       .then(url => {
      //         this.setState({
      //           firebaseImage: url
      //         });

      //         // store image object in the database
      //       });
      //   }
      // );
    }
  }

  // function to capture base64 format of an image

  render() {
    return (
      <div className="image-container">
        <div className="process">
          <h4 className="process__heading">Capture Receipt</h4>
          <p className="process__details"></p>
          <input
            style={{ display: "block" }}
            type="file"
            className="process__upload-btn"
            onChange={e => this.uploadImage(e, "firebase")}
          />
          <img
            src={this.state.firebaseImage}
            alt="upload-image"
            className="process__image"
          />
        </div>

        <button> Confirm </button>
      </div>
    );
  }
}

export default Upload;

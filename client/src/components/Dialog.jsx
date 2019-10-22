import React, { Component } from "react";
import { connect } from "react-redux";
import * as system from "../actions/system";

class Dialog extends Component {
  constructor() {
    super();
    this.state = {
      isShow: true,
      isSubmitting: true
    };
  }

  submitForm() {
    this.setState({ isSubmitting: true });
    // conosole.log(this.state);
  }

  goBack() {
    this.props.setModelType();
    this.setState({ isSubmitting: false });
  }

  render() {
    return (
      <div>
        {this.props.models.isOpen ? (
          <div className="my-model" style={{ textAlign: "center" }}>
            <div className="modal-content card">
              {!this.state.isSubmitting ? (
                <div>
                  <h4>Create Memeber</h4>
                  <div>
                    <input placeholder="email" />
                  </div>
                  <div className="modal-footer">
                    <button
                      onClick={() => this.submitForm()}
                      className="space btn"
                    >
                      Agree
                    </button>
                    <button
                      onClick={() => this.props.setModelType()}
                      className="space btn"
                    >
                      disAgree
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div>refs number 466449</div>
                  <button onClick={() => this.goBack()} className="space btn">
                    back
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setModelType: data => dispatch(system.setModelType(data))
  };
}

function mapStateToProps(state) {
  return {
    models: state.models
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialog);

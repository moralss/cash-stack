import React, { Component } from "react";
import { connect } from "react-redux";
import * as system from "../actions/system";

class Footer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="footer">
        <footer className="color page-footer">
          <div class="row">
            <a
              target="_blank"
              className="btn"
              href="https://cashstack.simdif.com/contact.html"
            >
              chat
            </a>
            {/* <div class="col">
              <button
                class="btn green lighten-1 "
                onClick={() => this.props.setModelType()}
              >
                generate refs
              </button>
            </div>
            <div class="col">
              <button
                class="btn green lighten-1"
                onClick={() => this.props.setModelType()}
              >
                system
              </button>
            </div>
            <div class="col">
              <button
                class="btn green lighten-1"
                onClick={() => this.props.setModelType()}
              >
                udemy
              </button>
            </div>
            <div class="col" onClick={() => this.props.setModelType()}>
              <button class="btn green lighten-1 ">profile</button>
            </div> */}
          </div>
        </footer>
      </div>
    );
  }
}

Footer.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    setModelType: data => dispatch(system.setModelType(data))
  };
}

function mapStateToProps(state) {
  return {
    profile: state.user.profile
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

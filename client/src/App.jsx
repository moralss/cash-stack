import React, { Component } from "react";
import "./App.css";
import mainRoute from "./routes/clientRoutes";
import AppLoader from './components/progessLoader/AppLoader'
import { connect } from "react-redux";


class App extends Component {
  render () {
    console.log("props", this.props.isUiLoading)
    const value = mainRoute();
    return (
      <div>
        {value}

        <div>
          {this.props.isUiLoading ? <AppLoader /> : null}
        </div>
      </div>
    );
  }
}

App.propTypes = {};

// function mapDispatchToProps (dispatch) {
//   return {
//     saveReceiptUrl: id => dispatch(saveReceiptUrl(id)),
//     getApprovalType: userId => dispatch(getApprovalType(userId)),
//     getRugbyStage: userId => dispatch(getRugbyStage(userId))
//   };
// }

function mapStateToProps (state) {
  return {
    isUiLoading: state.uiReducer.isUiLoading
  };
}


export default connect(mapStateToProps, null)(App);

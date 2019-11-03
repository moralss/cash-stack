import React, { Component } from "react";
import "./App.css";
import Ex from "./components/example/DashoardNav";
import mainRoute from "./routes";

class App extends Component {
  render() {
    const value = mainRoute();
    return (
      <div>
        {value}
        {/* <Ex /> */}
      </div>
    );
  }
}

App.propTypes = {};

export default App;

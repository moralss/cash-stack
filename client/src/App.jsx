import React, { Component } from "react";
import "./App.css";
import mainRoute from "./routes/clientRoutes";

class App extends Component {
  render() {
    const value = mainRoute();
    return (
      <div>
        {value}
      </div>
    );
  }
}

App.propTypes = {};

export default App;

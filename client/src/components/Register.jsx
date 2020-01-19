import React, { Component } from "react";
import Form1 from "./forms/Form1";
import Form2 from "./forms/Form2";
import Form3 from "./forms/Form3";
import history from "../routes/history";
import { checkAuth } from "../routes/checker";
class Register extends Component {
  constructor() {
    super();
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1
    };
  }

  componentWillMount() {
    checkAuth();
  }

  renderPage() {
    if (this.state.page === 1) {
      return (
        <div>
          <Form1 onSubmit={this.nextPage} nextPage={this.nextPage} />
        </div>
      );
    }
    if (this.state.page === 2) {
      return (
        <div>
          <Form2 previousPage={this.previousPage} onSubmit={this.nextPage} />
        </div>
      );
    }

    if (this.state.page === 3) {
      return (
        <div>
          <Form3 previousPage={this.previousPage} onSubmit={this.nextPage} />
        </div>
      );
    }
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    return (
      <div
        style={{ margin: "0rem 2rem" }}
        class="container">
        <h3> Register</h3>
        {this.renderPage()}
      </div >
    );
  }
}


export default Register;

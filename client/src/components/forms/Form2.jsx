import React, { Component } from "react";
import validate from "../../Utils/validations/form2Validations";
import renderField from "./RenderField";
import { reduxForm, Field } from "redux-form";
import RenderDateTimePicker from "./RenderDatePicker";
import RadioButtons from "./RadioButton";
import "react-datepicker/dist/react-datepicker.css";
import "react-widgets/dist/css/react-widgets.css";

class Form2 extends Component {
  constructor() {
    super();

    this.state = {
      startDate: new Date("1997-06-06"),
      countries: [
        "South Africa",
        "Zambia",
        "Botswana",
        "Swaziland",
        "Lesotho",
        "Tanzania",
        "Mozambique"
      ]
    };
  }

  render() {
    const { previousPage, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field
          class="Field"
          name="city"
          component={renderField}
          type="text"
          label="City"
          placeholder="City"
        />

        <Field
          name="Id"
          showTime={true}
          component={renderField}
          label="Id/Passport"
        />

        <label className="white-text">Country</label>
        <Field
          name="options"
          label="Country"
          className="browser-default"
          component="select"
          countries={this.state.countries}
        >
          <option />
          {this.state.countries.map(country => (
            <option value={country}> {country} </option>
          ))}
        </Field>

        <label className="white-text">Gender</label>
        <div className="row">
          <Field
            name="sex"
            component={RadioButtons}
            type="radio"
            label="male"
            value="male"
          />
          <Field
            name="sex"
            component={RadioButtons}
            type="radio"
            label="female"
            value="female"
          />
        </div>
        <div className="col">
          <button className="btn col btn-block space" type="submit">
            Next
          </button>
          <button
            type="button"
            className="btn col btn-block space"
            onClick={previousPage}
          >
            Previous
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "form2", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(Form2);

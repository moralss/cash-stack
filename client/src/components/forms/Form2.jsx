import React, { Component } from "react";
import validate from "../../Utils/validations/form2Validations";
import renderField from "./RenderField";
import { reduxForm, Field } from "redux-form";
import RenderDateTimePicker from "./RenderDatePicker";
import RadioButtons from "./RadioButton";
import "react-datepicker/dist/react-datepicker.css";
import "react-widgets/dist/css/react-widgets.css";
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button';


class Form2 extends Component {
  constructor() {
    super();

    this.state = {
      startDate: new Date("1997-06-06"),
      countries: [

        "South Africa",
        "Zambia",
        "Zimbabwe",
        "Botswana",
        "Swaziland",
        "Lesotho",
        "Tanzania",
        "Mozambique"
      ]
    };
  }

  render () {
    const { previousPage, handleSubmit } = this.props;

    return (
      <form
        onSubmit={handleSubmit}>
        <Field
          class="Field"
          name="city"
          component={renderField}
          type="text"
          label="City"
          placeholder="City"
        />

        <label className="white-text"> Date Of Birth </label>
        <Field
          type="date"
          id="start"
          component={renderField}
          name="dateOfBirth"
          label="date of birth"
          value="1999-07-22"
          min="1960-01-01" max="2018-12-31" />
        <div>
          <label className="white-text"
            style={{ marginRight: "2rem" }}
          >Country</label>
          <Select
            native
            inputProps={{
              name: 'age',
              id: 'filled-age-native-simple',
            }}
          >
            <option />
            {this.state.countries.map(country => (
              <option value={country}> {country} </option>
            ))}
          </Select>
        </div>
        <label className="white-text">Gender</label>
        <div style={{ display: "flex" }}>
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
          <Button
            style={{ marginBottom: "1rem" }}
            variant="contained"
            className="btn-block btn col "
            type="submit" color="primary">
            Next
           </Button>
          <Button
            // variant="contained"
            className="btn-block btn col "
            onClick={previousPage}
            color="primary">
            Previous
           </Button>
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

import React from "react";
import TextField from '@material-ui/core/TextField';

const renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => (
  <div style={{ width: "100%" }}>
    <div>
      <TextField
        style={{ width: "100%", margin: "0.6rem 0rem" }}
        id="standard-basic" {...input} type={type} label={placeholder} />
      {/* <input {...input} placeholder={placeholder} type={type} /> */}
      <br />
      {touched && error && <span className="error">{error}</span>}
    </div>
  </div>
);

export default renderField;

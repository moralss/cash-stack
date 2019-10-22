import React from "react";

const renderRadio = ({ input, label, type, meta: { touched, error } }) => (
  <div className="col">
    <label>
      <input {...input} placeholder={label} type={type} />
      <span style={{ margin: "1rem" }}>{label}</span>
      {touched && error && <span className="error">{error}</span>}
    </label>
  </div>
);

export default renderRadio;

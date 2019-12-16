import React from "react";

const renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && error && <span className="error">{error}</span>}
    </div>
  </div>
);

export default renderField;

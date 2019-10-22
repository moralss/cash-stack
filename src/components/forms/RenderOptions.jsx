import React from "react";

const renderOptions = ({
  countries,
  label,
  input: { onChange, value },
  meta: { touched, error }
}) => (
  // <div>
  //   <label style={{ margin: "1rem" }}>{label}</label>
  //   <div className="field">
  <select>
    {countries.map(country => (
      <option value={country}> {country} </option>
    ))}
  </select>
  //     {touched && error && <span className="error">{error}</span>}
  //   </div>
  // </div>
);

export default renderOptions;

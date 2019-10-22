import React from "react";
import DateTimePicker from "react-widgets/lib/DateTimePicker";

const renderDateTimePicker = ({
  input: { onChange, value },
  meta: { touched, error },
  showTime,
  label
}) => (
  <div>
    <label>{label}</label>
    <DateTimePicker
      onChange={onChange}
      format="DD MM YYYY"
      time={showTime}
      className="white-text"
      value={!value ? null : new Date(value)}
    />
    {touched && error && <span className="error">{error}</span>}
  </div>
);

export default renderDateTimePicker;

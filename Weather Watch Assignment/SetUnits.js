// SetUnits Component
import React from "react";
import PropTypes from "prop-types";

const SetUnits = ({ value, onSet }) => {
  return (
    <div className="set-units">
      <lable>UNITS</lable>
      <select value={value} onChange={onSet}>
        <option value="C">Celcius</option>
        <option value="F">Fahrenheit</option>
      </select>
    </div>
  );
};

SetUnits.propType = {
  value: PropTypes.string.isRequired,
  onSet: PropTypes.func.isRequired,
};

export default SetUnits;

import React from "react";
import PropTypes from "prop-types";

function InputNumberLease(props) {
  const { title, id, min, max, step, value, handleCreditScore } = props;
  return (
    <div className="lease-item">
      <p className="input-title">{title}</p>
      <div className="input-wrapper">
        <input
          id={id}
          className="lease-input"
          type="number"
          value={value}
          min={min}
          step={step}
          max={max}
          onChange={handleCreditScore}
        />
      </div>
    </div>
  );
}

InputNumberLease.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  handleCreditScore: PropTypes.func,
};

InputNumberLease.defaultProps = {
  title: "",
  id: "",
  min: "",
  max: "",
  step: "",
  value: "",
  handleCreditScore: "",
};
export default InputNumberLease;

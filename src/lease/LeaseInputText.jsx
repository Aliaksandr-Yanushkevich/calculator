import React from "react";
import PropTypes from "prop-types";

function LeaseInputText({ title, id, unit, max, handleInputFormData, value }) {
  return (
    <div className="lease-item">
      <p className="input-title">{title}</p>
      <div className="input-wrapper">
        <span className="unit">{unit}</span>
        <input
          id={id}
          className="lease-input"
          type="text"
          max={max}
          value={value}
          onChange={handleInputFormData}
        />
      </div>
    </div>
  );
}

LeaseInputText.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  unit: PropTypes.string,
  max: PropTypes.string,
  handleInputFormData: PropTypes.func,
  value: PropTypes.string,
};

LeaseInputText.defaultProps = {
  unit: "",
  max: "",
  handleInputFormData: "",
  value: "",
  title: "",
};
export default LeaseInputText;

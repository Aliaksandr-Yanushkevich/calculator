import React from "react";
import PropTypes from "prop-types";

function InputSelectLease(props) {
  const { title, id, options, defaultValue } = props;
  return (
    <div className="lease-item">
      <p className="input-title">{title}</p>
      <div className="input-wrapper">
        <select id={id} className="lease-input" defaultValue={defaultValue}>
          {options.map(element => {
            return <option value={element}>{element}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

InputSelectLease.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.number),
  defaultValue: PropTypes.string,
};

InputSelectLease.defaultProps = {
  title: "",
  id: "",
  options: "",
  defaultValue: "",
};
export default InputSelectLease;

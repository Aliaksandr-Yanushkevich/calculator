import React from "react";
import PropTypes from "prop-types";

function LoanButton(props) {
  const { className, value, isActive, handler } = props;
  const activeClass = isActive ? "choosed-button" : "";
  return (
    <button className={`${className} ${activeClass}`} type="button" onClick={handler} value={value}>
      {value}
    </button>
  );
}

LoanButton.propTypes = {
  handler: PropTypes.func,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

LoanButton.defaultProps = {
  isActive: false,
};

export default LoanButton;

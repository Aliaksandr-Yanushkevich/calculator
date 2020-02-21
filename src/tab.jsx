import React from "react";
import PropTypes from "prop-types";

function Tab({ id, text, changeTabHandler, isActive }) {
  const activeClass = isActive ? "active-tab" : "";
  return (
    <button
      id={id}
      className={`tabs-button ${activeClass}`}
      type="button"
      onClick={changeTabHandler}
    >
      {text}
    </button>
  );
}

Tab.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  changeTabHandler: PropTypes.func,
  isActive: PropTypes.bool,
};

Tab.defaultProps = {
  id: "",
  text: "",
  changeTabHandler: "",
  isActive: "",
};

export default Tab;

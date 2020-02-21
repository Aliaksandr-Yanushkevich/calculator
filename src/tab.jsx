import React from "react";
import PropTypes from "prop-types";
// import { changeTabHandler } from "./Credit";

function Tab({ id, text, changeTabHandler, isActive }) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     creditType: "lease",
  //   };
  // }
  const activeClass = isActive ? 'active-tab' : '';
  return (
    <button id={id} className={`tabs-button ${activeClass}`}  type="button" onClick={changeTabHandler}>
      {text}
    </button>
  );
}

Tab.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
};

Tab.defaultProps = {
  id: "",
  text: "",
};
export default Tab;

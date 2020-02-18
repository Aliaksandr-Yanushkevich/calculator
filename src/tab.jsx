import React from "react";
import PropTypes from "prop-types";
// import { changeTabHandler } from "./Credit";

function Tab({ id, text, changeTabHandler }) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     creditType: "lease",
  //   };
  // }
  return (
    <button id={id} className="tabs-button" type="button" onClick={changeTabHandler}>
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

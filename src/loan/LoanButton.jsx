import React from "react";
import PropTypes from "prop-types";

class LoanButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { className, value, isActive, handler } = this.props;
    const activeClass = isActive ? "choosed-button" : "";
    return (
      <button
        className={`${className} ${activeClass}`}
        type="button"
        onClick={handler}
        value={value}
      >
        {value}
      </button>
    );
  }
}

LoanButton.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default LoanButton;

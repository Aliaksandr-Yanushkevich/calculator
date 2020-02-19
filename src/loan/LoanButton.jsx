import React from "react";
import PropTypes from "prop-types";

class LoanButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { id, className, text1, text2 } = this.props;
    return (
      <button id={id} className={className} type="button">
        {text1} <br/> {text2}
      </button>
    );
  }
}

LoanButton.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string,
};

LoanButton.defaultProps = {
  text2: "",
}

export default LoanButton;

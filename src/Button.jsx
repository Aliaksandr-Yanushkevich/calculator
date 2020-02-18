import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { id, className, value } = this.props;
    return (
      <button id={id} className={className} type="button">
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Button;

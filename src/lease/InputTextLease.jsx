import React from "react";
import PropTypes from "prop-types";

class InputTextLease extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState(() => ({
      value,
    }));
  }

  render() {
    const { title, id } = this.props;
    return (
      <div className="input-lease">
        <p className="input-title">{title}</p>
        <div className="input-wrapper">
          <input id={id} className="lease-input" type="text" />
        </div>
      </div>
    );
  }
}

InputTextLease.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
};

InputTextLease.defaultProps = {
  title: "",
  id: "",
};
export default InputTextLease;

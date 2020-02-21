import React from "react";
import PropTypes from "prop-types";

class LeaseInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.withUnit = this.withUnit.bind(this);
    // this.withoutUnit = this.withoutUnit.bind(this);
  }

  handleChange(value) {
    this.setState(() => ({
      value: value,
    }));
  }

  withUnit(title, unit, id, max) {
    return (
      <div className="input-lease">
        <p className="input-title">{title}</p>
        <div className="input-wrapper">
          {" " + unit + " "} <input id={id} className="lease-input" type="text" min="0" max={max} />
        </div>
      </div>
    );
  }
  withoutUnit(title, id) {
    return (
      <div className="input-lease">
        <p className="input-title">{title}</p>
        <div className="input-wrapper">
          <input id={id} className="lease-input" type="text" />
        </div>
      </div>
    );
  }

  render() {
    if (this.props.unit) {
      const { title, unit, id, max } = this.props;
      return this.withUnit(title, unit, id, max);
    } else {
      const { title, id } = this.props;
    return this.withoutUnit(title, id);
    }
  }
}

LeaseInput.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  defaultValue: PropTypes.string,
};

LeaseInput.defaultProps = {
  title: "",
  id: "",
  options: "",
  defaultValue: "",
};
export default LeaseInput;

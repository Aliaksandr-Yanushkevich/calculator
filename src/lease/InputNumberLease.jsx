import React from "react";
import PropTypes from "prop-types";

class InputNumberLease extends React.Component {
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
    const { title, id, min, max, step, defaultValue } = this.props;
    return (
      <div className="lease-item">
        <p className="input-title">{title}</p>
        <div className="input-wrapper">
          <input
            id={id}
            className="lease-input"
            type="number"
            defaultValue={defaultValue}
            min={min}
            step={step}
            max={max}
            // onChange={e => {
            //   console.log("changed!");
            //   this.handleChange(e.target.value);
            // }}
          />
        </div>
      </div>
    );
  }
}

InputNumberLease.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  defaultValue: PropTypes.number,
};

InputNumberLease.defaultProps = {
  title: "",
  id: "",
  min: "",
  max: "",
  step: "",
  defaultValue: "",
};
export default InputNumberLease;

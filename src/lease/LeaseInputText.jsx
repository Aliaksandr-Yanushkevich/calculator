import React from "react";
import PropTypes from "prop-types";

class LeaseInputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(value) {
  //   this.setState(() => ({
  //     value,
  //   }));
  // }

  render() {
    const { title, id, unit, max, defaultValue } = this.props;
    return (
      <div className="lease-item">
        <p className="input-title">{title}</p>
        <div className="input-wrapper">
          <span className="unit">{unit}</span>
          <input
            id={id}
            className="lease-input"
            type="text"
            max={max}
            defaultValue={defaultValue}
          />
        </div>
      </div>
    );
  }
}

LeaseInputText.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  unit: PropTypes.string,
  max: PropTypes.number,
  defaultValue: PropTypes.number,
};

LeaseInputText.defaultProps = {
  unit: "",
  max: "",
  defaultValue: "",
};
export default LeaseInputText;

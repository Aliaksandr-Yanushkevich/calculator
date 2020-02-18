import React from "react";
import PropTypes from "prop-types";

class LoanInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState(() => ({
      value: value,
    }));
  }

  withUnit() {
    const { title, unit, id, max, defaultValue } = this.props;
    if (unit === "$") {
      return (
        <div className="input-loan">
          <p className="input-loan--title">{title}</p>
          <div className="input-loan-wrapper">
            {" " + unit + " "}{" "}
            <input
              id={id}
              className="loan-input"
              type="text"
              min="0"
              max={max}
              defaultValue={defaultValue}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="input-loan">
          <p className="input-loan--title">{title}</p>
          <div className="input-loan-wrapper">
            <input
              id={id}
              className="loan-input"
              type="text"
              min="0"
              max={max}
              defaultValue={defaultValue}
            />
            {" " + unit + " "}
          </div>
        </div>
      );
    }
  }

  withoutUnit() {
    const { title, id, defaultValue } = this.props;
    return (
      <div className="input-loan">
        <p className="input-loan--title">{title}</p>
        <div className="input-loan-wrapper">
          <input id={id} className="loan-input" type="text" defaultValue={defaultValue} />
        </div>
      </div>
    );
  }

  render() {
    if (this.props.unit) {
      return this.withUnit();
    }
    return this.withoutUnit();
  }
}

LoanInput.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default LoanInput;

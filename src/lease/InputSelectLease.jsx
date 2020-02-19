import React from "react";
import PropTypes from "prop-types";

class InputSelectLease extends React.Component {
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
    const { title, id, options, defaultValue } = this.props;
    return (
      <div className="lease-item">
        <p className="input-title">{title}</p>
        <div className="input-wrapper">
          <select
            id={id}
            className="lease-input"
            // type="select"
            defaultValue={defaultValue}
          >
            {options.map(element => {
              return <option value={element}>{element}</option>;
            })}
          </select>
        </div>
      </div>
    );
  }
}

InputSelectLease.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.number),
  defaultValue: PropTypes.string,
};

InputSelectLease.defaultProps = {
  title: "",
  id: "",
  options: "",
  defaultValue: "",
};
export default InputSelectLease;

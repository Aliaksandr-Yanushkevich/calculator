import React from "react";
import { render } from "react-dom";

class SelectLease extends React.Component {
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
  render() {
    const { title, id, min, max, step, defaultValue } = this.props;
    return (
      <div className="input-lease">
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
            onChange={e => {
              console.log("changed!");
              this.handleChange(e.target.value);
            }}
          />
        </div>
      </div>
    );
  }
}
export default SelectLease;

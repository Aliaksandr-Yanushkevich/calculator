import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

class Term extends React.Component {
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
    const { title } = this.props;
    return (
      <div className="term">
        <p className="term-title">{title}</p>
        <div className="term-button-wrapper">
          <Button id="3year" className="term-button" value={36} />
          <Button id="4year" className="term-button" value={48} />
          <Button id="5year" className="term-button" value={60} />
          <Button id="6year" className="term-button" value={72} />
        </div>
      </div>
    );
  }
}

export default Term;

import React from "react";
import PropTypes from "prop-types";
import LoanButton from "./LoanButton";

class LoanTerm extends React.Component {
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
          <LoanButton id="1year" className="term-button" value={12} />
          <LoanButton id="2year" className="term-button" value={24} />
          <LoanButton id="3year" className="term-button" value={36} />
          <LoanButton id="4year" className="term-button" value={48} />
          <LoanButton id="6year" className="term-button" value={72} />
          <LoanButton id="7year" className="term-button" value={84} />
        </div>
      </div>
    );
  }
}

LoanTerm.propTypes = {
  id: PropTypes.string.isRequired,
};

export default LoanTerm;

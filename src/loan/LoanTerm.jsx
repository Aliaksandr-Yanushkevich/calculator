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
      <div className="loan-item">
        <p className="loan-title">{title}</p>
        <div className="loan-button-wrapper">
          <LoanButton id="1year" className="loan-button" text1={12} />
          <LoanButton id="2year" className="loan-button" text1={24} />
          <LoanButton id="3year" className="loan-button" text1={36} />
          <LoanButton id="4year" className="loan-button" text1={48} />
          <LoanButton id="6year" className="loan-button" text1={72} />
          <LoanButton id="7year" className="loan-button" text1={84} />
        </div>
      </div>
    );
  }
}

LoanTerm.propTypes = {
  id: PropTypes.string.isRequired,
};

export default LoanTerm;

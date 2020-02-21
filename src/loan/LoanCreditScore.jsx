import React from "react";
import PropTypes from "prop-types";
import LoanButton from "./LoanButton";

class LoanCreditScore extends React.Component {
  render() {
    const { title, creditScore, handleCreditScore } = this.props;
    const loanValues = [600, 650, 700, 750, 800, 850, 900];
    return (
      <div className="loan-item">
        <p className="loan-title">{title}</p>
        <div className="loan-button-wrapper">
          {loanValues.map(loanValue => {
            return <LoanButton
              key={loanValue}
              className="loan-button"
              value={loanValue}
              isActive={creditScore === loanValue}
              handler={handleCreditScore}
            />;
          })}
        </div>
      </div>
    );
  }
}

LoanCreditScore.propTypes = {
  id: PropTypes.string.isRequired,
};

export default LoanCreditScore;

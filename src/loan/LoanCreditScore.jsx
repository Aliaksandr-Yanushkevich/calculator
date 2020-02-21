import React from "react";
import PropTypes from "prop-types";
import LoanButton from "./LoanButton";

function LoanCreditScore(props) {
  const { title, creditScore, handleCreditScore } = props;
  const loanValues = [600, 650, 700, 750, 800, 850, 900];
  return (
    <div className="loan-item">
      <p className="loan-title">{title}</p>
      <div className="loan-button-wrapper">
        {loanValues.map(loanValue => {
          return (
            <LoanButton
              key={loanValue}
              className="loan-button"
              value={loanValue}
              isActive={creditScore === loanValue}
              handler={handleCreditScore}
            />
          );
        })}
      </div>
    </div>
  );
}

LoanCreditScore.propTypes = {
  title: PropTypes.string.isRequired,
  creditScore: PropTypes.number,
  handleCreditScore: PropTypes.func,
};

export default LoanCreditScore;

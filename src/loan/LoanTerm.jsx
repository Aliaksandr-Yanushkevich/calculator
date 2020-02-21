import React from "react";
import PropTypes from "prop-types";
import LoanButton from "./LoanButton";

function LoanTerm({ title, handleTerm, term }) {
  const termValues = [12, 24, 36, 48, 72, 84];
  return (
    <div className="loan-item">
      <p className="loan-title">{title}</p>
      <div className="loan-button-wrapper">
        {termValues.map(termValue => {
          return (
            <LoanButton
              key={termValue}
              className="loan-button"
              value={termValue}
              isActive={term === termValue}
              handler={handleTerm}
            />
          );
        })}
      </div>
    </div>
  );
}

LoanTerm.propTypes = {
  title: PropTypes.string,
  handleTerm: PropTypes.func,
  term: PropTypes.string,
};

export default LoanTerm;

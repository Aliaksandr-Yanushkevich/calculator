import React from "react";
import PropTypes from "prop-types";
import Lease from "./Lease";
import Loan from "./Loan";

function CreditOptions({
  zip,
  creditType,
  handleInputFormData,
  inputFormData,
  handleCreditScore,
  handleTerm,
  term,
}) {
  return (
    <div className="credit-options">
      {creditType === "loan" && (
        <Loan
          zip={zip}
          handleInputFormData={handleInputFormData}
          inputFormData={inputFormData}
          handleCreditScore={handleCreditScore}
          handleTerm={handleTerm}
          term={term}
        />
      )}
      {creditType === "lease" && (
        <Lease
          zip={zip}
          handleInputFormData={handleInputFormData}
          inputFormData={inputFormData}
          handleCreditScore={handleCreditScore}
          handleTerm={handleTerm}
        />
      )}
    </div>
  );
}

CreditOptions.propTypes = {
  zip: PropTypes.string,
  creditType: PropTypes.string,
  handleInputFormData: PropTypes.func,
  inputFormData: PropTypes.objectOf(PropTypes.string),
  handleCreditScore: PropTypes.func,
  handleTerm: PropTypes.func,
  term: PropTypes.string,
};

CreditOptions.defaultProps = {
  zip: "",
  creditType: "",
  handleInputFormData: "",
  inputFormData: "",
  handleCreditScore: "",
  handleTerm: "",
  term: "",
};

export default CreditOptions;

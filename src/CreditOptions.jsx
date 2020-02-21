import React from "react";
import Lease from "./Lease";
import Loan from "./Loan";

class CreditOptions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      zip,
      creditType,
      handleInputFormData,
      inputFormData,
      handleCreditScore,
      handleTerm,
      term,
    } = this.props;
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
}

export default CreditOptions;

import React from "react";
import LoanTerm from "./loan/LoanTerm";
import LoanInput from "./loan/LoanInput";
import LoanCreditScore from "./loan/LoanCreditScore";

class Loan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: props.zip,
    };
  }

  render() {
    const { handleInputFormData, inputFormData, handleCreditScore, handleTerm, term } = this.props;
    return (
      <>
        <div className="loan-container">
          <LoanTerm title="Term (Months)" handleTerm={handleTerm} term={term}/>
          <LoanInput
            title="Trade-in-Value"
            id="tradeIn"
            unit="$"
            defaultValue={0}
            handleInputFormData={handleInputFormData}
            value={inputFormData.tradeIn}
          />
          <LoanInput
            title="Down Payment"
            id="downPayment"
            unit="$"
            defaultValue={0}
            handleInputFormData={handleInputFormData}
            value={inputFormData.downPayment}
          />
          <LoanCreditScore
            title="Approx. Credit Score"
            handleInputFormData={handleInputFormData}
            creditScore={inputFormData.creditScore}
            handleCreditScore={handleCreditScore}
          />
          <LoanInput title="Home ZIP-Code" id="zip" defaultValue={this.state.zip} />
          <LoanInput title="Estimated APR" id="apr" unit="%" defaultValue={0} />
        </div>
      </>
    );
  }
}

export default Loan;

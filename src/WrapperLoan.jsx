import React from "react";
import LoanTerm from "./loan/LoanTerm";
import LoanInput from "./loan/LoanInput";
import LoanCreditScore from "./loan/LoanCreditScore";

function WrapperLoan() {
  return (
    <>
      <div className="main">
        <LoanTerm title="Term (Months)" />
        <LoanInput title="Trade-in-Value" id="downPayment" unit="$" defaultValue={0}/>
        <LoanInput title="Down Payment" id="downPayment" unit="$" defaultValue={0}/>
        <LoanCreditScore title="Approx. Credit Score" />
        <LoanInput title="Home ZIP-Code" id="zip" defaultValue={220114}/>
        <LoanInput title="Estimated APR" id="downPayment" unit="%" defaultValue={0}/>
      </div>
    </>
  );
}

export default WrapperLoan;

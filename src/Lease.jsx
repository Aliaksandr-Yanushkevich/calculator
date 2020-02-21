import React from "react";
import PropTypes from "prop-types";
import InputNumberLease from "./lease/InputNumberLease";
import InputSelectLease from "./lease/InputSelectLease";
import LeaseInputText from "./lease/LeaseInputText";

function Lease({ inputFormData, handleInputFormData, handleCreditScore, zip }) {
  return (
    <>
      <div className="lease-container">
        <LeaseInputText title="Home Zip Code" id="zip" value={zip} />
        <InputNumberLease
          title="Approx. Credit Score"
          id="creditScore"
          min={600}
          step={50}
          max={900}
          defaultValue={750}
          value={inputFormData.creditScore}
          handleCreditScore={handleCreditScore}
        />
        <LeaseInputText
          title="Trade-in Value"
          id="tradeIn"
          unit="$"
          defaultValue={0}
          value={inputFormData.tradeIn}
          handleInputFormData={handleInputFormData}
        />
        <InputSelectLease
          type="select"
          title="Term (Month)"
          id="term"
          options={[24, 36, 48]}
          defaultValue={36}
        />
        <LeaseInputText
          title="Down Payment"
          id="downPayment"
          unit="$"
          defaultValue={0}
          value={inputFormData.downPayment}
          handleInputFormData={handleInputFormData}
        />

        <InputSelectLease
          title="Annual Miles"
          id="mileage"
          options={[10000, 12000, 15000]}
          defaultValue={12000}
        />
      </div>
      <div className="summary" />
    </>
  );
}

Lease.propTypes = {
  inputFormData: PropTypes.objectOf(PropTypes.string),
  handleInputFormData: PropTypes.func,
  handleCreditScore: PropTypes.func,
  zip: PropTypes.string,
};

Lease.defaultProps = {
  inputFormData: "",
  handleInputFormData: "",
  handleCreditScore: "",
  zip: "",
};

export default Lease;

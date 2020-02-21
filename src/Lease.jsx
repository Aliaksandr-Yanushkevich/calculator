import React from "react";
import Tab from "./Tab";
import InputNumberLease from "./lease/InputNumberLease";
import InputSelectLease from "./lease/InputSelectLease";
import LeaseInputText from "./lease/LeaseInputText";
import { getZIP } from "./getZIP";

class Lease extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: props.zip,
    };
  }

  render() {
    const { inputFormData, handleInputFormData, handleCreditScore } = this.props;
    return (
      <>
        <div className="lease-container">
          <LeaseInputText title="Home Zip Code" id="zip" defaultValue={this.state.zip} />
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
}

export default Lease;

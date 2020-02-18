import React from "react";
import Tab from "./Tab";
import InputNumberLease from "./lease/InputNumberLease";
import InputSelectLease from "./lease/InputSelectLease";
import InputTextLease from "./lease/InputTextLease";

function WrapperLease() {
  return (
    <>
      <div className="main">
        {/* Credit calculator */}
        {/* <div className="tabs">
          <Tab id="loan" className="button" text="loan" />
          <Tab id="lease" className="button" text="lease" />
        </div> */}
        <div className="input-container">
          <InputTextLease title="Home Zip Code" id="zip" />
          <InputTextLease title="Trade-in Value" id="tradeIn" unit="$" />
          <InputTextLease title="Down Payment" id="downPayment" unit="$" />
          <InputNumberLease
            title="Approx Credit Score"
            id="creditScore"
            min={600}
            step={50}
            max={900}
            defaultValue={750}
          />
          <InputSelectLease
            type="select"
            title="Term (Month)"
            id="term"
            options={[24, 36, 48]}
            defaultValue={36}
          />
          <InputSelectLease
            title="Annual Miles"
            id="mileage"
            options={[10000, 12000, 15000]}
            defaultValue={12000}
          />
        </div>
      </div>
      <div className="summary" />
    </>
  );
}

export default WrapperLease;

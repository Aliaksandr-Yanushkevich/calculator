import React, { Fragment } from "react";
// import ReactDOM from "react-dom";
import Tab from "./tab";
import InputLease from "./inputLease";
import SelectLease from "./selectLease";

function Wrapper() {
  return (
    <Fragment>
      <div className="main">
        {/* Credit calculator */}
        <div className="tabs">
          <Tab id="loan" className="button" text="loan" />
          <Tab id="lease" className="button" text="lease" />
        </div>
        <div className="input-container">
          <InputLease title="Home Zip Code" id="zip" />
          <InputLease title="Trade-in Value" id="tradeIn" unit="$" />
          <InputLease title="Down Payment" id="downPayment" unit="$" />
          <SelectLease
            title="Approx Credit Score"
            id="creditScore"
            min="0"
            step="50"
            max="1000000000"
            defaultValue="0"
          />
          <SelectLease
            title="Term (Month)"
            id="term"
            min="12"
            step="12"
            max="84"
            defaultValue="24"
          />
          <SelectLease
            title="Annual Miles"
            id="mileage"
            min="0"
            step="500"
            max="1000000000"
            defaultValue="0"
          />
        </div>
      </div>
      <div className="summary"></div>
    </Fragment>
  );
}

export default Wrapper;

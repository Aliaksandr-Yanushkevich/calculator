import React from "react";
import Tab from "./Tab";
import Term from "./loan/term";

function WrapperLoan() {
  return (
    <>
      <div className="main">
        <Term title="Term (Months)" />
      </div>
    </>
  );
}

export default WrapperLoan;

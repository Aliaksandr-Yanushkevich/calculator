import React from "react";
import WrapperLease from "../WrapperLease";
import WrapperLoan from "../WrapperLoan";

class Info extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="info">
        {this.props.creditType === "loan" && <WrapperLoan />}
        {this.props.creditType === "lease" && <WrapperLease />}
      </div>
    );
  }
}

export default Info;

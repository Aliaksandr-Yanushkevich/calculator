import React from "react";
import Lease from "./Lease";
import Loan from "./Loan";

class CreditOptions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="credit-options">
        {this.props.creditType === "loan" && <Loan />}
        {this.props.creditType === "lease" && <Lease />}
      </div>
    );
  }
}

export default CreditOptions;

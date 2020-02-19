import React from "react";
import Lease from "../Lease";
import Loan from "../Loan";

class Info extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="info">
        {this.props.creditType === "loan" && <Loan />}
        {this.props.creditType === "lease" && <Lease />}
      </div>
    );
  }
}

export default Info;

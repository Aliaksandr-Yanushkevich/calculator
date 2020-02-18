import React from "react";
import Tab from "./Tab";
import Info from "./Info";
import dealerData from "./dealerData";
import DealerInfo from './DealerInfo'
class Credit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditType: "lease",
    };
    this.changeTabHandler = this.changeTabHandler.bind(this);
  }

  changeTabHandler(creditType) {
    this.setState(() => ({ creditType: creditType }));
  }

  render() {
    return (
      <>
        <div className="main">
          <div className="tabs">
            <Tab id="loan" text="loan" changeTabHandler={() => this.changeTabHandler("loan")} />
            <Tab id="lease" text="lease" changeTabHandler={() => this.changeTabHandler("lease")} />
          </div>
          <Info creditType={this.state.creditType} />
        </div>

        <div className="dealer-info">
          <DealerInfo dealerData={dealerData}/>
        </div>
      </>
    );
  }
}

export default Credit;

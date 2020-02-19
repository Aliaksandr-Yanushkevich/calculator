import React from "react";
import Tab from "./Tab";
import CreditOptions from "./CreditOptions";
import dealerData from "./info/dealerData";
import DealerInfo from "./info/DealerInfo";
import Loader from "react-loader-spinner";

class Credit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      creditType: "lease",
    };
    this.changeTabHandler = this.changeTabHandler.bind(this);
  }

  componentDidMount() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("data");
      }, 2000);
    });
    promise.then(() => this.setState(state => ({ ...state, isLoading: false })));
  }

  changeTabHandler(creditType) {
    this.setState(state => ({ ...state, creditType: creditType }));
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Loader
          className="spinner"
          visible={this.state.isLoading}
          type="Oval"
          color="#8DCDD8"
          height={100}
          width={100}
        />
      );
    }
    return (
      <>
        <div className="main">
          <div className="tabs">
            <Tab id="loan" text="loan" changeTabHandler={() => this.changeTabHandler("loan")} />
            <Tab id="lease" text="lease" changeTabHandler={() => this.changeTabHandler("lease")} />
          </div>
          <CreditOptions creditType={this.state.creditType} />
        </div>

        <div className="summary">
          <DealerInfo dealerData={dealerData} />
        </div>
      </>
    );
  }
}

export default Credit;

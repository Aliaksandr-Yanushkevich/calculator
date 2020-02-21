import React from "react";
import Loader from "react-loader-spinner";
import Tab from "./Tab";
import CreditOptions from "./CreditOptions";
import dealerData from "./info/dealerData";
import DealerInfo from "./info/DealerInfo";
import getZIP from "./getZIP";

class Credit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      creditType: "lease",
      inputFormData: {
        tradeIn: 0,
        downPayment: 0,
        creditScore: 750,
      },
      term: 24,
    };
    this.changeTabHandler = this.changeTabHandler.bind(this);
    this.handleInputFormData = this.handleInputFormData.bind(this);
    this.handleCreditScore = this.handleCreditScore.bind(this);
    this.handleTerm = this.handleTerm.bind(this);
  }

  componentDidMount() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    promise.then(() => {
      getZIP().then(zip => {
        this.setState(state => ({
          ...state,
          isLoading: false,
          zip,
        }));
        if (sessionStorage.config === undefined) {
          const data = {
            zip,
            creditScore: 750,
            term: 24,
            mileAge: 12000,
            apr: 0,
            tradeIn: 0,
            downPayment: 0,
          };
          const config = JSON.stringify(data);
          sessionStorage.setItem("config", config);
        }
      });
    });
  }

  changeTabHandler(creditType) {
    this.setState(state => ({ ...state, creditType }));
  }

  handleInputFormData(e) {
    const { value } = e.target;
    const { id } = e.target;
    this.setState(state => ({ ...state, inputFormData: { ...state.inputFormData, [id]: value } }));
  }

  handleCreditScore(e) {
    const value = Number(e.target.value);
    this.setState(state => ({
      ...state,
      inputFormData: { ...state.inputFormData, creditScore: value },
    }));
  }

  handleTerm(e) {
    const value = Number(e.target.value);
    this.setState(state => ({ ...state, term: value }));
  }

  render() {
    const { zip, creditType, inputFormData, isLoading, term } = this.state;
    if (isLoading) {
      return (
        <Loader
          className="spinner"
          visible={isLoading}
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
            <Tab
              id="loan"
              text="loan"
              isActive={creditType === "loan"}
              changeTabHandler={() => this.changeTabHandler("loan")}
            />
            <Tab
              id="lease"
              text="lease"
              isActive={creditType === "lease"}
              changeTabHandler={() => this.changeTabHandler("lease")}
            />
          </div>
          <CreditOptions
            creditType={creditType}
            zip={zip}
            inputFormData={inputFormData}
            term={term}
            handleInputFormData={this.handleInputFormData}
            handleCreditScore={this.handleCreditScore}
            handleTerm={this.handleTerm}
          />
        </div>

        <div className="summary">
          <DealerInfo dealerData={dealerData} />
        </div>
      </>
    );
  }
}

export default Credit;

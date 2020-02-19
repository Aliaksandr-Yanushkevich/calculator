import React from "react";
import PropTypes from "prop-types";
import LoanButton from "./LoanButton";

class LoanCreditScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState(() => ({
      value,
    }));
  }

  render() {
    const { title } = this.props;
    return (
      <div className="loan-item">
        <p className="loan-title">{title}</p>
        <div className="loan-button-wrapper">
          <LoanButton id="poor" className="term-button" text1="Poor" text2="639 or less" />
          <LoanButton id="fair" className="term-button" text1="Fair" text2="640 - 699" />
          <LoanButton id="good" className="term-button" text1="Good" text2="700 - 749" />
          <LoanButton id="excellent" className="term-button" text1="Excellent" text2="750 - 850" />
        </div>
      </div>
    );
  }
}

LoanCreditScore.propTypes = {
  id: PropTypes.string.isRequired,
};

export default LoanCreditScore;

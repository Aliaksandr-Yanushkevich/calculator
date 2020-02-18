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
      <div className="term">
        <p className="term-title">{title}</p>
        <div className="term-button-wrapper">
          <LoanButton id="poor" className="term-button" value="Poor 639 or less" />
          <LoanButton id="fair" className="term-button" value="Fair 640 - 699" />
          <LoanButton id="good" className="term-button" value="Good 700 - 749" />
          <LoanButton id="excellent" className="term-button" value="Excellent 750 - 850" />
        </div>
      </div>
    );
  }
}

LoanCreditScore.propTypes = {
  id: PropTypes.string.isRequired,
};

export default LoanCreditScore;

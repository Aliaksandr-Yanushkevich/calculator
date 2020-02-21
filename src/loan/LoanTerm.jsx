import React from "react";
import PropTypes from "prop-types";
import LoanButton from "./LoanButton";

class LoanTerm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     term: 24,
  //   };
  // }

  render() {
    const { title, handleTerm, term } = this.props;
    const termValues = [12, 24, 36, 48, 72, 84];
    return (
      <div className="loan-item">
        <p className="loan-title">{title}</p>
        <div className="loan-button-wrapper">
          {termValues.map(termValue => {
            return (
              <LoanButton
                key={termValue}
                className="loan-button"
                value={termValue}
                isActive={term === termValue}
                handler={handleTerm}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

LoanTerm.propTypes = {
  id: PropTypes.string.isRequired,
};

export default LoanTerm;

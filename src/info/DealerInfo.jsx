import React, { Fragment } from "react";
import PhoneNumber from "react-phone-number";
class DealerInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msrp: "",
      vehicleName: "",
      dealerName: "",
      dealerPhoneNumber: "",
      dealerRating: "",
    };
  }

  componentDidMount() {
    const dealerData = Promise.resolve(this.props);
    dealerData.then(data => {
      const { msrp, vehicleName, dealerName, dealerPhoneNumber, dealerRating } = data.dealerData;
      this.setState({
        msrp: msrp,
        vehicleName: vehicleName,
        dealerName: dealerName,
        dealerPhoneNumber: dealerPhoneNumber,
        dealerRating: dealerRating,
      });
    });
  }
  render() {
    const { msrp, vehicleName, dealerName, dealerPhoneNumber, dealerRating } = this.state;
    return (
      <div className="dealer-info">
        {/* <div className="vehicle-name">Vehicle name: {vehicleName}</div>
        <div className="info-msrp">MSRP: ${msrp}</div> */}
        <div className="dealer-name">Dealer name: {dealerName}</div>
        <div className="dealer-phone">
          Dealer phone number: <PhoneNumber number={dealerPhoneNumber } isLinked={true}/>
        </div>
        <div className="dealer-rating">Dealer rating: {dealerRating}%</div>
      </div>
    );
  }
}

export default DealerInfo;

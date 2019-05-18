import React, { Component } from "react";
import { OFFERS } from "../shared/offers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faTruckMoving,
  faPercentage
} from "@fortawesome/free-solid-svg-icons";

const faImbHandshake = <FontAwesomeIcon icon={faHandshake} />;
const faImgTruck = <FontAwesomeIcon icon={faTruckMoving} />;
const faImgPercentage = <FontAwesomeIcon icon={faPercentage} />;

class SpecialOffers extends Component {
  state = {
    offers: OFFERS,
    0: faImgTruck,
    1: faImgPercentage,
    2: faImbHandshake
  };
  render() {
    const offerCards = this.state.offers.map(offer => {
      return (
        <div key={offer.id} className="offer-card">
          <div className="offer-card__header">{offer.header}</div>
          <div className="offer-card__icon">{this.state[offer.id]}</div>
          <div className="offer-card__text">{offer.text}</div>
        </div>
      );
    });
    return (
      <div className="special-offers">
        <h2 className="subheader special-offers__subheader">
          Специальные условия
        </h2>
        <div className="special-offers__cards">{offerCards}</div>
      </div>
    );
  }
}

export default SpecialOffers;

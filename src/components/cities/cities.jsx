import React from "react";
import PlaceList from "../place-list/place-list.jsx";
import Map from "../map/map.jsx";
import {Classes} from "../../constants/pages.js";
import PropTypes from "prop-types";
const Cities = (props) => {
  const {currentCity, choosedByCityOffers, onTitlePlaceCardClick, hoveredCardId, onUserHover} = props;
  const coordinates = choosedByCityOffers.map((offer)=>({
    coordinates: offer.coordinates,
    isActive: offer.id === hoveredCardId,
  }));
  return <div className="cities__places-container container">
    <PlaceList
      offers = {choosedByCityOffers}
      onTitlePlaceCardClick = {onTitlePlaceCardClick}
      onUserHover = {onUserHover}
      placeCount = {choosedByCityOffers.length}
      currentCity = {currentCity}/>
    <div className="cities__right-section">
      {<Map
        pins={coordinates}
        cityCoordinates={[52.38333, 4.9]}
        classes={Classes.MAIN}/>}
    </div>
  </div>;
};
Cities.propTypes = {
  onTitlePlaceCardClick: PropTypes.func,
  currentCity: PropTypes.string,
  onUserHover: PropTypes.func,
  hoveredCardId: PropTypes.number,
  choosedByCityOffers: PropTypes.array.isRequired,
};
export default Cities;

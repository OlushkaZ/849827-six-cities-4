import React from "react";
// import PlaceList from "../place-list/place-list.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";
import Cities from '../cities/cities.jsx';
import Locations from '../locations/locations.jsx';
import {CITY_COUNT} from "../../constants/const.js";

import {chooseOffersByCity} from "../../utils.js";
import withHoveredCard from "../../hocs/with-hovered-card/with-hovered-card.js";
const CitiesWrapper = withHoveredCard(Cities);
// import withMapState from "../../hocs/with-map-state/with-map-state.js";


// const MapWrapped = withMapState(Map);

const Main = (props) => {
  const {currentCity, offers, onTitlePlaceCardClick = ()=>{}, onLocationClick} = props;
  const choosedByCityOffers = chooseOffersByCity(currentCity, offers);

  const getCities = () => {
    const cities = offers.map(({city})=>city);
    return cities.filter((item, pos)=>{
      return cities.indexOf(item) === pos;
    }).slice(0, CITY_COUNT);
  };
  return <div className="page page--gray page--main">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Locations
        cities = {getCities()}
        currentCity = {currentCity}
        onLocationClick = {onLocationClick}
      />
      <div className="cities">
        <CitiesWrapper
          onTitlePlaceCardClick = {onTitlePlaceCardClick}
          currentCity = {currentCity}
          choosedByCityOffers = {choosedByCityOffers}
        />
      </div>
    </main>
  </div>;
};

Main.propTypes = {
  offers: PropTypes.array.isRequired,
  onTitlePlaceCardClick: PropTypes.func,
  currentCity: PropTypes.string,
  onUserHover: PropTypes.func,
  hoveredCardId: PropTypes.number,
  onLocationClick: PropTypes.func,
};

// export default Main;
const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  onLocationClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  // onUserAnswer(question, answer) {
  //   dispatch(ActionCreator.incrementMistake(question, answer));
  //   dispatch(ActionCreator.incrementStep());
  // },
});


export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

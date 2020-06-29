import React from "react";
import PlaceList from "../place-list/place-list.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
// import {ActionCreator} from "../../reducer.js";
import Map from '../map/map.jsx';
import Locations from '../locations/locations.jsx';
import {CITY_COUNT} from "../../constants/const.js";
import {Classes} from "../../constants/pages.js";
import {chooseOffersByCity} from "../../utils.js";
// import withMapState from "../../hocs/with-map-state/with-map-state.js";


// const MapWrapped = withMapState(Map);

const Main = (props) => {
  const {currentCity, offers, onTitlePlaceCardClick = ()=>{}, hoveredCardId, onUserHover} = props;
  const choosedByCityOffers = chooseOffersByCity(currentCity, offers);
  const coordinates = choosedByCityOffers.map((offer)=>({
    coordinates: offer.coordinates,
    isActive: offer.id === hoveredCardId,
  }));

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
        onLocationClick = {()=>{}}
      />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{choosedByCityOffers.length} places to stay in {currentCity}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width={7} height={4}>
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
              {/*
                <select class="places__sorting-type" id="places-sorting">
                  <option class="places__option" value="popular" selected="">Popular</option>
                  <option class="places__option" value="to-high">Price: low to high</option>
                  <option class="places__option" value="to-low">Price: high to low</option>
                  <option class="places__option" value="top-rated">Top rated first</option>
                </select>
                */}
            </form>
            <PlaceList offers = {choosedByCityOffers}
              onTitlePlaceCardClick = {onTitlePlaceCardClick}
              onUserHover = {onUserHover}/>
          </section>
          <div className="cities__right-section">
            {<Map
              pins={coordinates}
              cityCoordinates={[52.38333, 4.9]}
              classes={Classes.MAIN}/>}
          </div>
        </div>
      </div>
    </main>
  </div>;
};

Main.propTypes = {
  offers: PropTypes.array.isRequired,
  onTitlePlaceCardClick: PropTypes.func,
  currentCity: PropTypes.string,
  onUserHover: PropTypes.func,
  hoveredCardId: PropTypes.number
};

// export default Main;
const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  offers: state.offers,
});

// const mapDispatchToProps = (dispatch) => ({
//   onWelcomeButtonClick() {
//     dispatch(ActionCreator.incrementStep());
//   },
//   onUserAnswer(question, answer) {
//     dispatch(ActionCreator.incrementMistake(question, answer));
//     dispatch(ActionCreator.incrementStep());
//   },
// });


export {Main};
export default connect(mapStateToProps)(Main);

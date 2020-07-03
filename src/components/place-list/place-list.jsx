import React, {PureComponent} from "react";
import PlaceCard from "../place-card/place-card.jsx";
import PropTypes from "prop-types";

class PlaceList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hoveredCardId: null,
    };
  }
  render() {
    const {offers, onTitlePlaceCardClick, onUserHover, placeCount, currentCity, classes} = this.props;
    return <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{placeCount} places to stay in {currentCity}</b>
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
      <div className="cities__places-list places__list tabs__content">
        {offers.map((it) => <PlaceCard key={it.id}
          id = {it.id}
          name={it.name}
          price = {it.price}
          isFavorite = {it.isFavorite}
          isPremium = {it.isPremium}
          srcImg = {it.srcImg}
          type = {it.type}
          rating = {it.rating}
          onTitleClick={onTitlePlaceCardClick}
          classes={classes}
          // onUserHover = {(id)=>{
          //   this.setState({hoveredCardId: id});
          // }}
          onUserHover = {onUserHover}
        />)}
      </div>
    </section>;
  }
}

PlaceList.propTypes = {
  offers: PropTypes.array.isRequired,
  onTitlePlaceCardClick: PropTypes.func,
  onUserHover: PropTypes.func,
  placeCount: PropTypes.number,
  currentCity: PropTypes.string,
  classes: PropTypes.object,
};
export default PlaceList;

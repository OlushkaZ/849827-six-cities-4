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
    const {offers, onTitlePlaceCardClick, onUserHover} = this.props;
    return <div className="cities__places-list places__list tabs__content">
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
        // onUserHover = {(id)=>{
        //   this.setState({hoveredCardId: id});
        // }}
        onUserHover = {onUserHover}
      />)}
    </div>;
  }
}

PlaceList.propTypes = {
  offers: PropTypes.array.isRequired,
  onTitlePlaceCardClick: PropTypes.func,
  onUserHover: PropTypes.func,
};
export default PlaceList;

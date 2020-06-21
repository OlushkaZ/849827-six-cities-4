import React from "react";
import PropTypes from "prop-types";
import {PlaceType} from "../../const.js";

const PlaceCard = (props) => {
  const recalcAsPercent = (num)=>{
    return num * 20;
  };
  const {id, name, price, isFavorite, isPremium, srcImg, type, rating, onTitleClick, onUserHover} = props;
  return <article className="cities__place-card place-card" onMouseEnter = {()=>onUserHover(id)} onMouseLeave = {()=>onUserHover(null)}>
    {isPremium ? <div className="place-card__mark">
      <span>Premium</span>
    </div> : ``}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={srcImg} width={260} height={200} alt="Place image" />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">€{price}</b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        <button className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``} button`} type="button">
          <svg className="place-card__bookmark-icon" width={18} height={19}>
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${recalcAsPercent(rating)}%`}} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name"
        onClick = {onTitleClick}>
        <a href="#">{name}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>;
};

PlaceCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  srcImg: PropTypes.string.isRequired,
  rating: PropTypes.oneOf([1, 2, 3, 4, 5]),
  type: PropTypes.oneOf([PlaceType.APARTMENT, PlaceType.PRIVATE_ROOM]).isRequired,
  onTitleClick: PropTypes.func,
  onUserHover: PropTypes.func
};

export default PlaceCard;

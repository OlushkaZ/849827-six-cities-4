import React from "react";
import PropTypes from "prop-types";
const Locations = (props) =>{
  const {cities, onLocationClick} = props;
  // const isActiveSity = (city) => {
  //   return currentCity === city;
  // };
  const handleTabClick = (evt)=>{
    const {target} = evt;
    evt.preventDefault();
    onLocationClick(target.textContent);
  };
  return <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, ind)=>{
          return <li key={ind} className="locations__item">
            <a className= {`locations__item-link tabs__item ${city.isActive && `tabs__item--active`}`} href="#" onClick = {handleTabClick}>
              <span>{city.cityName}</span>
            </a>
          </li>;
        })}
      </ul>
    </section>
  </div>;
};

Locations.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object),
  onLocationClick: PropTypes.func,
};
export default Locations;

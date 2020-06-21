import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  return <Main
    offers = {props.offers}
    onTitlePlaceCardClick={props.onTitlePlaceCardClick}/>;
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
  onTitlePlaceCardClick: PropTypes.func,
};

export default App;

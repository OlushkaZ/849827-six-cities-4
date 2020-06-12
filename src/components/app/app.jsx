import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  return <Main offerCount={props.offerCount} placeDescribes = {props.placeDescribes}/>;
};

App.propTypes = {
  offerCount: PropTypes.number.isRequired,
  placeDescribes: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default App;

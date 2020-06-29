import React from "react";
import Main from "../main/main.jsx";
import withHoveredCard from "../../hocs/with-hovered-card/with-hovered-card.js";
// import PropTypes from "prop-types";

const App = () => {
  const MainWrapped = withHoveredCard(Main);
  return <MainWrapped/>;
};

// App.propTypes = {
//   offers: PropTypes.array.isRequired,
//   onTitlePlaceCardClick: PropTypes.func,
// };

export default App;


import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers.js";


const init = () => {
  // const settings = {
  //   // offerCount: 312,
  // };
  const onTitlePlaceCardClick = () => {};
  // const placeDescribes = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`];
  ReactDOM.render(<App
    offers={offers}
    onTitlePlaceCardClick={onTitlePlaceCardClick}
  />, document.querySelector(`#root`));
};

init();

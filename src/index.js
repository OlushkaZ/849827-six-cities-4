
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";


const init = () => {
  const settings = {
    offerCount: 312,
  };
  const onTitlePlaceCardClick = () => {};
  const placeDescribes = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`];
  ReactDOM.render(<App offerCount={settings.offerCount}
    placeDescribes={placeDescribes}
    onTitlePlaceCardClick={onTitlePlaceCardClick}
  />, document.querySelector(`#root`));
};

init();

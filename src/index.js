
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";


const init = () => {
  const settings = {
    offerCount: 312,
  };
  const placeDescribes = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`];
  ReactDOM.render(<App offerCount={settings.offerCount} placeDescribes={placeDescribes}/>, document.querySelector(`#root`));
};

init();

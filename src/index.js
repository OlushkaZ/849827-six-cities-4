
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";


const init = () => {
  const settings = {
    offerCount: 312,
  };
  ReactDOM.render(<App offerCount={settings.offerCount}/>, document.querySelector(`#root`));
};

init();


import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {ActionCreator} from "./reducer/reducer.js";
import {reducer} from "./reducer/reducer.js";
import offers from "./mocks/offers.js";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);


const init = () => {
  store.dispatch(ActionCreator.getOffers(offers));
  store.dispatch(ActionCreator.changeCity(offers[0].city));
  // reducer(ActionCreator.getOffers(offers));
  // reducer(ActionCreator.changeCity(offers[0].city));
  // const onTitlePlaceCardClick = () => {};

  ReactDOM.render(
      <Provider store={store}>
        <App
          // offers={offers}
          // onTitlePlaceCardClick={onTitlePlaceCardClick}
        />
      </Provider>,
      document.querySelector(`#root`));
};

init();

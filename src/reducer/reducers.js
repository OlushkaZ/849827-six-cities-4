import {combineReducers} from "redux";
import {reducer as offersData} from "./offers-data/offers-data.js";
import {reducer as page} from "./page/page.js";
// import {reducer as user} from "./user/user.js";
// import NameSpace from "./name-space.js";


export default combineReducers({
  DATA: offersData,
  PAGE: page,
  // USER: user,
});

// const initialState = {
//   currentCity: ``,
//   offers: [],
//   activeOffer: -1,
// };
//
// const ActionType = {
//   CHANGE_CITY: `CHANGE_CITY`,
//   GET_OFFERS: `GET_OFFERS`,
//   CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
// };
//
// const reducer = (state = initialState, action)=>{
//   switch (action.type) {
//     case ActionType.CHANGE_CITY: return Object.assign(
//         {}, state, {currentCity: action.payload}
//     );
//     case ActionType.GET_OFFERS: return Object.assign(
//         {}, state, {offers: action.payload}
//     );
//     case ActionType.CHANGE_ACTIVE_OFFER: return Object.assign(
//         {}, state, {activeOffer: action.payload}
//     );
//   }
//   return state;
// };
//
// const ActionCreator = {
//   changeCity: (city)=>({
//     type: ActionType.CHANGE_CITY,
//     payload: city
//   }),
//   getOffers: (offers)=>({
//     type: ActionType.GET_OFFERS,
//     payload: offers
//   }),
//   changeActiveOffer: (offerId)=>({
//     type: ActionType.CHANGE_ACTIVE_OFFER,
//     payload: offerId
//   }),
// };
//
// export {
//   reducer,
//   ActionType,
//   ActionCreator,
// };

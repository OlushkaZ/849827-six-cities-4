import {PageType} from "../../constants/const.js";
const initialState = {
  currentCity: null,
  step: PageType.MAIN,
  propertyOffer: null,
  activeOffer: -1,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_PAGE_TYPE: `CHANGE_PAGE_TYPE`,
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
  // MAKE_OFFER_ACTIVE: `MAKE_OFFER_ACTIVE`,
  // MAKE_OFFER_INACTIVE: `MAKE_CARD_INACTIVE`,
};

const ActionCreator = {
  changeCity: (city)=>({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changePageType: (offer) => ({
    type: ActionType.CHANGE_PAGE_TYPE,
    payload: {
      step: PageType.DETAILS,
      propertyOffer: offer
    }
  }),
  changeActiveOffer: (offerId)=>({
    type: ActionType.CHANGE_ACTIVE_OFFER,
    payload: offerId
  }),
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY: return Object.assign(
        {}, state, {currentCity: action.payload}
    );
    case ActionType.CHANGE_ACTIVE_OFFER: return Object.assign(
        {}, state, {activeOffer: action.payload}
    );
  }

  return state;
};

export {reducer, ActionType, ActionCreator};

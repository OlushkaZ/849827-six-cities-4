export const PlaceType = {
  PRIVATE_ROOM: `Private room`,
  APARTMENT: `Apartment`,
};
export const CITY_COUNT = 6;
export const ZOOM = 12;

// export const OfferInfo = {
//   TYPE: [`apartment`, `room`, `house`, `hotel`],
// };

export const ratingStars = {
  '0': 0,
  '1': 20,
  '2': 40,
  '3': 60,
  '4': 80,
  '5': 100
};

export const SortingType = {
  DEFAULT: `popular`,
  TO_HIGHT: `to-high`,
  TO_LAW: `to-low`,
  TOP_RATED: `top-rated`,
};

export const City = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`,
};

export const PageType = {
  MAIN: `main`,
  DETAILS: `details`,
};

export const CardClasses = {
  MAIN: {
    card: `cities__place-`,
    wrapper: `cities`,
    cards: `cities__places-`,
    map: `cities`,
  },
  PROPERTY: {
    card: `near-places__`,
    wrapper: `near-places`,
    cards: `near-places__`,
    map: `property`
  }
};

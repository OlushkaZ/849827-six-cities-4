
export const chooseOffersByCity = (city, offers)=> {
  return offers.slice().filter((offer)=>offer.city === city);
};

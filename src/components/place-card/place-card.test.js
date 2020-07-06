import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

const mock = {
  id: 26,
  isPremium: true,
  isFavorite: true,
  srcImg: ``,
  price: 0,
  name: ``,
  type: `Apartment`,
  rating: 1
};

// Вы можете запустить все тесты или только определённый
// npm run test.jest -- -t 'snapshot app'
it(`snapshot placeCard`, () => {
  const offer = mock;
  const tree = renderer
    .create(<PlaceCard
      id = {offer.id}
      name={offer.name}
      price = {offer.price}
      isFavorite = {offer.isFavorite}
      isPremium = {offer.isPremium}
      srcImg = {offer.srcImg}
      type = {offer.type}
      rating = {offer.rating}
      onUserHover = {()=>{}}
      onTitleClick={()=>{}}
      classes = {{card: ``}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

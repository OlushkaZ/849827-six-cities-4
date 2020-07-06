import React from "react";
import Enzyme, {shallow} from "enzyme";
// import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card";

Enzyme.configure({
  adapter: new Adapter(),
});
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

describe(`placeCardComponent`, () => {
  it(`Should title be pressed`, () => {
    const offer = mock;
    const onTitleClick = jest.fn();

    const placeCard = shallow(
        <PlaceCard
          id = {offer.id}
          name={offer.name}
          price = {offer.price}
          isFavorite = {offer.isFavorite}
          isPremium = {offer.isPremium}
          srcImg = {offer.srcImg}
          type = {offer.type}
          rating = {offer.rating}
          onUserHover = {()=>{}}
          onTitleClick={onTitleClick}
          classes = {{card: ``}}
        />
    );

    const title = placeCard.find(`.place-card__name`);

    // title.props().onClick();
    title.simulate(`click`);
    // welcomeButton.simulate(`click`, {preventDefault() {}}); //для mount

    // expect(onWelcomeButtonClick.mock.calls.length).toBe(1);
    expect(onTitleClick).toHaveBeenCalledTimes(1);
  });


  it(`id of card passed to callback is consistent with "id" prop`, () => {
    const offer = mock;
    const onUserHover = jest.fn();

    const placeCard = shallow(<PlaceCard
      id = {offer.id}
      name={offer.name}
      price = {offer.price}
      isFavorite = {offer.isFavorite}
      isPremium = {offer.isPremium}
      srcImg = {offer.srcImg}
      type = {offer.type}
      rating = {offer.rating}
      onTitleClick={()=>{}}
      onUserHover = {onUserHover}
      classes = {{card: ``}}
    />);

    const card = placeCard.find(`.place-card`);

    card.simulate(`mouseEnter`);

    expect(onUserHover).toHaveBeenCalledTimes(1);

    expect(onUserHover.mock.calls[0][0]).toEqual(offer.id);
  });
});

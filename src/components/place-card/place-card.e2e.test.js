import React from "react";
import Enzyme, {shallow} from "enzyme";
// import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`placeCardComponent`, () => {
  it(`Should title be pressed`, () => {
    const onTitleClick = jest.fn();

    const placeCard = shallow(
        <PlaceCard
          describe={`Wood and stone place`}
          onTitleClick={onTitleClick}
        />
    );

    const title = placeCard.find(`.place-card__name`);

    // title.props().onClick();
    title.simulate(`click`);
    // welcomeButton.simulate(`click`, {preventDefault() {}}); //для mount

    // expect(onWelcomeButtonClick.mock.calls.length).toBe(1);
    expect(onTitleClick).toHaveBeenCalledTimes(1);
  });
});

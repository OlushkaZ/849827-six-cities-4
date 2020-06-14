import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

const describe = `Beautiful & luxurious apartment at great location`;

// Вы можете запустить все тесты или только определённый
// npm run test.jest -- -t 'snapshot app'
it(`snapshot placeCard`, () => {
  const tree = renderer
    .create(<PlaceCard
      describe={describe}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

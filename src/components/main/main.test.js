import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const offerCount = 4;
const placeDescribes = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`];

// Вы можете запустить все тесты или только определённый
// npm run test.jest -- -t 'snapshot app'
it(`snapshot main`, () => {
  const tree = renderer
    .create(<Main
      offerCount={offerCount}
      placeDescribes = {placeDescribes}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

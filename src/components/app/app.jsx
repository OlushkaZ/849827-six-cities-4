import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  return <Main offerCount={props.offerCount}/>;
};

export default App;

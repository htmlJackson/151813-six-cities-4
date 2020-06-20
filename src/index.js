import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

const init = () => {
  const placesCount = 333;
  ReactDOM.render(
      <App placesCount={placesCount} />,
      document.querySelector(`#root`)
  );
};

init();

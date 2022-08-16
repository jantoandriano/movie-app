import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FavContext from "./contexts/Favourites";

ReactDOM.render(
  <React.StrictMode>
    <FavContext>
      <App />
    </FavContext>
  </React.StrictMode>,
  document.getElementById("root")
);

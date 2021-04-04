import React from "react";
import ReactDOM from "react-dom";
// import global used libraries like css libs or fonts
import "./static/libraries/font-awesome-animation.min.css";
import "./static/fonts/font-styles.css";
import "./static/libraries/hover-min.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

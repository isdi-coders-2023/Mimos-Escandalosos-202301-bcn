import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fontsource/inter";
import GlobalStyles from "./GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);

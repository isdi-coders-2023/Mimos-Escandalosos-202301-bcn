import React from "react";
import ReactDOM from "react-dom/client";

import { MealsInfoContextProvider } from "./store/contexts/MealsInfoContext/MealsInfoContextProvider";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fontsource/inter";
import GlobalStyles from "./styles/GlobalStyles";

import router from "./routes/router";
import { RouterProvider } from "react-router-dom";
import { UiContextProvider } from "./store/contexts/uiContext/UiContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <UiContextProvider>
      <GlobalStyles />
      <MealsInfoContextProvider>
        <RouterProvider router={router} />
      </MealsInfoContextProvider>
    </UiContextProvider>
  </React.StrictMode>
);

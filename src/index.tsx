import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MealsInfoContextProvider } from "./store/contexts/MealsInfoContext/MealsInfoContextProvider";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fontsource/inter";
import GlobalStyles from "./styles/GlobalStyles";

import App from "./components/App/App";
import MealForm from "./components/MealForm/MealForm";
import { HomePage } from "./components/HomePage/HomePage";
import Error404 from "./components/Error404/Error404";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/Create-Meal",
        element: <MealForm />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <MealsInfoContextProvider>
      <RouterProvider router={router} />
    </MealsInfoContextProvider>
  </React.StrictMode>
);

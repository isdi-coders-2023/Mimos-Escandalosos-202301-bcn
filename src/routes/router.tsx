import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import Error404 from "../components/Error404/Error404";
import { HomePage } from "../components/HomePage/HomePage";
import MealForm from "../components/MealForm/MealForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/Detail-Page",
        element: <Error404 />,
      },
      {
        path: "/Create-Meal",
        element: <MealForm />,
      },
    ],
  },
]);

export default router;

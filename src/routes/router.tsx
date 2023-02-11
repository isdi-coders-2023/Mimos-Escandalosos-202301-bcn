import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import CreatePage from "../components/CreatePage/CreatePage";
import Error404 from "../components/Error404/Error404";
import { HomePage } from "../components/HomePage/HomePage";

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
        element: <CreatePage />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import CreatePage from "../pages/CreatePage/CreatePage";
import Error404 from "../pages/Error404/Error404";
import { HomePage } from "../pages/HomePage/HomePage";

export const routes = [
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
        element: <CreatePage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;

import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";

import { routes } from "./router";

describe("Given a router", () => {
  describe("When it is executed", () => {
    test("Then it should find a Creat Meal page with a heading", () => {
      const text = "Create a new meal";

      const router = createMemoryRouter(routes, {
        initialEntries: ["/", "/Create-Meal/"],
      });

      render(<RouterProvider router={router} />);

      const element = screen.getByLabelText(text);

      expect(element).toBeInTheDocument();
    });
  });
});

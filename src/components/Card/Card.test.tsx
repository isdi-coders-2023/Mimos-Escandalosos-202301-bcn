import { screen, render } from "@testing-library/react";
import Card from "./Card";

describe("Given a Card component", () => {
  describe("When it rendered", () => {
    test("Then it should show a header2", () => {
      render(<Card />);

      screen.getByRole("heading", { level: 2 });
    });
  });
});

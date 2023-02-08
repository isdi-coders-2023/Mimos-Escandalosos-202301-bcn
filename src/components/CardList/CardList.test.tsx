import { screen, render } from "@testing-library/react";
import CardList from "./CardList";

describe("Given a CardList component", () => {
  describe("When it rendered", () => {
    test("Then it should show a card", () => {
      render(<CardList />);

      const card = screen.getByRole("list");

      expect(card).toBeInTheDocument();
    });
  });
});

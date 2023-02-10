import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When the page is loading", () => {
    test("Then it should show a loader with the aria-label attribute 'The page is loading'", () => {});
    render(<Loading />);

    const ariaLabelText = screen.getByRole("dialog", {
      name: "The page is loading",
    });

    expect(ariaLabelText).toBeInTheDocument();
  });
});

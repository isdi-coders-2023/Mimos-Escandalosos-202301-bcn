import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Error404 from "./Error404";

describe("Given a Error 404 component", () => {
  describe("When the request does not found the return a response", () => {
    test("Then it should show an image of the 404 error", () => {});
    render(
      <BrowserRouter>
        <Error404 />
      </BrowserRouter>
    );

    const errorImg = screen.getByRole("img");

    expect(errorImg).toBeInTheDocument();
  });
});

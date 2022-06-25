import { render, screen, cleanup, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import User from "../user/User.js";
import { BrowserRouter as Router } from "react-router-dom";

// test component  user

test("should render User component", () => {
  render(<User />, { wrapper: MemoryRouter });
  const UserElement = screen.getByTestId("User-1");
  expect(UserElement).toBeInTheDocument();

  act(() => {
    expect(UserElement).toBeInTheDocument();
  });
});

describe("User Component", () => {
  it("rendered user", () => {
    <Router>
      const {getByTestId} = render(
      <User />
      ); const user = getByTestId("data-testid"); expect(user).toBeTruthy();
    </Router>;
  });
});

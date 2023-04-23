import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./Button";

describe("Button", () => {
  test("renders without error", () => {
    const { container } = render(<Button label="Test Button" />);
    expect(container).toMatchSnapshot();
  });

  test("renders with different props", async () => {
    const { container } = render(
      <Button label="Test Button" color="secondary" size="large" />
    );
    expect(container).toMatchSnapshot();
  });

  test("calls onClick handler when clicked", async () => {
    const handleClick = jest.fn();
    const { findByTestId } = render(
      <Button label="Test Button" onClick={handleClick} />
    );

    const buttonEl = await findByTestId("jrc-button");

    fireEvent.click(buttonEl);
    expect(handleClick).toHaveBeenCalled();
  });

  test("calls onClick handler with enter key", async () => {
    const handleClick = jest.fn();
    render(<Button label="Test Button" onClick={handleClick} />);

    await userEvent.keyboard("[Tab]");
    await userEvent.keyboard("[Enter]");
    expect(handleClick).toHaveBeenCalled();
  });
});

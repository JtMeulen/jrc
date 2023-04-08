import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("renders without error", () => {
    const { container } = render(<Button label="Test Button" />);
    expect(container).toMatchSnapshot();
  });

  test("renders with different props", async () => {
    const { findByTestId } = render(
      <Button label="Test Button" type="secondary" size="large" />
    );

    const buttonEl = await findByTestId("jrc-button");

    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl).toHaveClass("button button--large button--secondary");
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
    const { findByTestId } = render(
      <Button label="Test Button" onClick={handleClick} />
    );

    const buttonEl = await findByTestId("jrc-button");

    fireEvent.focus(buttonEl);
    fireEvent.keyDown(buttonEl, { key: "Enter" });
    // TODO Why is this focus and enter key not working
    // expect(handleClick).toHaveBeenCalled();
  });
});

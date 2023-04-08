import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import { axe } from "jest-axe";
import Button from "./Button";

describe("Button", () => {
  test("renders without error", () => {
    const { container } = render(<Button label="Test Button" />);
    expect(container).toMatchSnapshot();
  });

  // test("renders with different props", () => {
  //   const { container, getByText } = render(
  //     <Button label="Test Button" type="secondary" size="large" />
  //   );
  //   expect(container).toBeInTheDocument();
  //   expect(getByText("Test Button")).toHaveClass("button button--large button--secondary");
  // });

  // test("calls onClick handler when clicked", () => {
  //   const handleClick = jest.fn();
  //   const { getByText } = render(<Button label="Test Button" onClick={handleClick} />);
  //   fireEvent.click(getByText("Test Button"));
  //   expect(handleClick).toHaveBeenCalled();
  // });

  // test("meets accessibility standards", async () => {
  //   const { container } = render(<Button label="Test Button" />);
  //   const results = await axe(container);
  //   expect(results).toHaveNoViolations();
  // });
});
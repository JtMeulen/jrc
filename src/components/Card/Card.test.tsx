import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Card from "./Card";

describe("Card", () => {
  test("renders without error", () => {
    const { container } = render(
      <Card>
        <div></div>
      </Card>
    );
    expect(container).toMatchSnapshot();
  });

  test("renders with a header image", async () => {
    const { container } = render(
      <Card headerImage={{ src: "http://image.com", alt: "alt text" }}>
        <div></div>
      </Card>
    );
    expect(container).toMatchSnapshot();
  });

  test("is focusable when actionable", async () => {
    const { findByTestId } = render(
      <Card actionable>
        <div></div>
      </Card>
    );

    const cardEl = await findByTestId("jrc-card");

    await userEvent.keyboard("[Tab]");

    expect(cardEl).toHaveFocus();
  });

  test("calls onClick handler when clicked", async () => {
    const handleOnClick = jest.fn();
    const { findByTestId } = render(
      <Card actionable onClick={handleOnClick}>
        <div></div>
      </Card>
    );

    const cardEl = await findByTestId("jrc-card");

    fireEvent.click(cardEl);
    expect(handleOnClick).toHaveBeenCalled();
  });

  test("calls onClick handler when actionable and Enter key is pressed", async () => {
    const handleOnClick = jest.fn();
    render(
      <Card actionable onClick={handleOnClick}>
        <div></div>
      </Card>
    );

    await userEvent.keyboard("[Tab]");
    await userEvent.keyboard("[Enter]");
    expect(handleOnClick).toHaveBeenCalled();
  });
});

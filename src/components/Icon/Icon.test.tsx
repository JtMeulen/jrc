import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Icon from "./Icon";

describe("Icon", () => {
  test("renders without error", () => {
    const { container } = render(<Icon name="success" />);
    expect(container).toMatchSnapshot();
  });

  test("renders with different props", async () => {
    const { container } = render(
      <Icon name="star" size="lg" title="aria text" color="red" />
    );
    expect(container).toMatchSnapshot();
  });
});

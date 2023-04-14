import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Icon from "./Icon";

describe("Icon", () => {
  test("renders without error", () => {
    const { container } = render(<Icon name="check" size="md" />);
    expect(true).toEqual(true);
  });
});

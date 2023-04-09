import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Input from "./Input";

describe("Input", () => {
  test("renders without error", () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });
});

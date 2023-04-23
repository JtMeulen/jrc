import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Input from "./Input";

jest.mock("react", () => {
  return {
    ...jest.requireActual<typeof React>("react"),
    useRef: () => {
      return {
        current: 'randomMockId'
      };
    }
  };
});

describe("Input", () => {
  test("renders without error", () => {
    const { container } = render(<Input name="Input field" type="text" />);
    expect(container).toMatchSnapshot();
  });

  test("renders with label and attributes", () => {
    const { container } = render(
      <Input
        name="Input field"
        type="text"
        label="Input label"
        placeholder="Placeholder text"
        value="I am value"
        required
        disabled
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("sets the value when typing", async () => {
    const { findByTestId, container } = render(
      <Input name="Input field" type="text" />
    );

    await userEvent.keyboard("[Tab]");
    await userEvent.keyboard("foo");

    const cardEl = (await findByTestId("jrc-input")) as HTMLInputElement;

    expect(cardEl).toHaveValue("foo");
  });
});

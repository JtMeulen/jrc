import React from "react";
import { render } from "@testing-library/react";

import Modal from "./Modal";

jest.mock('react', () => {
  return {
    ...jest.requireActual<typeof React>('react'),
    useRef: jest.fn(),
  };
});

describe("Modal", () => {
  test("renders without error", () => {
    const { container } = render(<Modal open>eyo</Modal>);
    expect(true).toEqual(true);
  });
});

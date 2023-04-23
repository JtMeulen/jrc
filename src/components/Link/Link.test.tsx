import React from "react";
import { render } from "@testing-library/react";

import Link from "./Link";

describe("Link", () => {
  // TODO: Add test
  test("renders without error", () => {
    const { container } = render(<Link href="/">Link text</Link>);
    expect(true).toEqual(true);
  });
});

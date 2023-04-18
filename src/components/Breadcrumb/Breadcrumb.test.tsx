import React from "react";
import { render } from "@testing-library/react";

import Breadcrumb from "./Breadcrumb";

describe("Breadcrumb", () => {
    // TODO: add tests for Breadcrumb
  test("renders without error", () => {
    const { container } = render(<Breadcrumb data={[]}/>);
    expect(true).toEqual(true);
  });
});

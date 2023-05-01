import React from "react";
import { render } from "@testing-library/react";

import Breadcrumb from "./Breadcrumb";

describe("Breadcrumb", () => {
    test("renders without error", () => {
      const { container } = render(<Breadcrumb data={[
        { id: "link-1", href: "/", text: "Home" },
        { id: "link-2", href: "/", text: "Menu" },
        { id: "link-3", href: "/", text: "Profile" },
      ] }/>);
      expect(container).toMatchSnapshot();
    });
});

import React from "react";
import { render, fireEvent,waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Notification from "./Notification";

describe("Notification", () => {
  test("renders without error", () => {
    const { container } = render(<Notification type="info" content="Notification content" />);
    expect(container).toMatchSnapshot();
  });

  // TODO: Snapshot for all props?
  test("renders with different props", async () => {
    const { container } = render(
      <Notification type="warning" content="Some content" header="Header here" dismissable />
    );
    expect(container).toMatchSnapshot();
  });

  test("hides notification and calls onDismiss handler when close button clicked", async () => {
    const handleClose = jest.fn();
    const { findByTestId } = render(
      <Notification type="warning" content="Some content" dismissable onClose={handleClose} />
    );

    const closeButtonEl = await findByTestId("jrc-notification-close-button");
    const notificationEl = await findByTestId("jrc-notification");

    fireEvent.click(closeButtonEl);
    expect(handleClose).toHaveBeenCalled();

    // CSS is not loaded correctly in the test setup, so we have to trust the hidden class for now
    await waitFor(() => {
      expect(notificationEl).toHaveClass("notification--hidden");
    });
    expect(notificationEl).toBeInTheDocument();
  });

  test("hides notification and calls onDismiss handler when enter key clicked on close button", async () => {
    const handleClose = jest.fn();
    const { findByTestId } = render(
      <Notification type="warning" content="Some content" dismissable onClose={handleClose} />
    );
    const notificationEl = await findByTestId("jrc-notification");

    await userEvent.keyboard("[Tab]");
    await userEvent.keyboard("[Enter]");
    expect(handleClose).toHaveBeenCalled();

    // CSS is not loaded correctly in the test setup, so we have to trust the hidden class for now
    await waitFor(() => {
      expect(notificationEl).toHaveClass("notification--hidden");
    });
    expect(notificationEl).toBeInTheDocument();
  });
});

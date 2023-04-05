import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Notification from "./Notification";

export default {
  title: "Components/Notification",
  component: Notification
} as Meta<typeof Notification>;

const Template: StoryFn<typeof Notification> = (args) => (
  <Notification {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: "info",
  header: "I am a header",
  content: "I am content",
};

export const Dismissable = Template.bind({});
Dismissable.args = {
  type: "warning",
  header: "I am dismissable",
  content: "I am content",
  dismissable: true,
  onDismiss: () => console.log("Dismiss me"),
};

export const NoHeader = Template.bind({});
NoHeader.args = {
  type: "success",
  content: "I am content",
  dismissable: true,
  onDismiss: () => console.log("Dismiss me"),
};

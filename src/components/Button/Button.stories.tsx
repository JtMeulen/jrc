import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = { label: "Primary button", color: "primary" };

export const Secondary = Template.bind({});
Secondary.args = { label: "Secondary", color: "secondary" };

export const Inverted = Template.bind({});
Inverted.args = { label: "Inverted", color: "inverted" };

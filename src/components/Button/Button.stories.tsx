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

export const Default = Template.bind({});
Default.args = { label: "Default button" };

export const Secondary = Template.bind({});
Secondary.args = { label: "Secondary", size: "large", type: "secondary" };

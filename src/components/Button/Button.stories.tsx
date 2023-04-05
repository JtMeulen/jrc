import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
  <Button
    {...args}
    onClick={(ev) => {
      console.log("onClick: ", ev.target);
    }}
  />
);

export const Primary = Template.bind({});
Primary.args = { label: "Primary", size: "large", type: "primary" };

export const Secondary = Template.bind({});
Secondary.args = { label: "Secondary", size: "large", type: "secondary" };

import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Icon from "./Icon";

export default {
  title: "Components/Icon",
  component: Icon
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => (
  <Icon {...args} />
);

export const Default = Template.bind({});
Default.args = { };

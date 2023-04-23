import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Icon from "./Icon";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: "select",
      options: ["chevron-left", "chevron-right", "error", "info", "star", "success", "warning"],
    },
  },
  args: { name: 'star' },
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {};

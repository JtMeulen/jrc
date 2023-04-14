import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Icon from "./Icon";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: "select",
      options: ["check", "chevron-left", "chevron-right", "star"],
    },
  },
  args: { name: 'star' },
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {};

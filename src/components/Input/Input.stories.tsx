import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const LabelledAndPlaceholder = Template.bind({});
LabelledAndPlaceholder.args = {
  label: "First name",
  placeholder: "Type your name here",
};

export const WithValue = Template.bind({});
WithValue.args = {
  value: 'Joey',
  label: "First name",
  placeholder: "Type your name here",
};

export const NoLabel = Template.bind({});
NoLabel.args = {};

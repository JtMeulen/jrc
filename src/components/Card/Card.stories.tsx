import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => (
  <Card {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};


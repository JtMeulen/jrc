import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: { control: 'inline-radio', options: ['primary', 'secondary']},
    size: { control: 'inline-radio', options: ['small', 'medium', 'large']},
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
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
Secondary.args = { ...Primary.args, type: "secondary", label: "Secondary" };

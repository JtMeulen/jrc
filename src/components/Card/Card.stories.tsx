import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Card from "./Card";
import Button from "../Button/_index";

export default {
  title: "Components/Card",
  component: Card,
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => (
  <Card {...args}>
    <h4 style={{ marginTop: 0 }}>I am a card</h4>
    <p>I can contain any child element</p>
    <Button label="Even JRC Elements"></Button>
  </Card>
);

export const Primary = Template.bind({});
Primary.args = {};

export const WithImage = Template.bind({});
WithImage.args = {
  headerImage: {
    src: "https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: "Image of a sunset",
  },
};

export const Actionable = Template.bind({});
Actionable.args = {
  actionable: true,
  headerImage: {
    src: "https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: "Image of a sunset",
  },
};

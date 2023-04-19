import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Link from "./Link";

export default {
  title: "Components/Link",
  component: Link
} as Meta<typeof Link>;

const Template: StoryFn<typeof Link> = (args) => <Link {...args}>I am a link</Link>;

const defaultProps = {
  href: '/'
}

export const Default = Template.bind({});
Default.args = { ...defaultProps };

export const Inline = Template.bind({});
Inline.args = { ...defaultProps, inline: true, };

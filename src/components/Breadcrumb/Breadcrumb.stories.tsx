import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Breadcrumb from "./Breadcrumb";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
} as Meta<typeof Breadcrumb>;

const breadcrumbData = [
  { id: "link-1", href: "/", text: "Home" },
  { id: "link-2", href: "/", text: "Menu" },
  { id: "link-3", href: "/", text: "Profile" },
];

const Template: StoryFn<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} data={breadcrumbData} />
);

export const Default = Template.bind({});
Default.args = {};

export const ArrowSeparator = Template.bind({});
ArrowSeparator.args = { separator: "→" };

export const ActiveLink = Template.bind({});
ActiveLink.args = { activeId: "link-2" };

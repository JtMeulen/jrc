import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Modal from "./Modal";
import Button from "../Button/Button";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => (
  <Modal {...args}>
    <h1>Hello modal</h1>
    <p>Inner text</p>
  </Modal>
);

export const Default = Template.bind({});
Default.args = { open: false, withBlur: true };

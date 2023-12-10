import React from "react";
import { Select, TSelectProps } from "./Select";
import type { Meta, StoryFn } from "@storybook/react";
import "../../core/styles/global.scss";

export default {
  title: "components/Select",
  component: Select,
  args: {
    options: ["one", "two", "threethreethreethree"],
    onChange: function () {},
    placeholder: "placeholder",
    open: function () {},
    isDisabled: true,
    isOpen: false,
    innerControl: true,
  },
  parameters: {
    controls: {
      exclude: ["onChange", "value", "open", "options"],
    },
  },
} as Meta<TSelectStoryProps>;

type TSelectStoryProps = Pick<
  TSelectProps,
  | "options"
  | "onChange"
  | "placeholder"
  | "isDisabled"
  | "open"
  | "isOpen"
  | "innerControl"
>;

export const SelectStoryTemplate: StoryFn<TSelectStoryProps> = ({
  ...args
}) => <Select {...args} />;

SelectStoryTemplate.storyName = "Select";

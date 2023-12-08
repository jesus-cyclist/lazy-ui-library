import React from "react";
import { Select, TSelectProps } from "./Select";
import type { Meta, StoryFn } from "@storybook/react";
import "../../core/styles/global.scss";

export default {
  title: "components/Select",
  component: Select,
  args: {
    options: ["one", "two", "three"],
    value: "two",
    onChange: () => {},
    placeholder: "placeholder",
    isDisabled: true,
    isOpen: false,
  },
  parameters: {
    controls: {
      exclude: ["onChange", "value", "open"],
    },
  },
} as Meta<TSelectStoryProps>;

type TSelectStoryProps = Pick<
  TSelectProps,
  | "options"
  | "value"
  | "onChange"
  | "placeholder"
  | "isDisabled"
  | "open"
  | "isOpen"
>;

export const SelectStoryTemplate: StoryFn<TSelectStoryProps> = ({
  ...args
}) => <Select {...args} />;

SelectStoryTemplate.storyName = "Select";

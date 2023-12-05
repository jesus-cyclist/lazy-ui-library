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
    placeholder: "",
    isDisabled: true,
  },
  parameters: {
    controls: {
      exclude: ["onChange", "value"],
    },
  },
} as Meta<TSelectProps>;

type SelectStoryProps = Pick<
  TSelectProps,
  "options" | "value" | "onChange" | "placeholder" | "isDisabled"
>;

export const SelectStoryTemplate: StoryFn<SelectStoryProps> = ({ ...args }) => (
  <Select {...args} />
);

SelectStoryTemplate.storyName = "Accordion";

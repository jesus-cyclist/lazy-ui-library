import type { Meta, StoryFn } from "@storybook/react";
import { Input, TInputProps } from "./Input";
import "../../core/styles/global.scss";
import React from "react";

export default {
  title: "components/Input",
  component: Input,
  args: {
    value: "test value",
    placeholder: "placeholder",
    type: "text",
    disabled: false,
  },
  parameters: {
    controls: {
      exclude: ["name", "onChange", "onClear"],
    },
  },
} as Meta<TInputStoryProps>;

type TInputStoryProps = Pick<
  TInputProps,
  | "value"
  | "placeholder"
  | "type"
  | "onChange"
  | "name"
  | "disabled"
  | "onClear"
>;

export const InputStoryTemplate: StoryFn<TInputStoryProps> = ({ ...args }) => (
  <Input {...args} />
);

InputStoryTemplate.storyName = "Input";

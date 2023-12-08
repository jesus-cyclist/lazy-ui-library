import React from "react";
import { Button, TButtonProps } from "./Button";
import type { Meta, StoryFn } from "@storybook/react";
import "../../core/styles/global.scss";

export default {
  title: "components/Button",
  component: Button,
  args: {
    children: "button",
    isDisabled: false,
  },
  parameters: {
    controls: {
      exclude: ["onClick", "type"],
    },
  },
} as Meta<TButtonStoryProps>;

type TButtonStoryProps = Pick<
  TButtonProps,
  "type" | "onClick" | "isDisabled" | "children"
>;

export const ButtonStoryTemplate: StoryFn<TButtonStoryProps> = ({
  ...args
}) => <Button {...args} />;

ButtonStoryTemplate.storyName = "Button";

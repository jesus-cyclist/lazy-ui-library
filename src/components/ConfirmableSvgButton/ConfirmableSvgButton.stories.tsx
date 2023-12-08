import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { ReactComponent as User } from "../../core/assets/icons/user.svg";
import "../../core/styles/global.scss";
import {
  ConfirmableSvgButton,
  TConfirmableSvgButtonProps,
} from "./ConfirmableSvgButton";

export default {
  title: "components/ConfirmableSvgButton",
  component: ConfirmableSvgButton,
  args: {
    withConfirm: true,
    icon: <User />,
    onClick: () => {
      console.log("The function is completed");
    },
  },
  parameters: {
    controls: {
      exclude: ["onClick", "icon"],
    },
  },
} as Meta<TConfirmableSvgButtonStoryProps>;

type TConfirmableSvgButtonStoryProps = Pick<
  TConfirmableSvgButtonProps,
  "withConfirm" | "icon" | "onClick"
>;

export const ConfirmableSvgButtonStoryTemplate: StoryFn<
  TConfirmableSvgButtonStoryProps
> = ({ ...args }) => <ConfirmableSvgButton {...args} />;

ConfirmableSvgButtonStoryTemplate.storyName = "ConfirmableSvgButton";

import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Navigation, TNavigationProps } from "./Navigation";
import "../../core/styles/global.scss";
import { ReactComponent as User } from "../../core/assets/icons/user.svg";

export default {
  title: "components/Navigation",
  component: Navigation,
  args: {
    options: [
      { link: "one", icon: <User />, text: "one" },
      { link: "two", icon: <User />, text: "twp" },
      { link: "three", text: "three" },
    ],
    logo: <User />,
  },
  parameters: {
    controls: {
      exclude: ["logo"],
    },
  },
} as Meta<TNavigationStoryProps>;

type TNavigationStoryProps = Pick<TNavigationProps, "options" | "logo">;

export const NavigationStoryTemplate: StoryFn<TNavigationStoryProps> = ({
  ...args
}) => <Navigation {...args} />;

NavigationStoryTemplate.storyName = "Navigation";

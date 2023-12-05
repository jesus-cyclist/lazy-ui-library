import React from "react";
import { Accordion, AccordionProps } from "./Accordion";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "components/Accordion",
  component: Accordion,
  args: {
    isOpen: false,
    title: "title",
    children: "content",
  },
  parameters: {
    controls: {
      exclude: ["innerControl", "onToggle"],
    },
  },
} as Meta<AccordionStoryProps>;

type AccordionStoryProps = Pick<
  AccordionProps,
  "isOpen" | "title" | "children"
>;

export const AccordionStoryTemplate: StoryFn<AccordionStoryProps> = ({
  ...args
}) => <Accordion {...args} innerControl />;

AccordionStoryTemplate.storyName = "Accordion";

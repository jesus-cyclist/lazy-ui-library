import React from "react";
import { Accordion, TAccordionProps } from "./Accordion";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "components/Accordion",
  component: Accordion,
  args: {
    isOpen: false,
    title: "title",
    children:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, rem, officia fugit itaque alias quia iste incidunt tempora porro velit ratione reiciendis. Quod ipsum, placeat saepe ullam similique deleniti rem!",
  },
  parameters: {
    controls: {
      exclude: ["onToggle", "open", "innerControl"],
    },
  },
} as Meta<TAccordionStoryProps>;

type TAccordionStoryProps = Pick<
  TAccordionProps,
  "isOpen" | "onToggle" | "children" | "title" | "open" | "innerControl"
>;

export const AccordionStoryTemplate: StoryFn<TAccordionStoryProps> = ({
  ...args
}) => <Accordion {...args} />;

AccordionStoryTemplate.storyName = "Accordion";

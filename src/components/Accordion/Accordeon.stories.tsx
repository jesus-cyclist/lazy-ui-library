import React from "react";
import { Accordion, AccordionProps } from "./Accordion";
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
      exclude: ["onToggle", "open"],
    },
  },
} as Meta<TAccordionStoryProps>;

type TAccordionStoryProps = Pick<
  AccordionProps,
  "isOpen" | "onToggle" | "children" | "title" | "open"
>;

export const AccordionStoryTemplate: StoryFn<TAccordionStoryProps> = ({
  ...args
}) => <Accordion {...args} />;

AccordionStoryTemplate.storyName = "Accordion";

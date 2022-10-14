import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Lorem Lorem",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {
  args: {
    children: "Default heading",
    size: "md",
  },
};
export const Small: StoryObj<HeadingProps> = {
  args: {
    children: "Small heading",
    size: "sm",
  },
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    children: "Large heading",
    size: "lg",
  },
};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    size: "md",
    asChild: true,
    children: <h1>Heading with H1 tag</h1>,
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};

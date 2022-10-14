import { ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface HeadingProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild: boolean;
}

export const Heading = ({ size = "md", children, asChild }: HeadingProps) => {
  const WrapperTag = asChild ? Slot : "h2";

  return (
    <WrapperTag
      className={clsx("text-gray-100 font-bold font-sans", {
        "text-lg": size === "sm",
        "text-xl": size === "lg",
        "text-2xl": size === "md",
      })}
    >
      {children}
    </WrapperTag>
  );
};

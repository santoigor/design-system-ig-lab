import { ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

export const Text = ({ size = "md", children, asChild }: TextProps) => {
  const WrapperTag = asChild ? Slot : "span";

  return (
    <WrapperTag
      className={clsx("text-gray-100 font-sans", {
        "text-xs": size === "sm",
        "text-md": size === "lg",
        "text-sm": size === "md",
      })}
    >
      {children}
    </WrapperTag>
  );
};

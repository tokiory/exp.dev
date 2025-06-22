import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

import { cva, type VariantProps } from "class-variance-authority";

interface Props extends VariantProps<typeof textVariants> {
  className?: string;
}

const textVariants = cva("text-base md:text-sm", {
  variants: {
    theme: {
      default: "text-stone-900",
      secondary: "text-stone-500",
    },
  },
  defaultVariants: {
    theme: "default",
  }
});

export const Text: FC<PropsWithChildren<Props>> = ({ children, className, theme }) => (
  <div className={clsx(textVariants({ theme, className }), className)}>
    {children}
  </div>
);

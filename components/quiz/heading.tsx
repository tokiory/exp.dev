import clsx from "clsx";
import type { FC, PropsWithChildren } from "react";

export const Heading: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <div className={clsx("text-2xl font-medium", className)}>{children}</div>
  );
};

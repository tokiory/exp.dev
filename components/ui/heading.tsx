import clsx from "clsx";
import { type FC, type PropsWithChildren } from "react";

interface Props {
  className?: string;
  outlined?: boolean;
}

export const Heading: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  outlined
}) => {
  return (
    <h1
      className={clsx(
        "text-4xl text-center",
        outlined ? "font-medium" : "font-bold",
        className,
      )}
    >
      {children}
    </h1>
  );
};

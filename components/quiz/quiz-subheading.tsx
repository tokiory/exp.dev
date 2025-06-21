import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export const QuizSubheading: FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <h2 className={clsx("text-lg font-middle", className)}>{children}</h2>;
};

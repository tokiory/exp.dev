import { Icon } from "@iconify/react";
import clsx from "clsx";
import { FC } from "react";

interface Props {
  value: string;
  icon: string;
  bold?: boolean;
  small?: boolean;
}
export const QuizReportField: FC<Props> = ({ value, icon, bold, small }) => {
  return (
    <div
      className={clsx(
        "flex w-fit gap-1.5 items-center",
        small && "text-sm",
        bold && "font-medium",
      )}
    >
      <Icon className="text-lg" icon={icon} />
      <span>{value}</span>
    </div>
  );
};

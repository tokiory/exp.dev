import { Icon } from "@iconify/react";
import { FC } from "react";

interface Props {
  value: string;
  icon: string;
}
export const QuizReportField: FC<Props> = ({ value, icon }) => {
  return (
    <div className="flex w-fit gap-1.5 items-center">
      <Icon className="text-lg" icon={icon} />
      <span>{value}</span>
    </div>
  );
};

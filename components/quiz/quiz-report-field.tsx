import { Icon } from "@iconify/react";
import { FC } from "react";

interface Props {
  value: string;
  icon: string;
}
export const QuizReportField: FC<Props> = ({ value, icon }) => {
  return (
    <div className="flex w-fit gap-2 items-center border-b px-2 py-1">
      <Icon icon={icon} />
      <span>{value}</span>
    </div>
  );
};

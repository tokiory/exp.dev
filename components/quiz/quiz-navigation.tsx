import { useQuizContext } from "@/contexts/quiz";
import clsx from "clsx";
import { FC } from "react";
import { QUIZ_PAGES } from "@/data/quiz";
import { useRouter } from "next/navigation";

interface Props {
  total: number;
  className?: string;
}

export const QuizStep: FC<Props> = ({ total, className }) => {
  const router = useRouter();
  const { step } = useQuizContext();

  const handleNavigate = (index: number) => {
    if (index > step) return;
    router.push(QUIZ_PAGES[index]);
  };

  return (
    <div className={clsx("flex gap-4 select-none", className)}>
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          onClick={() => handleNavigate(i)}
          className={`w-20 rounded-md h-1.5 ${i <= step ? "bg-stone-900" : "bg-stone-200"}`}
        ></div>
      ))}
    </div>
  );
};

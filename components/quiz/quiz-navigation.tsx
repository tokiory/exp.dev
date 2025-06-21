"use client";
import { useQuizContext } from "@/contexts/quiz";
import clsx from "clsx";
import { FC } from "react";
import { QUIZ_PAGES } from "@/data/quiz";
import { useRouter } from "next/navigation";

interface Props {
  total: number;
  className?: string;
}

const cacheKeyIndexPairs = ["personal", "work", "skills", "report"] as const;

export const QuizStep: FC<Props> = ({ total, className }) => {
  const router = useRouter();
  const { step, cachedFields } = useQuizContext();

  const handleNavigate = (index: number) => {
    if (
      cachedFields[cacheKeyIndexPairs[index] as keyof typeof cachedFields] ||
      Object.values(cachedFields).every(Boolean)
    )
      router.push(QUIZ_PAGES[index]);
  };

  return (
    <div
      className={clsx(
        "flex w-full justify-center gap-4 select-none",
        className,
      )}
    >
      {Array.from({ length: total }, (_, i) => (
        <div
          onClick={() => handleNavigate(i)}
          className="p-2 cursor-pointer w-full"
          key={i}
        >
          <div
            className={`w-full rounded-md h-1.5 ${i <= step ? "bg-orange-600" : "bg-stone-200"}`}
          />
        </div>
      ))}
    </div>
  );
};

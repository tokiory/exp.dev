"use client";
import { QuizStep } from "@/components/quiz/quiz-navigation";
import { QuizProvider } from "@/contexts/quiz";
import { type FC, type PropsWithChildren } from "react";

const QuizLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="max-w-4xl w-full flex flex-col mx-auto pb-4 pt-6">
      <QuizProvider>
        <QuizStep className="mb-6 mx-auto" total={4} />
        {children}
      </QuizProvider>
    </div>
  );
};

export default QuizLayout;

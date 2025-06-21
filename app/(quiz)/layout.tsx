"use client";
import { QuizStep } from "@/components/quiz/quiz-navigation";
import { QuizProvider } from "@/contexts/quiz";
import { Icon } from "@iconify/react";
import { type FC, type PropsWithChildren } from "react";
import NextLink from "next/link";

const QuizLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="max-w-4xl w-full flex flex-col mx-auto pb-4 pt-6">
      <QuizProvider>
        <div className="mx-auto gap-1 flex items-center">
          <Icon className="text-xl" icon="fluent-emoji:sparkles" />
          <NextLink href="/" className="text-lg font-semibold">
            exp.dev
          </NextLink>
        </div>
        <QuizStep className="mt-4 mb-6 mx-auto" total={4} />
        {children}
      </QuizProvider>
    </div>
  );
};

export default QuizLayout;

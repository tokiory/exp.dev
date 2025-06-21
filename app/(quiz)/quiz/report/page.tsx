"use client";
import { QuizHeading } from "@/components/quiz/quiz-heading";
import { QuizReportField } from "@/components/quiz/quiz-report-field";
import { QuizSubheading } from "@/components/quiz/quiz-subheading";
import { useQuizContext } from "@/contexts/quiz";
import { useEffect } from "react";

export default function ReportPage() {
  const { personal, skills, setStep } = useQuizContext();

  useEffect(() => {
    setStep(3);
  }, [setStep]);

  console.log(skills);
  return (
    <div>
      <QuizHeading>Отчёт</QuizHeading>
      <div className="flex flex-col gap-2 mt-4">
        <QuizReportField
          icon="tabler:user"
          value={`${personal.surname} ${personal.name} ${personal.patronymic}`}
        />
        <div className="flex gap-4">
          <QuizReportField icon="tabler:mail" value={personal.email} />
          <QuizReportField
            icon="tabler:brand-telegram"
            value={personal.telegram}
          />
        </div>

        <QuizSubheading className="mt-4">Навыки</QuizSubheading>
        {JSON.stringify(skills)}
      </div>
    </div>
  );
}

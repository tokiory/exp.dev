"use client";
import { Heading } from "@/components/quiz/heading";
import { QuizReportField } from "@/components/quiz/quiz-report-field";
import { useQuizContext } from "@/contexts/quiz";
import { useEffect } from "react";

export default function ReportPage() {
  const { personal, setStep } = useQuizContext();

  useEffect(() => {
    setStep(3);
  }, [setStep]);

  return (
    <div>
      <Heading>Отчёт</Heading>
      <div className="flex flex-col gap-4 mt-4">
        <QuizReportField icon="tabler:user" value={`${personal.name} ${personal.surname} ${personal.patronymic}`} />
        <div className="flex gap-4">
          <QuizReportField icon="tabler:mail" value={personal.email} />
          <QuizReportField icon="tabler:brand-telegram" value={personal.telegram} />
        </div>
      </div>
    </div>
  );
}

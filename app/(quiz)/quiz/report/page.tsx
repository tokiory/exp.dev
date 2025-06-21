"use client";
import { QuizHeading } from "@/components/quiz/quiz-heading";
import { QuizReportField } from "@/components/quiz/quiz-report-field";
import { QuizSubheading } from "@/components/quiz/quiz-subheading";
import { Button, Label, Text } from "@/components/ui";
import { RangeStep } from "@/components/ui/range-step";
import { useQuizContext } from "@/contexts/quiz";
import { getGradeLabel } from "@/data/grade";
import { getProfessionLabel } from "@/data/profession";
import { getSkillIcon } from "@/data/skills/icon";
import { getSkillName } from "@/data/skills/name";
import { quizCsvAdapter } from "@/lib/quiz";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ReportPage() {
  const router = useRouter();
  const { personal, skills, work, getReport, setStep } = useQuizContext();

  useEffect(() => {
    setStep(3);
  }, [setStep]);

  const handlePrevious = () => {
    router.push("/quiz/skills");
  };

  const handleCsvExport = () => {
    const csvContent = quizCsvAdapter(getReport());
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "quiz_report.csv";
    link.click();
    URL.revokeObjectURL(url);
    link.remove();
  };

  const handleJsonExport = () => {
    const jsonContent = JSON.stringify(getReport(), null, 2);
    const blob = new Blob([jsonContent], {
      type: "application/json;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "quiz_report.json";
    link.click();
    URL.revokeObjectURL(url);
    link.remove();
  };

  const skillItems = Object.entries(skills)
    .sort(([, a], [, b]) => b - a)
    .map(([skill, value]) => (
      <div className="flex flex-col gap-1" key={skill}>
        <Label className="flex gap-1 items-center">
          <Icon className="text-base" icon={getSkillIcon(skill)} />
          {getSkillName(skill)}
        </Label>
        <RangeStep readonly key={skill} value={value} />
      </div>
    ));

  return (
    <div>
      <QuizHeading>Отчёт</QuizHeading>
      <div className="mt-4 flex flex-col gap-2">
        <QuizReportField
          bold
          icon="tabler:user"
          value={`${personal.surname} ${personal.name} ${personal.patronymic} / ${getProfessionLabel(work.position)} (${getGradeLabel(work.grade)})`}
        />
        <div className="flex gap-4">
          <a
            href={`mailto:${personal.email}`}
            target="_blank"
            className="flex items-center gap-1"
          >
            <QuizReportField small icon="tabler:mail" value={personal.email} />
          </a>
          <a target="_blank" href={`https://t.me/${personal.telegram}`}>
            <QuizReportField
              small
              icon="tabler:brand-telegram"
              value={personal.telegram}
            />
          </a>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Button onClick={handleJsonExport} className="flex gap-1 items-center">
          <Icon className="text-base" icon="tabler:download" />
          Экспортировать
        </Button>
        <Button onClick={handleCsvExport} className="flex gap-1 items-center">
          <Icon className="text-base" icon="tabler:table" />
          Сохранить как таблицу
        </Button>
        <Button
          onClick={handlePrevious}
          variant="secondary"
          className="flex gap-1 items-center"
        >
          <Icon className="text-base" icon="tabler:edit" />
          Изменить
        </Button>
      </div>

      {work.growthMessage && (
        <>
          <QuizSubheading className="mt-4">Точки роста</QuizSubheading>
          <Text className="whitespace-pre-line">
            {work.growthMessage.trim()}
          </Text>
        </>
      )}

      {work.specificTasksMessage && (
        <>
          <QuizSubheading className="mt-4">Желаемые задачи</QuizSubheading>
          <Text className="whitespace-pre-line">
            {work.specificTasksMessage.trim()}
          </Text>
        </>
      )}

      <QuizSubheading className="mt-4">Навыки</QuizSubheading>
      {skillItems.length >= 10 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
          {skillItems}
        </div>
      ) : (
        <div className="flex flex-col gap-3 mt-2">{skillItems}</div>
      )}
    </div>
  );
}

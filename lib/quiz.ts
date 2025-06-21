import { Personal } from "@/types/personal.types";
import { Work } from "@/types/work.types";

interface QuizReport {
  date: Date;
  skills: Record<string, number>;
  personal: Personal;
  work: Work;
}

export const quizCsvExporter = (data: QuizReport) => {
  const csv = `Дата,ФИО,Почта,Телеграм,Позиция,Грейд,Точки роста,Скиллы\n`;
  const date = data.date.toISOString();
  const fullName = `${data.personal.name} ${data.personal.surname} ${data.personal.patronymic}`;

  const csvRow =
    `${date},${fullName},${data.personal.email},` +
    `${data.personal.telegram},${data.work.position},${data.work.grade},` +
    `${data.work.growthMessage},${Object.entries(data.skills)
      .map((i) => i.join(" - "))
      .join("; ")}`;

  return csv + csvRow;
};

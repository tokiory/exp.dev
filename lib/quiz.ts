import { Report } from "@/types/report.types";

export const quizCsvAdapter = (data: Report) => {
  const csv = `Дата,ФИО,Почта,Телеграм,Позиция,Грейд,Точки роста,Желаемые задачи,Скиллы\n`;
  const date = data.date.toISOString();
  const fullName = `${data.personal.surname} ${data.personal.name} ${data.personal.patronymic}`;

  const csvRow =
    `${date},${fullName},${data.personal.email},` +
    `${data.personal.telegram},${data.work.position},${data.work.grade},` +
    `"${data.work.growthMessage}","${data.work.specificTasksMessage}",${Object.entries(
      data.skills,
    )
      .map((i) => i.join(" - "))
      .join("; ")}`;

  return csv + csvRow;
};

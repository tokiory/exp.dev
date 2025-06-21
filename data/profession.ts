export const getProfessionLabel = (value: string) => {
  const profession = PROFESSIONS.find((p) => p.value === value);
  return profession ? profession.label : "Неизвестная профессия";
};

export const PROFESSIONS = [
  {
    value: "frontend_developer",
    label: "Frontend-разработчик",
  },
  {
    value: "backend_developer",
    label: "Backend-разработчик",
  },
  {
    value: "fullstack_developer",
    label: "Fullstack-разработчик",
  },
  {
    value: "devops_engineer",
    label: "DevOps-инженер",
  },
  {
    value: "qa_engineer",
    label: "Тестировщик (QA-инженер)",
  },
  {
    value: "ui_ux_designer",
    label: "UI/UX-дизайнер",
  },
  {
    value: "project_manager",
    label: "Менеджер проектов",
  },
  {
    value: "system_administrator",
    label: "Системный администратор",
  },
  {
    value: "data_scientist",
    label: "Data Scientist",
  },
  {
    value: "business_analyst",
    label: "Бизнес-аналитик",
  },
  {
    value: "mobile_developer",
    label: "Мобильный разработчик",
  },
  {
    value: "security_specialist",
    label: "Специалист по информационной безопасности",
  },
  {
    value: "product_manager",
    label: "Продуктовый менеджер",
  },
  {
    value: "game_developer",
    label: "Разработчик игр",
  },
  {
    value: "database_administrator",
    label: "Администратор баз данных",
  },
];

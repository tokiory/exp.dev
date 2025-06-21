export const getGradeLabel = (value: string) => {
  switch (value) {
    case "junior":
      return "Junior";
    case "junior_plus":
      return "Junior+";
    case "middle":
      return "Middle";
    case "middle_plus":
      return "Middle+";
    case "senior":
      return "Senior";
    case "teamlead":
      return "Teamlead";
    case "techlead":
      return "Techlead";
    case "arch":
      return "Архитектор платформы";
    case "principal":
      return "Ведущий инженер";
    default:
      return "Unknown";
  }
};
export const GRADES = [
  {
    value: "junior",
    label: getGradeLabel("junior"),
  },
  {
    value: "junior_plus",
    label: getGradeLabel("junior_plus"),
  },
  {
    value: "middle",
    label: getGradeLabel("middle"),
  },
  {
    value: "middle_plus",
    label: getGradeLabel("middle_plus"),
  },
  {
    value: "senior",
    label: getGradeLabel("senior"),
  },
  {
    value: "teamlead",
    label: getGradeLabel("teamlead"),
  },
];

export const SOFTWARE_GRADES = [
  {
    value: "techlead",
    label: getGradeLabel("techlead"),
  },
  {
    value: "arch",
    label: getGradeLabel("arch"),
  },
  {
    value: "principal",
    label: getGradeLabel("principal"),
  },
];

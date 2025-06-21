export interface Skill {
  name: string;
  value: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export type SkillMap = Record<string, number>;

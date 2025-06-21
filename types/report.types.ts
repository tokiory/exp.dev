import { Personal } from "./personal.types";
import { Work } from "./work.types";

export interface Report {
  date: Date;
  personal: Personal;
  work: Work;
  skills: Record<string, number>;
}

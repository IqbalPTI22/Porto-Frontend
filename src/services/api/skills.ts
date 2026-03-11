import type { Skill } from "../../types/api";
import { requestJson } from "./client";

export const fetchSkills = async (): Promise<Skill[]> => {
  return requestJson<Skill[]>("/skills");
};

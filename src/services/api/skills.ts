import type { Skill } from "../../types/api";
import { requestJson } from "./client";

interface RawSkill {
  id?: number;
  name?: string;
  level?: string;
}

const normalizeSkill = (raw: RawSkill): Skill => {
  if (!raw.name) {
    throw new Error("Skill payload is incomplete");
  }

  return {
    id: raw.id ?? 0,
    name: raw.name,
    level: raw.level,
  };
};

export const fetchSkills = async (): Promise<Skill[]> => {
  const payload = await requestJson<RawSkill[]>("/skills");
  return payload.map((item) => normalizeSkill(item));
};

export const fetchSkillById = async (id: number): Promise<Skill> => {
  const payload = await requestJson<RawSkill>(`/skills/${id}`);
  return normalizeSkill(payload);
};

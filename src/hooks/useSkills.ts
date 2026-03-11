import { useCallback } from "react";
import { fetchSkills } from "../services/api/skills";
import type { Skill } from "../types/api";
import { useApiResource } from "./useApiResource";

export const useSkills = () => {
  const skillsFetcher = useCallback(() => fetchSkills(), []);
  return useApiResource<Skill[]>(skillsFetcher);
};

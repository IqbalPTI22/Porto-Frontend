import { useCallback } from "react";
import { fetchProjectById } from "../services/api/projects";
import type { Project } from "../types/api";
import { useApiResource } from "./useApiResource";

export const useProjectDetail = (projectId: number | null) => {
  const projectFetcher = useCallback(async () => {
    if (projectId === null) {
      throw new Error("Invalid project id");
    }
    return fetchProjectById(projectId);
  }, [projectId]);

  return useApiResource<Project>(projectFetcher);
};

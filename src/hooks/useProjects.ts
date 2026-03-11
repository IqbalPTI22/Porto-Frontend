import { useCallback } from "react";
import { fetchProjects } from "../services/api/projects";
import type { Project } from "../types/api";
import { useApiResource } from "./useApiResource";

export const useProjects = () => {
  const projectsFetcher = useCallback(() => fetchProjects(), []);
  return useApiResource<Project[]>(projectsFetcher);
};

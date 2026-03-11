import type { Project } from "../../types/api";
import { requestJson } from "./client";

interface RawProject {
  id?: number;
  title?: string;
  description?: string;
  imageUrl?: string | null;
  githubUrl?: string | null;
  demoUrl?: string | null;
  projectUrl?: string | null;
}

const normalizeProject = (raw: RawProject): Project => {
  if (!raw.title || !raw.description) {
    throw new Error("Project payload is incomplete");
  }

  return {
    id: raw.id ?? 0,
    title: raw.title,
    description: raw.description,
    imageUrl: raw.imageUrl,
    githubUrl: raw.githubUrl ?? null,
    demoUrl: raw.demoUrl ?? raw.projectUrl ?? null,
  };
};

export const fetchProjects = async (): Promise<Project[]> => {
  const payload = await requestJson<RawProject[]>("/projects");
  return payload.map((item) => normalizeProject(item));
};

export const fetchProjectById = async (id: number): Promise<Project> => {
  const payload = await requestJson<RawProject>(`/projects/${id}`);
  return normalizeProject(payload);
};

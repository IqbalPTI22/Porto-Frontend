import { useCallback } from "react";
import { fetchProfile } from "../services/api/profile";
import type { Profile } from "../types/api";
import { useApiResource } from "./useApiResource";

export const useProfile = () => {
  const profileFetcher = useCallback(() => fetchProfile(), []);
  return useApiResource<Profile>(profileFetcher);
};

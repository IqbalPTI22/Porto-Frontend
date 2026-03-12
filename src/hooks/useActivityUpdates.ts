import { useCallback } from "react";
import { fetchActivityUpdates } from "../services/api/activityUpdates";
import type { ActivityUpdate } from "../types/api";
import { useApiResource } from "./useApiResource";

export const useActivityUpdates = () => {
  const activityUpdatesFetcher = useCallback(() => fetchActivityUpdates(), []);
  return useApiResource<ActivityUpdate[]>(activityUpdatesFetcher);
};

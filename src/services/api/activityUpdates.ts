import type { ActivityUpdate } from "../../types/api";
import { requestJson } from "./client";

interface RawActivityUpdate {
  id?: number;
  mediaType?: "image" | "video";
  mediaUrl?: string;
  title?: string;
  caption?: string;
  activityTime?: string;
  uploadedBy?: string;
  createdAt?: string;
  updatedAt?: string;
}

const normalizeActivityUpdate = (raw: RawActivityUpdate): ActivityUpdate => {
  if (
    !raw.mediaType ||
    !raw.mediaUrl ||
    !raw.title ||
    !raw.caption ||
    !raw.activityTime ||
    !raw.uploadedBy
  ) {
    throw new Error("Activity update payload is incomplete");
  }

  return {
    id: raw.id ?? 0,
    mediaType: raw.mediaType,
    mediaUrl: raw.mediaUrl,
    title: raw.title,
    caption: raw.caption,
    activityTime: raw.activityTime,
    uploadedBy: raw.uploadedBy,
    createdAt: raw.createdAt ?? new Date(0).toISOString(),
    updatedAt: raw.updatedAt ?? new Date(0).toISOString(),
  };
};

export const fetchActivityUpdates = async (): Promise<ActivityUpdate[]> => {
  const payload = await requestJson<RawActivityUpdate[]>("/activity-updates");
  return payload.map((item) => normalizeActivityUpdate(item));
};

export const fetchActivityUpdateById = async (
  id: number,
): Promise<ActivityUpdate> => {
  const payload = await requestJson<RawActivityUpdate>(
    `/activity-updates/${id}`,
  );
  return normalizeActivityUpdate(payload);
};

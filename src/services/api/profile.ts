import type { Profile, SocialLink } from "../../types/api";
import { requestJson } from "./client";

interface RawProfile {
  id?: number;
  name?: string;
  fullName?: string;
  tagline?: string;
  headline?: string;
  avatarUrl?: string | null;
  bio?: string;
  email?: string;
  socialLinks?: Array<{ platform?: string; url?: string }>;
  githubUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
}

const pickSocialLinks = (raw: RawProfile): SocialLink[] => {
  if (Array.isArray(raw.socialLinks) && raw.socialLinks.length > 0) {
    return raw.socialLinks
      .filter((item) => Boolean(item.platform && item.url))
      .map((item) => ({
        platform: item.platform as string,
        url: item.url as string,
      }));
  }

  const generated: SocialLink[] = [];
  if (raw.githubUrl) {
    generated.push({ platform: "GitHub", url: raw.githubUrl });
  }
  if (raw.linkedinUrl) {
    generated.push({ platform: "LinkedIn", url: raw.linkedinUrl });
  }
  if (raw.instagramUrl) {
    generated.push({ platform: "Instagram", url: raw.instagramUrl });
  }
  return generated;
};

const normalizeProfile = (payload: unknown): Profile => {
  const source = Array.isArray(payload) ? payload[0] : payload;
  const raw = (source ?? {}) as RawProfile;

  const name = raw.name ?? raw.fullName;
  const tagline = raw.tagline ?? raw.headline;

  if (!name || !tagline || !raw.bio || !raw.email) {
    throw new Error("Profile payload is incomplete");
  }

  return {
    id: raw.id ?? 0,
    name,
    tagline,
    avatarUrl: raw.avatarUrl,
    bio: raw.bio,
    email: raw.email,
    socialLinks: pickSocialLinks(raw),
  };
};

export const fetchProfile = async (): Promise<Profile> => {
  const payload = await requestJson<unknown>("/profile");
  return normalizeProfile(payload);
};

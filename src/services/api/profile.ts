import type { Profile, SocialLink } from "../../types/api";
import { requestJson } from "./client";

interface RawProfile {
  id?: number;
  fullName?: string;
  headline?: string;
  location?: string;
  avatarUrl?: string | null;
  bio?: string;
  email?: string;
  createdAt?: string;
  updatedAt?: string;

  // Backward compatibility with older payloads.
  name?: string;
  tagline?: string;
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

  const fullName = raw.fullName ?? raw.name;
  const headline = raw.headline ?? raw.tagline;
  const location = raw.location ?? "";

  if (!fullName || !headline || !raw.bio || !raw.email) {
    throw new Error("Profile payload is incomplete");
  }

  return {
    id: raw.id ?? 0,
    fullName,
    headline,
    location,
    avatarUrl: raw.avatarUrl,
    bio: raw.bio,
    email: raw.email,
    createdAt: raw.createdAt ?? new Date(0).toISOString(),
    updatedAt: raw.updatedAt ?? new Date(0).toISOString(),
    socialLinks: pickSocialLinks(raw),
  };
};

export const fetchProfile = async (): Promise<Profile> => {
  const payload = await requestJson<unknown>("/profile");
  return normalizeProfile(payload);
};

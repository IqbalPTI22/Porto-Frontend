export interface SocialLink {
  platform: string;
  url: string;
}

export interface Profile {
  id: number;
  fullName: string;
  headline: string;
  location: string;
  avatarUrl?: string | null;
  bio: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  socialLinks?: SocialLink[];
}

export interface Skill {
  id: number;
  name: string;
  level?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string | null;
  githubUrl?: string | null;
  demoUrl?: string | null;
}

export interface ActivityUpdate {
  id: number;
  mediaType: "image" | "video";
  mediaUrl: string;
  title: string;
  caption: string;
  activityTime: string;
  uploadedBy: string;
  createdAt: string;
  updatedAt: string;
}

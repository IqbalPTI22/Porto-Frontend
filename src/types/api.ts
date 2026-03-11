export interface SocialLink {
  platform: string;
  url: string;
}

export interface Profile {
  id: number;
  name: string;
  tagline: string;
  avatarUrl?: string | null;
  bio: string;
  email: string;
  socialLinks: SocialLink[];
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

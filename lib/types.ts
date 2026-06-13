export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    linkedin: string;
    twitter?: string;
    email: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  category: "ai" | "ml" | "research" | "web" | "mobile";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Publication {
  id: string;
  title: string;
  abstract: string;
  keywords: string[];
  doi?: string;
  pdfUrl?: string;
  date: string;
  category: "thesis" | "journal" | "conference";
  publisher?: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  type: "education" | "internship" | "work" | "research";
  tags: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  feedback: string;
  rating: number;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  image?: string;
}

export interface CommandItem {
  id: string;
  label: string;
  description: string;
  icon: string;
  action: () => void;
  category: "navigation" | "project" | "blog" | "social";
}

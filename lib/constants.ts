import type { SiteConfig, NavItem, Stat } from "./types";

export const siteConfig: SiteConfig = {
  name: "Hadiyan Faikar",
  title: "AI & Machine Learning Engineer",
  description:
    "Portfolio of Hadiyan Faikar — AI & Machine Learning Engineer specializing in machine learning, MLOps, and production-ready model deployment.",
  url: "https://faikar.dev",
  ogImage: "/images/og-image.png",
  links: {
    github: "https://github.com/faikar1998",
    linkedin: "https://linkedin.com/in/faikar1998",
    twitter: "https://twitter.com/faikar1998",
    email: "faikar1998@gmail.com",
  },
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const typingTitles: string[] = [
  "AI Engineer",
  "Machine Learning Engineer",
  "MLOps Practitioner",
  "Python Developer",
];

export const aboutStats: Stat[] = [
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Projects Completed", value: 15, suffix: "+" },
  { label: "Certifications", value: 6 },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.links.github,
    icon: "Github",
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: "Linkedin",
  },
  {
    label: "Twitter",
    href: siteConfig.links.twitter,
    icon: "Twitter",
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.links.email}`,
    icon: "Mail",
  },
];

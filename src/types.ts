export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  techTags: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  category: 'Full Stack' | 'Frontend' | 'Dashboard' | 'E-Commerce';
  featured?: boolean;
  highlights?: string[];
  metrics?: { label: string; value: string };
}

export type SkillCategory = 'Frontend' | 'Backend' | 'Databases' | 'Tools';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: string; // e.g., 'Advanced', 'Proficient'
  percentage: number;
  iconName: string;
  glowColor: string; // e.g. '#6366f1', '#06b6d4', '#a855f7'
  description: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  techStack: string[];
  color: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  role: string;
  institution: string;
  description: string;
  highlights: string[];
  type: 'education' | 'frontend' | 'fullstack' | 'projects' | 'freelance';
}

export interface Statistic {
  label: string;
  value: number;
  suffix: string;
  sublabel: string;
}

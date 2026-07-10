export interface Project {
  id: string;
  name: string;
  date?: string;
  description: string;
  features: string[];
  tech: string[];
  liveLink?: string;
  githubLink?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  affiliation?: string;
  location: string;
  score: string;
  period: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export interface Stat {
  label: string;
  value: string;
}

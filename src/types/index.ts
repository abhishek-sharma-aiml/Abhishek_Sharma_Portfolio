export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  myRole: string;
  architecture: {
    title: string;
    diagramDescription: string;
    steps: { title: string; description: string }[];
  };
  keyFeatures: string[];
  technicalChallenges: {
    challenge: string;
    solution: string;
  }[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  techStackGrouped: {
    category: string;
    tags: string[];
  }[];
  demoUrl?: string;
  githubUrl?: string;
  whatIWouldImprove: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  oneLineOutcome: string;
  category: string;
  thumbnail: string;
  demoVideo?: string;
  tags: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  caseStudy: ProjectCaseStudy;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description?: string;
  bullets: string[];
  skills: string[];
}

export interface StatChip {
  number: string;
  label: string;
}

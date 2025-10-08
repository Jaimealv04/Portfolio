export interface ExperienceContent {
  title: string;
  company: string;
  period: string;
  location: string;
  brief: string;
  fullDescription: string;
  technologies: string[];
}

export interface Experience {
  id: string;
  content: {
    en: ExperienceContent;
    es: ExperienceContent;
  };
  type: 'work' | 'freelance' | 'internship';
  latest?: boolean;
}

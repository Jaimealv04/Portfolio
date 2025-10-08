export interface ProjectContent {
  title: string;
  description: string;
  fullBrief: string;
}

export interface Project {
  id: string;
  content: {
    en: ProjectContent;
    es: ProjectContent;
  };
  technologies: string[];
  imageUrl?: string;
  videoIframe?: string;
  projectUrl?: string;
  githubUrl?: string;
}

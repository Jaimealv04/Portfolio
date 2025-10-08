export interface Project {
  id: string;
  title: string;
  description: string;
  fullBrief: string;
  technologies: string[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
}

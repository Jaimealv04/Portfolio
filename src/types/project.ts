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
  /** Fallback/default image (used as `src`) */
  imageUrl?: string;
  /** Responsive variants for `srcset`, e.g. '/a-640.webp 640w, /a-1024.webp 1024w' */
  imageSrcSet?: string;
  videoIframe?: string;
  projectUrl?: string;
  githubUrl?: string;
}

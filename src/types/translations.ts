export interface Translations {
  header: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    description: string;
  };
  skills: {
    title: string;
  };
  projects: {
    title: string;
    viewDetails: string;
    visitProject: string;
  };
  techStack: {
    title: string;
    description: string;
  };
  floatingActions: {
    downloadResume: string;
    sendEmail: string;
  };
  footer: {
    copyright: string;
    builtWith: string;
  };
}

export type Language = 'en' | 'es';

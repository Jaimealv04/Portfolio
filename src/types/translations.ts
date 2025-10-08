export interface Translations {
  navigation: {
    home: string;
    about: string;
    experience: string;
    techStack: string;
    projects: string;
  };
  header: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    description: string;
    stats: {
      experience: string;
      projects: string;
      learning: string;
    };
  };
  projects: {
    title: string;
    viewDetails: string;
    visitProject: string;
    viewCode: string;
    technologiesUsed: string;
  };
  techStack: {
    title: string;
    description: string;
    categories: {
      backend: string;
      frontend: string;
      database: string;
      cloud: string;
      devops: string;
      security: string;
      'data-engineering': string;
      ai: string;
      architecture: string;
      methodologies: string;
    };
  };
  floatingActions: {
    downloadResume: string;
    sendEmail: string;
  };
  certification: {
    title: string;
    subtitle: string;
    provider: string;
    description: string;
    certificationTitle: string;
    certificationProvider: string;
  };
  experience: {
    title: string;
    description: string;
  };
  footer: {
    copyright: string;
    builtWith: string;
  };
}

export type Language = 'en' | 'es';

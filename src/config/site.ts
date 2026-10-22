/**
 * Site-wide configuration.
 *
 * Everything that is personal data (links, files, figures) lives here so it
 * can be edited without touching any visual component. Translatable copy
 * lives in `src/services/translations.ts`; experiences, projects and
 * technologies live in `src/data/`.
 */
import type { Language, Translations } from '../types/translations';

export type SectionId =
  | 'header'
  | 'about'
  | 'experience'
  | 'techstack'
  | 'certification'
  | 'projects';

export const siteConfig = {
  brand: 'Portfolio',

  contact: {
    email: 'jaimealvarezdeneyra@gmail.com',
    emailSubject: 'Contacto desde Portfolio',
    linkedin:
      'https://www.linkedin.com/in/jaime-%C3%A1lvarez-de-neyra-de-gregorio-719a8624b/',
  },

  /** Downloadable CVs, served from /public */
  cv: {
    es: { href: '/CV-es.pdf', fileName: 'Jaime_Alvarez_CV_ES.pdf', label: 'CV-ES.pdf' },
    en: { href: '/CV-en.pdf', fileName: 'Jaime_Alvarez_CV_EN.pdf', label: 'CV-EN.pdf' },
  } satisfies Record<Language, { href: string; fileName: string; label: string }>,

  /** "About" section figures; `labelKey` points at `t.about.stats` */
  stats: [
    { value: '3+', labelKey: 'experience' },
    { value: '10+', labelKey: 'projects' },
    { value: '∞', labelKey: 'learning' },
  ] satisfies { value: string; labelKey: keyof Translations['about']['stats'] }[],

  certification: {
    url: 'https://www.campusmvp.es/certificados/jaime-alvarez-de-neyra',
    technologies: ['.NET Core', 'C#', 'ASP.NET', 'Entity Framework', 'Web APIs'],
  },

  /** Sections shown in the navigation bar, in order */
  navigation: [
    { id: 'header', labelKey: 'home' },
    { id: 'about', labelKey: 'about' },
    { id: 'experience', labelKey: 'experience' },
    { id: 'techstack', labelKey: 'techStack' },
    { id: 'projects', labelKey: 'projects' },
  ] satisfies { id: SectionId; labelKey: keyof Translations['navigation'] }[],
} as const;

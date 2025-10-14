import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

const seoData: Record<string, SEOData> = {
  en: {
    title: 'Jaime Álvarez De Neyra - Full Stack Developer & Software Architect',
    description:
      'Full Stack Developer specialized in React, Node.js, Python and cloud architectures. Experience in AI, DevOps and scalable application development. Professional portfolio with innovative projects.',
    keywords:
      'Full Stack Developer, React, Node.js, Python, JavaScript, TypeScript, AWS, Docker, Kubernetes, AI, Machine Learning, Portfolio, Jaime Álvarez, Web Developer, Software Architect',
    ogTitle:
      'Jaime Álvarez De Neyra - Full Stack Developer & Software Architect',
    ogDescription:
      'Full Stack Developer specialized in React, Node.js, Python and cloud architectures. Experience in AI, DevOps and scalable application development.',
    twitterTitle:
      'Jaime Álvarez De Neyra - Full Stack Developer & Software Architect',
    twitterDescription:
      'Full Stack Developer specialized in React, Node.js, Python and cloud architectures. Experience in AI, DevOps and scalable application development.',
  },
  es: {
    title:
      'Jaime Álvarez De Neyra - Desarrollador Full Stack & Arquitecto de Software',
    description:
      'Desarrollador Full Stack especializado en React, Node.js, Python y arquitecturas cloud. Experiencia en IA, DevOps y desarrollo de aplicaciones escalables. Portfolio profesional con proyectos innovadores.',
    keywords:
      'Desarrollador Full Stack, React, Node.js, Python, JavaScript, TypeScript, AWS, Docker, Kubernetes, IA, Machine Learning, Portfolio, Jaime Álvarez, Desarrollador Web, Arquitecto Software',
    ogTitle:
      'Jaime Álvarez De Neyra - Desarrollador Full Stack & Arquitecto de Software',
    ogDescription:
      'Desarrollador Full Stack especializado en React, Node.js, Python y arquitecturas cloud. Experiencia en IA, DevOps y desarrollo de aplicaciones escalables.',
    twitterTitle:
      'Jaime Álvarez De Neyra - Desarrollador Full Stack & Arquitecto de Software',
    twitterDescription:
      'Desarrollador Full Stack especializado en React, Node.js, Python y arquitecturas cloud. Experiencia en IA, DevOps y desarrollo de aplicaciones escalables.',
  },
};

export const useSEO = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const currentSEO = seoData[language];

    // Update title
    document.title = currentSEO.title;

    // Update meta description
    updateMetaTag('name', 'description', currentSEO.description);
    updateMetaTag('name', 'keywords', currentSEO.keywords);

    // Update Open Graph tags
    updateMetaTag('property', 'og:title', currentSEO.ogTitle);
    updateMetaTag('property', 'og:description', currentSEO.ogDescription);

    // Update Twitter tags
    updateMetaTag('property', 'twitter:title', currentSEO.twitterTitle);
    updateMetaTag(
      'property',
      'twitter:description',
      currentSEO.twitterDescription
    );

    // Update HTML lang attribute
    document.documentElement.lang = language;

    // Update canonical URL based on language
    updateCanonicalURL(language);
  }, [language]);
};

const updateMetaTag = (attribute: string, value: string, content: string) => {
  let element = document.querySelector(
    `meta[${attribute}="${value}"]`
  ) as HTMLMetaElement;

  if (element) {
    element.content = content;
  } else {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    element.content = content;
    document.head.appendChild(element);
  }
};

const updateCanonicalURL = (language: string) => {
  let canonical = document.querySelector(
    'link[rel="canonical"]'
  ) as HTMLLinkElement;

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }

  const baseURL = 'https://www.jaimealvarezdeneyra.com';
  canonical.href = language === 'en' ? `${baseURL}/en` : baseURL;
};

// Hook for specific page SEO
export const usePageSEO = (pageData: Partial<SEOData>) => {
  const { language } = useLanguage();

  useEffect(() => {
    const currentSEO = seoData[language];
    const pageSEO = { ...currentSEO, ...pageData };

    document.title = pageSEO.title;
    updateMetaTag('name', 'description', pageSEO.description);
    updateMetaTag('property', 'og:title', pageSEO.ogTitle);
    updateMetaTag('property', 'og:description', pageSEO.ogDescription);
    updateMetaTag('property', 'twitter:title', pageSEO.twitterTitle);
    updateMetaTag(
      'property',
      'twitter:description',
      pageSEO.twitterDescription
    );
  }, [language, pageData]);
};

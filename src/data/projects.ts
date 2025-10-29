import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    content: {
      en: {
        title: 'Streakfinder.com',
        description:
          'Full Stack - Generative AI Project: Investment Management Platform & Community Forum',
        fullBrief:
          'Comprehensive investment management platform that combines advanced financial analysis with generative artificial intelligence and an active investor community. The application includes technical analysis tools, portfolio tracking, automatic alerts, and a community forum where users can share strategies and analysis. Integrates AI to generate personalized insights and investment recommendations based on market behavior.',
      },
      es: {
        title: 'Streakfinder.com',
        description:
          'Full Stack - Proyecto de IA Generativa: Plataforma de Gestión de Inversiones & Foro Comunitario',
        fullBrief:
          'Plataforma integral de gestión de inversiones que combina análisis financiero avanzado con inteligencia artificial generativa y una comunidad activa de inversores. La aplicación incluye herramientas de análisis técnico, seguimiento de portafolios, alertas automáticas, y un foro comunitario donde los usuarios pueden compartir estrategias y análisis. Integra IA para generar insights personalizados y recomendaciones de inversión basadas en el comportamiento del mercado.',
      },
    },
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'MongoDB',
      'OpenAI API',
      'TradingView',
      'JWT',
      'WebSockets',
      'Docker',
      'AWS',
    ],
    imageUrl: '/Streakfindercapture.png',
    projectUrl: 'https://streakfinder.com',
  },
//   {
//     id: '2',
//     content: {
//       en: {
//         title: 'Semantic Image Search with AI',
//         description:
//           'Image search system using OpenAI CLIP and natural language processing',
//         fullBrief:
//           'Innovative application that allows searching for images using natural language descriptions without relying on manual tags. Uses OpenAI\'s CLIP model to link images and text in a common vector space, converting both images and descriptions into comparable embeddings. Implements semantic search through cosine similarity on the Flickr8k dataset, allowing queries like "a dog playing in the park" to find relevant images based on the semantic relationship between text and images.',
//       },
//       es: {
//         title: 'Búsqueda Semántica de Imágenes con IA',
//         description:
//           'Sistema de búsqueda de imágenes usando CLIP de OpenAI y procesamiento de lenguaje natural',
//         fullBrief:
//           'Aplicación innovadora que permite buscar imágenes utilizando descripciones en lenguaje natural sin depender de etiquetas manuales. Utiliza el modelo CLIP de OpenAI para vincular imágenes y texto en un espacio vectorial común, convirtiendo tanto imágenes como descripciones en embeddings comparables. Implementa búsqueda semántica mediante similaridad de coseno sobre el dataset Flickr8k, permitiendo consultas como "un perro jugando en el parque" para encontrar imágenes relevantes basándose en la relación semántica entre texto e imágenes.',
//       },
//     },
//     technologies: [
//       'Python',
//       'PyTorch',
//       'CLIP',
//       'OpenAI',
//       'Gradio',
//       'NumPy',
//       'Pandas',
//       'Docker',
//       'Computer Vision',
//       'NLP',
//       'Machine Learning',
//       'Embeddings',
//     ],
//     imageUrl: '/projects/semantic-search.jpg',
//     videoIframe: `<iframe
//   src="https://player.cloudinary.com/embed/?cloud_name=dm70hhhnm&public_id=1733743487208_bqcgg3&profile=cld-default"
//   width="640"
//   height="360"
//   style="height: auto; width: 100%; aspect-ratio: 640 / 360;"
//   allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
//   allowfullscreen
//   frameborder="0"
// ></iframe>`,
//     githubUrl: 'https://lnkd.in/d5B2MZnk',
//   },
  {
    id: '2',
    content: {
      en: {
        title: 'EGO HOUSE Madrid - Integral Management System',
        description:
          'Full Stack - Complete web system for premium tea house with menu management, reservations and admin panel',
        fullBrief:
          'Complete web system developed for EGO HOUSE Madrid, a premium tea house specialized in personalized hookah experiences. The application includes a responsive corporate website with optimized video background, interactive digital menu management system, complete administration panel for real-time metrics, and advanced functionalities for reservation and table management. Features robust full-stack architecture with React/TypeScript frontend and NestJS backend, advanced SEO optimization, JWT authentication system with roles, Cloudinary integration for image optimization, and PWA characteristics. The project includes a personalized interactive quiz for hookah flavor selection, real-time table management system with WebSockets, and a complete administrative panel with executive dashboard and performance metrics.',
      },
      es: {
        title: 'EGO HOUSE Madrid - Sistema de Gestión Integral',
        description:
          'Full Stack - Sistema web completo para tetería premium con gestión de menús, reservas y panel administrativo',
        fullBrief:
          'Sistema web completo desarrollado para EGO HOUSE Madrid, una tetería premium especializada en experiencias de cachimba personalizadas. La aplicación incluye un sitio web corporativo responsive con video background optimizado, sistema de gestión de menús digitales interactivos, panel de administración completo para métricas en tiempo real, y funcionalidades avanzadas para gestión de reservas y mesas. Destaca por su arquitectura full-stack robusta con React/TypeScript en frontend y NestJS en backend, optimización SEO avanzada, sistema de autenticación JWT con roles, integración con Cloudinary para optimización de imágenes, y características de PWA. El proyecto incluye un quiz interactivo personalizado para selección de sabores de cachimba, sistema de gestión de mesas en tiempo real con WebSockets, y un panel administrativo completo con dashboard ejecutivo y métricas de rendimiento.',
      },
    },
    technologies: [
      'React',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Tailwind CSS',
      'Framer Motion',
      'Vite',
      'JWT',
      'WebSockets',
      'Cloudinary',
      'Docker',
      'Vercel',
      'SEO',
      'PWA',
      'Swagger',
    ],
    imageUrl: '/EgohouseCapture.png',
    projectUrl: 'https://egohousebynavs.com',
  },
];

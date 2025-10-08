import { Experience } from '../types/experience';

export const experiences: Experience[] = [
  {
    id: '1',
    type: 'work',
    latest: true,
    content: {
      en: {
        title: 'Technical Lead',
        company: 'ARMS',
        period: '2024 - 2025',
        location: 'Madrid, Spain',
        brief:
          'Technical leadership and mentoring of a multidisciplinary team, driving development best practices, code quality, and pull request reviews. Designing scalable architectures and leading ML integration strategies.',
        fullDescription:
          'Leading technical direction and mentoring multidisciplinary teams, promoting development best practices, code quality standards, and comprehensive pull request reviews. Designing and overseeing scalable and resilient backend and frontend architectures using NestJS, Vue3, and PostgreSQL, aligned with business objectives. Defining machine learning integration strategies and data analysis for continuous improvement of critical collection processes and data-driven decision making. Coordinating adoption and optimization of Google Cloud and Microsoft Azure solutions, incorporating AI tools and cloud services to maximize operational efficiency. Managing technical projects in collaboration with stakeholders and functional areas, ensuring timely deliveries with high quality. Promoting DevOps culture and deployment automation through Docker, CI/CD, and infrastructure as code best practices. Responsible for technological stack evolution, evaluating new technologies, frameworks, and tools to maintain innovation and competitiveness. Designed and developed full-stack applications in TypeScript/Node.js (NestJS), .NET, and Python, applying SOLID principles and clean architecture to ensure code maintainability and scalability. Scaled microservices deployed on Azure and GCP with Vertex AI and Cloud Monitoring support, featuring high availability, load balancing, and continuous monitoring. Built intelligent data pipelines integrating LLMs for critical flow analysis and information validation, reducing financial data analysis time by 40% and improving insight quality for corporate clients. Implemented distributed workflow systems with Redis + BullMQ, enabling multiple tenants to configure custom internal processes, ensuring real-time scalability and fault tolerance. Developed an Azure automation module that processed emails with LLMs/NLP: downloaded, classified, and extracted key information for internal systems, eliminating repetitive tasks and saving ~20 weekly hours for the operations team. Integrated external APIs and corporate ERPs (e.g., SAP Hana) through REST/gRPC and ad-hoc services, optimizing data transfer between systems, ensuring transactional consistency, and reducing human errors. Advanced security architecture: configured encryption in transit and at rest, granular authentication/authorization, log auditing, and disaster recovery plans (DRP).',
        technologies: [
          'TypeScript',
          'Node.js',
          'NestJS',
          '.NET',
          'Python',
          'Vue3',
          'PostgreSQL',
          'Redis',
          'BullMQ',
          'Azure',
          'GCP',
          'Vertex AI',
          'Docker',
          'CI/CD',
          'LLMs',
          'NLP',
          'SAP Hana',
          'gRPC',
          'REST APIs',
        ],
      },
      es: {
        title: 'Technical Lead',
        company: 'ARMS',
        period: '2024 - 2025',
        location: 'Madrid, España',
        brief:
          'Liderazgo técnico y mentoría de un equipo multidisciplinar, impulsando las mejores prácticas de desarrollo, calidad de código y revisión de pull requests. Diseño de arquitecturas escalables y liderazgo de estrategias de integración de ML.',
        fullDescription:
          'Liderazgo técnico y mentoría de un equipo multidisciplinar, impulsando las mejores prácticas de desarrollo, calidad de código y revisión de pull requests. Diseño y supervisión de arquitecturas escalables y resilientes en backend y frontend, utilizando NestJS, Vue3 y PostgreSQL, alineadas con objetivos de negocio. Definición de estrategias de integración de machine learning y análisis de datos para la mejora continua de procesos críticos de cobranza y toma de decisiones basada en datos. Coordinación de la adopción y optimización de soluciones en Google Cloud y Microsoft Azure, incorporando herramientas de inteligencia artificial y servicios cloud para maximizar la eficiencia operativa. Gestión de proyectos técnicos en colaboración con stakeholders y áreas funcionales, garantizando entregas a tiempo y con alta calidad. Promoción de la cultura DevOps y automatización de despliegues mediante Docker, CI/CD y buenas prácticas de infraestructura como código. Responsable de la evolución tecnológica del stack, evaluando nuevas tecnologías, frameworks y herramientas para mantener la innovación y competitividad. Diseñé y desarrollé aplicaciones full-stack en TypeScript/Node.js (NestJS), .NET y Python, aplicando principios SOLID y arquitectura limpia para garantizar mantenibilidad y escalabilidad del código. Escalé microservicios desplegados en Azure y GCP con soporte de Vertex AI y Cloud Monitoring, con alta disponibilidad, balanceo de carga y monitoreo continuo. Construí pipelines de datos inteligentes que integraban LLMs para análisis de flujos críticos y validación de información, reduciendo en un 40% el tiempo de análisis de datos financieros y mejorando la calidad de insights para clientes corporativos. Implementé un sistema de workflows distribuidos con Redis + BullMQ, permitiendo a múltiples tenants configurar procesos internos personalizados, asegurando escalabilidad y tolerancia a fallos en tiempo real. Desarrollé un módulo de automatización en Azure que procesaba correos electrónicos con LLMs/NLP: descargaba, clasificaba y extraía información clave para sistemas internos, eliminando tareas repetitivas y ahorrando ~20 horas semanales al equipo de operaciones. Integré APIs externas y ERP corporativos (ej. SAP Hana) mediante REST/gRPC y servicios ad-hoc, optimizando la transferencia de datos entre sistemas, asegurando consistencia transaccional y reduciendo errores humanos. Arquitectura de seguridad avanzada: configuré cifrado en tránsito y en reposo, autenticación/autorización granular, auditoría de logs y planes de recuperación ante desastres (DRP).',
        technologies: [
          'TypeScript',
          'Node.js',
          'NestJS',
          '.NET',
          'Python',
          'Vue3',
          'PostgreSQL',
          'Redis',
          'BullMQ',
          'Azure',
          'GCP',
          'Vertex AI',
          'Docker',
          'CI/CD',
          'LLMs',
          'NLP',
          'SAP Hana',
          'gRPC',
          'REST APIs',
        ],
      },
    },
  },
  {
    id: '2',
    type: 'internship',
    content: {
      en: {
        title: 'Software Developer Intern',
        company: 'ARMS',
        period: '2023',
        location: 'Madrid, Spain',
        brief:
          '4-month internship focused on developing integration solutions with Outlook and Azure for automated email processing and information extraction.',
        fullDescription:
          'This internship lasted 4 months. As final project, I developed an integration module with Outlook and Azure to access client emails and extract information from sent files. Processed them with OpenAI API and used Named Entity Recognition (NER) to extract important information. This solution automated email processing workflows and improved data extraction accuracy for business processes.',
        technologies: [
          'Microsoft Azure',
          'Outlook API',
          'OpenAI API',
          'NLP',
          'Named Entity Recognition',
          'Python',
          'TypeScript',
          'REST APIs',
        ],
      },
      es: {
        title: 'Desarrollador de Software en Prácticas',
        company: 'ARMS',
        period: '2023',
        location: 'Madrid, España',
        brief:
          'Prácticas de 4 meses enfocadas en el desarrollo de soluciones de integración con Outlook y Azure para procesamiento automatizado de correos y extracción de información.',
        fullDescription:
          'Estas prácticas tuvieron una duración de 4 meses. Como trabajo final realicé un módulo de integración con Outlook y Azure para poder acceder a los correos de los clientes y sacar la información de los archivos enviados. Los procesé con la API de OpenAI y mediante NER (Named Entity Recognition) extraje la información importante. Esta solución automatizó los flujos de procesamiento de correos y mejoró la precisión de extracción de datos para procesos de negocio.',
        technologies: [
          'Microsoft Azure',
          'Outlook API',
          'OpenAI API',
          'NLP',
          'Named Entity Recognition',
          'Python',
          'TypeScript',
          'REST APIs',
        ],
      },
    },
  },
  {
    id: '3',
    type: 'work',
    content: {
      en: {
        title: 'Full Stack Developer | Data Scientist | Deep Learning',
        company: 'ARMS',
        period: '2023 - 2024',
        location: 'Madrid, Spain',
        brief:
          'Development and maintenance of web applications focused on accelerating collection processes. Design and implementation of backend and frontend architectures with NestJS, Vue3, and PostgreSQL.',
        fullDescription:
          'Development and maintenance of web applications focused on accelerating collection processes. Design and implementation of backend and frontend architectures with NestJS, Vue3, and PostgreSQL. Optimization and scalability of APIs and systems, integrating machine learning and data analysis to improve decision making. Implementation of solutions on Google Cloud, leveraging AI tools and cloud computing to optimize processes. Collaboration with cross-functional teams to develop automated and intelligent solutions, improving efficiency and user experience.',
        technologies: [
          'Microsoft Azure',
          'Google Cloud',
          'NestJS',
          'Vue3',
          'PostgreSQL',
          'GraphQL',
          'TypeScript',
          'Node.js',
          'JIRA',
          'Docker',
          'Machine Learning',
        ],
      },
      es: {
        title: 'Programador Full Stack | Data Scientist | Deep Learning',
        company: 'ARMS',
        period: '2023 - 2024',
        location: 'Madrid, España',
        brief:
          'Desarrollo y mantenimiento de aplicaciones web enfocadas en la aceleración de procesos de cobranza. Diseño e implementación de arquitecturas backend y frontend con NestJS, Vue3 y PostgreSQL.',
        fullDescription:
          'Desarrollo y mantenimiento de aplicaciones web enfocadas en la aceleración de procesos de cobranza. Diseño e implementación de arquitecturas backend y frontend con NestJS, Vue3 y PostgreSQL. Optimización y escalabilidad de APIs y sistemas, integrando machine learning y análisis de datos para mejorar la toma de decisiones. Implementación de soluciones en Google Cloud, aprovechando herramientas de IA y computación en la nube para optimizar procesos. Colaboración con equipos multifuncionales para desarrollar soluciones automatizadas e inteligentes, mejorando la eficiencia y la experiencia del usuario.',
        technologies: [
          'Microsoft Azure',
          'Google Cloud',
          'NestJS',
          'Vue3',
          'PostgreSQL',
          'GraphQL',
          'TypeScript',
          'Node.js',
          'JIRA',
          'Docker',
          'Machine Learning',
        ],
      },
    },
  },
];

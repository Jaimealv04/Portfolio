export interface Technology {
  name: string;
  category:
    | 'backend'
    | 'frontend'
    | 'database'
    | 'cloud'
    | 'devops'
    | 'observability'
    | 'security'
    | 'data-engineering'
    | 'ai'
    | 'architecture'
    | 'methodologies';
  color: string;
  icon?: string;
}

export const technologies: Technology[] = [
  // Backend
  { name: 'Python', category: 'backend', color: '#3776ab' },
  { name: 'FastAPI', category: 'backend', color: '#009688' },
  { name: 'Node.js', category: 'backend', color: '#339933' },
  { name: 'NestJS', category: 'backend', color: '#e0234e' },
  { name: '.NET Core', category: 'backend', color: '#512bd4' },
  { name: 'C#', category: 'backend', color: '#239120' },
  { name: 'TypeScript', category: 'backend', color: '#3178c6' },
  { name: 'REST APIs', category: 'backend', color: '#0066cc' },
  { name: 'gRPC', category: 'backend', color: '#3eaf7c' },
  { name: 'GraphQL', category: 'backend', color: '#e535ab' },
  { name: 'Redis', category: 'backend', color: '#000000' },
  { name: 'Cache Management', category: 'backend', color: '#000000' },

  // Frontend
  { name: 'React', category: 'frontend', color: '#61dafb' },
  { name: 'Vue.js', category: 'frontend', color: '#4fc08d' },
  { name: 'Angular', category: 'frontend', color: '#dd0031' },
  { name: 'HTML5', category: 'frontend', color: '#e34f26' },
  { name: 'CSS3', category: 'frontend', color: '#1572b6' },
  { name: 'JavaScript', category: 'frontend', color: '#f7df1e' },
  { name: 'Bootstrap', category: 'frontend', color: '#7952b3' },
  { name: 'Tailwind CSS', category: 'frontend', color: '#06b6d4' },

  // Databases
  { name: 'PostgreSQL', category: 'database', color: '#336791' },
  { name: 'MongoDB', category: 'database', color: '#47a248' },
  { name: 'MySQL', category: 'database', color: '#4479a1' },
  { name: 'Redis', category: 'database', color: '#dc382d' },
  { name: 'OpenSearch', category: 'database', color: '#005eb8' },
  { name: 'Pinecone', category: 'database', color: '#000000' },
  { name: 'pgvector', category: 'database', color: '#5b8cdb' },

  // Cloud
  { name: 'AWS', category: 'cloud', color: '#ff9900' },
  { name: 'Azure', category: 'cloud', color: '#0078d4' },
  { name: 'GCP', category: 'cloud', color: '#4285f4' },
  { name: 'EKS', category: 'cloud', color: '#ff9900' },
  { name: 'S3 / Buckets', category: 'cloud', color: '#3448c5' },
  { name: 'Vertex AI', category: 'cloud', color: '#4285f4' },

  // DevOps
  { name: 'Docker', category: 'devops', color: '#2496ed' },
  { name: 'Kubernetes', category: 'devops', color: '#326ce5' },
  { name: 'GitHub Actions', category: 'devops', color: '#2088ff' },
  { name: 'CI / CD', category: 'devops', color: '#ef7b4d' },

  // Security
  { name: 'OAuth 2.0 / OIDC', category: 'security', color: '#24292e' },

  // Data Engineering
  { name: 'Kafka', category: 'data-engineering', color: '#231f20' },
  { name: 'RabbitMQ', category: 'data-engineering', color: '#ff6600' },
  { name: 'TCP', category: 'data-engineering', color: '#017cee' },
  { name: 'BULLQM', category: 'data-engineering', color: '#017cee' },

  // AI / ML
  { name: 'scikit-learn', category: 'ai', color: '#f89939' },
  { name: 'PyTorch', category: 'ai', color: '#ee4c2c' },
  { name: 'Hugging Face', category: 'ai', color: '#ffcc4d' },
  { name: 'LangChain', category: 'ai', color: '#1c3a3a' },
  { name: 'LangGraph', category: 'ai', color: '#2f6f6f' },
  { name: 'RAG', category: 'ai', color: '#6c5ce7' },
  { name: 'OpenAI', category: 'ai', color: '#412991' },

  // Arquitectura
  { name: 'Microservicios', category: 'architecture', color: '#2d3748' },
  { name: 'Repository Pattern', category: 'architecture', color: '#4a5568' },
  { name: 'Dependency Injection', category: 'architecture', color: '#2b6cb0' },
  { name: 'Multi-tenant', category: 'architecture', color: '#805ad5' },
  { name: 'Event-Driven', category: 'architecture', color: '#6a4c93' },
  { name: 'CQRS/ES', category: 'architecture', color: '#ff6f61' },

  // Metodologías
  { name: 'Agile/Scrum', category: 'methodologies', color: '#38a169' },
  { name: 'Jira', category: 'methodologies', color: '#0052cc' },
  { name: 'Git/GitHub', category: 'methodologies', color: '#f05032' },
  { name: 'Testing', category: 'methodologies', color: '#e53e3e' },
];

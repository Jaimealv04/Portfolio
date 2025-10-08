export interface Technology {
  name: string;
  category:
    | 'backend'
    | 'frontend'
    | 'database'
    | 'cloud'
    | 'ai'
    | 'architecture'
    | 'methodologies';
  icon: string;
  color: string;
}

export const technologies: Technology[] = [
  // Backend
  { name: 'Python', category: 'backend', icon: '🐍', color: '#3776ab' },
  { name: 'FastAPI', category: 'backend', icon: '⚡', color: '#009688' },
  { name: 'Node.js', category: 'backend', icon: '🟢', color: '#339933' },
  { name: 'NestJS', category: 'backend', icon: '🦅', color: '#e0234e' },
  { name: '.NET Core', category: 'backend', icon: '🔷', color: '#512bd4' },
  { name: 'C#', category: 'backend', icon: '🔧', color: '#239120' },
  { name: 'TypeScript', category: 'backend', icon: '📘', color: '#3178c6' },
  { name: 'JWT', category: 'backend', icon: '🔐', color: '#000000' },
  { name: 'WebSockets', category: 'backend', icon: '🔌', color: '#4f4f4f' },
  { name: 'REST APIs', category: 'backend', icon: '🌐', color: '#0066cc' },

  // Frontend
  { name: 'React', category: 'frontend', icon: '⚛️', color: '#61dafb' },
  { name: 'Vue.js', category: 'frontend', icon: '🟢', color: '#4fc08d' },
  { name: 'Angular', category: 'frontend', icon: '🅰️', color: '#dd0031' },
  { name: 'HTML5', category: 'frontend', icon: '🏗️', color: '#e34f26' },
  { name: 'CSS3', category: 'frontend', icon: '🎨', color: '#1572b6' },
  { name: 'JavaScript', category: 'frontend', icon: '�', color: '#f7df1e' },
  { name: 'Bootstrap', category: 'frontend', icon: '📦', color: '#7952b3' },
  { name: 'Tailwind CSS', category: 'frontend', icon: '💨', color: '#06b6d4' },
  { name: 'Vite', category: 'frontend', icon: '⚡', color: '#646cff' },
  { name: 'Zustand', category: 'frontend', icon: '🐻', color: '#2d3748' },
  { name: 'Framer Motion', category: 'frontend', icon: '🎬', color: '#0055ff' },

  // Databases
  { name: 'MongoDB', category: 'database', icon: '🍃', color: '#47a248' },
  { name: 'MySQL', category: 'database', icon: '🐬', color: '#4479a1' },
  { name: 'Oracle', category: 'database', icon: '🔴', color: '#f80000' },
  { name: 'Redis', category: 'database', icon: '🔴', color: '#dc382d' },
  { name: 'Pinecone', category: 'database', icon: '🌲', color: '#000000' },
  { name: 'OpenSearch', category: 'database', icon: '🔍', color: '#005eb8' },

  // Cloud & DevOps
  { name: 'Azure', category: 'cloud', icon: '☁️', color: '#0078d4' },
  { name: 'GCP', category: 'cloud', icon: '🌤️', color: '#4285f4' },
  { name: 'AWS', category: 'cloud', icon: '�', color: '#ff9900' },
  { name: 'Vertex AI', category: 'cloud', icon: '🧠', color: '#4285f4' },
  { name: 'Cloudinary', category: 'cloud', icon: '📷', color: '#3448c5' },
  { name: 'ECS/EKS', category: 'cloud', icon: '📦', color: '#ff9900' },
  { name: 'CloudWatch', category: 'cloud', icon: '📊', color: '#ff9900' },
  { name: 'Docker', category: 'cloud', icon: '🐳', color: '#2496ed' },

  // AI Generativa
  { name: 'LLMs', category: 'ai', icon: '🤖', color: '#ff6b6b' },
  { name: 'NLP', category: 'ai', icon: '💬', color: '#4ecdc4' },
  { name: 'LangChain', category: 'ai', icon: '🔗', color: '#1c3a3a' },
  { name: 'RAG', category: 'ai', icon: '🔄', color: '#6c5ce7' },
  { name: 'OpenAI', category: 'ai', icon: '🌟', color: '#412991' },

  // Arquitectura
  {
    name: 'Microservicios',
    category: 'architecture',
    icon: '�️',
    color: '#2d3748',
  },
  {
    name: 'Repository Pattern',
    category: 'architecture',
    icon: '📚',
    color: '#4a5568',
  },
  {
    name: 'Dependency Injection',
    category: 'architecture',
    icon: '💉',
    color: '#2b6cb0',
  },
  {
    name: 'Multi-tenant',
    category: 'architecture',
    icon: '🏢',
    color: '#805ad5',
  },

  // Metodologías
  {
    name: 'Agile/Scrum',
    category: 'methodologies',
    icon: '�',
    color: '#38a169',
  },
  { name: 'Jira', category: 'methodologies', icon: '📋', color: '#0052cc' },
  {
    name: 'Git/GitHub',
    category: 'methodologies',
    icon: '�',
    color: '#f05032',
  },
  { name: 'Testing', category: 'methodologies', icon: '🧪', color: '#e53e3e' },
];

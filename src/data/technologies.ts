export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'database';
  icon: string;
}

export const technologies: Technology[] = [
  { name: 'React', category: 'frontend', icon: '⚛️' },
  { name: 'TypeScript', category: 'frontend', icon: '📘' },
  { name: 'Tailwind CSS', category: 'frontend', icon: '🎨' },
  { name: 'Vite', category: 'tools', icon: '⚡' },
  { name: 'Framer Motion', category: 'frontend', icon: '🎬' },
  { name: 'Node.js', category: 'backend', icon: '🟢' },
  { name: 'Express', category: 'backend', icon: '🚂' },
  { name: 'MongoDB', category: 'database', icon: '🍃' },
  { name: 'PostgreSQL', category: 'database', icon: '🐘' },
  { name: 'Git', category: 'tools', icon: '🔀' },
  { name: 'Docker', category: 'tools', icon: '🐳' },
  { name: 'AWS', category: 'tools', icon: '☁️' },
];

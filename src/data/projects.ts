import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React and Node.js',
    fullBrief: 'This is a comprehensive e-commerce platform built with modern technologies. It features user authentication, product catalog, shopping cart, payment integration, and an admin panel for managing products and orders. The application is fully responsive and optimized for performance.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    imageUrl: '/projects/ecommerce.jpg',
    projectUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/ecommerce',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates',
    fullBrief: 'A real-time collaborative task management application that allows teams to organize their work efficiently. Features include drag-and-drop task boards, real-time synchronization, team collaboration, file attachments, and deadline tracking. Built with modern web technologies and WebSocket for real-time features.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'WebSocket'],
    imageUrl: '/projects/taskapp.jpg',
    projectUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/taskapp',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Interactive weather forecast with beautiful visualizations',
    fullBrief: 'An elegant weather dashboard that provides detailed weather information and forecasts. The application features interactive charts, multiple location support, weather alerts, and a clean, intuitive interface. It integrates with weather APIs to provide accurate and up-to-date information.',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Weather API', 'CSS Modules'],
    imageUrl: '/projects/weather.jpg',
    projectUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/weather',
  },
];

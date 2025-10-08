import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { technologies } from '../../data/technologies';

const categoryColors = {
  backend:
    'from-green-500/10 to-emerald-500/10 border-green-500/20 text-green-700 dark:text-green-400',
  frontend:
    'from-blue-500/10 to-cyan-500/10 border-blue-500/20 text-blue-700 dark:text-blue-400',
  database:
    'from-orange-500/10 to-red-500/10 border-orange-500/20 text-orange-700 dark:text-orange-400',
  cloud:
    'from-purple-500/10 to-pink-500/10 border-purple-500/20 text-purple-700 dark:text-purple-400',
  devops:
    'from-yellow-500/10 to-amber-500/10 border-yellow-500/20 text-yellow-700 dark:text-yellow-400',
  security:
    'from-red-500/10 to-rose-500/10 border-red-500/20 text-red-700 dark:text-red-400',
  'data-engineering':
    'from-emerald-500/10 to-green-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400',
  ai: 'from-indigo-500/10 to-violet-500/10 border-indigo-500/20 text-indigo-700 dark:text-indigo-400',
  architecture:
    'from-gray-500/10 to-slate-500/10 border-gray-500/20 text-gray-700 dark:text-gray-400',
  methodologies:
    'from-teal-500/10 to-cyan-500/10 border-teal-500/20 text-teal-700 dark:text-teal-400',
};

export const TechStack = () => {
  const { t } = useLanguage();

  // Agrupar tecnologías por categoría
  const groupedTechnologies = technologies.reduce((groups, tech) => {
    const category = tech.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(tech);
    return groups;
  }, {} as Record<string, typeof technologies>);

  // Orden específico de categorías
  const categoryOrder: (keyof typeof groupedTechnologies)[] = [
    'backend',
    'frontend',
    'database',
    'cloud',
    'devops',
    'security',
    'data-engineering',
    'ai',
    'architecture',
    'methodologies',
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-16 mb-16 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
          {t.techStack.title}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t.techStack.description}
        </p>
      </div>

      {/* Tecnologías por categorías */}
      <div className="space-y-12">
        {categoryOrder.map((categoryKey) => {
          const categoryTechs = groupedTechnologies[categoryKey];
          if (!categoryTechs || categoryTechs.length === 0) return null;

          return (
            <div key={categoryKey} className="relative">
              {/* Título de categoría */}
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">
                  {
                    t.techStack.categories[
                      categoryKey as keyof typeof t.techStack.categories
                    ]
                  }
                </h3>
                <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
              </div>

              {/* Grid de tecnologías */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                {categoryTechs.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    className={`glass-card rounded-xl p-4 flex flex-col items-center justify-center gap-3 border ${
                      categoryColors[categoryKey as keyof typeof categoryColors]
                    } hover:shadow-modern-lg transition-all duration-300 cursor-pointer group relative h-28`}
                  >
                    <div className="text-2xl filter drop-shadow-sm">
                      {tech.icon}
                    </div>
                    <div className="text-center">
                      <span className="text-xs font-semibold group-hover:text-foreground transition-colors leading-tight">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

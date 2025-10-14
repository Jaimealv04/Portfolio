import { useState } from 'react';
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
  const [activeCategory, setActiveCategory] = useState<string>('backend');

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

  // Filtrar solo las categorías que tienen tecnologías
  const availableCategories = categoryOrder.filter(
    (category) =>
      groupedTechnologies[category] && groupedTechnologies[category].length > 0
  );

  return (
    <section className="w-full max-w-7xl mx-auto py-16 mb-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
          {t.techStack.title}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t.techStack.description}
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {availableCategories.map((categoryKey) => {
            const isActive = activeCategory === categoryKey;
            return (
              <button
                key={categoryKey}
                onClick={() => setActiveCategory(categoryKey)}
                className={`relative px-4 py-2 md:px-6 md:py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 border hover:scale-105 ${
                  isActive
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25'
                    : 'bg-background/50 backdrop-blur-sm text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
                }`}
              >
                {
                  t.techStack.categories[
                    categoryKey as keyof typeof t.techStack.categories
                  ]
                }
                {isActive && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-20" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Area */}
      <div className="relative min-h-[400px]">
        <div className="w-full">
          {/* Category Title */}
          <div className="mb-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
              {
                t.techStack.categories[
                  activeCategory as keyof typeof t.techStack.categories
                ]
              }
            </h3>
            <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary"></div>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {groupedTechnologies[activeCategory]?.map((tech) => (
              <div
                key={tech.name}
                className={`glass-card rounded-xl p-4 md:p-6 flex flex-col items-center justify-center gap-3 border ${
                  categoryColors[activeCategory as keyof typeof categoryColors]
                } hover:shadow-modern-lg transition-all duration-300 cursor-pointer group relative h-28 md:h-32 hover:scale-105 hover:-translate-y-1`}
              >
                <div className="text-2xl md:text-3xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-200">
                  {tech.icon}
                </div>
                <div className="text-center">
                  <span className="text-xs md:text-sm font-semibold group-hover:text-foreground transition-colors leading-tight">
                    {tech.name}
                  </span>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Empty state */}
          {(!groupedTechnologies[activeCategory] ||
            groupedTechnologies[activeCategory].length === 0) && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No hay tecnologías disponibles en esta categoría
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

import { useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { categoryOrder, technologies, type TechCategory } from '../../data/technologies';
import { Reveal, Section, easeApple, spring } from '../ui';

const groupedTechnologies = technologies.reduce(
  (groups, tech) => {
    (groups[tech.category] ??= []).push(tech);
    return groups;
  },
  {} as Partial<Record<TechCategory, typeof technologies>>
);

const availableCategories = categoryOrder.filter((category) => groupedTechnologies[category]?.length);

export const TechStack = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<TechCategory>(availableCategories[0]);
  const items = groupedTechnologies[activeCategory] ?? [];

  return (
    <Section id="techstack" title={t.techStack.title} description={t.techStack.description}>
      {/* Segmented control */}
      <Reveal className="mb-10 flex justify-center">
        <div
          role="tablist"
          aria-label={t.techStack.title}
          className="no-scrollbar -mx-4 flex max-w-[calc(100%+2rem)] gap-1 overflow-x-auto px-4 sm:mx-0 sm:max-w-full sm:flex-wrap sm:justify-center sm:overflow-visible sm:rounded-[1.25rem] sm:bg-muted/40 sm:p-1"
        >
          {availableCategories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {isActive && (
                  <m.span
                    layoutId="tech-tab"
                    transition={spring}
                    className="absolute inset-0 -z-10 rounded-full bg-surface shadow-soft dark:bg-surface-elevated"
                  />
                )}
                {t.techStack.categories[category]}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div role="tabpanel" className="min-h-[18rem]">
        <AnimatePresence mode="wait">
          <m.ul
            key={activeCategory}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            variants={{ visible: { transition: { staggerChildren: 0.03 } } }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          >
            {items.map((tech) => (
              <m.li
                key={tech.name}
                variants={{
                  hidden: { opacity: 0, y: 12, scale: 0.97 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: easeApple } },
                }}
                className="group flex items-center gap-3 rounded-2xl border hairline bg-surface px-4 py-4 shadow-soft transition-all duration-300 ease-apple hover:-translate-y-0.5 hover:shadow-lifted"
              >
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 shrink-0 rounded-full ring-1 ring-foreground/10 transition-transform dark:ring-foreground/30 duration-300 group-hover:scale-125"
                  style={{ backgroundColor: tech.color }}
                />
                {tech.icon && <span className="text-lg">{tech.icon}</span>}
                <span className="truncate text-[15px] font-medium text-foreground">{tech.name}</span>
              </m.li>
            ))}
          </m.ul>
        </AnimatePresence>

        {items.length === 0 && (
          <p className="py-12 text-center text-lg text-muted-foreground">{t.techStack.empty}</p>
        )}
      </div>
    </Section>
  );
};

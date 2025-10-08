import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { experiences } from '../../data/experiences';
import type { Experience as ExperienceType } from '../../types/experience';

interface ExperienceCardProps {
  experience: ExperienceType;
  isLast: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  isLast,
}) => {
  const { language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const content =
    language === 'es' ? experience.content.es : experience.content.en;

  const getExperienceIcon = (type: string) => {
    switch (type) {
      case 'work':
        return '💼';
      case 'freelance':
        return '🚀';
      case 'internship':
        return '🎓';
      default:
        return '📌';
    }
  };

  const getExperienceColor = (type: string) => {
    switch (type) {
      case 'work':
        return experience.latest
          ? 'from-green-500 to-emerald-500 border-green-500/30'
          : 'from-blue-500 to-cyan-500 border-blue-500/30';
      case 'freelance':
        return 'from-purple-500 to-pink-500 border-purple-500/30';
      case 'internship':
        return 'from-orange-500 to-yellow-500 border-orange-500/30';
      default:
        return 'from-gray-500 to-slate-500 border-gray-500/30';
    }
  };

  return (
    <div className="relative flex items-start group">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-border to-transparent"></div>
      )}

      {/* Timeline dot */}
      <div
        className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${getExperienceColor(
          experience.type
        )} border-2 flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        {experience.latest && (
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 opacity-30"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
        <span className="relative z-10">
          {getExperienceIcon(experience.type)}
        </span>
      </div>

      {/* Content */}
      <div className="ml-6 flex-1 pb-8">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 rounded-2xl border border-border/50 shadow-modern hover:shadow-modern-lg transition-all duration-300 group-hover:border-primary/20"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {content.title}
              </h3>
              <p className="text-primary font-semibold">{content.company}</p>
            </div>
            <div className="flex items-center gap-2">
              {experience.latest && (
                <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-700 dark:text-green-400 text-sm font-medium">
                  {language === 'es' ? 'Más Reciente' : 'Latest'}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">📅 {content.period}</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              📍 {content.location}
            </span>
          </div>

          <p className="text-muted-foreground mb-4 leading-relaxed">
            {content.brief}
          </p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {content.fullDescription}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-wrap gap-2 mb-4">
            {content.technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary hover:bg-primary/20 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <span>
              {isExpanded
                ? language === 'es'
                  ? 'Ver menos'
                  : 'Show less'
                : language === 'es'
                ? 'Ver más'
                : 'Show more'}
            </span>
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              ⌄
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  // Sort experiences: latest first, then by id (descending)
  const sortedExperiences = [...experiences].sort((a, b) => {
    if (a.latest && !b.latest) return -1;
    if (!a.latest && b.latest) return 1;
    return parseInt(b.id) - parseInt(a.id);
  });

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-black text-gradient-primary mb-6">
          {t.experience.title}
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t.experience.description}
        </p>
      </motion.div>

      <div className="relative">
        {sortedExperiences.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            isLast={index === sortedExperiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="w-full max-w-5xl mx-auto px-4 mb-16"
    >
      <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 gradient-primary rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 gradient-accent rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>

        <div className="relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-3 text-gradient-primary">
              {t.about.title}
            </h2>
            <div className="w-20 h-1 gradient-secondary rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
              {t.about.description}
            </p>
          </motion.div>

          {/* Professional Stats */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="text-center p-6 rounded-xl glass border border-border/50 hover:shadow-modern-lg transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-3">
                3+
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-semibold">
                {t.about.stats.experience}
              </div>
            </div>
            <div className="text-center p-6 rounded-xl glass border border-border/50 hover:shadow-modern-lg transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-gradient-secondary mb-3">
                10+
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-semibold">
                {t.about.stats.projects}
              </div>
            </div>
            <div className="text-center p-6 rounded-xl glass border border-border/50 hover:shadow-modern-lg transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-gradient-accent mb-3">
                ∞
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-semibold">
                {t.about.stats.learning}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

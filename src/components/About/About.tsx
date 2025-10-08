import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="w-full max-w-4xl mx-auto px-4 mb-12"
    >
      <div className="backdrop-blur-sm bg-card/50 border border-border rounded-xl p-6 md:p-8 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          {t.about.title}
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {t.about.description}
        </p>
      </div>
    </motion.section>
  );
};

import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export const Header = () => {
  const { t } = useLanguage();

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full py-12 md:py-20 text-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
        {t.header.title}
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
        {t.header.subtitle}
      </p>
    </motion.header>
  );
};

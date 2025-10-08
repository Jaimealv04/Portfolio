import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="w-full border-t border-border mt-20 py-8"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          {t.footer.copyright} - {t.footer.builtWith}
        </p>
      </div>
    </motion.footer>
  );
};

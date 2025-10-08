import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export const FloatingActions = () => {
  const { t, language, setLanguage } = useLanguage();
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const handleDownloadResume = () => {
    // In a real application, this would download the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    link.click();
  };

  const handleSendEmail = () => {
    window.location.href = 'mailto:your.email@example.com';
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Language Toggle */}
      <motion.div
        className="relative"
        onHoverStart={() => setShowTooltip('language')}
        onHoverEnd={() => setShowTooltip(null)}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleLanguage}
          className="p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Toggle language"
        >
          <span className="text-xl font-bold">
            {language === 'en' ? '🇪🇸' : '🇺🇸'}
          </span>
        </motion.button>
        <AnimatePresence>
          {showTooltip === 'language' && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-card border border-border rounded-lg shadow-lg whitespace-nowrap"
            >
              <span className="text-sm font-medium">
                {language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Download Resume */}
      <motion.div
        className="relative"
        onHoverStart={() => setShowTooltip('resume')}
        onHoverEnd={() => setShowTooltip(null)}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleDownloadResume}
          className="p-4 rounded-full bg-card border-2 border-primary text-primary shadow-lg hover:shadow-xl transition-shadow"
          aria-label={t.floatingActions.downloadResume}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </motion.button>
        <AnimatePresence>
          {showTooltip === 'resume' && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-card border border-border rounded-lg shadow-lg whitespace-nowrap"
            >
              <span className="text-sm font-medium">
                {t.floatingActions.downloadResume}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Send Email */}
      <motion.div
        className="relative"
        onHoverStart={() => setShowTooltip('email')}
        onHoverEnd={() => setShowTooltip(null)}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleSendEmail}
          className="p-4 rounded-full bg-card border-2 border-primary text-primary shadow-lg hover:shadow-xl transition-shadow"
          aria-label={t.floatingActions.sendEmail}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </motion.button>
        <AnimatePresence>
          {showTooltip === 'email' && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-card border border-border rounded-lg shadow-lg whitespace-nowrap"
            >
              <span className="text-sm font-medium">
                {t.floatingActions.sendEmail}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

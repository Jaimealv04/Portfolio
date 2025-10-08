import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export const Certification = () => {
  const { t } = useLanguage();

  const handleCertificationClick = () => {
    window.open(
      'https://www.campusmvp.es/certificados/jaime-alvarez-de-neyra',
      '_blank'
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto px-4 mb-16"
    >
      <div className="text-center mb-8">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-display text-3xl md:text-4xl font-bold mb-2 text-gradient-primary"
        >
          {t.certification.title}
        </motion.h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {t.certification.subtitle}
        </p>
      </div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleCertificationClick}
        className="group relative bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-blue-500/20 rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-blue-500/30 backdrop-blur-sm"
      >
        {/* Certificación Badge en la esquina */}
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <span className="text-2xl">🏆</span>
        </div>

        {/* Contenido principal */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Icono y Logo */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-4xl text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              🔷
            </div>
          </div>

          {/* Información de la certificación */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              {t.certification.certificationTitle}
            </h3>
            <p className="text-lg text-muted-foreground mb-3">
              {t.certification.provider} •{' '}
              {t.certification.certificationProvider}
            </p>
            <p className="text-muted-foreground mb-4 max-w-2xl">
              {t.certification.description}
            </p>

            {/* Tecnologías relacionadas */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {[
                '.NET Core',
                'C#',
                'ASP.NET',
                'Entity Framework',
                'Web APIs',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-700 dark:text-blue-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Icono de enlace externo */}
          <div className="flex-shrink-0">
            <div className="w-8 h-8 text-muted-foreground group-hover:text-blue-500 transition-colors duration-300">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Efecto de hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      </motion.div>
    </motion.section>
  );
};

import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export const Header = () => {
  const { t } = useLanguage();

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full py-16 md:py-24 text-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 gradient-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div
          className="absolute top-1/3 right-1/4 w-72 h-72 gradient-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-72 h-72 gradient-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: '4s' }} 
        ></div>
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative z-10"
      >
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
          <span className="inline-block text-gradient-primary animate-glow">
            {t.header.title.split(' ')[0]}
          </span>
          <br />
          <span className="inline-block text-gradient-secondary">
            {t.header.title.split(' ').slice(1).join(' ')}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed font-medium"
        >
          {t.header.subtitle}
        </motion.p>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 flex justify-center space-x-4"
        >
          <div className="w-2 h-2 rounded-full gradient-primary animate-pulse"></div>
          <div
            className="w-2 h-2 rounded-full gradient-secondary animate-pulse"
            style={{ animationDelay: '0.5s' }}
          ></div>
          <div
            className="w-2 h-2 rounded-full gradient-accent animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

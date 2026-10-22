import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { scrollToSection } from '../../hooks/useActiveSection';
import { easeApple } from '../ui';

export const Header = () => {
  const { t } = useLanguage();
  const [firstName, ...rest] = t.header.title.split(' ');

  return (
    <section
      id="header"
      className="relative flex min-h-[88svh] w-full flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-28 text-center"
    >
      {/* Soft ambient glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.08] blur-[120px] dark:bg-accent/[0.14]" />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1, ease: easeApple }}
        className="font-display text-6xl font-bold leading-[0.95] tracking-tightest text-foreground sm:text-7xl md:text-8xl lg:text-9xl"
      >
        {firstName}
        <br />
        <span className="bg-gradient-to-b from-foreground/70 to-foreground/30 bg-clip-text text-transparent">
          {rest.join(' ')}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: easeApple }}
        className="text-balance mt-8 max-w-2xl text-xl font-medium leading-snug text-muted-foreground md:text-2xl"
      >
        {t.header.subtitle}
      </motion.p>

      <motion.button
        onClick={() => scrollToSection('about')}
        aria-label={t.navigation.about}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-5 w-5" strokeWidth={1.75} />
        </motion.span>
      </motion.button>
    </section>
  );
};

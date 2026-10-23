import { useEffect, useState } from 'react';
import { AnimatePresence, m, useScroll, useSpring } from 'framer-motion';
import { Languages, Menu, Moon, Sun, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { siteConfig } from '../../config/site';
import { scrollToSection, useActiveSection } from '../../hooks/useActiveSection';
import { IconButton, easeApple, spring } from '../ui';

const sectionIds = siteConfig.navigation.map((item) => item.id);

export const Navigation = () => {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(sectionIds);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const menuItems = siteConfig.navigation.map((item) => ({
    id: item.id,
    label: t.navigation[item.labelKey],
  }));

  const goTo = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  const solid = isScrolled || isMenuOpen;

  return (
    <header
      className={`animate-fade-in fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        solid ? 'glass border-x-0 border-t-0' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => goTo('header')}
          className="font-display text-[17px] font-semibold tracking-tight text-foreground transition-opacity hover:opacity-70"
        >
          {siteConfig.brand}
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => goTo(item.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-300 ${
                    isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {isActive && (
                    <m.span
                      layoutId="nav-active"
                      transition={spring}
                      className="absolute inset-0 -z-10 rounded-full bg-foreground/[0.07]"
                    />
                  )}
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-1">
          <IconButton
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            aria-label={t.accessibility.toggleLanguage}
            className="w-auto gap-1.5 px-2.5"
          >
            <Languages className="h-4 w-4" strokeWidth={1.75} />
            <span className="text-xs font-semibold uppercase">{language === 'en' ? 'es' : 'en'}</span>
          </IconButton>

          <IconButton onClick={toggleTheme} aria-label={t.accessibility.toggleTheme}>
            <AnimatePresence mode="wait" initial={false}>
              <m.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.25 }}
              >
                {theme === 'light' ? (
                  <Moon className="h-4 w-4" strokeWidth={1.75} />
                ) : (
                  <Sun className="h-4 w-4" strokeWidth={1.75} />
                )}
              </m.span>
            </AnimatePresence>
          </IconButton>

          <IconButton
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? t.accessibility.closeMenu : t.accessibility.openMenu}
            aria-expanded={isMenuOpen}
            className="md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-[18px] w-[18px]" strokeWidth={1.75} />
            ) : (
              <Menu className="h-[18px] w-[18px]" strokeWidth={1.75} />
            )}
          </IconButton>
        </div>
      </nav>

      {/* Mobile menu: expands from the bar, Apple.com style */}
      <AnimatePresence>
        {isMenuOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: easeApple }}
            className="overflow-hidden md:hidden"
          >
            <ul className="px-6 pb-8 pt-2">
              {menuItems.map((item, index) => (
                <m.li
                  key={item.id}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + index * 0.04, duration: 0.3 }}
                >
                  <button
                    onClick={() => goTo(item.id)}
                    className={`w-full py-2.5 text-left font-display text-2xl font-semibold tracking-tight transition-colors ${
                      activeSection === item.id ? 'text-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                </m.li>
              ))}
            </ul>
          </m.div>
        )}
      </AnimatePresence>

      {/* Scroll progress */}
      <m.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent/70"
      />
    </header>
  );
};

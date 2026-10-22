import { useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, FileDown, Linkedin, Mail, Plus } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { siteConfig } from '../../config/site';
import type { Language } from '../../types/translations';
import { easeApple, spring } from '../ui';

const INTRO_TOOLTIP_MS = 5000;

const rowClasses =
  'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[15px] font-medium text-foreground ' +
  'transition-colors duration-200 hover:bg-foreground/[0.06] active:bg-foreground/10';

const RowIcon = ({ children }: { children: ReactNode }) => (
  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
    {children}
  </span>
);

export const FloatingActions = () => {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCVOptions, setShowCVOptions] = useState(false);
  const [showIntroTooltip, setShowIntroTooltip] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntroTooltip(false), INTRO_TOOLTIP_MS);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setIsExpanded(false);
    setShowCVOptions(false);
  };

  // Close on outside click / Escape
  useEffect(() => {
    if (!isExpanded) return;
    const close = () => {
      setIsExpanded(false);
      setShowCVOptions(false);
    };
    const onPointer = (e: PointerEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) close();
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [isExpanded]);

  const toggle = () => {
    setShowIntroTooltip(false);
    if (isExpanded) close();
    else setIsExpanded(true);
  };

  const { contact, cv } = siteConfig;

  return (
    <div ref={containerRef} className="fixed bottom-6 right-4 z-50 sm:right-6">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ duration: 0.25, ease: easeApple }}
            className="glass absolute bottom-full right-0 mb-3 w-64 origin-bottom-right rounded-2xl p-1.5 shadow-float"
          >
            {/* CV with language sub-options */}
            <button
              role="menuitem"
              aria-expanded={showCVOptions}
              onClick={() => setShowCVOptions((open) => !open)}
              className={rowClasses}
            >
              <RowIcon>
                <FileDown className="h-4 w-4" strokeWidth={1.75} />
              </RowIcon>
              <span className="flex-1">{t.floatingActions.downloadResume}</span>
              <ChevronRight
                className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
                  showCVOptions ? 'rotate-90' : ''
                }`}
                strokeWidth={2}
              />
            </button>

            <AnimatePresence initial={false}>
              {showCVOptions && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: easeApple }}
                  className="overflow-hidden"
                >
                  <div className="flex gap-1.5 px-3 pb-2 pt-1">
                    {(Object.keys(cv) as Language[]).map((lang) => (
                      <a
                        key={lang}
                        role="menuitem"
                        href={cv[lang].href}
                        download={cv[lang].fileName}
                        onClick={close}
                        className="flex-1 rounded-lg bg-foreground/[0.06] px-3 py-2 text-center text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        {cv[lang].label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mx-3 my-1 h-px bg-foreground/[0.08]" />

            <a
              role="menuitem"
              href={`mailto:${contact.email}?subject=${encodeURIComponent(contact.emailSubject)}`}
              onClick={close}
              className={rowClasses}
            >
              <RowIcon>
                <Mail className="h-4 w-4" strokeWidth={1.75} />
              </RowIcon>
              {t.floatingActions.sendEmail}
            </a>

            <a
              role="menuitem"
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className={rowClasses}
            >
              <RowIcon>
                <Linkedin className="h-4 w-4" strokeWidth={1.75} />
              </RowIcon>
              {t.floatingActions.linkedin}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Intro tooltip */}
      <AnimatePresence>
        {showIntroTooltip && !isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ delay: 0.8, duration: 0.4, ease: easeApple }}
            className="glass pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-2xl px-4 py-2.5 shadow-lifted"
          >
            <p className="text-sm font-semibold text-foreground">{t.floatingActions.tooltip.title}</p>
            <p className="text-xs text-muted-foreground">{t.floatingActions.tooltip.subtitle}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggle}
        aria-label={isExpanded ? t.floatingActions.close : t.floatingActions.open}
        aria-expanded={isExpanded}
        aria-haspopup="menu"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.92 }}
        transition={spring}
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-float transition-colors duration-300 ${
          isExpanded ? 'glass text-foreground' : 'bg-accent text-accent-foreground'
        }`}
      >
        <motion.span animate={{ rotate: isExpanded ? 45 : 0 }} transition={spring}>
          <Plus className="h-6 w-6" strokeWidth={2} />
        </motion.span>
      </motion.button>
    </div>
  );
};

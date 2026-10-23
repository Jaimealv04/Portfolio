import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { scrollToSection } from '../../hooks/useActiveSection';

// The hero is the LCP element: animate it with CSS so it paints without
// waiting for the animation library, and avoid `filter` (slow on iOS Safari).
export const Header = () => {
  const { t } = useLanguage();
  const [firstName, ...rest] = t.header.title.split(' ');

  return (
    <section
      id="header"
      className="relative flex min-h-[88svh] w-full flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-28 text-center"
    >
      {/* Soft ambient glow — a radial gradient, no blur filter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_35%,rgb(var(--accent)/0.10),transparent_55%)] dark:bg-[radial-gradient(circle_at_50%_35%,rgb(var(--accent)/0.18),transparent_55%)]"
      />

      <h1 className="animate-fade-up font-display text-6xl font-bold leading-[0.95] tracking-tightest text-foreground sm:text-7xl md:text-8xl lg:text-9xl">
        {firstName}
        <br />
        <span className="bg-gradient-to-b from-foreground/70 to-foreground/30 bg-clip-text text-transparent">
          {rest.join(' ')}
        </span>
      </h1>

      <p className="animate-fade-up text-balance mt-8 max-w-2xl text-xl font-medium leading-snug text-muted-foreground [animation-delay:200ms] md:text-2xl">
        {t.header.subtitle}
      </p>

      <button
        onClick={() => scrollToSection('about')}
        aria-label={t.navigation.about}
        className="animate-fade-in absolute bottom-8 flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors [animation-delay:800ms] hover:text-foreground"
      >
        <ChevronDown className="h-5 w-5 animate-nudge" strokeWidth={1.75} />
      </button>
    </section>
  );
};

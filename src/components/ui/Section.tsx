import type { ReactNode } from 'react';
import type { SectionId } from '../../config/site';
import { Reveal } from './Reveal';

const widths = {
  md: 'max-w-4xl',
  lg: 'max-w-5xl',
  xl: 'max-w-6xl',
} as const;

interface SectionProps {
  id: SectionId;
  title?: string;
  description?: string;
  width?: keyof typeof widths;
  children: ReactNode;
}

/** Page section with a consistent rhythm, width and optional heading. */
export const Section = ({ id, title, description, width = 'xl', children }: SectionProps) => (
  <section id={id} className="w-full scroll-mt-20 px-4 py-20 sm:px-6 md:py-28">
    <div className={`mx-auto ${widths[width]}`}>
      {title && (
        <Reveal className="mb-12 text-center md:mb-16">
          <h2 className="text-balance font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="text-balance mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {description}
            </p>
          )}
        </Reveal>
      )}
      {children}
    </div>
  </section>
);

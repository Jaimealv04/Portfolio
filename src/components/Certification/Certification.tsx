import { m } from 'framer-motion';
import { ArrowUpRight, Award } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { siteConfig } from '../../config/site';
import { Reveal, Section, Tag, cardClasses } from '../ui';

export const Certification = () => {
  const { t } = useLanguage();
  const { url, technologies } = siteConfig.certification;

  return (
    <Section id="certification" title={t.certification.title} description={t.certification.subtitle} width="md">
      <Reveal>
        <m.a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.985 }}
          className={`${cardClasses(true)} group relative flex flex-col items-center gap-8 overflow-hidden p-8 text-center md:flex-row md:p-10 md:text-left`}
        >
          {/* Subtle sheen on hover */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-accent to-[#5e5ce6] text-white shadow-lifted transition-transform duration-500 ease-apple group-hover:scale-105">
            <Award className="h-9 w-9" strokeWidth={1.5} />
          </div>

          <div className="relative flex-1">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {t.certification.certificationTitle}
            </h3>
            <p className="mt-1.5 text-[15px] text-muted-foreground">
              {t.certification.provider}{' '}
              <span className="font-medium text-foreground">{t.certification.certificationProvider}</span>
            </p>
            <p className="text-pretty mt-4 leading-relaxed text-muted-foreground">
              {t.certification.description}
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-1.5 md:justify-start">
              {technologies.map((tech) => (
                <Tag key={tech} tone="accent">
                  {tech}
                </Tag>
              ))}
            </div>
          </div>

          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted/50 text-muted-foreground transition-all duration-300 ease-apple group-hover:bg-accent group-hover:text-accent-foreground">
            <ArrowUpRight
              className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </span>
        </m.a>
      </Reveal>
    </Section>
  );
};

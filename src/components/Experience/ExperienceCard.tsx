import { useId, useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import {
  BookOpen,
  Briefcase,
  CalendarDays,
  ChevronDown,
  GraduationCap,
  MapPin,
  Rocket,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Experience } from '../../types/experience';
import { Card, Tag, easeApple } from '../ui';

const typeIcons: Record<Experience['type'], LucideIcon> = {
  work: Briefcase,
  freelance: Rocket,
  internship: GraduationCap,
  education: BookOpen,
};

interface ExperienceCardProps {
  experience: Experience;
  isLast: boolean;
}

export const ExperienceCard = ({ experience, isLast }: ExperienceCardProps) => {
  const { t, language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = useId();

  const content = experience.content[language];
  const Icon = typeIcons[experience.type];
  const points = content.fullDescription
    .split('\n')
    .map((line) => line.replace(/^\s*•\s*/, '').trim())
    .filter(Boolean);

  return (
    <div className="relative flex gap-5 sm:gap-8">
      {/* Timeline rail */}
      <div className="relative flex flex-col items-center">
        <div
          className={`z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border hairline shadow-soft ${
            experience.latest ? 'bg-accent text-accent-foreground' : 'bg-surface text-muted-foreground'
          }`}
        >
          <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
        </div>
        {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-foreground/15 to-foreground/5" />}
      </div>

      <Card className="mb-6 flex-1 p-6 hover:shadow-lifted sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              {content.title}
            </h3>
            <p className="mt-1 text-[15px] font-medium text-accent">{content.company}</p>
          </div>
          {experience.latest && <Tag tone="success">{t.experience.latest}</Tag>}
        </div>

        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" strokeWidth={1.75} />
            {content.period}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />
            {content.location}
          </span>
        </div>

        <p className="text-pretty mt-5 leading-relaxed text-muted-foreground">{content.brief}</p>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <m.ul
              id={detailsId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: easeApple }}
              className="space-y-2.5 overflow-hidden"
            >
              {points.map((point, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground first:mt-5"
                >
                  <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
                  <span>{point}</span>
                </li>
              ))}
            </m.ul>
          )}
        </AnimatePresence>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {content.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <button
          onClick={() => setIsExpanded((expanded) => !expanded)}
          aria-expanded={isExpanded}
          aria-controls={detailsId}
          className="group mt-6 inline-flex items-center gap-1 text-[15px] font-medium text-accent"
        >
          <span className="group-hover:underline">
            {isExpanded ? t.experience.showLess : t.experience.showMore}
          </span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ease-apple ${isExpanded ? 'rotate-180' : ''}`}
            strokeWidth={2}
          />
        </button>
      </Card>
    </div>
  );
};

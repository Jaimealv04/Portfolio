import { useLanguage } from '../../contexts/LanguageContext';
import { experiences } from '../../data/experiences';
import { Reveal, RevealItem, Section } from '../ui';
import { ExperienceCard } from './ExperienceCard';

// Latest first, otherwise preserve the order in the data file
const sortedExperiences = [...experiences].sort(
  (a, b) => Number(Boolean(b.latest)) - Number(Boolean(a.latest))
);

export const Experience = () => {
  const { t } = useLanguage();

  return (
    <Section id="experience" title={t.experience.title} description={t.experience.description} width="md">
      <Reveal staggerChildren={0.1}>
        {sortedExperiences.map((experience, index) => (
          <RevealItem key={experience.id}>
            <ExperienceCard experience={experience} isLast={index === sortedExperiences.length - 1} />
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
};

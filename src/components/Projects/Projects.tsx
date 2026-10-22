import { useLanguage } from '../../contexts/LanguageContext';
import { projects } from '../../data/projects';
import { Reveal, RevealItem, Section } from '../ui';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <Section id="projects" title={t.projects.title} description={t.projects.description}>
      <Reveal
        staggerChildren={0.12}
        className={`grid grid-cols-1 gap-6 md:grid-cols-2 ${projects.length > 2 ? 'lg:grid-cols-3' : ''}`}
      >
        {projects.map((project) => (
          <RevealItem key={project.id} className="h-full">
            <ProjectCard project={project} />
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
};

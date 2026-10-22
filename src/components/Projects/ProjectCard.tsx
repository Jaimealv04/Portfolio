import { useCallback, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Project } from '../../types/project';
import { Tag, cardClasses } from '../ui';
import { ProjectMedia } from './ProjectMedia';
import { ProjectModal } from './ProjectModal';

const MAX_VISIBLE_TECH = 3;

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t, language } = useLanguage();
  const [showDetails, setShowDetails] = useState(false);
  const closeDetails = useCallback(() => setShowDetails(false), []);

  const content = project.content[language];
  const hiddenTechCount = project.technologies.length - MAX_VISIBLE_TECH;

  return (
    <>
      <button
        onClick={() => setShowDetails(true)}
        className={`${cardClasses(true)} group flex h-full w-full flex-col overflow-hidden text-left`}
      >
        <div className="aspect-[16/10] w-full overflow-hidden border-b hairline bg-surface-elevated">
          <ProjectMedia project={project} title={content.title} />
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            {content.title}
          </h3>
          <p className="mt-3 line-clamp-3 flex-1 leading-relaxed text-muted-foreground">
            {content.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, MAX_VISIBLE_TECH).map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
            {hiddenTechCount > 0 && <Tag>+{hiddenTechCount}</Tag>}
          </div>

          <span className="mt-6 inline-flex items-center gap-1 text-[15px] font-medium text-accent">
            {t.projects.viewDetails}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 ease-apple group-hover:translate-x-1"
              strokeWidth={2}
            />
          </span>
        </div>
      </button>

      <ProjectModal project={project} open={showDetails} onClose={closeDetails} />
    </>
  );
};

import { useId } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Project } from '../../types/project';
import { ButtonLink, Modal, Tag } from '../ui';
import { ProjectMedia } from './ProjectMedia';

interface ProjectModalProps {
  project: Project;
  open: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, open, onClose }: ProjectModalProps) => {
  const { t, language } = useLanguage();
  const content = project.content[language];
  const titleId = useId();

  return (
    <Modal open={open} onClose={onClose} closeLabel={t.projects.close} labelledBy={titleId}>
      <div className="aspect-[16/9] w-full overflow-hidden bg-surface-elevated">
        <ProjectMedia project={project} title={content.title} />
      </div>

      <div className="p-6 sm:p-10">
        <h2 id={titleId} className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {content.title}
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">{content.description}</p>

        <p className="text-pretty mt-6 text-[17px] leading-relaxed text-foreground/80">{content.fullBrief}</p>

        <h3 className="mt-10 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {t.projects.technologiesUsed}
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        {(project.projectUrl || project.githubUrl) && (
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            {project.projectUrl && (
              <ButtonLink href={project.projectUrl} target="_blank" rel="noopener noreferrer" size="lg">
                {t.projects.visitProject}
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </ButtonLink>
            )}
            {project.githubUrl && (
              <ButtonLink
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="secondary"
              >
                <Github className="h-4 w-4" strokeWidth={2} />
                {t.projects.viewCode}
              </ButtonLink>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};

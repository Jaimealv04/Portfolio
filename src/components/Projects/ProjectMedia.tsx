import { FolderKanban } from 'lucide-react';
import type { Project } from '../../types/project';

interface ProjectMediaProps {
  project: Project;
  title: string;
  /** `cover` crops to fill the card; `full` shows the whole asset in the modal */
  fit?: 'cover' | 'full';
}

export const ProjectMedia = ({ project, title, fit = 'cover' }: ProjectMediaProps) => {
  if (project.videoIframe) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: project.videoIframe }}
        className="h-full w-full [&>iframe]:h-full [&>iframe]:w-full"
      />
    );
  }

  if (project.imageUrl) {
    return (
      <img
        src={project.imageUrl}
        alt={title}
        loading="lazy"
        className={
          fit === 'cover'
            ? 'h-full w-full object-cover object-top transition-transform duration-700 ease-apple group-hover:scale-[1.04]'
            : 'h-auto w-full'
        }
      />
    );
  }

  return (
    <div className="flex h-full min-h-48 w-full items-center justify-center bg-gradient-to-br from-accent/10 to-transparent">
      <FolderKanban className="h-12 w-12 text-accent/60" strokeWidth={1.25} />
    </div>
  );
};

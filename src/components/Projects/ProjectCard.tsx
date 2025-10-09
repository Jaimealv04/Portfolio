import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t, language } = useLanguage();
  const [showDetails, setShowDetails] = useState(false);

  // Get the content in the current language
  const projectContent = project.content[language];

  return (
    <>
      <div
        className="group relative glass-card rounded-2xl overflow-hidden shadow-modern hover:shadow-modern-lg transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/20 h-[500px] flex flex-col"
        onClick={() => setShowDetails(true)}
      >
        {/* Project Image/Video */}
        <div className="relative w-full h-48 flex items-center justify-center overflow-hidden">
          {project.videoIframe ? (
            <div className="w-full h-full">
              <div
                dangerouslySetInnerHTML={{ __html: project.videoIframe }}
                className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:object-cover"
              />
            </div>
          ) : project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={projectContent.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
              <div className="relative z-10 text-6xl filter drop-shadow-lg">
                {projectContent.title.includes('Streakfinder')
                  ? '📈'
                  : projectContent.title.includes('Búsqueda Semántica') ||
                    projectContent.title.includes('Semantic')
                  ? '🔍'
                  : projectContent.title.includes('EGO HOUSE') ||
                    projectContent.title.includes('Ego House')
                  ? '🏢'
                  : projectContent.title.includes('Task')
                  ? '✅'
                  : projectContent.title.includes('Weather')
                  ? '🌤️'
                  : '💼'}
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="relative p-6 flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
            {projectContent.title}
          </h3>

          <p className="text-muted-foreground mb-4 flex-1 leading-relaxed text-sm line-clamp-4">
            {projectContent.description}
          </p>

          {/* Technology Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground border border-muted/30">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Action Button */}
          <div className="flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-300 group-hover:translate-x-1 mt-auto">
            <span>{t.projects.viewDetails}</span>
            <span className="ml-2 text-lg">→</span>
          </div>
        </div>
      </div>

      {showDetails && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowDetails(false)}
        >
          <div
            className="glass-card border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-modern-lg"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Header with gradient background */}
              <div className="relative bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-8 border-b border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                      {projectContent.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      {projectContent.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-muted-foreground hover:text-foreground text-xl transition-colors backdrop-blur-sm"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 overflow-y-auto max-h-[60vh]">
                {/* Project Image or Video */}
                <div className="flex justify-center mb-8">
                  {project.videoIframe ? (
                    <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-modern">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: project.videoIframe,
                        }}
                      />
                    </div>
                  ) : project.imageUrl ? (
                    <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-modern">
                      <img
                        src={project.imageUrl}
                        alt={projectContent.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-5xl shadow-modern">
                      {projectContent.title.includes('Streakfinder')
                        ? '📈'
                        : projectContent.title.includes('Búsqueda Semántica') ||
                          projectContent.title.includes('Semantic')
                        ? '🔍'
                        : projectContent.title.includes('EGO HOUSE') ||
                          projectContent.title.includes('Ego House')
                        ? '🏢'
                        : projectContent.title.includes('Task')
                        ? '✅'
                        : projectContent.title.includes('Weather')
                        ? '🌤️'
                        : '💼'}
                    </div>
                  )}
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  {projectContent.fullBrief}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center">
                    {t.projects.technologiesUsed}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm font-medium rounded-xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-200 text-center"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary text-center py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:scale-105 transition-transform duration-200"
                    >
                      <span>{t.projects.visitProject}</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-secondary text-center py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:scale-105 transition-transform duration-200"
                    >
                      <span>{t.projects.viewCode}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

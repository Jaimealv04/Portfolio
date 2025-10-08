import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useLanguage();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-sm bg-card/50 border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
        onClick={() => setShowDetails(true)}
      >
        {project.imageUrl && (
          <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
            <span className="text-4xl">📁</span>
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs md:text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 text-xs md:text-sm rounded-full bg-muted text-muted-foreground">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          <button className="text-primary hover:text-primary/80 font-medium transition-colors">
            {t.projects.viewDetails} →
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowDetails(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card border border-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {project.title}
                  </h2>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="text-muted-foreground hover:text-foreground text-2xl leading-none"
                  >
                    ×
                  </button>
                </div>
                
                {project.imageUrl && (
                  <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-lg mb-6 flex items-center justify-center">
                    <span className="text-6xl">📁</span>
                  </div>
                )}

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.fullBrief}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center"
                    >
                      {t.projects.visitProject}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-center"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

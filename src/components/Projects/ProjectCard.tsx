import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group relative glass-card rounded-2xl overflow-hidden shadow-modern hover:shadow-modern-lg transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/20 h-[500px] flex flex-col"
        whileHover={{ y: -5 }}
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
            <motion.img
              src={project.imageUrl}
              alt={projectContent.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
              <motion.div
                className="relative z-10 text-6xl filter drop-shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="relative p-6 flex-1 flex flex-col">
          <motion.h3
            className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {projectContent.title}
          </motion.h3>

          <motion.p
            className="text-muted-foreground mb-4 flex-1 leading-relaxed text-sm line-clamp-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {projectContent.description}
          </motion.p>

          {/* Technology Pills */}
          <motion.div
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {project.technologies.slice(0, 3).map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground border border-muted/30">
                +{project.technologies.length - 3}
              </span>
            )}
          </motion.div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-300 group-hover:translate-x-1 mt-auto"
          >
            <span>{t.projects.viewDetails}</span>
            <motion.span
              className="ml-2 text-lg"
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              →
            </motion.span>
          </motion.div>
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
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="glass-card border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-modern-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Header with gradient background */}
                <div className="relative bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-8 border-b border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                  <div className="relative z-10 flex justify-between items-start">
                    <div>
                      <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-3xl md:text-4xl font-bold text-foreground mb-2"
                      >
                        {projectContent.title}
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                      >
                        {projectContent.description}
                      </motion.p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setShowDetails(false)}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-muted-foreground hover:text-foreground text-xl transition-colors backdrop-blur-sm"
                    >
                      ×
                    </motion.button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 overflow-y-auto max-h-[60vh]">
                  {/* Project Image or Video */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center mb-8"
                  >
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
                          : projectContent.title.includes(
                              'Búsqueda Semántica'
                            ) || projectContent.title.includes('Semantic')
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
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-muted-foreground mb-8 leading-relaxed text-lg"
                  >
                    {projectContent.fullBrief}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-8"
                  >
                    <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center">
                      {t.projects.technologiesUsed}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {project.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 text-sm font-medium rounded-xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-200 text-center"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    {project.projectUrl && (
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-primary text-center py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2"
                      >
                        <span>{t.projects.visitProject}</span>
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-secondary text-center py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2"
                      >
                        <span>{t.projects.viewCode}</span>
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

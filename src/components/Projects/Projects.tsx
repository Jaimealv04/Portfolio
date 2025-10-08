import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-6xl mx-auto px-4 mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">
        {t.projects.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.section>
  );
};

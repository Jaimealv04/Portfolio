import { useLanguage } from '../../contexts/LanguageContext';
import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full max-w-7xl mx-auto px-4 mb-16 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-muted/20 via-transparent to-muted/20 rounded-3xl"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
            {t.projects.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explora mis proyectos más destacados donde combino tecnología
            moderna con soluciones innovadoras
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

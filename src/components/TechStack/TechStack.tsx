import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { technologies } from '../../data/technologies';

const categoryColors = {
  frontend: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
  backend: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
  tools: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
  database: 'from-orange-500/20 to-red-500/20 border-orange-500/30',
};

export const TechStack = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-6xl mx-auto px-4 mb-12"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary">
          {t.techStack.title}
        </h2>
        <p className="text-muted-foreground">
          {t.techStack.description}
        </p>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.1
            }
          }
        }}
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={{
              hidden: { 
                opacity: 0, 
                y: 20,
                rotate: -10
              },
              visible: { 
                opacity: 1, 
                y: 0,
                rotate: 0,
                transition: {
                  type: 'spring',
                  stiffness: 100,
                  damping: 10
                }
              }
            }}
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            className={`backdrop-blur-sm bg-gradient-to-br ${categoryColors[tech.category]} border rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl transition-shadow`}
          >
            <motion.span 
              className="text-3xl md:text-4xl"
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                delay: index * 0.1,
              }}
            >
              {tech.icon}
            </motion.span>
            <span className="text-xs md:text-sm font-medium text-center text-foreground">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

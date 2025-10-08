import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const skills = ['React', 'TypeScript', 'Vite', 'Framer Motion', 'Tailwind CSS', 'Node.js'];

export const Skills = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="w-full max-w-4xl mx-auto px-4 mb-12"
    >
      <div className="backdrop-blur-sm bg-card/50 border border-border rounded-xl p-6 md:p-8 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">
          {t.skills.title}
        </h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.7,
                staggerChildren: 0.1
              }
            }
          }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              className="backdrop-blur-sm bg-primary/10 border border-primary/30 rounded-lg p-4 text-center cursor-pointer transition-all"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary))' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-medium text-sm md:text-base">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

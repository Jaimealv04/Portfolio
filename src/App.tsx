import { motion } from 'framer-motion'
import './App.css'

function App() {
  return (
    <div className="app">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="header"
      >
        <h1>Welcome to My Portfolio</h1>
        <p>Showcasing my personal knowledge and ongoing career</p>
      </motion.header>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="main"
      >
        <motion.section
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="section"
        >
          <h2>About Me</h2>
          <p>
            This is a modern portfolio built with Vite, React, TypeScript, and Framer Motion.
            It showcases all my personal knowledge and skills.
          </p>
        </motion.section>

        <motion.section
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="section"
        >
          <h2>Skills</h2>
          <motion.div
            className="skills-grid"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.9,
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {['React', 'TypeScript', 'Vite', 'Framer Motion'].map((skill) => (
              <motion.div
                key={skill}
                className="skill-card"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </motion.main>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="footer"
      >
        <p>© 2024 My Portfolio - Built with ❤️ using React & Framer Motion</p>
      </motion.footer>
    </div>
  )
}

export default App

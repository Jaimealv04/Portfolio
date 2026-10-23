import { LazyMotion, MotionConfig } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navigation } from './components/Navigation/Navigation';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { TechStack } from './components/TechStack/TechStack';
import { Certification } from './components/Certification/Certification';
import { Footer } from './components/Footer/Footer';
import { FloatingActions } from './components/FloatingActions/FloatingActions';
import { useSEO } from './hooks/useSEO';

const loadMotionFeatures = () => import('./lib/motionFeatures').then((mod) => mod.default);

function AppContent() {
  useSEO();

  return (
    <div className="relative min-h-screen w-full overflow-x-clip">
      <Navigation />
      <FloatingActions />

      <main className="flex w-full flex-col items-center">
        <Header />
        <About />
        <Experience />
        <TechStack />
        <Certification />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {/* Respect the OS "reduce motion" setting for every animation */}
        <LazyMotion features={loadMotionFeatures} strict>
          <MotionConfig reducedMotion="user">
            <AppContent />
          </MotionConfig>
        </LazyMotion>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

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

function AppContent() {
  // Initialize SEO
  useSEO();

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 gradient-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 gradient-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-72 h-72 gradient-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"
          style={{ animationDelay: '4s' }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <Navigation />
      <FloatingActions />

      <main className="w-full flex flex-col items-center pt-20 relative z-10">
        <section id="header" className="w-full flex justify-center py-8">
          <Header />
        </section>

        <section id="about" className="w-full flex justify-center py-12">
          <About />
        </section>

        <section id="experience" className="w-full flex justify-center py-12">
          <Experience />
        </section>

        <section id="techstack" className="w-full flex justify-center py-12">
          <TechStack />
        </section>

        <section
          id="certification"
          className="w-full flex justify-center py-12"
        >
          <Certification />
        </section>

        <section id="projects" className="w-full flex justify-center py-12">
          <Projects />
        </section>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

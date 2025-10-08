import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { TechStack } from './components/TechStack/TechStack';
import { Footer } from './components/Footer/Footer';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';
import { FloatingActions } from './components/FloatingActions/FloatingActions';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen w-full">
          <ThemeToggle />
          <FloatingActions />
          
          <main className="w-full flex flex-col items-center py-8">
            <Header />
            <About />
            <Skills />
            <TechStack />
            <Projects />
          </main>
          
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import CustomCursor from './components/CustomCursor';
import InitialLoader from './components/InitialLoader';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function MainApp() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Track active section for navbar highlighting
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'services', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`relative min-h-screen transition-colors duration-300 overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-300 ${
        isDark ? 'bg-[#09090b] text-zinc-100' : 'bg-[#f9fafb] text-zinc-900'
      }`}
    >
      {/* Initial Animated Tech Intro Loader */}
      <AnimatePresence>
        {isLoading && <InitialLoader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Interactive Custom Cursor Follower */}
      <CustomCursor />

      {/* 3D Cosmic Background with strictly non-blue particles & geometry */}
      <Background3D />

      {/* Floating Glassmorphic Navbar with Theme Switcher */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections - Clean Semantic Hierarchy */}
      <main id="main-content" className="relative z-10 flex flex-col">
        {/* Hero Section with 3D Hologram Developer Portrait & Three.js 3D Visual */}
        <Hero />

        {/* About Mehran Ali with Semantic Sections, Profile Article & Metric Figures */}
        <About />

        {/* Interactive Skills Arsenal with Category Filters & Tech Articles */}
        <Skills />

        {/* Featured Projects with 3D Tilt Articles & Live Previews */}
        <Projects />

        {/* Services Section with 4 Service Articles */}
        <Services />

        {/* Experience & Journey Milestones Timeline */}
        <Experience />

        {/* Contact Section with Highly Visible Form & Direct Channels */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

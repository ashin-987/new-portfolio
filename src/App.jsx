import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import useTheme from './hooks/useTheme';
import './App.css';

function App() {
  const { isDark, toggleTheme } = useTheme();
  const [commandPaletteOpen, setCommandPaletteOpen] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-neutral-950 text-white' : 'bg-neutral-50 text-black'} transition-colors duration-300`}>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
      />

      <Navigation 
        isDark={isDark} 
        toggleTheme={toggleTheme}
        openCommandPalette={() => setCommandPaletteOpen(true)}
      />
      
      <main>
        <Hero isDark={isDark} />
        <Projects isDark={isDark} />
        <Skills isDark={isDark} />
        <Experience isDark={isDark} />
        <Contact isDark={isDark} />
      </main>

      <Footer isDark={isDark} />

      <CommandPalette 
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        isDark={isDark}
      />
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import './App.css';

// Layout Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Section Components
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

// Feature Components
import CommandPalette from './components/CommandPalette';
import MobileMenu from './components/MobileMenu';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : systemPrefersDark;
    setIsDark(shouldBeDark);
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };

  // Command palette keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setShowCommandPalette(true);
      }
      if (e.key === 'Escape') {
        setShowCommandPalette(false);
        setShowMobileMenu(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
      {/* Skip to content link (accessibility) */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      {/* Navigation */}
      <Navigation 
        isDark={isDark} 
        toggleTheme={toggleTheme}
        onCommandPaletteOpen={() => setShowCommandPalette(true)}
        onMobileMenuToggle={() => setShowMobileMenu(!showMobileMenu)}
      />

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={showMobileMenu}
        onClose={() => setShowMobileMenu(false)}
        isDark={isDark}
      />

      {/* Command Palette */}
      <CommandPalette 
        isOpen={showCommandPalette}
        onClose={() => setShowCommandPalette(false)}
        isDark={isDark}
      />

      {/* Main Content */}
      <main id="main">
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Projects isDark={isDark} />
        <Skills isDark={isDark} />
        <Experience isDark={isDark} />
        <Contact isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;

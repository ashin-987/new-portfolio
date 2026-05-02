import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaTerminal, FaBars } from 'react-icons/fa';

export default function Navigation({ isDark, toggleTheme, onCommandPaletteOpen, onMobileMenuToggle }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  // Handle scroll to show/hide nav background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="text-2xl font-black hover:text-accent-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              YN
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`relative text-sm font-semibold transition-colors hover:text-accent-primary ${
                    activeSection === item.id
                      ? 'text-accent-primary'
                      : 'text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              
              {/* Command Palette (Desktop) */}
              <motion.button
                onClick={onCommandPaletteOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:border-accent-primary dark:hover:border-accent-primary transition-all text-sm font-medium"
                aria-label="Open command palette"
              >
                <FaTerminal className="w-4 h-4" />
                <span className="text-neutral-500 dark:text-neutral-400">⌘K</span>
              </motion.button>

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:border-accent-primary dark:hover:border-accent-primary transition-all"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? 'dark' : 'light'}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isDark ? (
                      <FaSun className="w-5 h-5 text-yellow-500" />
                    ) : (
                      <FaMoon className="w-5 h-5 text-blue-500" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              {/* Mobile Menu Toggle */}
              <motion.button
                onClick={onMobileMenuToggle}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="md:hidden p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:border-accent-primary dark:hover:border-accent-primary transition-all"
                aria-label="Toggle mobile menu"
              >
                <FaBars className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-primary origin-left z-50"
        style={{
          scaleX: scrolled ? 1 : 0,
          transformOrigin: '0%',
        }}
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: scrolled
            ? Math.min(
                (window.scrollY /
                  (document.documentElement.scrollHeight - window.innerHeight)) *
                  1,
                1
              )
            : 0,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}

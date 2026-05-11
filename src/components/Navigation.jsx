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
            
            {/* Logo - Enhanced with gradient hover effect */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="group relative text-2xl font-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-50 dark:to-neutral-300 bg-clip-text text-transparent group-hover:from-accent-primary group-hover:to-accent-secondary transition-all duration-300">
                ASHIN S H
              </span>
              
              {/* Animated underline on hover */}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Desktop Navigation - Enhanced link hover effects */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="group relative text-sm font-semibold transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  <span className={`relative z-10 transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-accent-primary'
                      : 'text-neutral-600 dark:text-neutral-400 group-hover:text-accent-primary dark:group-hover:text-accent-primary'
                  }`}>
                    {item.label}
                  </span>
                  
                  {/* Active indicator with smooth animation */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                      transition={{ 
                        type: 'spring', 
                        stiffness: 380, 
                        damping: 30 
                      }}
                    />
                  )}
                  
                  {/* Hover background effect */}
                  <motion.div
                    className="absolute inset-0 -mx-3 -my-2 bg-accent-primary/5 dark:bg-accent-primary/10 rounded-lg -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              
              {/* Command Palette Button - Enhanced with icon animation */}
              <motion.button
                onClick={onCommandPaletteOpen}
                className="group hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 transition-all duration-300 text-sm font-medium relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Open command palette"
              >
                {/* Animated background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 dark:from-accent-primary/20 dark:to-accent-secondary/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  className="relative z-10 flex items-center gap-2"
                >
                  <motion.div
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaTerminal className="w-4 h-4 text-neutral-600 dark:text-neutral-400 group-hover:text-accent-primary transition-colors duration-300" />
                  </motion.div>
                  <span className="text-neutral-500 dark:text-neutral-400 font-mono group-hover:text-accent-primary transition-colors duration-300">
                    ⌘K
                  </span>
                </motion.div>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: '0 0 20px rgba(37, 99, 235, 0.3)',
                  }}
                />
              </motion.button>

              {/* Theme Toggle Button - Enhanced with rotating icon and glow */}
              <motion.button
                onClick={toggleTheme}
                className="group relative p-3 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {/* Gradient background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 dark:from-blue-500/20 dark:to-purple-500/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Icon with smooth transition */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? 'dark' : 'light'}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    {isDark ? (
                      <motion.div
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.5 }}
                      >
                        <FaSun className="w-5 h-5 text-yellow-500" />
                      </motion.div>
                    ) : (
                      <motion.div
                        whileHover={{ rotate: -180 }}
                        transition={{ duration: 0.5 }}
                      >
                        <FaMoon className="w-5 h-5 text-blue-500" />
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Glow effect on hover */}
                <motion.div
                  className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDark 
                      ? 'shadow-[0_0_20px_rgba(234,179,8,0.4)]'
                      : 'shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                  }`}
                />
              </motion.button>

              {/* Mobile Menu Toggle - Enhanced with animated bars */}
              <motion.button
                onClick={onMobileMenuToggle}
                className="group md:hidden relative p-3 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle mobile menu"
              >
                {/* Gradient background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  className="relative z-10"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaBars className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-accent-primary transition-colors duration-300" />
                </motion.div>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: '0 0 20px rgba(37, 99, 235, 0.3)',
                  }}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Scroll Progress Bar - Enhanced with gradient */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary origin-left z-50"
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
      >
        {/* Animated shimmer effect on progress bar */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>
    </>
  );
}
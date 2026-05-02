import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command } from 'lucide-react';

const sections = ['Home', 'Projects', 'Skills', 'Experience', 'Contact'];

export default function CommandPalette({ isOpen, onClose, isDark }) {
  const handleNavigation = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4"
          >
            <div className={`${isDark ? 'bg-neutral-900 border-neutral-700' : 'bg-white border-neutral-200'} border-4 rounded-2xl shadow-2xl overflow-hidden`}>
              <div className="p-6 border-b-4 border-accent-primary">
                <div className="flex items-center gap-3">
                  <Command className="w-5 h-5 text-accent-primary" />
                  <span className="font-bold text-lg">Quick Navigation</span>
                </div>
              </div>
              <div className="p-3">
                {sections.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavigation(item)}
                    className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-all ${
                      isDark 
                        ? 'hover:bg-neutral-800 hover:border-l-4 hover:border-accent-primary' 
                        : 'hover:bg-neutral-100 hover:border-l-4 hover:border-accent-primary'
                    }`}
                  >
                    <span className="font-semibold">{item}</span>
                  </button>
                ))}
              </div>
              <div className={`p-4 ${isDark ? 'bg-neutral-800' : 'bg-neutral-50'} border-t-4 border-neutral-700`}>
                <p className="text-sm text-neutral-500 flex items-center gap-2">
                  <kbd className="px-2 py-1 rounded bg-neutral-700 text-neutral-300 text-xs">Ctrl</kbd>
                  <span>+</span>
                  <kbd className="px-2 py-1 rounded bg-neutral-700 text-neutral-300 text-xs">K</kbd>
                  <span>to toggle</span>
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
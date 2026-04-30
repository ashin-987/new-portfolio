import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Sun, Moon, Download, Command, Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

export default function Navigation({ isDark, toggleTheme, openCommandPalette }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <>
      <nav className={`fixed top-0 w-full z-40 border-b-4 ${
        isDark ? 'bg-neutral-900/80 border-neutral-800' : 'bg-white/80 border-neutral-200'
      } backdrop-blur-xl`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center border-2 border-black">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-black">YOUR NAME</span>
          </motion.div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={openCommandPalette}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all ${
                isDark 
                  ? 'border-neutral-700 hover:border-orange-500' 
                  : 'border-neutral-300 hover:border-orange-500'
              }`}
              aria-label="Open command palette"
            >
              <Command className="w-4 h-4" />
              <span className="text-sm font-mono">Ctrl+K</span>
            </button>
            
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-lg border-2 transition-all ${
                isDark 
                  ? 'border-neutral-700 hover:border-orange-500' 
                  : 'border-neutral-300 hover:border-orange-500'
              }`}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-lg border-2 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center ${
                isDark 
                  ? 'border-neutral-700 hover:border-orange-500' 
                  : 'border-neutral-300 hover:border-orange-500'
              }`}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg border-2 border-black transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)}
        isDark={isDark}
      />
    </>
  );
}

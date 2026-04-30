import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Briefcase, Code, Mail, User, Download } from 'lucide-react';

export default function MobileMenu({ isOpen, onClose, isDark }) {
  const menuItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: Code, label: 'Projects', href: '#projects' },
    { icon: User, label: 'Skills', href: '#skills' },
    { icon: Briefcase, label: 'Experience', href: '#experience' },
    { icon: Mail, label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className={`fixed top-0 right-0 bottom-0 w-full sm:w-80 z-50 ${
              isDark ? 'bg-neutral-900' : 'bg-white'
            } border-l-4 ${isDark ? 'border-neutral-800' : 'border-neutral-300'}`}
          >
            {/* Header */}
            <div className={`p-6 border-b-4 border-orange-500 ${
              isDark ? 'bg-neutral-950' : 'bg-neutral-100'
            }`}>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black">MENU</h2>
                <button
                  onClick={onClose}
                  className={`p-3 rounded-lg border-2 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center ${
                    isDark ? 'border-neutral-700 hover:border-orange-500' : 'border-neutral-300 hover:border-orange-500'
                  }`}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <nav className="p-6 space-y-2 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={handleLinkClick}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all group min-h-[60px] ${
                    isDark ? 'border-neutral-800 hover:bg-neutral-800' : 'border-neutral-200 hover:bg-neutral-100'
                  } hover:border-orange-500`}
                >
                  <item.icon className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-lg font-bold">{item.label}</span>
                </motion.a>
              ))}
            </nav>

            {/* Footer */}
            <div className={`absolute bottom-0 left-0 right-0 p-6 border-t-4 border-orange-500 ${
              isDark ? 'bg-neutral-950' : 'bg-neutral-100'
            }`}>
              <a
                href="/resume.pdf"
                download
                className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

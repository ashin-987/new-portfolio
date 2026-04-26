import React from 'react';
import { Sparkles } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Footer({ isDark }) {
  return (
    <footer className={`py-12 border-t-4 ${isDark ? 'border-neutral-800' : 'border-neutral-300'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center border-2 border-black">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-black text-xl">{personalInfo.name.toUpperCase()}</span>
          </div>
          <p className="text-neutral-400 font-mono">
            © {new Date().getFullYear()} • Designed & Built with React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
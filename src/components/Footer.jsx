import React from 'react';
import { FaHeart } from 'react-icons/fa';

export default function Footer({ isDark }) {
  return (
    <footer className={`py-8 border-t-4 ${
      isDark ? 'border-neutral-800' : 'border-neutral-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm sm:text-base text-neutral-400 flex items-center justify-center gap-2 flex-wrap">
            <span>Built with</span>
            <FaHeart className="text-orange-500 animate-pulse" />
            <span>using React, Vite & Tailwind CSS</span>
          </p>
          <p className="text-xs sm:text-sm text-neutral-500 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

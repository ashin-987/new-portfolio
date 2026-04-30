import React from 'react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects({ isDark }) {
  return (
    <section id="projects" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="grain absolute inset-0 pointer-events-none opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <FaCode className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-orange-500 flex-shrink-0" />
            <span>FEATURED PROJECTS</span>
          </h2>
          <div className="w-20 sm:w-32 h-2 bg-gradient-to-r from-orange-500 to-red-500" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              isDark={isDark} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

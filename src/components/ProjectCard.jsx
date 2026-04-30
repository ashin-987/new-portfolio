import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheck } from 'react-icons/fa';

export default function ProjectCard({ project, isDark, index }) {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="card-3d group h-full"
    >
      <div className={`h-full rounded-2xl border-4 overflow-hidden ${
        isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-300'
      } hover:border-orange-500 transition-all`}>
        
        {/* Project Screenshot/Image */}
        <div className="relative aspect-video overflow-hidden bg-neutral-800">
          {project.screenshot ? (
            <>
              <img 
                src={project.screenshot}
                alt={project.title}
                onLoad={() => setImageLoaded(true)}
                loading="lazy"
                className={`w-full h-full object-cover transition-all duration-500 ${
                  imageLoaded ? 'blur-0' : 'blur-sm'
                } group-hover:scale-110`}
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg border-2 border-black hover:scale-105 transition-transform flex items-center gap-2"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              </div>
            </>
          ) : (
            // Fallback if no screenshot
            <div className={`w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br ${project.color}`}>
              {project.image}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl sm:text-3xl font-black flex-1">{project.title}</h3>
            <div className="flex gap-2 ml-4">
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live project"
                className="p-2 rounded-lg border-2 border-neutral-700 hover:border-orange-500 transition-all min-w-[40px] min-h-[40px] flex items-center justify-center"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
              </a>
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub repository"
                className="p-2 rounded-lg border-2 border-neutral-700 hover:border-orange-500 transition-all min-w-[40px] min-h-[40px] flex items-center justify-center"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            </div>
          </div>

          <p className="text-neutral-400 mb-6 text-base sm:text-lg leading-relaxed">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6 space-y-2">
              {project.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                  <FaCheck className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-orange-500/20 border-2 border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-bold font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

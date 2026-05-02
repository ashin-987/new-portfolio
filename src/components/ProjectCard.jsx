import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheck } from 'react-icons/fa';

export default function ProjectCard({ project, isDark, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group h-full"
    >
      <div className={`h-full rounded-2xl border overflow-hidden transition-all duration-500 ${
        isDark 
          ? 'bg-neutral-900 border-neutral-800 hover:border-neutral-700' 
          : 'bg-white border-neutral-200 hover:border-neutral-300'
      } hover:shadow-2xl hover:-translate-y-2`}>
        
        {/* Project Image with Overlay */}
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
          {project.screenshot && (
            <>
              {/* Main Image */}
              <motion.img 
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                onLoad={() => setImageLoaded(true)}
                loading="lazy"
                className={`w-full h-full object-cover transition-all duration-700 ${
                  imageLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-sm scale-105'
                } group-hover:scale-110`}
              />
              
              {/* Gradient Overlay on Hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-start p-6"
                  >
                    <div className="flex gap-3">
                      {project.link && (
                        <motion.a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-lg"
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                          Live Site
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="px-6 py-3 bg-neutral-900 text-white font-semibold rounded-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-lg border border-neutral-700"
                        >
                          <FaGithub className="w-4 h-4" />
                          Code
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Loading Skeleton */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
              )}
            </>
          )}

          {/* Fallback if no image */}
          {!project.screenshot && (
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
              <span className="text-white text-6xl font-black opacity-20">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 lg:p-8">
          {/* Project Title */}
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl lg:text-3xl font-bold flex-1 leading-tight hover:text-accent-primary transition-colors">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Highlights/Key Features */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6 space-y-3">
              {project.highlights.slice(0, 3).map((highlight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-accent-primary/10 flex-shrink-0 mt-0.5">
                    <FaCheck className="w-3 h-3 text-accent-primary" />
                  </div>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-accent-primary dark:hover:border-accent-primary transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

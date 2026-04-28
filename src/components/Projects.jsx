import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/projects';

export default function Projects({ isDark }) {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-black mb-4 flex items-center gap-4">
            <FaCode className="w-12 h-12 text-orange-500" />
            FEATURED PROJECTS
          </h2>
          <p className="text-xl text-neutral-400 font-medium">
            Showcasing my best work and technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-3d group"
            >
              <div className={`h-full p-8 rounded-2xl border-4 ${
                isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-300'
              } hover:border-orange-500 transition-all`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`text-6xl p-4 rounded-xl bg-gradient-to-br ${project.color}`}>
                    {project.image}
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border-2 border-neutral-700 hover:border-orange-500 transition-all"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border-2 border-neutral-700 hover:border-orange-500 transition-all"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-3xl font-black mb-3">{project.title}</h3>
                <p className="text-neutral-400 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-orange-500/20 border-2 border-orange-500 rounded-full text-orange-500 text-sm font-bold font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import { experience } from '../data/experience';

export default function Experience({ isDark }) {
  return (
    <section id="experience" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="grain absolute inset-0 pointer-events-none opacity-50" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <FaBriefcase className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-orange-500 flex-shrink-0" />
            <span>EXPERIENCE</span>
          </h2>
          <div className="w-20 sm:w-32 h-2 bg-gradient-to-r from-orange-500 to-red-500" />
        </motion.div>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className={`hidden md:block absolute left-0 top-0 bottom-0 w-1 ${
            isDark ? 'bg-neutral-800' : 'bg-neutral-300'
          }`} />

          <div className="space-y-8 sm:space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative md:pl-12"
              >
                {/* Timeline dot - hidden on mobile */}
                <div className="hidden md:block absolute left-0 top-8 w-4 h-4 bg-orange-500 rounded-full border-4 border-neutral-900 -translate-x-[7px]" />

                <div className={`p-6 sm:p-8 rounded-2xl border-4 ${
                  isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-300'
                } hover:border-orange-500 transition-all`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black mb-1">{exp.role}</h3>
                      <div className="text-orange-500 font-bold text-base sm:text-lg mb-2">{exp.company}</div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 text-sm text-neutral-400">
                      <div className="flex items-center gap-2">
                        <FaCalendar className="w-4 h-4 flex-shrink-0" />
                        <span className="font-mono">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="w-4 h-4 flex-shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 text-neutral-400 text-sm sm:text-base leading-relaxed">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1.5">▸</span>
                        <span className="flex-1">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

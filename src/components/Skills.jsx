import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';
import { skills } from '../data/skills';

export default function Skills({ isDark }) {
  const categories = [
    { name: 'Frontend', skills: skills.frontend },
    { name: 'Backend', skills: skills.backend },
    { name: 'Tools & Others', skills: skills.tools },
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="grain absolute inset-0 pointer-events-none opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <FaLaptopCode className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-orange-500 flex-shrink-0" />
            <span>SKILLS & EXPERTISE</span>
          </h2>
          <div className="w-20 sm:w-32 h-2 bg-gradient-to-r from-orange-500 to-red-500" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className={`p-6 sm:p-8 rounded-2xl border-4 ${
                isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-300'
              } hover:border-orange-500 transition-all`}
            >
              <h3 className="text-xl sm:text-2xl font-black mb-6 text-gradient">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-sm sm:text-base">{skill.name}</span>
                      <span className="text-orange-500 font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className={`h-3 rounded-full overflow-hidden ${
                      isDark ? 'bg-neutral-800' : 'bg-neutral-200'
                    }`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.2 + index * 0.1, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

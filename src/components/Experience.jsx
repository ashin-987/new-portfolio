import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiences } from '../data/experience';

export default function Experience({ isDark }) {
  return (
    <section id="experience" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-black mb-4 flex items-center gap-4">
            <Briefcase className="w-12 h-12 text-orange-500" />
            EXPERIENCE
          </h2>
          <p className="text-xl text-neutral-400 font-medium">
            My professional journey and achievements
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-2xl border-4 ${
                isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-300'
              } hover:border-orange-500 transition-all`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-3xl font-black mb-2">{exp.role}</h3>
                  <p className="text-xl text-orange-500 font-bold">{exp.company}</p>
                </div>
                <span className="px-4 py-2 bg-orange-500/20 border-2 border-orange-500 rounded-full text-orange-500 font-mono font-bold mt-4 md:mt-0 inline-block">
                  {exp.period}
                </span>
              </div>
              <p className="text-lg text-neutral-400 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
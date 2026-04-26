import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { skills } from '../data/skills';

export default function Skills({ isDark }) {
  return (
    <section id="skills" className={`py-32 ${isDark ? 'bg-neutral-900' : 'bg-neutral-100'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-black mb-4 flex items-center gap-4">
            <Sparkles className="w-12 h-12 text-orange-500" />
            TECH STACK
          </h2>
          <p className="text-xl text-neutral-400 font-medium">
            Technologies and tools I work with daily
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-2xl border-4 ${
                isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-300'
              } hover:border-orange-500 transition-all`}
            >
              <h3 className="text-2xl font-black mb-6 text-gradient">{category}</h3>
              <div className="space-y-3">
                {items.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span className="font-bold text-lg">{skill}</span>
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
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function Skills({ isDark }) {
  return (
    <section 
      id="skills" 
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="grain absolute inset-0 pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-neutral-50 dark:bg-neutral-950 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: categoryIndex * 0.1,
                duration: 0.6 
              }}
              className="group"
            >
              <div className={`h-full p-8 rounded-2xl border transition-all duration-500 ${
                isDark 
                  ? 'bg-neutral-900 border-neutral-800 hover:border-neutral-700' 
                  : 'bg-white border-neutral-200 hover:border-neutral-300'
              } hover:shadow-xl hover:-translate-y-1`}>
                
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center group-hover:bg-accent-primary group-hover:scale-110 transition-all">
                    {skillCategory.icon && (
                      <skillCategory.icon className="w-5 h-5 text-accent-primary group-hover:text-white transition-colors" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold">{skillCategory.category}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      className="space-y-2"
                    >
                      {/* Skill Name and Level */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          {skill.name}
                        </span>
                        <span className="text-xs font-semibold text-accent-primary">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar - Modern Design */}
                      <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                            duration: 1,
                            ease: [0.43, 0.13, 0.23, 0.96]
                          }}
                          className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full relative overflow-hidden"
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tech Stack (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold mb-6 text-neutral-700 dark:text-neutral-300">
            Also Experienced With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Docker', 'AWS', 'CI/CD', 'Jest', 'Cypress', 
              'GraphQL', 'WebSocket', 'Redis', 'PostgreSQL'
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + (i * 0.05) }}
                className="px-4 py-2 text-sm font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-accent-primary dark:hover:border-accent-primary transition-all hover:-translate-y-1"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

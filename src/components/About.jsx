import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaRocket, FaHeart } from 'react-icons/fa';

// Add this data to your personalInfo.js
const aboutData = {
  paragraphs: [
    "I'm a passionate Full Stack Developer who loves building elegant solutions to complex problems. With a strong foundation in both frontend and backend technologies, I create seamless user experiences backed by robust, scalable architectures.",
    "My journey in web development started with curiosity and grew into a deep commitment to craftsmanship. I believe in writing clean, maintainable code and staying current with the latest technologies and best practices.",
  ],
  values: [
    {
      icon: FaCode,
      title: "Clean Code",
      description: "I write code that's easy to read, maintain, and scale. Quality over quantity, always."
    },
    {
      icon: FaLightbulb,
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding elegant, efficient solutions."
    },
    {
      icon: FaRocket,
      title: "Fast Learner",
      description: "Technology evolves rapidly, and I'm always learning new tools and techniques."
    },
    {
      icon: FaHeart,
      title: "User-Focused",
      description: "Every line of code I write is aimed at creating better experiences for users."
    }
  ],
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "∞", label: "Coffee Consumed" }
  ]
};

export default function About({ isDark }) {
  return (
    <section 
      id="about" 
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="grain absolute inset-0 pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-50/50 dark:via-neutral-900/50 to-transparent pointer-events-none" />

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
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {aboutData.paragraphs.map((paragraph, i) => (
              <p 
                key={i}
                className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-primary hover:bg-accent-hover text-white font-semibold rounded-lg transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-primary/30"
              >
                Let's Work Together
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {aboutData.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-accent-primary dark:hover:border-accent-primary transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl lg:text-5xl font-black text-accent-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12">
            What Drives Me
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + (i * 0.1) }}
                className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-accent-primary dark:hover:border-accent-primary transition-all hover:-translate-y-1 hover:shadow-lg group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent-primary group-hover:scale-110 transition-all">
                  <value.icon className="w-6 h-6 text-accent-primary group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

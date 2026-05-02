import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTerminal } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';

export default function Hero({ isDark }) {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24"
    >
      {/* Grain texture overlay */}
      <div className="grain absolute inset-0 pointer-events-none opacity-50" />
      
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-100/50 dark:to-neutral-900/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.43, 0.13, 0.23, 0.96] 
            }}
            className="relative z-10"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-sm font-semibold mb-6 backdrop-blur-sm"
            >
              <motion.div 
                className="w-2 h-2 bg-accent-primary rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              Available for work
            </motion.div>

            {/* Main Heading - Better responsive sizing */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
              <motion.span 
                className="block mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Full Stack
              </motion.span>
              <motion.span 
                className="text-gradient block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Developer
              </motion.span>
            </h1>

            {/* Bio - Improved readability */}
            <motion.p 
              className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {personalInfo.bio}
            </motion.p>

            {/* Call-to-Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <a
                href="#contact"
                className="group px-8 py-4 bg-accent-primary hover:bg-accent-hover text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-primary/30 text-center inline-flex items-center justify-center gap-2"
              >
                Get In Touch
                <svg 
                  className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#projects"
                className="group px-8 py-4 border-2 border-neutral-300 dark:border-neutral-700 hover:border-accent-primary dark:hover:border-accent-primary font-semibold rounded-lg transition-all duration-200 text-center inline-flex items-center justify-center gap-2"
              >
                View Projects
                <svg 
                  className="w-5 h-5 transition-transform group-hover:translate-y-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </motion.div>

            {/* Social Links - Improved design */}
            <motion.div 
              className="flex gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {[
                { icon: FaGithub, href: personalInfo.social.github, label: 'GitHub' },
                { icon: FaLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
                { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 flex items-center justify-center rounded-lg border border-neutral-300 dark:border-neutral-700 hover:border-accent-primary dark:hover:border-accent-primary transition-all hover:shadow-md"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              ease: [0.43, 0.13, 0.23, 0.96] 
            }}
            className="relative"
          >
            {/* Main Code Block */}
            <div className="relative p-6 lg:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl overflow-hidden">
              
              {/* Decorative background gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/5 dark:bg-accent-primary/10 rounded-full blur-3xl -z-0" />
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-2 text-accent-primary">
                  <FaTerminal className="w-4 h-4" />
                  <span className="text-sm font-mono text-neutral-600 dark:text-neutral-400">
                    ~/{personalInfo.username || 'developer'}
                  </span>
                </div>
                
                {/* Terminal buttons */}
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
              </div>

              {/* Code Content */}
              <div className="font-mono text-sm space-y-2 relative z-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-1 text-neutral-800 dark:text-neutral-200"
                >
                  <p>
                    <span className="text-purple-600 dark:text-purple-400">const</span>{' '}
                    <span className="text-blue-600 dark:text-blue-400">developer</span>{' '}
                    <span className="text-neutral-600 dark:text-neutral-400">=</span>{' '}
                    <span className="text-neutral-600 dark:text-neutral-400">{'{'}</span>
                  </p>
                  
                  <p className="pl-4">
                    <span className="text-red-600 dark:text-red-400">name</span>
                    <span className="text-neutral-600 dark:text-neutral-400">:</span>{' '}
                    <span className="text-green-600 dark:text-green-400">'{personalInfo.name}'</span>
                    <span className="text-neutral-600 dark:text-neutral-400">,</span>
                  </p>
                  
                  <p className="pl-4">
                    <span className="text-red-600 dark:text-red-400">role</span>
                    <span className="text-neutral-600 dark:text-neutral-400">:</span>{' '}
                    <span className="text-green-600 dark:text-green-400">'{personalInfo.role}'</span>
                    <span className="text-neutral-600 dark:text-neutral-400">,</span>
                  </p>
                  
                  <p className="pl-4">
                    <span className="text-red-600 dark:text-red-400">skills</span>
                    <span className="text-neutral-600 dark:text-neutral-400">:</span>{' '}
                    <span className="text-neutral-600 dark:text-neutral-400">[</span>
                  </p>
                  
                  {personalInfo.codeBlock?.skills?.slice(0, 4).map((skill, i, arr) => (
                    <motion.p 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + (i * 0.1) }}
                      className="pl-8"
                    >
                      <span className="text-green-600 dark:text-green-400">'{skill}'</span>
                      {i < arr.length - 1 && <span className="text-neutral-600 dark:text-neutral-400">,</span>}
                    </motion.p>
                  ))}
                  
                  <p className="pl-4">
                    <span className="text-neutral-600 dark:text-neutral-400">]</span>
                    <span className="text-neutral-600 dark:text-neutral-400">,</span>
                  </p>
                  
                  <p>
                    <span className="text-neutral-600 dark:text-neutral-400">{'}'}</span>
                    <span className="text-neutral-600 dark:text-neutral-400">;</span>
                  </p>
                </motion.div>

                {/* Blinking cursor */}
                <motion.div 
                  className="flex items-center gap-1 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <span className="text-neutral-600 dark:text-neutral-400">$</span>
                  <motion.div 
                    className="w-2 h-4 bg-accent-primary"
                    animate={{ opacity: [1, 0] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Floating accent elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-accent-primary/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-secondary/10 rounded-full blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center gap-2 text-neutral-400 dark:text-neutral-600"
        >
          <span className="text-xs font-medium">Scroll</span>
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

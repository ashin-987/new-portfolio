import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

// Add this to your data/experience.js or import from there
const experiences = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "Tech Company",
    location: "Remote",
    period: "2023 - Present",
    description: "Leading development of scalable web applications using React and Node.js. Mentoring junior developers and architecting cloud solutions.",
    achievements: [
      "Reduced API response time by 40% through optimization",
      "Led migration to microservices architecture",
      "Implemented CI/CD pipeline reducing deployment time by 60%"
    ],
    technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Startup Inc",
    location: "San Francisco, CA",
    period: "2021 - 2023",
    description: "Developed and maintained full-stack applications. Collaborated with cross-functional teams to deliver high-quality products.",
    achievements: [
      "Built real-time chat feature serving 10k+ concurrent users",
      "Improved test coverage from 40% to 85%",
      "Launched 3 major product features ahead of schedule"
    ],
    technologies: ["React", "Express", "MongoDB", "Redis"]
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "Digital Agency",
    location: "New York, NY",
    period: "2020 - 2021",
    description: "Worked on client projects building responsive websites and web applications. Gained experience in modern web development practices.",
    achievements: [
      "Delivered 12+ client projects on time and within budget",
      "Improved website performance scores by average of 30%",
      "Implemented responsive designs for mobile-first approach"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"]
  }
];

export default function Experience({ isDark }) {
  return (
    <section 
      id="experience" 
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="grain absolute inset-0 pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-neutral-50 dark:bg-neutral-950 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-300 dark:bg-neutral-700 hidden md:block" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                <div className="flex gap-8">
                  
                  {/* Timeline Dot (Desktop) */}
                  <div className="hidden md:flex flex-col items-center flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                      className="w-5 h-5 rounded-full bg-accent-primary border-4 border-white dark:border-neutral-950 z-10"
                    />
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 pb-12">
                    <div className={`p-6 lg:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      isDark 
                        ? 'bg-neutral-900 border-neutral-800 hover:border-neutral-700' 
                        : 'bg-white border-neutral-200 hover:border-neutral-300'
                    }`}>
                      
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                            <p className="text-lg font-semibold text-accent-primary">
                              {exp.company}
                            </p>
                          </div>
                          <div className="hidden md:block px-4 py-2 rounded-lg bg-accent-primary/10 border border-accent-primary/20">
                            <FaBriefcase className="w-5 h-5 text-accent-primary" />
                          </div>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                          <div className="flex items-center gap-2">
                            <FaCalendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-sm font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-3">
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + i * 0.05 }}
                                className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-accent-primary flex-shrink-0 mt-2" />
                                <span>{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div>
                          <h4 className="text-sm font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-3">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + i * 0.05 }}
                                className="px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-primary hover:bg-accent-hover text-white font-semibold rounded-lg transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-primary/30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}

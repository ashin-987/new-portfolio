import React from 'react';
import { motion } from 'framer-motion';
import { GitHub, Linkedin, Mail, Terminal } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Hero({ isDark }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="grain absolute inset-0 pointer-events-none" />
      
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-orange-500/20 border-2 border-orange-500 rounded-full text-orange-500 font-mono text-sm font-bold inline-flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                {personalInfo.availability}
              </span>
            </motion.div>

            <h1 className="text-7xl md:text-8xl font-black leading-none mb-6">
              <span className="block">{personalInfo.title.line1}</span>
              <span className="text-gradient block">{personalInfo.title.line2}</span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-400 mb-8 font-medium leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-lg border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className={`px-8 py-4 font-bold text-lg rounded-lg border-2 transition-all ${
                  isDark 
                    ? 'border-white hover:bg-white hover:text-black' 
                    : 'border-black hover:bg-black hover:text-white'
                }`}
              >
                View Projects
              </a>
            </div>

            <div className="flex gap-4 mt-8">
              <a 
                href={personalInfo.social.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-3 rounded-lg border-2 transition-all ${
                  isDark ? 'border-neutral-700 hover:border-orange-500' : 'border-neutral-300 hover:border-orange-500'
                }`}
              >
                <GitHub className="w-6 h-6" />
              </a>
              <a 
                href={personalInfo.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 rounded-lg border-2 transition-all ${
                  isDark ? 'border-neutral-700 hover:border-orange-500' : 'border-neutral-300 hover:border-orange-500'
                }`}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className={`p-3 rounded-lg border-2 transition-all ${
                  isDark ? 'border-neutral-700 hover:border-orange-500' : 'border-neutral-300 hover:border-orange-500'
                }`}
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block"
          >
            <div className={`relative p-8 rounded-3xl border-4 ${
              isDark ? 'border-neutral-800 bg-neutral-900' : 'border-neutral-300 bg-white'
            }`}>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center gap-2 text-orange-500">
                  <Terminal className="w-4 h-4" />
                  <span>~/{personalInfo.username}</span>
                </div>
                <div className="space-y-2">
                  <p><span className="text-green-500">const</span> developer = {`{`}</p>
                  <p className="pl-4">name: <span className="text-yellow-500">'{personalInfo.name}'</span>,</p>
                  <p className="pl-4">role: <span className="text-yellow-500">'{personalInfo.role}'</span>,</p>
                  <p className="pl-4">skills: [</p>
                  {personalInfo.codeBlock.skills.map((skill, i) => (
                    <p key={i} className="pl-8 text-yellow-500">'{skill}'{i < personalInfo.codeBlock.skills.length - 1 ? ',' : ''}</p>
                  ))}
                  <p className="pl-4">],</p>
                  <p className="pl-4">passion: <span className="text-yellow-500">'{personalInfo.codeBlock.passion}'</span></p>
                  <p>{`}`};</p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-2 h-4 bg-orange-500 animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { SiPython } from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import React from "react";
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, FolderGit2 } from 'lucide-react';
import { profile } from '../../data/profile';
import { useTypingEffect } from '../../hooks/useTypingEffect';

const Hero: React.FC = () => {
  const typed = useTypingEffect(profile.typingKeywords);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-visible pt-28 pb-16"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="section-eyebrow inline-block rounded-full border border-signal/25 bg-signal/8 px-4 py-1.5 text-xs font-medium text-signal-dim dark:text-signal">
            {profile.tagline}
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-slate-deep dark:text-ink sm:text-5xl lg:text-6xl">
            Hi, I'm {profile.name}
          </h1>

          <div className="mt-4 h-9 font-mono text-lg text-signal-dim dark:text-signal sm:text-xl">
            <span>{typed}</span>
            <span className="animate-blink">|</span>
          </div>

          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-slate-deep/75 dark:text-ink/70">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={profile.resumeFile}
              download
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-signal to-amber px-6 py-3 font-body text-sm font-semibold text-void shadow-glow transition-transform hover:scale-105"
            >
              <Download size={16} />
              Download Resume
            </a>
            <button
              onClick={() => scrollTo('projects')}
              className="flex items-center gap-2 rounded-full border border-slate-deep/15 px-6 py-3 font-body text-sm font-semibold text-slate-deep transition-colors hover:border-signal hover:text-signal-dim dark:border-white/15 dark:text-ink dark:hover:border-signal dark:hover:text-signal"
            >
              <FolderGit2 size={16} />
              View Projects
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold text-slate-deep/70 transition-colors hover:text-signal-dim dark:text-ink/60 dark:hover:text-signal"
            >
              <Mail size={16} />
              Contact Me
            </button>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-full glass text-slate-deep transition-transform hover:-translate-y-1 hover:text-signal-dim dark:text-ink dark:hover:text-signal"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-full glass text-slate-deep transition-transform hover:-translate-y-1 hover:text-signal-dim dark:text-ink dark:hover:text-signal"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className="flex h-11 w-11 items-center justify-center rounded-full glass text-slate-deep transition-transform hover:-translate-y-1 hover:text-signal-dim dark:text-ink dark:hover:text-signal"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        {/* Photo column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto flex h-[420px] w-[420px] items-center justify-center"
        >
         <div className="relative h-[360px] w-[360px] overflow-visible rounded-[40px] bg-[#081f37]">
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="h-60 w-60 rounded-full bg-cyan-500/15 blur-[90px]"></div>
  </div>

  <img
    src={profile.photo}
    alt={`${profile.name}, ${profile.title}`}
    width={384}
    height={384}
    loading="eager"
    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[115%] w-auto max-w-none object-contain object-top z-10"
  />

</div>

          {/* Floating tech chips */}
          <motion.div
  className="absolute bottom-8 left-8 z-30 flex h-12 w-12 items-center justify-center rounded-xl glass shadow-glass"
  animate={{ y: [0, -8, 0] }}
  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
>
  <FaJava size={22} />
</motion.div>
         <motion.div
  className="absolute left-0 top-10 z-30 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-xl glass shadow-glass"
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
>
  <SiPython size={22} />
</motion.div>
         <motion.div
  className="absolute right-0 top-1/2 z-30 flex h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl glass shadow-glass"
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
>
  <FaDatabase size={20} />
</motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

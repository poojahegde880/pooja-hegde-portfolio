// export default Projects;
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Github, ExternalLink } from "lucide-react";
import { projects, profile } from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";
import TechIcon from "../ui/TechIcon";

const Projects: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(
    projects[0]?.id ?? null
  );

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="· Projects ·"
          title="Featured Projects"
          description="Four projects, four different problems — computer vision for healthcare, a smart QR code generator, an interactive teaching tool, and an operations system that replaced a manual process."
        />

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-6">
          <AnimatePresence>
            {projects.map((project, i) => {
              const isOpen = expanded === project.id;

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="glass overflow-hidden rounded-2xl p-6 transition-shadow hover:shadow-glow sm:p-8"
                >
                  <button
                    className="flex w-full items-start justify-between gap-4 text-left"
                    onClick={() => setExpanded(isOpen ? null : project.id)}
                    aria-expanded={isOpen}
                  >
                    <div>
                      <h3 className="font-display text-xl font-bold text-slate-deep dark:text-ink sm:text-2xl">
                        {project.name}
                      </h3>

                      <p className="mt-2 max-w-2xl font-body text-sm text-slate-deep/70 dark:text-ink/65">
                        {project.description}
                      </p>
                    </div>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-1 flex-shrink-0 text-slate-deep/50 dark:text-ink/50"
                    >
                      <ChevronDown size={20} />
                    </motion.span>
                  </button>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <TechIcon key={tech} name={tech} size="sm" />
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 rounded-full bg-gradient-to-r from-signal to-amber px-4 py-2 font-body text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    ) : (
                      <span
                        onClick={(e) => e.stopPropagation()}
                        title="Live link coming soon"
                        className="flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-slate-deep/25 px-4 py-2 font-body text-xs font-semibold text-slate-deep/40 dark:border-ink/25 dark:text-ink/40"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </span>
                    )}

                    {project.githubLink ? (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 rounded-full glass px-4 py-2 font-body text-xs font-semibold text-slate-deep transition-transform hover:-translate-y-0.5 dark:text-ink"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    ) : (
                      <span
                        onClick={(e) => e.stopPropagation()}
                        title="GitHub link coming soon"
                        className="flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-slate-deep/25 px-4 py-2 font-body text-xs font-semibold text-slate-deep/40 dark:border-ink/25 dark:text-ink/40"
                      >
                        <Github size={14} />
                        Code
                      </span>
                    )}
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <h4 className="mt-6 font-display text-xs font-semibold uppercase tracking-wide text-slate-deep/60 dark:text-ink/55">
                          Key Features
                        </h4>

                        <ul className="mt-3 space-y-2">
                          {project.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex gap-3 font-body text-sm text-slate-deep/75 dark:text-ink/70"
                            >
                              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-signal to-amber" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </AnimatePresence>

          {projects.length === 0 && (
            <p className="py-12 text-center font-body text-sm text-slate-deep/55 dark:text-ink/50">
              No projects available.
            </p>
          )}
        </div>

        {/* Profile Links */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full glass px-5 py-2.5 font-body text-sm font-medium text-slate-deep transition-transform hover:-translate-y-0.5 hover:text-signal-dim dark:text-ink dark:hover:text-signal"
          >
            <Github size={16} />
            All repositories on GitHub
          </a>

       
        </div>
      </div>
    </section>
  );
};

export default Projects;
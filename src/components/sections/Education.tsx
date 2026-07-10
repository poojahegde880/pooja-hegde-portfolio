import React from "react";
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../../data/profile';
import SectionHeading from '../ui/SectionHeading';

const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="· Education ·"
          title="Academic background"
          description="Higher education, most recent first."
        />

        <div className="relative">
          <div className="absolute left-5 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-signal via-amber to-transparent sm:left-7" />
          <div className="space-y-10">
            {education.map((entry, i) => (
              <motion.div
                key={entry.degree}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-6 pl-0 sm:gap-8"
              >
                <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-signal to-amber text-void shadow-glow sm:h-14 sm:w-14">
                  <GraduationCap size={18} className="sm:hidden" />
                  <GraduationCap size={22} className="hidden sm:block" />
                </div>
                <div className="glass flex-1 rounded-2xl p-6">
                  <span className="font-mono text-xs text-signal-dim dark:text-signal">
                    {entry.period}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-slate-deep dark:text-ink">
                    {entry.degree}
                  </h3>
                  <p className="mt-1 font-body text-sm text-slate-deep/75 dark:text-ink/65">
                    {entry.institution}
                    {entry.affiliation && (
                      <span className="text-slate-deep/55 dark:text-ink/45"> · {entry.affiliation}</span>
                    )}
                  </p>
                  <p className="mt-1 font-body text-xs text-slate-deep/55 dark:text-ink/45">
                    {entry.location}
                  </p>
                  <span className="mt-3 inline-block rounded-full bg-signal/10 px-3 py-1 font-mono text-xs font-semibold text-signal-dim dark:bg-signal/15 dark:text-signal">
                    {entry.score}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

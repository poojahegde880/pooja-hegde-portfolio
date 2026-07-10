import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { skillCategories } from '../../data/profile';
import { skillIcons, skillColors } from '../../data/skillIcons';
import SectionHeading from '../ui/SectionHeading';

const ALL = 'All';

const Skills: React.FC = () => {
  const [filter, setFilter] = useState<string>(ALL);
  const categoryNames = [ALL, ...skillCategories.map((c) => c.category)];

  const visibleCategories =
    filter === ALL ? skillCategories : skillCategories.filter((c) => c.category === filter);

  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="· Skills ·"
          title="Technologies I work with"
          description="Pulled straight from my technical skill set and the stacks behind each project below."
        />

        {/* Filter pills */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categoryNames.map((name) => (
            <button
              key={name}
              onClick={() => setFilter(name)}
              className={`rounded-full px-4 py-2 font-mono text-xs font-medium transition-colors ${
                filter === name
                  ? 'bg-gradient-to-r from-signal to-amber text-void shadow-glow'
                  : 'glass text-slate-deep/70 hover:text-signal-dim dark:text-ink/65 dark:hover:text-signal'
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visibleCategories.map((cat) => (
              <div key={cat.category} className="glass rounded-2xl p-6">
                <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-wide text-slate-deep dark:text-ink">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((name) => {
                    const Icon = skillIcons[name] ?? Code2;
                    const color = skillColors[name] ?? '#94A3B8';
                    return (
                      <div
                        key={name}
                        className="flex items-center gap-2 rounded-xl border border-slate-deep/10 bg-slate-deep/5 px-3 py-2 transition-transform hover:-translate-y-1 hover:border-slate-deep/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/25"
                      >
                        <Icon size={17} style={{ color }} />
                        <span className="font-body text-sm text-slate-deep/85 dark:text-ink/80">
                          {name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import { motion } from 'framer-motion';
import { navLinks } from '../../data/profile';
import { useActiveSection } from '../../hooks/useActiveSection';

/**
 * Signature element: a vertical "trace rail" that lights up node by node as the
 * visitor scrolls, echoing how Pooja's own Algorithm Visualizer project animates
 * a traversal step by step. Desktop only — collapses on smaller viewports where
 * the mobile nav already provides section context.
 */
const sectionIds = navLinks.map((l) => l.href.replace('#', ''));

const TraceRail: React.FC = () => {
  const active = useActiveSection(sectionIds);
  const activeIndex = Math.max(sectionIds.indexOf(active), 0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      aria-label="Section progress"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:flex"
    >
      <div className="relative flex flex-col items-center gap-8 py-2">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-deep/10 dark:bg-white/10" />
        <motion.div
          className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-signal to-amber"
          initial={false}
          animate={{ height: `${(activeIndex / (sectionIds.length - 1)) * 100}%` }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        />
        {sectionIds.map((id, i) => {
          const isActive = id === active;
          const isVisited = i <= activeIndex;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="group relative flex items-center"
              aria-label={`Jump to ${navLinks[i].label}`}
              aria-current={isActive ? 'true' : undefined}
            >
              <motion.span
                className={`relative z-10 block h-2.5 w-2.5 rounded-full border transition-colors ${
                  isVisited
                    ? 'border-signal bg-signal'
                    : 'border-slate-deep/30 bg-mist dark:border-white/20 dark:bg-void'
                }`}
                animate={isActive ? { scale: [1, 1.5, 1] } : { scale: 1 }}
                transition={{ duration: 1.6, repeat: isActive ? Infinity : 0 }}
              />
              <span className="pointer-events-none absolute left-5 whitespace-nowrap rounded-md bg-slate-deep px-2 py-1 font-mono text-[10px] text-mist opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-void-surface">
                {navLinks[i].label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default TraceRail;

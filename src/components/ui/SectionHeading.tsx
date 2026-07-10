import React from "react";
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <span className="section-eyebrow text-xs font-medium uppercase text-signal-dim dark:text-signal">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold text-slate-deep dark:text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 font-body text-base text-slate-deep/70 dark:text-ink/65 ${
            align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;

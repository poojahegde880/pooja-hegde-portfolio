import React from "react";
import { motion } from 'framer-motion';
import { Award, Cloud, Code, Terminal, Coffee } from 'lucide-react';
import { certifications } from '../../data/profile';
import SectionHeading from '../ui/SectionHeading';

const iconFor = (title: string) => {
  if (title.includes('AWS') || title.includes('Cloud')) return Cloud;
  if (title.includes('Python')) return Code;
  if (title.includes('Linux')) return Terminal;
  if (title.includes('Java')) return Coffee;
  return Award;
};

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="· Certifications ·"
          title="Certified, not just self-taught"
          description="Issued by AWS, Meta, Infosys Springboard, and Oracle Academy."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => {
            const Icon = iconFor(cert.title);
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="glass group relative overflow-hidden rounded-2xl p-6 transition-transform hover:-translate-y-1.5 hover:shadow-glow"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-signal to-amber text-void transition-transform group-hover:scale-110">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold leading-snug text-slate-deep dark:text-ink">
                  {cert.title}
                </h3>
                <p className="mt-2 font-mono text-xs text-signal-dim dark:text-signal">
                  {cert.issuer}
                </p>
                <p className="mt-1 font-body text-xs text-slate-deep/55 dark:text-ink/45">
                  {cert.date}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

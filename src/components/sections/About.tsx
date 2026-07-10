import React from "react";
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import SectionHeading from '../ui/SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="· About ·"
          title="A bit about me"
          description="Beyond the tech stack."
        />

        <div className="glass rounded-2xl p-8 sm:p-10">
          {profile.about.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className={`font-body text-base leading-relaxed text-slate-deep/80 dark:text-ink/70 ${
                i > 0 ? 'mt-4' : ''
              }`}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

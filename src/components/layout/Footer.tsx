import React from "react";
import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../../data/profile';

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-slate-deep/10 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-body text-xs text-slate-deep/55 dark:text-ink/45">
  © {new Date().getFullYear()} {profile.name}. Designed &amp; Developed by {profile.name}.
</p>
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-deep/55 transition-colors hover:text-signal-dim dark:text-ink/45 dark:hover:text-signal"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-deep/55 transition-colors hover:text-signal-dim dark:text-ink/45 dark:hover:text-signal"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-slate-deep/55 transition-colors hover:text-signal-dim dark:text-ink/45 dark:hover:text-signal"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

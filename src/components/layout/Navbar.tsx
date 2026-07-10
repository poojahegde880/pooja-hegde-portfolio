import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, profile } from '../../data/profile';
import { useActiveSection } from '../../hooks/useActiveSection';
import ThemeToggle from './ThemeToggle';

const sectionIds = navLinks.map((l) => l.href.replace('#', ''));

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 transition-all duration-300 ${
          scrolled ? 'glass shadow-glass py-3' : 'py-1'
        }`}
        style={{ marginLeft: '1rem', marginRight: '1rem' }}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="font-display text-lg font-bold tracking-tight text-slate-deep dark:text-ink"
        >
          Pooja<span className="text-signal">.</span>Hegde
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = active === id;
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative rounded-full px-4 py-2 font-body text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-signal-dim dark:text-signal'
                    : 'text-slate-deep/70 hover:text-slate-deep dark:text-ink/60 dark:hover:text-ink'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-signal/10 dark:bg-signal/15"
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href={profile.resumeFile}
            download
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-signal to-amber px-4 py-2 font-body text-sm font-semibold text-void shadow-glow transition-transform hover:scale-105"
          >
            <Download size={15} />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
            className="text-slate-deep dark:text-ink"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass mx-4 mt-2 flex flex-col gap-1 rounded-2xl p-3 shadow-glass md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="rounded-xl px-4 py-3 text-left font-body text-sm font-medium text-slate-deep hover:bg-signal/10 dark:text-ink"
              >
                {link.label}
              </button>
            ))}
            <a
              href={profile.resumeFile}
              download
              className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-signal to-amber px-4 py-3 font-body text-sm font-semibold text-void"
            >
              <Download size={15} />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

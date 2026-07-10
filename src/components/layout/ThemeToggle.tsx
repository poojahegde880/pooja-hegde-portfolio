import React from "react";
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative flex h-9 w-16 items-center rounded-full border border-slate-deep/15 bg-mist-surface px-1 transition-colors dark:border-white/10 dark:bg-void-surface"
    >
      <span
        className={`absolute flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-signal to-amber text-void shadow-md transition-transform duration-300 ${
          theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {theme === 'dark' ? <Moon size={14} /> : <Sun size={14} />}
      </span>
    </button>
  );
};

export default ThemeToggle;

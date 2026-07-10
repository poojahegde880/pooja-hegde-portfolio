import React from "react";
import { Code2 } from 'lucide-react';
import { skillIcons, skillColors } from '../../data/skillIcons';

interface TechIconProps {
  name: string;
  size?: 'sm' | 'md';
}

const TechIcon: React.FC<TechIconProps> = ({ name, size = 'md' }) => {
  const Icon = skillIcons[name] ?? Code2;
  const color = skillColors[name] ?? '#94A3B8';
  const box = size === 'sm' ? 'h-9 w-9' : 'h-11 w-11';
  const iconSize = size === 'sm' ? 16 : 19;

  return (
    <div className="group relative">
      <div
        className={`flex ${box} items-center justify-center rounded-xl border border-slate-deep/10 bg-slate-deep/5 transition-transform duration-200 group-hover:-translate-y-1 group-hover:border-slate-deep/20 dark:border-white/10 dark:bg-white/5 dark:group-hover:border-white/25`}
      >
        <Icon size={iconSize} style={{ color }} />
      </div>
      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-deep px-2 py-1 font-mono text-[10px] text-mist opacity-0 shadow-glass transition-opacity duration-150 group-hover:opacity-100 dark:bg-void-surface">
        {name}
      </span>
    </div>
  );
};

export default TechIcon;

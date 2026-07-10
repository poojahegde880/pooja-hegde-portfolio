import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onFinish: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.ceil(Math.random() * 18);
      });
    }, 120);

    const timeout = setTimeout(() => {
      setVisible(false);
      onFinish();
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-24 w-24">
            <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
              <motion.circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 42}
                initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 42 * (1 - Math.min(progress, 100) / 100) }}
                transition={{ ease: 'easeOut', duration: 0.3 }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center font-display text-lg font-semibold text-ink">
              PH
            </div>
          </div>
          <p className="mt-6 font-mono text-xs tracking-[0.3em] text-ink/60">
            LOADING PORTFOLIO {Math.min(progress, 100)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

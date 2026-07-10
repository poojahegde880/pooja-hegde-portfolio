import { useEffect, useState } from 'react';

export function useTypingEffect(words: string[], speed = 70, pause = 1800): string {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: number;

    if (!deleting && text.length < current.length) {
      timeout = window.setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = window.setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => window.clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

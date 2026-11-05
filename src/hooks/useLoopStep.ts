import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

// Advances a step counter while the element is on screen. Stays on step 0 when reduced motion is preferred.
export function useLoopStep(count: number, interval = 1600) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-15% 0px' });
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const id = window.setInterval(() => setStep((s) => (s + 1) % count), interval);
    return () => window.clearInterval(id);
  }, [inView, reduce, count, interval]);

  return { ref, step, reduce: !!reduce };
}
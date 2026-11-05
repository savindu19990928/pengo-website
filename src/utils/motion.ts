import { Variants } from 'framer-motion';

export const easeOut: [number, number, number, number] = [0.23, 1, 0.32, 1];

export const popIn: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: easeOut } }
};

export function stagger(each = 0.08, delay = 0.1): Variants {
  return { hidden: {}, show: { transition: { staggerChildren: each, delayChildren: delay } } };
}
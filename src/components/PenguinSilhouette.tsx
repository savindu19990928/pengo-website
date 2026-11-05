import React from 'react';
import { motion, MotionValue } from 'framer-motion';

type PenguinSilhouetteProps = {
  className?: string;
  draw?: MotionValue<number>;
  revealOnView?: boolean;
  strokeWidth?: number;
};

const paths = [
'M104 14 C78 14 62 34 60 60 C59 76 63 90 60 106 C48 138 38 176 42 214 C46 254 70 284 104 288 C138 284 160 254 162 214 C165 176 154 138 144 106 C141 90 146 74 145 58 C143 32 128 14 104 14 Z',
'M104 84 C86 86 76 110 74 142 C70 190 78 246 104 266 C130 246 138 190 134 142 C132 110 122 86 104 84 Z',
'M62 56 L30 66 L62 74',
'M60 118 C42 146 32 182 36 214 C48 192 58 166 64 140',
'M146 118 C164 146 174 182 170 214 C158 192 148 166 142 140',
'M82 286 L72 296 L98 294',
'M126 286 L136 296 L110 294'];


export function PenguinSilhouette({ className = '', draw, revealOnView = false, strokeWidth = 1.5 }: PenguinSilhouetteProps) {
  const viewProps = revealOnView ?
  {
    initial: { pathLength: 0 },
    whileInView: { pathLength: 1 },
    viewport: { once: true },
    transition: { duration: 2.4, ease: 'easeInOut' as const }
  } :
  {};

  return (
    <svg
      viewBox="0 0 200 300"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true">
      
      {paths.map((d) =>
      <motion.path key={d} d={d} vectorEffect="non-scaling-stroke" style={draw ? { pathLength: draw } : undefined} {...viewProps} />
      )}
      <motion.circle cx="84" cy="46" r="3.5" fill="currentColor" stroke="none" style={draw ? { opacity: draw } : undefined} />
    </svg>);

}
import React from 'react';
import { motion } from 'framer-motion';
import { stagger } from '../../utils/motion';

type VignetteFrameProps = {label: string;tone?: 'dark' | 'light';children: React.ReactNode;};

export function VignetteFrame({ label, tone = 'dark', children }: VignetteFrameProps) {
  return (
    <motion.div
      role="img"
      aria-label={label}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-15% 0px' }}
      variants={stagger(0.09, 0.15)}
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] ${
      tone === 'dark' ? 'bg-navy text-snow ring-1 ring-white/10' : 'bg-ice text-midnight ring-1 ring-icegrey/50'}`
      }>
      
      {children}
    </motion.div>);

}
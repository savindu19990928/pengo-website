import React from 'react';
import { motion } from 'framer-motion';

/** A gently moving waterline — a quiet nod to penguins moving between land and water. */
export function Waterline({ fill = '#0B1B32', className = '' }: {fill?: string;className?: string;}) {
  const wave = 'M0 0 H1440 V18 C1320 34 1200 34 1080 18 C960 2 840 2 720 18 C600 34 480 34 360 18 C240 2 120 2 0 18 Z';
  return (
    <div aria-hidden="true" className={`pointer-events-none overflow-hidden leading-none ${className}`}>
      <motion.svg
        viewBox="0 0 2880 36"
        preserveAspectRatio="none"
        className="block h-6 w-[200%] md:h-9"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}>
        
        <path d={wave} fill={fill} />
        <path d={wave} fill={fill} transform="translate(1440 0)" />
      </motion.svg>
    </div>);

}
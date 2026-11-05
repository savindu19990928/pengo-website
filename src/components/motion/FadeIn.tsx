import React from 'react';
import { motion } from 'framer-motion';
import { easeOut } from '../../utils/motion';

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
};

export function FadeIn({ children, className, delay = 0, y = 24, x = 0 }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.7, ease: easeOut, delay }}>
      
      {children}
    </motion.div>);

}
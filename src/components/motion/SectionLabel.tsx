import React from 'react';
import { motion } from 'framer-motion';
import { easeOut } from '../../utils/motion';

type SectionLabelProps = {children: React.ReactNode;tone?: 'dark' | 'light';};

export function SectionLabel({ children, tone = 'dark' }: SectionLabelProps) {
  const color = tone === 'dark' ? 'text-glacier' : 'text-arctic-deep';
  const line = tone === 'dark' ? 'bg-glacier' : 'bg-arctic-deep';
  return (
    <div className="flex items-center gap-3">
      <motion.span
        aria-hidden="true"
        className={`h-px w-10 origin-left ${line}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOut }} />
      
      <span className={`text-sm font-semibold ${color}`}>{children}</span>
    </div>);

}
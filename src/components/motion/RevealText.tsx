import React from 'react';
import { motion, Variants } from 'framer-motion';
import { easeOut } from '../../utils/motion';

type RevealTextProps = {
  text: string;
  highlight?: string;
  as?: 'h1' | 'h2' | 'h3';
  id?: string;
  className?: string;
  highlightClassName?: string;
  delay?: number;
  onMount?: boolean;
};

const wordVariants: Variants = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 0.8, ease: easeOut } }
};

export function RevealText({
  text,
  highlight,
  as = 'h2',
  id,
  className = '',
  highlightClassName = '',
  delay = 0,
  onMount = false
}: RevealTextProps) {
  const index = highlight ? text.lastIndexOf(highlight) : -1;
  const before = index >= 0 ? text.slice(0, index) : text;
  const accent = index >= 0 && highlight ? highlight : '';
  const words = [
  ...before.split(' ').filter(Boolean).map((w) => ({ w, accent: false })),
  ...accent.split(' ').filter(Boolean).map((w) => ({ w, accent: true }))];


  const Tag = as === 'h1' ? motion.h1 : as === 'h3' ? motion.h3 : motion.h2;
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: delay } }
  };
  const trigger = onMount ?
  { animate: 'show' } :
  { whileInView: 'show', viewport: { once: true, margin: '-10% 0px' } };

  return (
    <Tag id={id} aria-label={text} className={className} variants={container} initial="hidden" {...trigger}>
      {words.map((item, i) =>
      <React.Fragment key={`${item.w}-${i}`}>
          <span aria-hidden="true" className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-top">
            <motion.span variants={wordVariants} className={`inline-block ${item.accent ? highlightClassName : ''}`}>
              {item.w}
            </motion.span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </React.Fragment>
      )}
    </Tag>);

}
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RevealText } from '../motion/RevealText';
import { SectionLabel } from '../motion/SectionLabel';
import { milestones } from '../../data/about';
import { easeOut } from '../../utils/motion';

const dots = ['bg-pengo-blue', 'bg-pengo-red', 'bg-pengo-green', 'bg-pengo-orange'];

export function StoryTimeline() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 60%'] });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section aria-labelledby="story-title" className="bg-snow text-midnight">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-32 lg:px-12">
        <SectionLabel tone="light">Our story</SectionLabel>
        <RevealText
          id="story-title"
          text="Founded in 2023. Built for what comes next."
          highlight="Built for what comes next."
          className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-6xl"
          highlightClassName="text-arctic-deep" />
        

        <ol ref={ref} className="relative mt-16 grid gap-10 pl-8 md:grid-cols-4 md:gap-8 md:pl-0 md:pt-12">
          <span aria-hidden="true" className="absolute bottom-0 left-[5px] top-0 w-px bg-icegrey/70 md:bottom-auto md:left-0 md:right-0 md:top-[5px] md:h-px md:w-auto" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: progress }}
            className="absolute bottom-0 left-[5px] top-0 w-px origin-top bg-arctic-deep md:hidden" />
          
          <motion.span
            aria-hidden="true"
            style={{ scaleX: progress }}
            className="absolute left-0 right-0 top-[5px] hidden h-px origin-left bg-arctic-deep md:block" />
          
          {milestones.map((m, i) =>
          <motion.li
            key={m.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.5, ease: easeOut, delay: i * 0.08 }}
            className="relative">
            
              <span aria-hidden="true" className={`absolute -left-8 top-1.5 h-[11px] w-[11px] rounded-full ring-4 ring-snow md:-top-12 md:left-0 ${dots[i % dots.length]}`} />
              <p className="text-sm font-semibold text-arctic-deep">{m.date}</p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.02em]">{m.title}</h3>
              <p className="mt-3 leading-relaxed text-steel">{m.text}</p>
            </motion.li>
          )}
        </ol>
      </div>
    </section>);

}
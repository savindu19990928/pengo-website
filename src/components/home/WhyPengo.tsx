import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from '../motion/RevealText';
import { SectionLabel } from '../motion/SectionLabel';
import { FadeIn } from '../motion/FadeIn';
import { whyPengo } from '../../data/home';
import { accentStyles } from '../../utils/accent';
import { easeOut } from '../../utils/motion';

export function WhyPengo() {
  return (
    <section aria-labelledby="why-title" className="bg-white text-midnight">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12 lg:px-12">
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <SectionLabel tone="light">Why Pengo</SectionLabel>
          <RevealText
            id="why-title"
            text="One partner for everything digital and physical."
            highlight="digital and physical."
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl"
            highlightClassName="text-arctic-deep" />
          
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-steel">
              Fewer vendors, clearer accountability, and solutions that work together from the start.
            </p>
          </FadeIn>
        </div>

        <ul className="border-t border-ice lg:col-span-6 lg:col-start-7">
          {whyPengo.map((reason, i) =>
          <motion.li
            key={reason.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.5, ease: easeOut, delay: i * 0.05 }}
            className="flex gap-5 border-b border-ice py-8">
            
              <span aria-hidden="true" className={`mt-3 h-2 w-2 shrink-0 rounded-full ${accentStyles[reason.accent].dot}`} />
              <div>
                <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">{reason.title}</h3>
                <p className="mt-2 text-lg leading-relaxed text-steel">{reason.text}</p>
              </div>
            </motion.li>
          )}
        </ul>
      </div>
    </section>);

}
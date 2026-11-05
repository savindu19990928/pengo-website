import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../motion/SectionLabel';
import { RevealText } from '../motion/RevealText';
import { coreValues } from '../../data/about';
import { easeOut } from '../../utils/motion';

export function CoreValues() {
  const pending = coreValues.some((v) => v.placeholder);

  return (
    <section aria-labelledby="values-title" className="bg-snow text-midnight">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-32 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel tone="light">Our core values</SectionLabel>
            <RevealText
              id="values-title"
              text="The principles behind every project."
              highlight="behind every project."
              className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl"
              highlightClassName="text-arctic-deep" />
            
          </div>
          {pending &&
          <p className="text-sm leading-relaxed text-steel lg:col-span-4 lg:col-start-9">
              Pengo’s official core values will appear here once confirmed. The spaces below are placeholders.
            </p>
          }
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, i) =>
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeOut, delay: i * 0.06 }}
            className={`flex min-h-[200px] flex-col rounded-[1.5rem] p-6 ${value.placeholder ? 'border border-dashed border-icegrey' : 'bg-white ring-1 ring-ice'}`}>
            
              <span className="text-sm font-semibold text-steel">Value {i + 1}</span>
              <h3 className={`mt-auto font-display text-2xl font-bold tracking-[-0.02em] ${value.placeholder ? 'text-steel' : ''}`}>{value.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{value.description}</p>
            </motion.li>
          )}
        </ul>
      </div>
    </section>);

}
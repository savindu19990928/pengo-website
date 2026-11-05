import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from '../motion/RevealText';
import { SectionLabel } from '../motion/SectionLabel';
import { ServicePageContent } from '../../types/servicePage';
import { Accent, accentStyles } from '../../utils/accent';
import { easeOut } from '../../utils/motion';

type ServiceImpactProps = {impact: ServicePageContent['impact'];accent: Accent;};

export function ServiceImpact({ impact, accent }: ServiceImpactProps) {
  const styles = accentStyles[accent];

  return (
    <section aria-labelledby="impact-title" className="bg-white text-midnight">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-32 lg:px-12">
        <SectionLabel tone="light">Business impact</SectionLabel>
        <RevealText
          id="impact-title"
          text={impact.title}
          highlight={impact.highlight}
          className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-6xl"
          highlightClassName="text-arctic-deep" />
        
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {impact.items.map((item, i) =>
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.55, ease: easeOut, delay: i * 0.08 }}>
            
              <div className="relative h-px bg-ice">
                <motion.span
                className={`absolute inset-y-0 left-0 w-full origin-left ${styles.bar}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 0.25 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easeOut, delay: 0.2 + i * 0.08 }} />
              
              </div>
              <h3 className="mt-7 font-display text-2xl font-bold tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-steel">{item.text}</p>
            </motion.div>
          )}
        </div>
        <p className="mt-16 text-sm text-steel">Measured project results are published only with client approval.</p>
      </div>
    </section>);

}
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { SectionLabel } from '../motion/SectionLabel';
import { RevealText } from '../motion/RevealText';
import { capabilities } from '../../data/capabilities';
import { accentStyles } from '../../utils/accent';
import { easeOut } from '../../utils/motion';

export function IntegratedCapabilities() {
  return (
    <section aria-labelledby="integrated-title" className="bg-ice text-midnight">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-32 lg:px-12">
        <SectionLabel tone="light">Our integrated capabilities</SectionLabel>
        <RevealText
          id="integrated-title"
          text="Every capability, connected."
          highlight="connected."
          className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl"
          highlightClassName="text-arctic-deep" />
        
        <ul className="mt-14 border-t border-icegrey/70">
          {capabilities.map((c, i) =>
          <motion.li
            key={c.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: easeOut, delay: i * 0.05 }}>
            
              <Link
              to={c.path}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-1 border-b border-icegrey/70 py-7 md:grid-cols-[auto_minmax(0,1fr)_minmax(0,1.3fr)_auto] md:gap-x-8">
              
                <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${accentStyles[c.accent].dot}`} />
                <span className="font-display text-2xl font-bold tracking-[-0.02em] transition-colors duration-200 group-hover:text-arctic-deep md:text-3xl">{c.name}</span>
                <span className="col-start-2 row-start-2 text-steel md:col-start-3 md:row-start-1">{c.summary}</span>
                <span className="col-start-3 row-start-1 grid h-10 w-10 place-items-center rounded-full border border-midnight/15 transition-colors duration-200 group-hover:border-midnight group-hover:bg-midnight group-hover:text-white md:col-start-4">
                  <ArrowUpRightIcon className="h-4 w-4" />
                </span>
              </Link>
            </motion.li>
          )}
        </ul>
      </div>
    </section>);

}
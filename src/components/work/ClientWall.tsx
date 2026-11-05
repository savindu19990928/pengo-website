import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../motion/SectionLabel';
import { RevealText } from '../motion/RevealText';
import { clients } from '../../data/clients';
import { companyStats } from '../../data/company';
import { easeOut } from '../../utils/motion';

export function ClientWall() {
  return (
    <section aria-labelledby="clients-title" className="bg-white text-midnight">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-28 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionLabel tone="light">Clients</SectionLabel>
            <RevealText
              id="clients-title"
              text="Trusted by leading businesses."
              highlight="leading businesses."
              className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl"
              highlightClassName="text-arctic-deep" />
            
          </div>
          <div className="flex items-end gap-4">
            <p className="font-display text-6xl font-extrabold leading-none tracking-[-0.05em] md:text-7xl">
              {companyStats.clientSatisfaction.value}
              <span className="text-arctic-deep">{companyStats.clientSatisfaction.suffix}</span>
            </p>
            <p className="max-w-[11rem] pb-1 text-sm leading-snug text-steel">
              {companyStats.clientSatisfaction.label} across diverse commercial sectors
            </p>
          </div>
        </div>
        <ul className="mt-14 grid grid-cols-2 gap-3 md:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {clients.map((client, i) =>
          <motion.li
            key={client.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-5% 0px' }}
            transition={{ duration: 0.4, ease: easeOut, delay: i % 6 * 0.04 }}
            className="flex flex-col items-center rounded-2xl bg-snow px-4 pb-5 pt-5 text-center ring-1 ring-ice">
            
              <div className="flex h-20 w-full items-center justify-center md:h-24">
                <img src={client.logo} alt={`${client.name} logo`} loading="lazy" className="h-full w-auto max-w-full object-contain" />
              </div>
              <span className="mt-4 min-h-[2.6em] text-[11px] font-medium uppercase leading-snug tracking-[0.1em] text-midnight md:text-xs">{client.name}</span>
            </motion.li>
          )}
        </ul>
      </div>
    </section>);

}
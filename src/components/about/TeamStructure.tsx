import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, MonitorIcon } from 'lucide-react';
import { SectionLabel } from '../motion/SectionLabel';
import { RevealText } from '../motion/RevealText';
import { FadeIn } from '../motion/FadeIn';
import { teamModes } from '../../data/company';
import { easeOut } from '../../utils/motion';

const icons = [MapPinIcon, MonitorIcon];

export function TeamStructure() {
  return (
    <section aria-labelledby="structure-title" className="bg-navy text-snow">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <SectionLabel>How we work</SectionLabel>
          <RevealText
            id="structure-title"
            text="On site and online. One colony."
            highlight="One colony."
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl"
            highlightClassName="text-glacier" />
          
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-icegrey">
              Like penguins moving between land and water, our team works wherever the job is — installing systems on
              site and building digital products remotely. Complex technical and marketing challenges are handled under
              one roof, by one agile team.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[1.75rem] bg-white/10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          {teamModes.map((mode, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={mode.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.5, ease: easeOut, delay: i * 0.08 }}
                className="flex flex-col bg-navy p-8 md:p-10">
                
                <Icon className="h-6 w-6 text-glacier" />
                <h3 className="mt-8 font-display text-2xl font-bold tracking-[-0.02em]">{mode.title}</h3>
                <p className="mt-3 leading-relaxed text-icegrey">{mode.text}</p>
                <ul className="mt-auto space-y-2 pt-8">
                  {mode.points.map((p) =>
                  <li key={p} className="flex items-center gap-2.5 text-sm font-medium">
                      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-glacier" />
                      {p}
                    </li>
                  )}
                </ul>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}
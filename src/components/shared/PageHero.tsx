import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from '../motion/RevealText';
import { SectionLabel } from '../motion/SectionLabel';
import { SnowParticles } from '../SnowParticles';
import { PenguinSilhouette } from '../PenguinSilhouette';
import { Breadcrumbs, Crumb } from './Breadcrumbs';
import { easeOut } from '../../utils/motion';

type PageHeroProps = {
  label: string;
  title: string;
  highlight?: string;
  intro?: string;
  crumbs: Crumb[];
  aside?: React.ReactNode;
};

export function PageHero({ label, title, highlight, intro, crumbs, aside }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-snow">
      <SnowParticles density={30} className="absolute inset-0 -z-10 h-full w-full" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 right-[4%] -z-10 hidden lg:block">
        <PenguinSilhouette revealOnView strokeWidth={1.2} className="h-[440px] text-white/[0.08]" />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-44 lg:px-12">
        <Breadcrumbs items={crumbs} />
        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionLabel>{label}</SectionLabel>
            <RevealText
              as="h1"
              onMount
              delay={0.1}
              text={title}
              highlight={highlight}
              className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.03] tracking-[-0.035em] sm:text-6xl md:text-7xl"
              highlightClassName="text-glacier" />
            
            {intro &&
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut, delay: 0.5 }}
              className="mt-7 max-w-2xl text-lg leading-relaxed text-icegrey">
              
                {intro}
              </motion.p>
            }
          </div>
          {aside &&
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.65 }}
            className="lg:col-span-3 lg:col-start-10">
            
              {aside}
            </motion.div>
          }
        </div>
      </div>
    </section>);

}
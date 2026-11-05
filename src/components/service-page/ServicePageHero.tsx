import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDownIcon, ArrowRightIcon } from 'lucide-react';
import { RevealText } from '../motion/RevealText';
import { SnowParticles } from '../SnowParticles';
import { Breadcrumbs } from '../shared/Breadcrumbs';
import { Capability } from '../../data/capabilities';
import { ServicePageContent } from '../../types/servicePage';
import { accentStyles } from '../../utils/accent';
import { easeOut } from '../../utils/motion';

type ServicePageHeroProps = {capability: Capability;hero: ServicePageContent['hero'];visual: React.ReactNode;};

export function ServicePageHero({ capability, hero, visual }: ServicePageHeroProps) {
  const accent = accentStyles[capability.accent];

  return (
    <section aria-labelledby="service-title" className="relative isolate overflow-hidden bg-navy text-snow">
      <SnowParticles density={28} className="absolute inset-0 -z-10 h-full w-full" />
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 pb-20 pt-32 md:px-8 lg:min-h-[88svh] lg:grid-cols-12 lg:gap-10 lg:px-12 lg:pb-24 lg:pt-36">
        <div className="lg:col-span-6 xl:col-span-5">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: capability.name }]} />
          <div className="mt-10 flex items-center gap-2.5 text-sm">
            <span aria-hidden="true" className={`h-2 w-2 rounded-full ${accent.dotDark}`} />
            <span className="font-semibold">{capability.name}</span>
            <span className="text-icegrey">· {capability.tagline}</span>
          </div>
          <RevealText
            as="h1"
            id="service-title"
            onMount
            delay={0.1}
            text={hero.title}
            highlight={hero.highlight}
            className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.03] tracking-[-0.035em] sm:text-6xl xl:text-[4.3rem]"
            highlightClassName={accent.onDark} />
          
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: easeOut, delay: 0.55 }}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-icegrey">{hero.intro}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-arctic-deep px-7 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-arctic-darker">
                
                Get a Quote
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/25 px-7 py-4 text-sm font-semibold transition-colors duration-200 hover:border-glacier hover:text-glacier">
                
                Explore services
                <ArrowDownIcon className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.3 }}
          className="lg:col-span-6 xl:col-span-7">
          
          {visual}
        </motion.div>
      </div>
    </section>);

}
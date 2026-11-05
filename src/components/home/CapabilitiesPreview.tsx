import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { RevealText } from '../motion/RevealText';
import { SectionLabel } from '../motion/SectionLabel';
import { DesignVignette } from '../vignettes/DesignVignette';
import { MarketingVignette } from '../vignettes/MarketingVignette';
import { TechnologyVignette } from '../vignettes/TechnologyVignette';
import { SmartLivingVignette } from '../vignettes/SmartLivingVignette';
import { SecurityVignette } from '../vignettes/SecurityVignette';
import { capabilities, CapabilityId } from '../../data/capabilities';
import { accentStyles } from '../../utils/accent';
import { easeOut } from '../../utils/motion';

function Preview({ id }: {id: CapabilityId;}) {
  switch (id) {
    case 'design':
      return <DesignVignette id="user-centric" />;
    case 'marketing':
      return <MarketingVignette id="content-creation" />;
    case 'technology':
      return <TechnologyVignette id="erp-distributor" />;
    case 'smart-living':
      return <SmartLivingVignette id="smart-lighting" />;
    default:
      return <SecurityVignette id="cctv-solutions" />;
  }
}

export function CapabilitiesPreview() {
  const [active, setActive] = useState<CapabilityId>('marketing');

  return (
    <section id="capabilities" aria-labelledby="capabilities-title" className="scroll-mt-20 bg-snow text-midnight">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-32 lg:px-12">
        <div className="max-w-3xl">
          <SectionLabel tone="light">Our capabilities</SectionLabel>
          <RevealText
            id="capabilities-title"
            text="Five capabilities. One connected partner."
            highlight="One connected partner."
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-6xl"
            highlightClassName="text-arctic-deep" />
          
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <ul className="border-t border-icegrey/60 lg:col-span-5">
            {capabilities.map((c) => {
              const isActive = c.id === active;
              const accent = accentStyles[c.accent];
              return (
                <li key={c.id} className="border-b border-icegrey/60" onMouseEnter={() => setActive(c.id)}>
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={`cap-${c.id}`}
                    onClick={() => setActive(c.id)}
                    onFocus={() => setActive(c.id)}
                    className="group flex w-full items-center gap-4 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arctic">
                    
                    <span aria-hidden="true" className={`h-2.5 w-2.5 shrink-0 rounded-full transition-transform duration-200 ${accent.dot} ${isActive ? 'scale-125' : ''}`} />
                    <span className="flex-1">
                      <span className={`block font-display text-2xl font-bold tracking-[-0.02em] transition-colors duration-200 md:text-3xl ${isActive ? 'text-midnight' : 'text-steel group-hover:text-midnight'}`}>
                        {c.name}
                      </span>
                      <span className="mt-1 block text-sm text-steel">{c.tagline}</span>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isActive &&
                    <motion.div
                      id={`cap-${c.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: easeOut }}
                      className="overflow-hidden">
                      
                        <div className="pb-7 pl-[1.65rem]">
                          <p className="max-w-md leading-relaxed text-steel">{c.summary}</p>
                          <div className="mt-6 lg:hidden">
                            <Preview id={c.id} />
                          </div>
                          <Link
                          to={c.path}
                          className="group/link mt-6 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-arctic-deep px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-arctic-darker">
                          
                            Explore {c.name}
                            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                          </Link>
                        </div>
                      </motion.div>
                    }
                  </AnimatePresence>
                </li>);

            })}
          </ul>

          <div className="hidden lg:col-span-7 lg:block">
            <div className="sticky top-28">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22, ease: easeOut }}>
                  
                  <Preview id={active} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
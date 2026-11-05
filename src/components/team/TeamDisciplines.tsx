import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { FadeIn } from '../motion/FadeIn';
import { teamGroups } from '../../data/team';
import { useCountUp } from '../../hooks/useCountUp';
import { easeOut } from '../../utils/motion';

export function TeamDisciplines() {
  const [open, setOpen] = useState<string | null>(teamGroups[1].id);
  const { ref, value } = useCountUp(20);

  return (
    <section aria-label="Team disciplines" className="bg-white text-midnight">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12 lg:px-12">
        <FadeIn className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <p className="font-display text-8xl font-extrabold leading-none tracking-[-0.05em]">
            <span ref={ref}>{value}</span>
            <span className="text-arctic-deep">+</span>
          </p>
          <p className="mt-4 text-lg font-medium">Professionals across five disciplines</p>
          <p className="mt-4 max-w-sm leading-relaxed text-steel">
            Engineers, technicians, designers, marketers and project managers working as one team on every engagement.
          </p>
          <p className="mt-8 border-t border-ice pt-6 text-sm leading-relaxed text-steel">
            Individual team profiles and photography will be introduced here soon.
          </p>
        </FadeIn>

        <ul className="border-t border-ice lg:col-span-7 lg:col-start-6">
          {teamGroups.map((group, i) => {
            const isOpen = open === group.id;
            return (
              <motion.li
                key={group.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easeOut, delay: i * 0.06 }}
                className="border-b border-ice">
                
                <h2>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`team-${group.id}`}
                    onClick={() => setOpen(isOpen ? null : group.id)}
                    className="group flex w-full items-center gap-6 py-7 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arctic-deep md:py-8">
                    
                    <span className="flex-1">
                      <span className="block font-display text-2xl font-bold tracking-[-0.02em] transition-colors duration-200 group-hover:text-arctic-deep md:text-3xl">
                        {group.name}
                      </span>
                      <span className="mt-1 block text-sm text-steel">{group.summary}</span>
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: easeOut }}
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-colors duration-200 ${
                      isOpen ? 'border-midnight bg-midnight text-snow' : 'border-midnight/15'}`
                      }>
                      
                      <PlusIcon className="h-4 w-4" />
                    </motion.span>
                  </button>
                </h2>
                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.div
                    id={`team-${group.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: easeOut }}
                    className="overflow-hidden">
                    
                      <div className="pb-8 pr-16">
                        <p className="max-w-xl text-lg leading-relaxed text-charcoal/80">{group.description}</p>
                        <ul className="mt-5 flex flex-wrap gap-2">
                          {group.focus.map((f) =>
                        <li key={f} className="rounded-full bg-ice px-3.5 py-1.5 text-sm font-medium text-midnight">
                              {f}
                            </li>
                        )}
                        </ul>
                      </div>
                    </motion.div>
                  }
                </AnimatePresence>
              </motion.li>);

          })}
        </ul>
      </div>
    </section>);

}
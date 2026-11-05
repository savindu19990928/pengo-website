import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { caseStudies } from '../../data/caseStudies';
import { easeOut } from '../../utils/motion';

function indexFromId(id: string | null) {
  const found = caseStudies.findIndex((cs) => cs.id === id);
  return found >= 0 ? found : 0;
}

export function CaseStudyExplorer() {
  const [params, setParams] = useSearchParams();
  const [index, setIndex] = useState(() => indexFromId(params.get('study')));
  const [direction, setDirection] = useState(1);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const study = caseStudies[index];

  useEffect(() => {
    const next = indexFromId(params.get('study'));
    setIndex((current) => {
      if (current !== next) setDirection(next > current ? 1 : -1);
      return next;
    });
  }, [params]);

  const go = (next: number) => {
    const wrapped = (next + caseStudies.length) % caseStudies.length;
    setDirection(next > index ? 1 : -1);
    setIndex(wrapped);
    setParams({ study: caseStudies[wrapped].id }, { replace: true });
  };

  const onTabKey = (e: React.KeyboardEvent, i: number) => {
    const forward = e.key === 'ArrowDown' || e.key === 'ArrowRight';
    const back = e.key === 'ArrowUp' || e.key === 'ArrowLeft';
    if (!forward && !back) return;
    e.preventDefault();
    const next = (i + (forward ? 1 : -1) + caseStudies.length) % caseStudies.length;
    go(next);
    tabRefs.current[next]?.focus();
  };

  const rows: {label: string;content: React.ReactNode;}[] = [
  { label: 'Client Background', content: study.background },
  { label: 'The Challenge', content: study.challenge },
  { label: 'Our Approach', content: study.approach },
  { label: 'The Solution', content: study.solution },
  {
    label: 'Technologies Used',
    content:
    <ul className="flex flex-wrap gap-2">
          {study.technologies.map((tech) =>
      <li key={tech} className="rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-midnight ring-1 ring-icegrey/60">
              {tech}
            </li>
      )}
        </ul>

  },
  { label: 'The Outcome', content: <span className="font-medium text-midnight">{study.outcome}</span> }];


  return (
    <section aria-label="Case study explorer" className="bg-ice text-midnight">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12 lg:px-12">
        <div
          role="tablist"
          aria-label="Case studies"
          aria-orientation="vertical"
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:sticky lg:top-28 lg:col-span-4 lg:mx-0 lg:flex-col lg:self-start lg:overflow-visible lg:px-0 lg:pb-0">
          
          {caseStudies.map((cs, i) => {
            const active = i === index;
            return (
              <button
                key={cs.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`case-tab-${cs.id}`}
                aria-selected={active}
                aria-controls="case-panel"
                tabIndex={active ? 0 : -1}
                onClick={() => go(i)}
                onKeyDown={(e) => onTabKey(e, i)}
                className={`relative min-w-[240px] rounded-2xl px-6 py-5 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arctic-deep lg:min-w-0 ${
                active ? 'bg-white' : 'hover:bg-white/60'}`
                }>
                
                {active &&
                <motion.span
                  layoutId="case-indicator"
                  className="absolute bottom-5 left-0 top-5 w-1 rounded-full bg-arctic-deep"
                  transition={{ duration: 0.3, ease: easeOut }} />

                }
                <span className="block text-xs font-semibold text-arctic-deep">{cs.category}</span>
                <span className="mt-1.5 block font-display text-lg font-bold tracking-[-0.01em]">{cs.title}</span>
              </button>);

          })}
          <p className="hidden px-6 pt-6 text-sm leading-relaxed text-steel lg:block">
            Client names and results are published only with each client’s approval.
          </p>
        </div>

        <div className="lg:col-span-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={study.id}
              id="case-panel"
              role="tabpanel"
              aria-labelledby={`case-tab-${study.id}`}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.3, ease: easeOut }}>
              
              <div className="relative aspect-[16/8] overflow-hidden rounded-[1.75rem] bg-midnight">
                <motion.img
                  src={study.image}
                  alt={study.title}
                  initial={{ scale: 1.06 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.9, ease: easeOut }}
                  className="h-full w-full object-cover" />
                
              </div>
              <div className="mt-8 flex items-end justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold text-arctic-deep">{study.category}</p>
                  <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.02em] md:text-4xl">{study.title}</h2>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    onClick={() => go(index - 1)}
                    aria-label="Previous case study"
                    className="grid h-11 w-11 place-items-center rounded-full border border-midnight/15 transition-colors duration-200 hover:border-midnight hover:bg-midnight hover:text-snow">
                    
                    <ArrowLeftIcon className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(index + 1)}
                    aria-label="Next case study"
                    className="grid h-11 w-11 place-items-center rounded-full border border-midnight/15 transition-colors duration-200 hover:border-midnight hover:bg-midnight hover:text-snow">
                    
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <dl className="mt-8">
                {rows.map((row) =>
                <div key={row.label} className="grid gap-2 border-t border-icegrey/70 py-6 md:grid-cols-[200px_1fr] md:gap-8">
                    <dt className="text-sm font-semibold text-arctic-deep">{row.label}</dt>
                    <dd className="text-[17px] leading-relaxed text-charcoal/80">{row.content}</dd>
                  </div>
                )}
              </dl>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>);

}
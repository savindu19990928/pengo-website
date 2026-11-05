import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionLabel } from '../motion/SectionLabel';
import { RevealText } from '../motion/RevealText';
import { ProjectCard } from '../ProjectCard';
import { projects } from '../../data/projects';
import { capabilities, CapabilityId } from '../../data/capabilities';
import { easeOut } from '../../utils/motion';

type Filter = CapabilityId | 'all';

export function ProjectFilter() {
  const [filter, setFilter] = useState<Filter>('all');
  const visible = filter === 'all' ? projects : projects.filter((p) => p.tags.includes(filter));
  const options: {id: Filter;label: string;}[] = [{ id: 'all', label: 'All work' }, ...capabilities.map((c) => ({ id: c.id, label: c.name }))];

  return (
    <section aria-labelledby="projects-title" className="bg-snow text-midnight">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-28 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionLabel tone="light">Projects</SectionLabel>
            <RevealText
              id="projects-title"
              text="Selected projects."
              highlight="projects."
              className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl"
              highlightClassName="text-arctic-deep" />
            
          </div>
          <div role="group" aria-label="Filter projects by capability" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:px-0">
            {options.map((o) =>
            <button
              key={o.id}
              type="button"
              aria-pressed={filter === o.id}
              onClick={() => setFilter(o.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
              filter === o.id ? 'bg-midnight text-white' : 'bg-white text-midnight ring-1 ring-ice hover:ring-icegrey'}`
              }>
              
                {o.label}
              </button>
            )}
          </div>
        </div>

        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project, i) =>
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: easeOut }}>
              
                <ProjectCard project={project} index={i} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        {visible.length === 0 && <p className="mt-12 text-steel">Projects for this capability will be published soon.</p>}
        <p className="mt-10 text-sm text-steel">Client names and project details are shared only with client approval.</p>
      </div>
    </section>);

}
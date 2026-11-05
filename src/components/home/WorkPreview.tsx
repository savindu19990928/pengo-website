import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { RevealText } from '../motion/RevealText';
import { SectionLabel } from '../motion/SectionLabel';
import { FadeIn } from '../motion/FadeIn';
import { ProjectCard } from '../ProjectCard';
import { projects } from '../../data/projects';

export function WorkPreview() {
  return (
    <section aria-labelledby="work-title" className="bg-snow text-midnight">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-32 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <SectionLabel tone="light">Our work</SectionLabel>
            <RevealText
              id="work-title"
              text="Turning ideas into real-world solutions."
              highlight="real-world solutions."
              className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-6xl"
              highlightClassName="text-arctic-deep" />
            
          </div>
          <FadeIn delay={0.1}>
            <Link
              to="/our-work"
              className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-midnight px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-charcoal">
              
              View Our Work
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </FadeIn>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, i) =>
          <ProjectCard key={project.id} project={project} index={i} />
          )}
        </div>
      </div>
    </section>);

}
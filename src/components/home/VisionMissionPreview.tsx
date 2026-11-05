import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, GlobeIcon, WorkflowIcon } from 'lucide-react';
import { SectionLabel } from '../motion/SectionLabel';
import { RevealText } from '../motion/RevealText';
import { missionStatement, visionStatement } from '../../data/about';
import { easeOut } from '../../utils/motion';

const blocks = [
{
  id: 'vision',
  label: 'Our Vision',
  concept: 'A Global Vision, Originating from Sri Lanka.',
  text: visionStatement[0],
  icon: GlobeIcon,
  dot: 'bg-pengo-blue'
},
{
  id: 'mission',
  label: 'Our Mission',
  concept: 'Integrated Solutions. Meaningful Impact.',
  text: missionStatement[0],
  icon: WorkflowIcon,
  dot: 'bg-pengo-green-light'
}];


export function VisionMissionPreview() {
  return (
    <section aria-labelledby="vm-title" className="relative overflow-hidden bg-navy text-snow">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-32 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <SectionLabel>Vision &amp; mission</SectionLabel>
            <RevealText
              id="vm-title"
              text="Where we’re going, and how we get there."
              highlight="how we get there."
              className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl"
              highlightClassName="text-glacier" />
            
          </div>
          <Link to="/about#vision" className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/25 px-6 py-3 text-sm font-semibold transition-colors duration-200 hover:border-glacier hover:text-glacier">
            Discover Our Story
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] bg-white/10 lg:grid-cols-2">
          {blocks.map((b, i) =>
          <motion.article
            key={b.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.6, ease: easeOut, delay: i * 0.1 }}
            className="flex flex-col bg-navy p-8 md:p-12">
            
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
                  <b.icon className="h-5 w-5 text-glacier" />
                </span>
                <h3 className="text-sm font-semibold">{b.label}</h3>
                <span aria-hidden="true" className={`ml-auto h-2 w-2 rounded-full ${b.dot}`} />
              </div>
              <p className="mt-8 font-display text-xl font-semibold leading-snug text-glacier md:text-2xl">{b.concept}</p>
              <blockquote className="mt-5 text-lg leading-relaxed text-icegrey">“{b.text}”</blockquote>
            </motion.article>
          )}
        </div>
      </div>
    </section>);

}
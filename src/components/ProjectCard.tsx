import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { Project } from '../data/projects';
import { capabilities } from '../data/capabilities';
import { accentStyles } from '../utils/accent';
import { easeOut } from '../utils/motion';

type ProjectCardProps = {project: Project;className?: string;index: number;};

export function ProjectCard({ project, className = '', index }: ProjectCardProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const tags = capabilities.filter((c) => project.tags.includes(c.id));
  const primary = tags[0];
  const href = project.caseStudyId ? `/our-work?study=${project.caseStudyId}#case-studies` : primary?.path ?? '/our-work';
  const label = project.caseStudyId ? 'View Case Study' : `Explore ${primary?.name ?? 'Service'}`;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.7, ease: easeOut, delay: index % 3 * 0.08 }}
      className={`group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-ocean ring-1 ring-white/10 ${className}`}>
      
      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-x-0 -inset-y-[7%]">
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]" />
          
        </motion.div>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <ul className="flex flex-wrap gap-2">
          {tags.map((t) =>
          <li key={t.id} className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-snow">
              <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${accentStyles[t.accent].dotDark}`} />
              {t.name}
            </li>
          )}
        </ul>
        <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.02em] text-snow">{project.name}</h3>
        <p className="mt-2 text-sm text-icegrey/80">
          {project.category} · {project.client}
        </p>
        <p className="mt-4 leading-relaxed text-icegrey">{project.description}</p>
        <div className="mt-auto pt-7">
          <Link
            to={href}
            className="inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-snow transition-colors duration-200 hover:border-snow hover:bg-snow hover:text-midnight">
            
            {label}
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>);

}
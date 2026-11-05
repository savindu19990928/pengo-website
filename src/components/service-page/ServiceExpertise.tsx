import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { RevealText } from '../motion/RevealText';
import { SectionLabel } from '../motion/SectionLabel';
import { FadeIn } from '../motion/FadeIn';
import { ServicePageContent } from '../../types/servicePage';
import { Accent, accentStyles } from '../../utils/accent';
import { useCountUp } from '../../hooks/useCountUp';
import { easeOut } from '../../utils/motion';

type ServiceExpertiseProps = {expertise: ServicePageContent['expertise'];accent: Accent;};

export function ServiceExpertise({ expertise, accent }: ServiceExpertiseProps) {
  const { ref, value } = useCountUp(20);
  const styles = accentStyles[accent];

  return (
    <section aria-labelledby="expertise-title" className="bg-navy text-snow">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <SectionLabel>Expertise</SectionLabel>
          <RevealText
            id="expertise-title"
            text={expertise.title}
            highlight={expertise.highlight}
            className="mt-6 font-display text-4xl font-bold leading-[1.06] tracking-[-0.03em] md:text-5xl"
            highlightClassName="text-glacier" />
          
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-icegrey">{expertise.body}</p>
            <div className="mt-10 flex items-end gap-4">
              <p className="font-display text-7xl font-extrabold leading-none tracking-[-0.05em]">
                <span ref={ref}>{value}</span>
                <span className="text-glacier">+</span>
              </p>
              <p className="pb-1.5 text-sm leading-snug text-icegrey">
                multidisciplinary
                <br />
                professionals at Pengo
              </p>
            </div>
            <Link to="/about#team" className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-glacier">
              Meet the team
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </FadeIn>
        </div>

        <ul className="border-t border-white/10 lg:col-span-6 lg:col-start-7 lg:self-center">
          {expertise.roles.map((role, i) =>
          <motion.li
            key={role}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeOut, delay: i * 0.06 }}
            className="flex items-center gap-5 border-b border-white/10 py-6">
            
              <span aria-hidden="true" className={`h-2 w-2 shrink-0 rounded-full ${styles.dotDark}`} />
              <span className="font-display text-2xl font-semibold tracking-[-0.01em] md:text-3xl">{role}</span>
            </motion.li>
          )}
        </ul>
      </div>
    </section>);

}
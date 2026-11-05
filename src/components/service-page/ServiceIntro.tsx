import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RevealText } from '../motion/RevealText';
import { SectionLabel } from '../motion/SectionLabel';
import { FadeIn } from '../motion/FadeIn';
import { ServicePageContent } from '../../types/servicePage';
import { Accent, accentStyles } from '../../utils/accent';
import { easeOut } from '../../utils/motion';

type ServiceIntroProps = {intro: ServicePageContent['intro'];image: string;accent: Accent;};

export function ServiceIntro({ intro, image, accent }: ServiceIntroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const styles = accentStyles[accent];

  return (
    <section aria-labelledby="intro-title" className="bg-white text-midnight">
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12 lg:px-12">
        <div ref={ref} className="relative overflow-hidden rounded-[1.75rem] bg-ice lg:col-span-6">
          <motion.div
            initial={{ clipPath: 'inset(12% 12% 12% 12%)' }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ duration: 0.9, ease: easeOut }}
            className="relative aspect-[4/3] lg:aspect-[5/6]">
            
            <motion.img style={{ y }} src={image} alt="" loading="lazy" className="absolute inset-x-0 -inset-y-[9%] h-[118%] w-full object-cover" />
          </motion.div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <SectionLabel tone="light">{intro.label}</SectionLabel>
          <RevealText
            id="intro-title"
            text={intro.title}
            highlight={intro.highlight}
            className="mt-6 font-display text-4xl font-bold leading-[1.06] tracking-[-0.03em] md:text-5xl"
            highlightClassName="text-arctic-deep" />
          
          <FadeIn delay={0.1}>
            {intro.body.map((p) =>
            <p key={p} className="mt-5 text-lg leading-relaxed text-steel">
                {p}
              </p>
            )}
          </FadeIn>

          {intro.ordered ?
          <ol className="relative mt-10 space-y-5">
              <span aria-hidden="true" className="absolute bottom-3 left-[15px] top-3 w-px bg-ice" />
              {intro.points.map((point, i) =>
            <motion.li
              key={point}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: easeOut, delay: i * 0.06 }}
              className="relative flex items-center gap-4">
              
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white font-display text-sm font-bold text-midnight ring-1 ring-icegrey">
                    {i + 1}
                  </span>
                  <span className="font-medium">{point}</span>
                </motion.li>
            )}
            </ol> :

          <ul className="mt-10 border-t border-ice">
              {intro.points.map((point, i) =>
            <motion.li
              key={point}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: easeOut, delay: i * 0.06 }}
              className="flex items-center gap-3 border-b border-ice py-4 font-medium">
              
                  <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />
                  {point}
                </motion.li>
            )}
            </ul>
          }
        </div>
      </div>
    </section>);

}
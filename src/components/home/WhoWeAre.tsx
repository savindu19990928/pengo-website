import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { RevealText } from '../motion/RevealText';
import { SectionLabel } from '../motion/SectionLabel';
import { FadeIn } from '../motion/FadeIn';
import { PenguinSilhouette } from '../PenguinSilhouette';
import { disciplines } from '../../data/about';
import { media } from '../../data/media';
import { easeOut } from '../../utils/motion';

const dots = ['bg-pengo-orange', 'bg-pengo-red', 'bg-pengo-blue', 'bg-pengo-blue', 'bg-pengo-green', 'bg-pengo-blue'];

export function WhoWeAre() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section aria-labelledby="who-title" className="border-t border-ice bg-white text-midnight">
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-6">
          <SectionLabel tone="light">Who we are</SectionLabel>
          <RevealText
            id="who-title"
            text="An integrated digital and technology solutions company."
            highlight="technology solutions company."
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-6xl"
            highlightClassName="text-arctic-deep" />
          
          <FadeIn delay={0.1}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-steel">
              Pengo is a technology and innovation company originating from Sri Lanka. We bring six disciplines together
              under one roof, so businesses can plan, build and grow with one connected partner — on screen and on site.
            </p>
          </FadeIn>
          <ul className="mt-10 grid max-w-xl gap-x-8 sm:grid-cols-2">
            {disciplines.map((d, i) =>
            <motion.li
              key={d}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: easeOut, delay: i * 0.05 }}
              className="flex items-center gap-3 border-b border-ice py-4 font-medium">
              
                <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${dots[i % dots.length]}`} />
                {d}
              </motion.li>
            )}
          </ul>
          <FadeIn delay={0.15}>
            <Link
              to="/about"
              className="group mt-10 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-midnight px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-charcoal">
              
              Discover Our Story
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </FadeIn>
        </div>

        <div ref={ref} className="relative overflow-hidden rounded-[1.75rem] bg-navy lg:col-span-5 lg:col-start-8">
          <div className="relative aspect-[4/5]">
            <motion.img style={{ y }} src={media.aboutIce} alt="Arctic ice landscape at dusk" loading="lazy" className="absolute inset-x-0 -inset-y-[9%] h-[118%] w-full object-cover opacity-80" />
            <div className="absolute inset-0 flex items-end justify-center">
              <PenguinSilhouette revealOnView strokeWidth={1.4} className="h-[70%] text-white/70" />
            </div>
          </div>
        </div>
      </div>
    </section>);

}
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRightIcon, CpuIcon, LayoutTemplateIcon, LightbulbIcon, MegaphoneIcon } from 'lucide-react';
import { RevealText } from './motion/RevealText';
import { SnowParticles } from './SnowParticles';
import { BrandRule } from './shared/BrandRule';
import { media } from '../data/media';
import { easeOut } from '../utils/motion';

const penguinMask = 'radial-gradient(ellipse 66% 72% at 50% 46%, #000 58%, transparent 100%)';

const floatingCards = [
{ label: 'Interface ready', sub: 'Design', icon: LayoutTemplateIcon, dot: 'bg-pengo-red', pos: 'left-0 top-[14%]', line: 'M14 18 L50 46', delay: 1.1, mobile: true },
{ label: 'Campaign live', sub: 'Marketing', icon: MegaphoneIcon, dot: 'bg-pengo-orange', pos: 'right-0 top-[8%]', line: 'M86 12 L52 42', delay: 1.25, mobile: true },
{ label: 'Systems connected', sub: 'Technology', icon: CpuIcon, dot: 'bg-pengo-blue', pos: 'left-[2%] bottom-[20%]', line: 'M16 78 L48 56', delay: 1.4, mobile: false },
{ label: '4 zones on', sub: 'Smart Living', icon: LightbulbIcon, dot: 'bg-pengo-green-light', pos: 'right-0 bottom-[30%]', line: 'M86 68 L54 54', delay: 1.55, mobile: false }];


export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const penguinY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-navy text-snow">
      <SnowParticles className="absolute inset-0 -z-10 h-full w-full" />

      <div className="mx-auto grid min-h-[100svh] max-w-[1440px] grid-cols-1 items-center gap-y-6 px-5 pb-16 pt-28 md:px-8 lg:grid-cols-12 lg:gap-x-8 lg:px-12 lg:pb-20">
        <motion.div style={{ y: textY }} className="relative z-10 lg:col-span-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <BrandRule segment="w-6" />
          </motion.div>
          <RevealText
            as="h1"
            onMount
            delay={0.2}
            text="Elevate Your Digital Experience."
            highlight="Digital Experience."
            className="mt-7 font-display text-[2.75rem] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-6xl md:text-7xl xl:text-[5.6rem]"
            highlightClassName="text-glacier" />
          
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.75 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-icegrey md:text-lg">
            
            Pengo brings creativity, technology, and intelligent solutions together to help businesses grow, connect, and
            move forward.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.9 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row">
            
            <Link
              to="/#capabilities"
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-arctic-deep px-7 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-arctic-darker focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glacier">
              
              Explore Our Services
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-snow transition-colors duration-200 hover:border-glacier hover:text-glacier focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glacier">
              
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        <div className="relative lg:col-span-6">
          <motion.div style={{ y: penguinY }} className="relative mx-auto h-[440px] w-full max-w-[600px] sm:h-[540px] lg:h-[min(80vh,780px)]">
            <motion.img
              src={media.heroPenguin}
              alt="A realistic emperor penguin standing on an icy rock — the Pengo emblem"
              initial={{ opacity: 0, scale: 1.08, filter: 'blur(12px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.6, ease: easeOut, delay: 0.3 }}
              className="absolute inset-x-[14%] inset-y-0 h-full w-[72%] object-cover object-center"
              style={{ maskImage: penguinMask, WebkitMaskImage: penguinMask }} />
            

            <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full">
              {floatingCards.map((card) =>
              <motion.path
                key={card.label}
                d={card.line}
                stroke="#93C5FD"
                strokeOpacity="0.45"
                strokeWidth="1"
                strokeDasharray="3 5"
                vectorEffect="non-scaling-stroke"
                fill="none"
                className={`anim-dash ${card.mobile ? '' : 'hidden sm:block'}`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: easeOut, delay: card.delay - 0.2 }} />

              )}
            </svg>

            {floatingCards.map((card, i) =>
            <div key={card.label} className={`absolute z-10 ${card.pos} ${card.mobile ? '' : 'hidden sm:block'}`}>
                <motion.div initial={{ opacity: 0, y: 14, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5, ease: easeOut, delay: card.delay }}>
                  <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 px-3.5 py-3 ring-1 ring-white/15 backdrop-blur-md">
                  
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
                      <card.icon className="h-4 w-4 text-snow" />
                    </span>
                    <span className="pr-1">
                      <span className="flex items-center gap-1.5 text-[11px] text-icegrey">
                        <span className={`h-1.5 w-1.5 rounded-full ${card.dot}`} />
                        {card.sub}
                      </span>
                      <span className="block text-sm font-semibold text-snow">{card.label}</span>
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#clients"
        aria-label="Scroll to clients"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-12 hidden items-center gap-3 text-xs font-medium tracking-[0.2em] text-icegrey md:flex">
        
        <span className="relative h-10 w-px overflow-hidden bg-white/15">
          <motion.span className="absolute inset-x-0 top-0 h-4 bg-glacier" animate={{ y: [-16, 40] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} />
        </span>
        SCROLL
      </motion.a>
    </section>);

}
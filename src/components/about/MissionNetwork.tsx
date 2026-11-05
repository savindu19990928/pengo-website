import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BotIcon, Building2Icon, HouseIcon, MegaphoneIcon, PaletteIcon, ServerIcon } from 'lucide-react';
import { SectionLabel } from '../motion/SectionLabel';
import { RevealText } from '../motion/RevealText';
import { FadeIn } from '../motion/FadeIn';
import { PengoLogo } from '../PengoLogo';
import { missionAreas, missionStatement } from '../../data/about';
import { useLoopStep } from '../../hooks/useLoopStep';
import { easeOut } from '../../utils/motion';

const icons = [MegaphoneIcon, PaletteIcon, BotIcon, ServerIcon, HouseIcon, Building2Icon];
const colors = ['#F39A24', '#E64B43', '#3B82F6', '#4B83B7', '#08633D', '#52637A'];
const positions = missionAreas.map((_, i) => {
  const angle = (-90 + i * 60) * (Math.PI / 180);
  return { x: 50 + Math.cos(angle) * 38, y: 50 + Math.sin(angle) * 38 };
});

export function MissionNetwork() {
  const { ref, step } = useLoopStep(missionAreas.length, 2400);
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered ?? step;

  return (
    <section id="mission" aria-labelledby="mission-title" className="scroll-mt-20 bg-white text-midnight">
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-6">
          <SectionLabel tone="light">Our mission</SectionLabel>
          <RevealText
            id="mission-title"
            text="Integrated Solutions. Meaningful Impact."
            highlight="Meaningful Impact."
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-6xl"
            highlightClassName="text-arctic-deep" />
          
          <FadeIn delay={0.1}>
            <div className="mt-10 space-y-5">
              {missionStatement.map((p, i) =>
              <p key={p} className={i === 0 ? 'font-display text-xl font-semibold leading-snug md:text-2xl' : 'text-lg leading-relaxed text-steel'}>
                  {p}
                </p>
              )}
            </div>
          </FadeIn>
        </div>

        <div ref={ref} className="lg:col-span-6">
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <circle cx="50" cy="50" r="38" fill="none" stroke="#EAF0F6" strokeWidth="0.4" />
              {positions.map((p, i) =>
              <g key={i}>
                  <line
                  x1="50"
                  y1="50"
                  x2={p.x}
                  y2={p.y}
                  stroke={i === active ? colors[i] : '#B7C5D6'}
                  strokeWidth={i === active ? 0.7 : 0.35}
                  style={{ transition: 'stroke 300ms ease-out, stroke-width 300ms ease-out' }} />
                
                  {i === active &&
                <motion.circle key={`p-${active}`} r="1.1" fill={colors[i]} initial={{ cx: 50, cy: 50 }} animate={{ cx: p.x, cy: p.y }} transition={{ duration: 1, ease: easeOut }} />
                }
                </g>
              )}
            </svg>

            <div className="absolute left-1/2 top-1/2 grid h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-[0_20px_50px_-20px_rgba(17,24,39,0.35)] ring-1 ring-ice">
              <PengoLogo variant="mark" height={56} />
            </div>

            {missionAreas.map((area, i) => {
              const Icon = icons[i];
              const isActive = i === active;
              return (
                <button
                  key={area.name}
                  type="button"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered(null)}
                  aria-pressed={isActive}
                  aria-label={area.name}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 focus-visible:outline-none"
                  style={{ left: `${positions[i].x}%`, top: `${positions[i].y}%` }}>
                  
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-full ring-1 transition-colors duration-200 sm:h-14 sm:w-14 ${
                    isActive ? 'bg-midnight text-white ring-midnight' : 'bg-white text-midnight ring-icegrey/70'}`
                    }>
                    
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className={`hidden whitespace-nowrap text-xs font-semibold sm:block ${isActive ? 'text-midnight' : 'text-steel'}`}>{area.name}</span>
                </button>);

            })}
          </div>

          <div aria-live="polite" className="mx-auto mt-6 min-h-[72px] max-w-[420px] text-center">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={active} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2, ease: easeOut }}>
                <p className="font-display text-lg font-bold">{missionAreas[active].name}</p>
                <p className="mt-1 text-steel">{missionAreas[active].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>);

}
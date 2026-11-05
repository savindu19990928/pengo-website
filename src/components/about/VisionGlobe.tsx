import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionLabel } from '../motion/SectionLabel';
import { RevealText } from '../motion/RevealText';
import { FadeIn } from '../motion/FadeIn';
import { visionStatement } from '../../data/about';
import { easeOut } from '../../utils/motion';

// Approximate positions on the visible face of the globe (viewBox 0–400).
const origin = { x: 262, y: 228 };
const nodes = [
{ x: 120, y: 140 },
{ x: 180, y: 96 },
{ x: 318, y: 120 },
{ x: 92, y: 250 },
{ x: 300, y: 318 },
{ x: 170, y: 300 }];

const nodeColors = ['#4B83B7', '#E64B43', '#F39A24', '#4FB283', '#93C5FD', '#4B83B7'];

function arc(to: {x: number;y: number;}) {
  const mx = (origin.x + to.x) / 2;
  const my = (origin.y + to.y) / 2 - 60;
  return `M${origin.x} ${origin.y} Q ${mx} ${my} ${to.x} ${to.y}`;
}

export function VisionGlobe() {
  const reduce = useReducedMotion();

  return (
    <section id="vision" aria-labelledby="vision-title" className="relative scroll-mt-20 overflow-hidden bg-navy text-snow">
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-6">
          <SectionLabel>Our vision</SectionLabel>
          <RevealText
            id="vision-title"
            text="A Global Vision, Originating from Sri Lanka."
            highlight="Originating from Sri Lanka."
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-6xl"
            highlightClassName="text-glacier" />
          
          <FadeIn delay={0.1}>
            <blockquote className="mt-10 space-y-5 border-l-2 border-glacier/60 pl-6">
              {visionStatement.map((p) =>
              <p key={p} className="text-lg leading-relaxed text-icegrey first:font-display first:text-xl first:font-semibold first:leading-snug first:text-snow md:first:text-2xl">
                  {p}
                </p>
              )}
            </blockquote>
          </FadeIn>
        </div>

        <div className="relative lg:col-span-6">
          <svg viewBox="0 0 400 400" className="mx-auto w-full max-w-[520px]" role="img" aria-label="A globe with connections reaching out from Sri Lanka to the world">
            <defs>
              <clipPath id="globe-clip">
                <circle cx="200" cy="200" r="170" />
              </clipPath>
            </defs>
            <circle cx="200" cy="200" r="170" fill="#132A4A" fillOpacity="0.5" stroke="#93C5FD" strokeOpacity="0.25" />
            <g clipPath="url(#globe-clip)" stroke="#93C5FD" strokeOpacity="0.12" fill="none">
              {[-120, -60, 0, 60, 120].map((dy) =>
              <ellipse key={dy} cx="200" cy={200 + dy} rx={Math.sqrt(170 * 170 - dy * dy)} ry="16" />
              )}
              <motion.g
                animate={reduce ? undefined : { x: [0, -40] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}>
                
                {[-160, -120, -80, -40, 0, 40, 80, 120, 160, 200].map((dx) =>
                <ellipse key={dx} cx={200 + dx} cy="200" rx="60" ry="170" />
                )}
              </motion.g>
            </g>
            <motion.circle
              cx="200"
              cy="200"
              r="186"
              fill="none"
              stroke="#93C5FD"
              strokeOpacity="0.25"
              strokeDasharray="2 8"
              style={{ originX: '200px', originY: '200px' }}
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} />
            

            {nodes.map((n, i) =>
            <motion.path
              key={i}
              d={arc(n)}
              fill="none"
              stroke={nodeColors[i]}
              strokeOpacity="0.8"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: easeOut, delay: 0.3 + i * 0.15 }} />

            )}
            {nodes.map((n, i) =>
            <motion.circle
              key={`n-${i}`}
              cx={n.x}
              cy={n.y}
              r="4"
              fill={nodeColors[i]}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 + i * 0.15 }} />

            )}

            {!reduce &&
            <motion.circle
              cx={origin.x}
              cy={origin.y}
              r="8"
              fill="none"
              stroke="#93C5FD"
              animate={{ r: [8, 26], opacity: [0.8, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }} />

            }
            <circle cx={origin.x} cy={origin.y} r="7" fill="#F7FAFD" />
            <circle cx={origin.x} cy={origin.y} r="3" fill="#3B82F6" />
            <g transform={`translate(${origin.x + 14} ${origin.y + 4})`}>
              <rect x="0" y="-12" width="72" height="22" rx="11" fill="#F7FAFD" />
              <text x="36" y="3" textAnchor="middle" fontSize="10" fontWeight="700" fill="#111827">
                Sri Lanka
              </text>
            </g>
          </svg>
        </div>
      </div>
    </section>);

}
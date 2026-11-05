import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2Icon, PlayIcon } from 'lucide-react';
import { VignetteFrame } from './VignetteFrame';
import { media } from '../../data/media';
import { popIn } from '../../utils/motion';

export function DesignVignette({ id }: {id: string;}) {
  if (id === 'user-centric') return <InterfaceMockups />;
  if (id === 'motion') return <MotionTimeline />;
  return <BrandBoard />;
}

function InterfaceMockups() {
  return (
    <VignetteFrame label="Animated desktop and mobile interface mockups" tone="light">
      <motion.div variants={popIn} className="absolute left-[6%] top-[9%] w-[68%] overflow-hidden rounded-xl bg-white shadow-[0_24px_50px_-24px_rgba(17,24,39,0.35)] ring-1 ring-icegrey/50">
        <div className="flex items-center gap-1.5 border-b border-ice px-3 py-2">
          {[0, 1, 2].map((d) =>
          <span key={d} className="h-2 w-2 rounded-full bg-icegrey" />
          )}
          <span className="ml-2 h-2 w-24 rounded-full bg-ice" />
        </div>
        <div className="space-y-2.5 p-3">
          <div className="flex h-[4.5rem] flex-col justify-end gap-1.5 rounded-lg bg-navy p-3">
            <span className="h-2 w-1/2 rounded-full bg-white/90" />
            <span className="h-1.5 w-1/3 rounded-full bg-white/40" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) =>
            <motion.div key={i} variants={popIn} className="h-12 rounded-md bg-ice" />
            )}
          </div>
          <div className="flex items-center justify-between">
            <span className="h-1.5 w-1/2 rounded-full bg-icegrey" />
            <motion.span
              className="h-6 w-20 rounded-md bg-arctic-deep"
              animate={{ scale: [1, 1, 0.92, 1] }}
              transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 0.56, 0.64] }} />
            
          </div>
        </div>
      </motion.div>

      <motion.div variants={popIn} className="absolute bottom-[7%] right-[7%] w-[25%] rounded-[1.1rem] bg-midnight p-1.5 shadow-2xl">
        <div className="aspect-[9/17] space-y-1.5 rounded-[0.8rem] bg-white p-2">
          <div className="h-[30%] rounded-md bg-navy" />
          <div className="h-1.5 w-3/4 rounded-full bg-icegrey" />
          <div className="h-1.5 w-1/2 rounded-full bg-ice" />
          <div className="grid grid-cols-2 gap-1">
            <div className="aspect-square rounded bg-ice" />
            <div className="aspect-square rounded bg-pengo-red/80" />
          </div>
          <div className="h-3.5 rounded bg-arctic-deep" />
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute left-[30%] top-[40%]"
        animate={{ x: [0, 110, 110, 0], y: [0, 50, 50, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.45, 0.7, 1] }}>
        
        <MousePointer2Icon className="h-5 w-5 fill-midnight text-white" />
      </motion.div>
    </VignetteFrame>);

}

const tracks = [
{ label: 'Scale', keys: [8, 38, 72] },
{ label: 'Rotate', keys: [18, 55, 90] },
{ label: 'Opacity', keys: [4, 46] }];


function MotionTimeline() {
  return (
    <VignetteFrame label="Motion graphics preview with an animated timeline">
      <motion.div variants={popIn} className="absolute inset-x-[6%] top-[7%] h-[54%] overflow-hidden rounded-xl bg-midnight/70 ring-1 ring-white/10">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <path d="M8 78 C 30 -10, 70 -10, 92 72" fill="none" stroke="#93C5FD" strokeOpacity="0.35" strokeDasharray="4 6" vectorEffect="non-scaling-stroke" />
        </svg>
        <motion.span
          className="absolute -ml-[18px] -mt-[18px] h-9 w-9 bg-pengo-orange"
          animate={{
            left: ['8%', '50%', '92%', '8%'],
            top: ['78%', '16%', '72%', '78%'],
            rotate: [0, 180, 360, 360],
            borderRadius: ['22%', '50%', '22%', '22%']
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', times: [0, 0.45, 0.9, 1] }} />
        
        <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white/10 px-2 py-1 text-[10px] font-medium">
          <PlayIcon className="h-3 w-3" /> Preview
        </span>
      </motion.div>
      <motion.div variants={popIn} className="absolute inset-x-[6%] bottom-[7%] h-[28%] rounded-xl bg-midnight/80 px-3 py-2.5 ring-1 ring-white/10">
        <div className="relative flex h-full flex-col justify-between">
          {tracks.map((t) =>
          <div key={t.label} className="flex items-center gap-3">
              <span className="w-12 text-[10px] text-icegrey">{t.label}</span>
              <div className="relative h-1 flex-1 rounded-full bg-white/10">
                {t.keys.map((k) =>
              <span key={k} className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-glacier" style={{ left: `${k}%` }} />
              )}
              </div>
            </div>
          )}
          <div className="pointer-events-none absolute inset-y-0 left-[3.75rem] right-0">
            <motion.span className="absolute inset-y-0 w-px bg-pengo-orange" animate={{ left: ['0%', '100%'] }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} />
          </div>
        </div>
      </motion.div>
    </VignetteFrame>);

}

const swatches = ['bg-pengo-blue', 'bg-pengo-red', 'bg-pengo-orange', 'bg-pengo-green'];

function BrandBoard() {
  return (
    <VignetteFrame label="Brand identity board with palette, typography and creative assets" tone="light">
      <div className="absolute inset-[6%] grid grid-cols-3 grid-rows-3 gap-3">
        <motion.div variants={popIn} className="col-span-2 row-span-2 flex flex-col justify-between rounded-xl bg-navy p-4 text-snow">
          <span className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">Aa</span>
          <div>
            <p className="font-display text-sm font-bold">Display — Extra Bold</p>
            <p className="text-[11px] text-icegrey">Headlines & key messages</p>
          </div>
        </motion.div>
        <motion.div variants={popIn} className="grid grid-cols-2 gap-1.5 rounded-xl bg-white p-2 ring-1 ring-icegrey/50">
          {swatches.map((c, i) =>
          <motion.span
            key={c}
            className={`rounded-md ${c}`}
            animate={{ scale: [1, 0.86, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2.4, delay: i * 0.3 }} />

          )}
        </motion.div>
        <motion.div variants={popIn} className="flex flex-col justify-center gap-1.5 rounded-xl bg-white p-3 ring-1 ring-icegrey/50">
          <span className="h-6 w-6 rounded-full border-[3px] border-arctic-deep" />
          <span className="h-1.5 w-3/4 rounded-full bg-icegrey" />
          <span className="h-1.5 w-1/2 rounded-full bg-ice" />
        </motion.div>
        <motion.div variants={popIn} className="overflow-hidden rounded-xl">
          <img src={media.marketing} alt="" className="h-full w-full object-cover" />
        </motion.div>
        <motion.div variants={popIn} className="flex flex-col justify-end rounded-xl bg-pengo-orange p-3">
          <span className="block h-1.5 w-2/3 rounded-full bg-white/90" />
          <span className="mt-1.5 block h-1.5 w-1/2 rounded-full bg-white/60" />
        </motion.div>
        <motion.div variants={popIn} className="rounded-xl bg-white p-2.5 ring-1 ring-icegrey/50">
          <span className="block h-full rounded-md border border-dashed border-icegrey" />
        </motion.div>
      </div>
    </VignetteFrame>);

}
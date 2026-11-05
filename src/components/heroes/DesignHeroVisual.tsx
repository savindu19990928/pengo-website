import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MousePointer2Icon } from 'lucide-react';
import { media } from '../../data/media';
import { easeOut } from '../../utils/motion';

const penguinMask = 'radial-gradient(ellipse 60% 70% at 50% 46%, #000 55%, transparent 100%)';
const swatches = ['bg-pengo-blue', 'bg-pengo-red', 'bg-pengo-orange', 'bg-pengo-green'];

export function DesignHeroVisual() {
  const reduce = useReducedMotion();
  const float = (delay: number) =>
  reduce ? {} : { animate: { y: [0, -8, 0] }, transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' as const, delay } };

  return (
    <div role="img" aria-label="A realistic penguin surrounded by floating website previews, mobile mockups and design tools" className="relative mx-auto h-[420px] w-full max-w-[680px] sm:h-[520px] lg:h-[600px]">
      {/* Design grid */}
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <pattern id="design-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0 H0 V40" fill="none" stroke="#93C5FD" strokeOpacity="0.08" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#design-grid)" />
      </svg>

      <motion.img
        src={media.heroPenguin}
        alt=""
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: easeOut, delay: 0.2 }}
        className="absolute inset-x-[20%] inset-y-0 h-full w-[60%] object-cover"
        style={{ maskImage: penguinMask, WebkitMaskImage: penguinMask }} />
      

      {/* Pen path drawing around the penguin */}
      <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full">
        <motion.path
          d="M12 70 C 20 30, 40 12, 60 16 S 92 40, 86 66"
          fill="none"
          stroke="#E64B43"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: easeOut, delay: 0.8 }} />
        
        {[
        [12, 70],
        [60, 16],
        [86, 66]].
        map(([x, y], i) =>
        <motion.rect key={i} x={x - 1} y={y - 1.4} width="2" height="2.8" fill="#F7FAFD" stroke="#E64B43" vectorEffect="non-scaling-stroke" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 + i * 0.3 }} />
        )}
      </svg>

      {/* Floating browser */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: easeOut, delay: 0.9 }} className="absolute left-0 top-[8%] w-[46%] max-w-[280px]">
        <motion.div {...float(0)} className="overflow-hidden rounded-xl bg-white shadow-2xl">
          <div className="flex items-center gap-1 border-b border-ice px-2.5 py-1.5">
            {[0, 1, 2].map((d) =>
            <span key={d} className="h-1.5 w-1.5 rounded-full bg-icegrey" />
            )}
          </div>
          <div className="space-y-2 p-2.5">
            <div className="h-12 rounded-md bg-navy" />
            <div className="grid grid-cols-3 gap-1.5">
              {[0, 1, 2].map((i) =>
              <div key={i} className="h-8 rounded bg-ice" />
              )}
            </div>
            <div className="h-1.5 w-2/3 rounded-full bg-icegrey" />
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile mockup */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: easeOut, delay: 1.05 }} className="absolute bottom-[8%] right-0 w-[24%] max-w-[150px]">
        <motion.div {...float(1)} className="rounded-[1.2rem] bg-midnight p-1.5 shadow-2xl ring-1 ring-white/10">
          <div className="aspect-[9/17] space-y-1.5 rounded-[0.9rem] bg-white p-2">
            <div className="h-[34%] overflow-hidden rounded-md">
              <img src={media.marketing} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="h-1.5 w-3/4 rounded-full bg-icegrey" />
            <div className="h-1.5 w-1/2 rounded-full bg-ice" />
            <div className="h-4 rounded bg-arctic-deep" />
          </div>
        </motion.div>
      </motion.div>

      {/* Palette chip */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: easeOut, delay: 1.2 }} className="absolute bottom-[14%] left-[4%]">
        <motion.div {...float(2)} className="flex items-center gap-2 rounded-2xl bg-white/10 p-2.5 ring-1 ring-white/15 backdrop-blur-md">
          {swatches.map((s) =>
          <span key={s} className={`h-6 w-6 rounded-lg ${s}`} />
          )}
        </motion.div>
      </motion.div>

      {/* Motion keyframe chip */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: easeOut, delay: 1.35 }} className="absolute right-[2%] top-[14%] hidden sm:block">
        <motion.div {...float(1.5)} className="w-44 rounded-2xl bg-white/10 p-3 ring-1 ring-white/15 backdrop-blur-md">
          <p className="text-[10px] font-medium text-icegrey">Motion · Ease out</p>
          <svg viewBox="0 0 100 40" className="mt-2 h-10 w-full" aria-hidden="true">
            <path d="M2 38 C 30 2, 50 2, 98 2" fill="none" stroke="#93C5FD" strokeWidth="2" />
          </svg>
        </motion.div>
      </motion.div>

      {!reduce &&
      <motion.span
        aria-hidden="true"
        className="absolute left-[44%] top-[40%]"
        animate={{ x: [0, 60, 20, 0], y: [0, 40, 80, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}>
        
          <MousePointer2Icon className="h-5 w-5 fill-white text-midnight" />
        </motion.span>
      }
    </div>);

}
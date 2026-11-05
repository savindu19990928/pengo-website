import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { format } from 'date-fns';
import { BellIcon, CloudIcon, KeyRoundIcon, ServerIcon, ShieldIcon } from 'lucide-react';
import { media } from '../../data/media';
import { easeOut } from '../../utils/motion';

const feeds = [
{ label: 'CAM 01 · Lobby', src: media.cctv },
{ label: 'CAM 02 · Entrance', src: media.smartHome },
{ label: 'CAM 03 · Office', src: media.software },
{ label: 'CAM 04 · Studio', src: media.marketing }];


const network = [
{ label: 'NVR', icon: ServerIcon },
{ label: 'Access', icon: KeyRoundIcon },
{ label: 'Alarms', icon: BellIcon },
{ label: 'Cloud', icon: CloudIcon }];


export function SecurityVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-20% 0px' });
  const reduce = useReducedMotion();
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    if (!inView) return;
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, [inView]);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[640px] pt-16" role="img" aria-label="Animated security monitoring dashboard with live camera feeds and connected systems">
      {/* Rotating CCTV camera */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="absolute right-6 top-0 z-10 w-32 sm:w-40">
        
        <svg viewBox="0 0 180 100" className="w-full overflow-visible" aria-hidden="true">
          <rect x="2" y="18" width="16" height="58" rx="5" fill="#B9C9D5" />
          <path d="M18 47 H44" stroke="#B9C9D5" strokeWidth="8" strokeLinecap="round" />
          <motion.g
            style={{ originX: 0, originY: 0.5 }}
            animate={reduce ? undefined : { rotate: [-10, 14, -10] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}>
            
            <path d="M40 24 H150 L162 31 H44 Z" fill="#EEF4F8" />
            <rect x="44" y="31" width="104" height="34" rx="10" fill="#F7FAFC" />
            <rect x="140" y="33" width="26" height="30" rx="8" fill="#B9C9D5" />
            <circle cx="156" cy="48" r="10" fill="#07111D" />
            <circle cx="156" cy="48" r="4.5" fill="#4AA3D8" />
            <motion.circle
              cx="60"
              cy="48"
              r="2.5"
              fill="#78C6EA"
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }} />
            
          </motion.g>
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeOut }}
        className="rounded-[2rem] bg-midnight p-4 text-snow ring-1 ring-white/10 shadow-[0_50px_100px_-40px_rgba(7,17,29,0.6)] md:p-5">
        
        <div className="flex items-center justify-between px-1 pb-4">
          <div className="flex items-center gap-2.5">
            <ShieldIcon className="h-4 w-4 text-glacier" />
            <span className="text-sm font-semibold">Site monitor</span>
            <span className="hidden text-xs text-icegrey sm:inline">· 4 cameras online</span>
          </div>
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-glacier">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-glacier"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }} />
            
            LIVE {format(now, 'HH:mm:ss')}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {feeds.map((feed, i) =>
          <motion.div
            key={feed.label}
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.3 + i * 0.12 }}
            className="relative aspect-video overflow-hidden rounded-xl bg-ocean">
            
              <img src={feed.src} alt="" className="h-full w-full object-cover brightness-75 contrast-125 grayscale" />
              <div className="absolute inset-0 bg-arctic/30 mix-blend-color" />
              <div className="anim-scan pointer-events-none absolute inset-0">
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-glacier/60" />
              </div>
              <span className="absolute left-2 top-2 rounded bg-midnight/75 px-1.5 py-0.5 text-[9px] font-medium sm:text-[10px]">{feed.label}</span>
              {i === 1 &&
            <motion.div
              className="absolute left-[36%] top-[28%] h-[46%] w-[24%] border border-glacier"
              animate={reduce ? undefined : { opacity: [0, 1, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
              
                  <span className="absolute -top-4 left-0 bg-glacier px-1 text-[8px] font-semibold text-midnight">Motion</span>
                </motion.div>
            }
            </motion.div>
          )}
        </div>

        <div className="relative mt-3 grid grid-cols-4 gap-2 rounded-xl bg-ocean px-3 py-4">
          <span aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-8 h-px bg-white/10" />
          {!reduce &&
          <motion.span
            aria-hidden="true"
            className="absolute top-[31px] h-[3px] w-6 rounded-full bg-glacier"
            animate={{ left: ['12.5%', '84%'] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', repeatType: 'reverse' }} />

          }
          {network.map((node) =>
          <div key={node.label} className="relative flex flex-col items-center gap-1.5">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-midnight text-glacier ring-1 ring-white/10">
                <node.icon className="h-3.5 w-3.5" />
              </span>
              <span className="text-[10px] font-medium text-icegrey">{node.label}</span>
            </div>
          )}
        </div>
      </motion.div>
    </div>);

}
import React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  BellIcon,
  CctvIcon,
  CheckIcon,
  CircleCheckIcon,
  ClipboardCheckIcon,
  DoorOpenIcon,
  HardDriveIcon,
  RouterIcon,
  RulerIcon,
  ServerIcon,
  WrenchIcon } from
'lucide-react';
import { VignetteFrame } from './VignetteFrame';
import { useLoopStep } from '../../hooks/useLoopStep';
import { easeOut, popIn } from '../../utils/motion';

export function SecurityVignette({ id }: {id: string;}) {
  switch (id) {
    case 'cctv-solutions':
      return <CoverageSweep />;
    case 'commercial-cctv':
      return <BuildingCameras />;
    case 'elv-systems':
      return <ElvRack />;
    case 'network-infrastructure':
      return <NetworkTree />;
    case 'security-integration':
      return <UnifiedConsole />;
    default:
      return <ProjectPhases />;
  }
}

function CoverageSweep() {
  const reduce = useReducedMotion();
  return (
    <VignetteFrame label="Camera coverage sweeping across a floor plan">
      <motion.div variants={popIn} className="absolute inset-[7%] rounded-xl bg-midnight/70 ring-1 ring-white/10">
        <svg viewBox="0 0 200 140" className="h-full w-full" aria-hidden="true">
          <g stroke="#93C5FD" strokeOpacity="0.25" fill="none" strokeWidth="1">
            <rect x="10" y="10" width="180" height="120" rx="4" />
            <path d="M90 10 V70 M10 70 H130 M130 70 V130 M150 10 V50" />
          </g>
          <g fontSize="6" fill="#B7C5D6">
            <text x="20" y="24">Reception</text>
            <text x="100" y="24">Office</text>
            <text x="20" y="84">Warehouse</text>
            <text x="140" y="84">Loading</text>
          </g>
          <motion.g
            style={{ originX: '16px', originY: '124px' }}
            animate={reduce ? undefined : { rotate: [-58, -4, -58] }}
            initial={{ rotate: -30 }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
            
            <path d="M16 124 L176 104 A160 160 0 0 0 150 50 Z" fill="#3B82F6" fillOpacity="0.18" stroke="#3B82F6" strokeOpacity="0.5" />
          </motion.g>
          <circle cx="16" cy="124" r="5" fill="#F7FAFD" />
          <circle cx="16" cy="124" r="2" fill="#3B82F6" />
          <circle cx="184" cy="16" r="4" fill="#F7FAFD" fillOpacity="0.8" />
        </svg>
        <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium text-snow">
          <span className="h-1.5 w-1.5 rounded-full bg-pengo-green-light" /> Coverage active
        </span>
      </motion.div>
    </VignetteFrame>);

}

const cameraSpots = [
{ x: 14, y: 18 },
{ x: 86, y: 18 },
{ x: 14, y: 52 },
{ x: 86, y: 52 },
{ x: 30, y: 86 },
{ x: 70, y: 86 }];


function BuildingCameras() {
  const { ref, step } = useLoopStep(cameraSpots.length + 1, 700);
  return (
    <VignetteFrame label="Cameras coming online around a commercial building" tone="light">
      <div ref={ref} className="absolute inset-[7%]">
        <motion.div variants={popIn} className="absolute inset-x-[18%] bottom-[8%] top-[8%] grid grid-cols-4 gap-1.5 rounded-t-xl bg-midnight p-2.5">
          {Array.from({ length: 16 }).map((_, i) =>
          <span key={i} className={`rounded-sm ${i % 5 === 0 ? 'bg-glacier/40' : 'bg-white/10'}`} />
          )}
        </motion.div>
        {cameraSpots.map((c, i) => {
          const on = i < step;
          return (
            <span
              key={i}
              className={`absolute grid h-7 w-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full ring-2 transition-colors duration-200 ${
              on ? 'bg-arctic-deep text-white ring-white' : 'bg-white text-steel ring-icegrey/60'}`
              }
              style={{ left: `${c.x}%`, top: `${c.y}%` }}>
              
              <CctvIcon className="h-3.5 w-3.5" />
            </span>);

        })}
        <motion.span variants={popIn} className="absolute bottom-0 left-0 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-midnight ring-1 ring-icegrey/50">
          <span className="tabular-nums">{Math.min(step, cameraSpots.length)}</span> / {cameraSpots.length} cameras online
        </motion.span>
      </div>
    </VignetteFrame>);

}

const rackUnits = [
{ label: 'Data', ports: 12 },
{ label: 'Voice', ports: 12 },
{ label: 'CCTV', ports: 12 }];


function ElvRack() {
  const { ref, step } = useLoopStep(12, 260);
  return (
    <VignetteFrame label="Structured cabling rack with active ports for data, voice and CCTV">
      <div ref={ref} className="absolute inset-[7%] flex items-center justify-center">
        <motion.div variants={popIn} className="w-full max-w-[380px] rounded-xl bg-midnight p-3 ring-1 ring-white/10">
          <div className="flex items-center justify-between px-1 pb-2">
            <span className="text-[11px] font-semibold">Comms rack A</span>
            <span className="flex items-center gap-1 text-[10px] text-pengo-green-light">
              <CheckIcon className="h-3 w-3" /> Tested
            </span>
          </div>
          <div className="space-y-2">
            {rackUnits.map((u, ui) =>
            <motion.div key={u.label} variants={popIn} className="flex items-center gap-3 rounded-lg bg-ocean px-3 py-2.5 ring-1 ring-white/10">
                <span className="w-9 text-[10px] font-semibold text-icegrey">{u.label}</span>
                <div className="grid flex-1 grid-cols-12 gap-1">
                  {Array.from({ length: u.ports }).map((_, p) => {
                  const active = (p + ui * 4) % 12 === step;
                  return (
                    <span key={p} className="flex flex-col items-center gap-0.5">
                        <span className="h-2.5 w-full rounded-[2px] bg-navy ring-1 ring-white/15" />
                        <span className={`h-1 w-1 rounded-full transition-colors duration-150 ${active ? 'bg-pengo-green-light' : 'bg-pengo-green/60'}`} />
                      </span>);

                })}
                </div>
              </motion.div>
            )}
            <motion.div variants={popIn} className="flex items-center gap-3 rounded-lg bg-ocean px-3 py-2.5 ring-1 ring-white/10">
              <HardDriveIcon className="h-4 w-4 text-icegrey" />
              <span className="text-[10px] text-icegrey">Recorder · UPS backed</span>
              <span className="ml-auto h-1.5 w-16 overflow-hidden rounded-full bg-white/10">
                <motion.span className="block h-full w-1/3 bg-glacier" animate={{ x: ['-100%', '300%'] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} />
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </VignetteFrame>);

}

const accessSwitches = [20, 50, 80];

function NetworkTree() {
  const reduce = useReducedMotion();
  return (
    <VignetteFrame label="Network topology connecting a core switch to access points and devices" tone="light">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {accessSwitches.map((x, i) =>
        <g key={x}>
            <line x1="50" y1="20" x2={x} y2="52" stroke="#52637A" strokeOpacity="0.35" vectorEffect="non-scaling-stroke" />
            <line x1={x} y1="52" x2={x - 9} y2="84" stroke="#52637A" strokeOpacity="0.25" vectorEffect="non-scaling-stroke" />
            <line x1={x} y1="52" x2={x + 9} y2="84" stroke="#52637A" strokeOpacity="0.25" vectorEffect="non-scaling-stroke" />
            {!reduce &&
          <motion.circle r="1.3" fill="#2563EB" animate={{ cx: [50, x, x + 9], cy: [20, 52, 84] }} transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.6, ease: 'easeInOut' }} />
          }
          </g>
        )}
      </svg>
      <div className="absolute left-1/2 top-[20%] -translate-x-1/2 -translate-y-1/2">
        <motion.div variants={popIn} className="flex items-center gap-2 rounded-xl bg-midnight px-3 py-2 text-snow shadow-lg">
          <ServerIcon className="h-4 w-4 text-glacier" />
          <span className="text-[11px] font-bold">Core switch</span>
        </motion.div>
      </div>
      {accessSwitches.map((x) =>
      <div key={x} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: '52%' }}>
          <motion.div variants={popIn} className="grid h-9 w-9 place-items-center rounded-lg bg-white text-arctic-deep ring-1 ring-icegrey/60">
            <RouterIcon className="h-4 w-4" />
          </motion.div>
        </div>
      )}
      {accessSwitches.flatMap((x) => [x - 9, x + 9]).map((x, i) =>
      <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: '84%' }}>
          <motion.span variants={popIn} className="block h-3.5 w-3.5 rounded-full bg-white ring-2 ring-arctic/60" />
        </div>
      )}
    </VignetteFrame>);

}

const consoleTiles = [
{ icon: CctvIcon, label: 'Cameras', status: 'Recording' },
{ icon: DoorOpenIcon, label: 'Access', status: 'Doors secure' },
{ icon: BellIcon, label: 'Alarms', status: 'Armed' },
{ icon: HardDriveIcon, label: 'Storage', status: 'Healthy' }];

const events = ['Main gate · Access granted', 'Lobby motion · Reviewed', 'Server room · Door closed', 'Car park · Camera online'];

function UnifiedConsole() {
  const { ref, step } = useLoopStep(events.length, 1800);
  return (
    <VignetteFrame label="Unified security console bringing cameras, access and alarms together">
      <div ref={ref} className="absolute inset-[7%] flex flex-col gap-2.5">
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {consoleTiles.map((t) =>
          <motion.div key={t.label} variants={popIn} className="rounded-xl bg-ocean p-2.5 ring-1 ring-white/10">
              <t.icon className="h-4 w-4 text-glacier" />
              <p className="mt-2 text-[11px] font-semibold">{t.label}</p>
              <p className="flex items-center gap-1 text-[10px] text-pengo-green-light">
                <span className="h-1.5 w-1.5 rounded-full bg-pengo-green-light" /> {t.status}
              </p>
            </motion.div>
          )}
        </div>
        <motion.div variants={popIn} className="flex flex-1 flex-col rounded-xl bg-midnight/70 p-3 ring-1 ring-white/10">
          <span className="text-[11px] font-semibold text-icegrey">Event log</span>
          <ul className="mt-2 flex-1 space-y-1.5 overflow-hidden">
            <AnimatePresence initial={false}>
              {[0, 1, 2].map((offset) => {
                const idx = (step - offset + events.length) % events.length;
                return (
                  <motion.li
                    key={`${idx}-${step}`}
                    layout
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1 - offset * 0.3, y: 0 }}
                    transition={{ duration: 0.25, ease: easeOut }}
                    className="flex items-center gap-2 rounded-md bg-white/5 px-2.5 py-1.5 text-[10px] sm:text-[11px]">
                    
                    <CircleCheckIcon className="h-3 w-3 shrink-0 text-pengo-green-light" />
                    {events[idx]}
                  </motion.li>);

              })}
            </AnimatePresence>
          </ul>
        </motion.div>
      </div>
    </VignetteFrame>);

}

const phases = [
{ icon: ClipboardCheckIcon, label: 'Site survey' },
{ icon: RulerIcon, label: 'Coverage design' },
{ icon: WrenchIcon, label: 'Installation' },
{ icon: CircleCheckIcon, label: 'Testing & handover' }];


function ProjectPhases() {
  const { ref, step } = useLoopStep(phases.length, 1600);
  return (
    <VignetteFrame label="B2B security project moving through survey, design, installation and handover" tone="light">
      <div ref={ref} className="absolute inset-[7%] flex flex-col justify-center">
        <motion.p variants={popIn} className="text-xs font-semibold">Commercial site · Project plan</motion.p>
        <motion.div variants={popIn} className="relative mt-6 h-1.5 rounded-full bg-white ring-1 ring-icegrey/50">
          <motion.div className="h-full rounded-full bg-arctic-deep" animate={{ width: `${(step + 1) / phases.length * 100}%` }} transition={{ duration: 0.4, ease: easeOut }} />
        </motion.div>
        <ol className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {phases.map((p, i) => {
            const state = i < step ? 'done' : i === step ? 'active' : 'next';
            return (
              <motion.li
                key={p.label}
                variants={popIn}
                className={`rounded-xl p-3 ring-1 transition-colors duration-300 ${
                state === 'active' ? 'bg-midnight text-snow ring-midnight' : 'bg-white text-midnight ring-icegrey/50'}`
                }>
                
                <p.icon className={`h-4 w-4 ${state === 'active' ? 'text-glacier' : state === 'done' ? 'text-pengo-green' : 'text-steel'}`} />
                <p className="mt-3 text-[11px] font-semibold leading-tight">{p.label}</p>
                <p className={`mt-1 text-[10px] ${state === 'active' ? 'text-icegrey' : 'text-steel'}`}>
                  {state === 'done' ? 'Complete' : state === 'active' ? 'In progress' : 'Scheduled'}
                </p>
              </motion.li>);

          })}
        </ol>
      </div>
    </VignetteFrame>);

}
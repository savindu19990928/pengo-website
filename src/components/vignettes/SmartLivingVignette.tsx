import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  AirVentIcon,
  BellIcon,
  BlindsIcon,
  CameraIcon,
  LampIcon,
  LightbulbIcon,
  LockIcon,
  LockOpenIcon,
  MoonIcon,
  SpeakerIcon,
  SunsetIcon,
  ThermometerIcon,
  TvIcon,
  UserIcon } from
'lucide-react';
import { VignetteFrame } from './VignetteFrame';
import { useLoopStep } from '../../hooks/useLoopStep';
import { easeOut, popIn } from '../../utils/motion';

export function SmartLivingVignette({ id }: {id: string;}) {
  switch (id) {
    case 'smart-home-automation':
      return <SunsetRoutine />;
    case 'smart-lighting':
      return <LightingScenes />;
    case 'smart-locks':
      return <SmartLock />;
    case 'presence-sensors':
      return <PresenceHallway />;
    case 'smart-device-integration':
      return <DeviceHub />;
    default:
      return <ControlApp />;
  }
}

const routine = [
{ icon: SunsetIcon, label: 'Sunset detected', time: '18:24' },
{ icon: BlindsIcon, label: 'Blinds lowered', time: '18:24' },
{ icon: LampIcon, label: 'Porch light on', time: '18:25' },
{ icon: LightbulbIcon, label: 'Evening scene set', time: '18:25' }];


function SunsetRoutine() {
  const { ref, step } = useLoopStep(routine.length + 1, 1300);
  return (
    <VignetteFrame label="Automated sunset routine running step by step">
      <div ref={ref} className="absolute inset-[7%] flex flex-col">
        <motion.div variants={popIn} className="flex items-center justify-between">
          <span className="text-xs font-semibold">Routine · At sunset</span>
          <span className="rounded-full bg-pengo-green-light/15 px-2.5 py-1 text-[10px] font-semibold text-pengo-green-light">Automatic</span>
        </motion.div>
        <ol className="relative mt-4 flex flex-1 flex-col justify-between">
          <span aria-hidden="true" className="absolute bottom-4 left-[17px] top-4 w-px bg-white/10" />
          {routine.map((r, i) => {
            const done = i < step;
            return (
              <motion.li key={r.label} variants={popIn} className="relative flex items-center gap-3">
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ring-1 transition-colors duration-300 ${
                  done ? 'bg-pengo-green-light text-navy ring-pengo-green-light' : 'bg-ocean text-icegrey ring-white/10'}`
                  }>
                  
                  <r.icon className="h-4 w-4" />
                </span>
                <span className={`flex-1 text-xs font-medium transition-colors duration-300 sm:text-sm ${done ? 'text-snow' : 'text-icegrey/70'}`}>{r.label}</span>
                <span className="text-[10px] tabular-nums text-icegrey/70">{r.time}</span>
              </motion.li>);

          })}
        </ol>
      </div>
    </VignetteFrame>);

}

const rooms = ['Lounge', 'Kitchen', 'Dining'];
const sceneLevels = { Everyday: [80, 100, 70], Movie: [22, 0, 10] };

function LightingScenes() {
  const { ref, step } = useLoopStep(2, 2400);
  const scene = step === 0 ? 'Everyday' : 'Movie';
  const levels = sceneLevels[scene];
  return (
    <VignetteFrame label="Smart lighting scenes changing brightness room by room" tone="light">
      <div ref={ref} className="absolute inset-[7%] flex flex-col gap-3">
        <motion.div variants={popIn} className="flex gap-2">
          {(['Everyday', 'Movie'] as const).map((s) =>
          <span
            key={s}
            className={`rounded-full px-3.5 py-1.5 text-[11px] font-semibold transition-colors duration-200 ${
            s === scene ? 'bg-midnight text-snow' : 'bg-white text-steel ring-1 ring-icegrey/50'}`
            }>
            
              {s}
            </span>
          )}
        </motion.div>
        <div className="grid flex-1 grid-cols-3 gap-2.5">
          {rooms.map((room, i) =>
          <motion.div key={room} variants={popIn} className="relative flex flex-col justify-between overflow-hidden rounded-xl bg-midnight p-3 text-snow">
              <motion.span
              aria-hidden="true"
              className="absolute inset-0 bg-pengo-orange"
              animate={{ opacity: levels[i] / 100 * 0.35 }}
              transition={{ duration: 0.3, ease: easeOut }} />
            
              <LightbulbIcon className={`relative h-5 w-5 transition-colors duration-300 ${levels[i] > 0 ? 'text-pengo-orange' : 'text-white/30'}`} />
              <div className="relative">
                <p className="text-[11px] font-semibold">{room}</p>
                <div className="mt-2 h-1 rounded-full bg-white/15">
                  <motion.div className="h-full rounded-full bg-white" animate={{ width: `${levels[i]}%` }} transition={{ duration: 0.3, ease: easeOut }} />
                </div>
                <p className="mt-1.5 text-[10px] tabular-nums text-icegrey">{levels[i]}%</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </VignetteFrame>);

}

const lockStates = [
{ locked: true, note: 'Front door locked' },
{ locked: false, note: 'Unlocked remotely for a visitor' },
{ locked: false, note: 'Visitor arrived' },
{ locked: true, note: 'Locked again automatically' }];


function SmartLock() {
  const { ref, step } = useLoopStep(lockStates.length, 1600);
  const state = lockStates[step];
  return (
    <VignetteFrame label="Smart lock unlocking remotely and locking again automatically">
      <div ref={ref} className="absolute inset-[7%] flex items-center justify-center gap-6 sm:gap-10">
        <motion.div variants={popIn} className="relative grid h-32 w-32 place-items-center rounded-full bg-ocean ring-1 ring-white/10 sm:h-40 sm:w-40">
          <span
            aria-hidden="true"
            className={`absolute inset-2 rounded-full ring-2 transition-colors duration-300 ${state.locked ? 'ring-pengo-green-light/70' : 'ring-pengo-orange/70'}`} />
          
          <AnimatePresence mode="wait" initial={false}>
            <motion.span key={String(state.locked)} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.2, ease: easeOut }}>
              {state.locked ? <LockIcon className="h-10 w-10 text-pengo-green-light" /> : <LockOpenIcon className="h-10 w-10 text-pengo-orange" />}
            </motion.span>
          </AnimatePresence>
        </motion.div>
        <motion.div variants={popIn} className="w-[44%] max-w-[200px] rounded-[1.2rem] bg-midnight p-2 ring-1 ring-white/10">
          <div className="rounded-xl bg-white p-3 text-midnight">
            <span className="flex items-center gap-1.5 text-[10px] font-semibold text-steel">
              <BellIcon className="h-3 w-3" /> Home
            </span>
            <AnimatePresence mode="wait" initial={false}>
              <motion.p key={step} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2, ease: easeOut }} className="mt-1.5 text-xs font-semibold leading-snug">
                {state.note}
              </motion.p>
            </AnimatePresence>
            <span className={`mt-3 block rounded-md py-1.5 text-center text-[10px] font-bold text-white transition-colors duration-200 ${state.locked ? 'bg-pengo-green' : 'bg-pengo-orange-deep'}`}>
              {state.locked ? 'Locked' : 'Unlocked'}
            </span>
          </div>
        </motion.div>
      </div>
    </VignetteFrame>);

}

const hallway = ['Bedroom', 'Hallway', 'Stairs', 'Kitchen'];

function PresenceHallway() {
  const { ref, step } = useLoopStep(hallway.length, 1300);
  return (
    <VignetteFrame label="Presence sensors lighting the way as someone walks through at night" tone="light">
      <div ref={ref} className="absolute inset-[7%] flex flex-col">
        <motion.p variants={popIn} className="flex items-center gap-1.5 text-xs font-semibold">
          <MoonIcon className="h-3.5 w-3.5 text-steel" /> Night mode · Path lighting
        </motion.p>
        <motion.div variants={popIn} className="mt-4 grid flex-1 grid-cols-4 overflow-hidden rounded-xl bg-midnight ring-1 ring-midnight">
          {hallway.map((room, i) => {
            const lit = i === step;
            return (
              <div key={room} className="relative flex flex-col items-center justify-end border-r border-white/10 pb-3 last:border-r-0">
                <motion.span aria-hidden="true" className="absolute inset-0 bg-pengo-orange" animate={{ opacity: lit ? 0.22 : 0 }} transition={{ duration: 0.3, ease: easeOut }} />
                <span className={`absolute left-1/2 top-3 h-2 w-2 -translate-x-1/2 rounded-full transition-colors duration-300 ${lit ? 'bg-pengo-orange' : 'bg-white/20'}`} />
                {lit &&
                <motion.span layoutId="presence-person" transition={{ duration: 0.4, ease: easeOut }} className="relative mb-3 grid h-8 w-8 place-items-center rounded-full bg-white text-midnight">
                    <UserIcon className="h-4 w-4" />
                  </motion.span>
                }
                <span className="relative text-[10px] font-medium text-icegrey">{room}</span>
              </div>);

          })}
        </motion.div>
        <motion.p variants={popIn} className="mt-3 text-[11px] text-steel">
          Lights fade on ahead of you and switch off behind you.
        </motion.p>
      </div>
    </VignetteFrame>);

}

const devices = [
{ icon: TvIcon, label: 'TV', status: 'TV on · Movies', x: 18, y: 24 },
{ icon: SpeakerIcon, label: 'Speakers', status: 'Speakers at 30%', x: 82, y: 24 },
{ icon: AirVentIcon, label: 'Air con', status: 'Air con set to 24°', x: 18, y: 76 },
{ icon: CameraIcon, label: 'Cameras', status: 'Cameras watching the gate', x: 82, y: 76 }];


function DeviceHub() {
  const { ref, step } = useLoopStep(devices.length, 1500);
  return (
    <VignetteFrame label="Devices from different brands connected through one smart hub">
      <div ref={ref} className="absolute inset-0">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
          {devices.map((d, i) =>
          <line
            key={d.label}
            x1="50"
            y1="50"
            x2={d.x}
            y2={d.y}
            stroke={i === step ? '#4FB283' : '#93C5FD'}
            strokeOpacity={i === step ? 0.9 : 0.25}
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            style={{ transition: 'stroke 300ms ease-out, stroke-opacity 300ms ease-out' }} />

          )}
        </svg>
        <div className="absolute left-1/2 top-1/2 w-40 -translate-x-1/2 -translate-y-1/2 text-center">
          <motion.div variants={popIn} className="rounded-2xl bg-ocean px-3 py-3 ring-1 ring-pengo-green-light/40">
            <p className="text-[11px] font-bold">Smart hub</p>
            <AnimatePresence mode="wait" initial={false}>
              <motion.p key={step} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.2, ease: easeOut }} className="mt-1 text-[10px] text-pengo-green-light">
                {devices[step].status}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </div>
        {devices.map((d, i) =>
        <div key={d.label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${d.x}%`, top: `${d.y}%` }}>
            <motion.div
            variants={popIn}
            className={`flex flex-col items-center gap-1 rounded-xl bg-ocean px-3 py-2 ring-1 transition-colors duration-300 ${i === step ? 'ring-pengo-green-light/70' : 'ring-white/10'}`}>
            
              <d.icon className={`h-4 w-4 transition-colors duration-300 ${i === step ? 'text-pengo-green-light' : 'text-icegrey'}`} />
              <span className="text-[10px] font-medium">{d.label}</span>
            </motion.div>
          </div>
        )}
      </div>
    </VignetteFrame>);

}

const tiles = [
{ icon: LightbulbIcon, label: 'Lights', on: '3 rooms on', off: 'All off' },
{ icon: LockIcon, label: 'Doors', on: 'All locked', off: '1 unlocked' },
{ icon: ThermometerIcon, label: 'Climate', on: '24° cooling', off: 'Off' },
{ icon: CameraIcon, label: 'Cameras', on: 'Armed', off: 'Disarmed' }];


function ControlApp() {
  const { ref, step } = useLoopStep(tiles.length + 1, 1200);
  return (
    <VignetteFrame label="Smartphone control app showing the whole home in one view" tone="light">
      <div ref={ref} className="absolute inset-0 flex items-center justify-center">
        <motion.div variants={popIn} className="h-[86%] rounded-[1.6rem] bg-midnight p-2 shadow-2xl">
          <div className="flex h-full w-44 flex-col rounded-[1.2rem] bg-white p-3 sm:w-52">
            <p className="text-[10px] text-steel">Good evening</p>
            <p className="font-display text-sm font-bold">Home overview</p>
            <div className="mt-3 grid flex-1 grid-cols-2 gap-2">
              {tiles.map((t, i) => {
                const on = i < step;
                return (
                  <div key={t.label} className={`flex flex-col justify-between rounded-xl p-2.5 transition-colors duration-300 ${on ? 'bg-midnight text-snow' : 'bg-ice text-midnight'}`}>
                    <t.icon className={`h-4 w-4 ${on ? 'text-pengo-green-light' : 'text-steel'}`} />
                    <span>
                      <span className="block text-[10px] font-semibold">{t.label}</span>
                      <span className={`block text-[9px] ${on ? 'text-icegrey' : 'text-steel'}`}>{on ? t.on : t.off}</span>
                    </span>
                  </div>);

              })}
            </div>
            <p className={`mt-3 rounded-lg py-1.5 text-center text-[10px] font-semibold transition-colors duration-300 ${step === tiles.length ? 'bg-pengo-green text-white' : 'bg-ice text-steel'}`}>
              {step === tiles.length ? 'All set for the night' : 'Updating…'}
            </p>
          </div>
        </motion.div>
      </div>
    </VignetteFrame>);

}
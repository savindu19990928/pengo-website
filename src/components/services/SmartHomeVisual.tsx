import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { LightbulbIcon, MinusIcon, MoonIcon, PlusIcon, ShieldCheckIcon, SunsetIcon, ThermometerIcon, LockIcon } from 'lucide-react';
import { media } from '../../data/media';
import { easeOut } from '../../utils/motion';

type Scene = 'evening' | 'away' | 'night';

const zones = ['Living', 'Kitchen', 'Bedroom', 'Terrace'];
const scenes: {id: Scene;label: string;icon: typeof MoonIcon;lights: boolean[];armed: boolean;}[] = [
{ id: 'evening', label: 'Evening', icon: SunsetIcon, lights: [true, true, true, true], armed: false },
{ id: 'away', label: 'Away', icon: LockIcon, lights: [false, false, false, false], armed: true },
{ id: 'night', label: 'Night', icon: MoonIcon, lights: [false, false, true, false], armed: true }];


function Switch({ checked, onChange, label }: {checked: boolean;onChange: () => void;label: string;}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glacier ${
      checked ? 'bg-arctic' : 'bg-white/15'}`
      }>
      
      <motion.span
        className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-snow shadow"
        animate={{ x: checked ? 20 : 0 }}
        transition={{ duration: 0.18, ease: easeOut }} />
      
    </button>);

}

export function SmartHomeVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-25% 0px' });
  const reduce = useReducedMotion();
  const [lights, setLights] = useState<boolean[]>([false, false, false, false]);
  const [armed, setArmed] = useState(false);
  const [temp, setTemp] = useState(24);
  const [scene, setScene] = useState<Scene | null>(null);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setLights([true, true, true, true]);
      setScene('evening');
      return;
    }
    const timers = zones.map((_, i) =>
    window.setTimeout(() => {
      setLights((prev) => prev.map((on, idx) => idx === i ? true : on));
      if (i === zones.length - 1) setScene('evening');
    }, 400 + i * 380)
    );
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [inView, reduce]);

  const allOn = lights.every(Boolean);
  const litCount = lights.filter(Boolean).length;

  const applyScene = (id: Scene) => {
    const s = scenes.find((sc) => sc.id === id);
    if (!s) return;
    setScene(id);
    setLights(s.lights);
    setArmed(s.armed);
  };

  return (
    <div ref={ref} className="relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: easeOut }}
        className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-midnight md:aspect-[21/9]">
        
        <img src={media.smartHome} alt="Modern villa at dusk with smart lighting coming on room by room" className="absolute inset-0 h-full w-full object-cover" />
        <div aria-hidden="true" className="absolute inset-0 grid grid-cols-4">
          {zones.map((zone, i) =>
          <div key={zone} className="relative">
              <div
              className={`absolute inset-0 bg-midnight transition-opacity duration-300 ease-out ${lights[i] ? 'opacity-10' : 'opacity-80'}`} />
            
              <div className="absolute inset-x-2 bottom-3 flex items-center gap-1.5 md:inset-x-4 md:bottom-5">
                <span className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${lights[i] ? 'bg-glacier' : 'bg-white/30'}`} />
                <span className="text-[10px] font-medium text-snow md:text-xs">{zone}</span>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: easeOut, delay: 0.4 }}
        className="relative mt-4 rounded-2xl border border-white/10 bg-midnight/90 p-5 text-snow backdrop-blur-xl md:absolute md:bottom-6 md:right-6 md:top-6 md:mt-0 md:w-[300px] md:overflow-y-auto">
        
        <div className="flex items-center justify-between">
          <p className="font-display text-sm font-semibold">Villa controls</p>
          <span className="flex items-center gap-1.5 text-[11px] text-glacier">
            <span className="h-1.5 w-1.5 rounded-full bg-glacier" />
            Online
          </span>
        </div>

        <div className="mt-5 space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-glacier">
                <LightbulbIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-medium">Lighting</p>
                <p className="text-[11px] text-icegrey">{litCount} of 4 zones on</p>
              </div>
            </div>
            <Switch
              label="Toggle all lighting"
              checked={allOn}
              onChange={() => {
                setScene(null);
                setLights(zones.map(() => !allOn));
              }} />
            
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-glacier">
                <ThermometerIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-medium">Climate</p>
                <p className="text-[11px] text-icegrey">{temp}°C target</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                aria-label="Decrease temperature"
                onClick={() => setTemp((t) => Math.max(16, t - 1))}
                className="grid h-8 w-8 place-items-center rounded-lg border border-white/15 transition-colors duration-150 hover:border-glacier">
                
                <MinusIcon className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                aria-label="Increase temperature"
                onClick={() => setTemp((t) => Math.min(30, t + 1))}
                className="grid h-8 w-8 place-items-center rounded-lg border border-white/15 transition-colors duration-150 hover:border-glacier">
                
                <PlusIcon className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-glacier">
                <ShieldCheckIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-medium">Security</p>
                <p className="text-[11px] text-icegrey">{armed ? 'Armed' : 'Disarmed'}</p>
              </div>
            </div>
            <Switch
              label="Toggle security"
              checked={armed}
              onChange={() => {
                setScene(null);
                setArmed((a) => !a);
              }} />
            
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-[11px] font-medium text-icegrey">Scenes</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {scenes.map((s) => {
              const active = scene === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => applyScene(s.id)}
                  className={`flex flex-col items-center gap-1.5 rounded-xl border py-3 text-[11px] font-medium transition-colors duration-200 ${
                  active ? 'border-arctic bg-arctic/15 text-snow' : 'border-white/10 text-icegrey hover:border-white/25'}`
                  }>
                  
                  <s.icon className="h-4 w-4" />
                  {s.label}
                </button>);

            })}
          </div>
        </div>
      </motion.div>
    </div>);

}
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion, Variants } from 'framer-motion';
import {
  CalendarIcon,
  CheckIcon,
  DatabaseIcon,
  LayoutGridIcon,
  SettingsIcon,
  ShoppingBagIcon,
  UsersIcon } from
'lucide-react';
import { easeOut } from '../../utils/motion';

const kpis = [
{ label: 'Orders', value: '1,284', fill: '72%' },
{ label: 'Bookings', value: '316', fill: '54%' },
{ label: 'Distributors', value: '42', fill: '38%' }];

const bars = [42, 64, 52, 78, 60, 88, 72];
const bookingDays = [9, 12, 16, 19, 23, 26];
const products = ['bg-ocean', 'bg-glacier/50', 'bg-steel'];
const sidebar = [LayoutGridIcon, CalendarIcon, ShoppingBagIcon, UsersIcon, SettingsIcon];

const panel: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } }
};

export function SystemsVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-20% 0px' });
  const reduce = useReducedMotion();
  const [dayIndex, setDayIndex] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const id = window.setInterval(() => setDayIndex((i) => (i + 1) % bookingDays.length), 2200);
    return () => window.clearInterval(id);
  }, [inView, reduce]);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[660px] [perspective:1800px]" role="img" aria-label="Animated custom business dashboard with sales, bookings and products">
      <motion.div
        initial={{ opacity: 0, rotateY: -24, rotateX: 10, y: 40 }}
        whileInView={{ opacity: 1, rotateY: -7, rotateX: 4, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 1, ease: easeOut }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative overflow-hidden rounded-2xl bg-white shadow-[0_50px_100px_-40px_rgba(16,24,32,0.45)] ring-1 ring-icegrey/60">
        
        <div className="flex items-center gap-3 border-b border-ice px-4 py-3">
          <div className="flex gap-1.5">
            {[0, 1, 2].map((d) =>
            <span key={d} className="h-2.5 w-2.5 rounded-full bg-icegrey" />
            )}
          </div>
          <div className="flex-1 truncate rounded-md bg-ice px-3 py-1 text-[11px] text-steel">app.yourbusiness.lk/dashboard</div>
        </div>

        <div className="flex">
          <div className="hidden w-14 flex-col items-center gap-3 border-r border-ice py-5 sm:flex">
            {sidebar.map((Icon, i) =>
            <span key={i} className={`grid h-8 w-8 place-items-center rounded-lg ${i === 0 ? 'bg-midnight text-snow' : 'text-steel'}`}>
                <Icon className="h-4 w-4" />
              </span>
            )}
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.5 } } }}
            className="grid flex-1 grid-cols-6 gap-3 p-3 sm:p-4">
            
            {kpis.map((kpi) =>
            <motion.div key={kpi.label} variants={panel} className="col-span-2 rounded-xl border border-ice p-2.5 sm:p-3">
                <p className="text-[10px] font-medium text-steel">{kpi.label}</p>
                <p className="mt-1 font-display text-sm font-bold text-midnight sm:text-lg">{kpi.value}</p>
                <div className="mt-2 h-1 rounded-full bg-ice">
                  <div className="h-full rounded-full bg-arctic" style={{ width: kpi.fill }} />
                </div>
              </motion.div>
            )}

            <motion.div variants={panel} className="col-span-6 rounded-xl border border-ice p-3 sm:col-span-4">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold text-midnight">Sales overview</p>
                <p className="text-[10px] text-steel">Last 7 days</p>
              </div>
              <div className="mt-3 flex h-28 items-end gap-2">
                {bars.map((h, i) =>
                <motion.div
                  key={i}
                  className={`flex-1 origin-bottom rounded-t-md ${i === bars.length - 2 ? 'bg-arctic' : 'bg-icegrey/70'}`}
                  style={{ height: `${h}%` }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: easeOut, delay: 0.8 + i * 0.05 }} />

                )}
              </div>
            </motion.div>

            <motion.div variants={panel} className="col-span-6 rounded-xl border border-ice p-3 sm:col-span-2">
              <p className="text-[11px] font-semibold text-midnight">Bookings</p>
              <div className="mt-2 grid grid-cols-7 gap-0.5 text-center">
                {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => {
                  const selected = day === bookingDays[dayIndex];
                  return (
                    <span key={day} className={`relative grid aspect-square place-items-center text-[8px] font-medium ${selected ? 'text-white' : 'text-steel'}`}>
                      {selected &&
                      <motion.span layoutId="booking-day" className="absolute inset-0 rounded-md bg-arctic-deep" transition={{ duration: 0.3, ease: easeOut }} />
                      }
                      <span className="relative">{day}</span>
                    </span>);

                })}
              </div>
            </motion.div>

            {products.map((color, i) =>
            <motion.div key={color} variants={panel} className="col-span-2 rounded-xl border border-ice p-2">
                <div className={`grid aspect-[4/3] place-items-center rounded-lg ${color}`}>
                  <ShoppingBagIcon className={`h-4 w-4 ${i === 1 ? 'text-midnight' : 'text-glacier'}`} />
                </div>
                <div className="mt-2 h-1.5 w-3/4 rounded-full bg-icegrey/70" />
                <div className="mt-2 flex items-center justify-between">
                  <div className="h-1.5 w-1/3 rounded-full bg-midnight/70" />
                  <span className="rounded-md bg-midnight px-1.5 py-0.5 text-[8px] font-semibold text-snow">Add</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute -left-2 bottom-[10%] z-10 sm:-left-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOut, delay: 1.3 }}
          className="flex items-center gap-3 rounded-xl bg-charcoal px-4 py-3 text-snow shadow-xl">
          
          <span className="grid h-7 w-7 place-items-center rounded-full bg-arctic text-midnight">
            <CheckIcon className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-semibold">Booking confirmed</p>
            <p className="text-[11px] text-icegrey">Synced to calendar</p>
          </div>
        </motion.div>
      </div>

      <div className="absolute -right-2 -top-5 z-10 sm:-right-6">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOut, delay: 1.5 }}
          className="flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 shadow-xl ring-1 ring-icegrey/50">
          
          <DatabaseIcon className="h-4 w-4 text-arctic-deep" />
          <p className="text-xs font-semibold text-midnight">Order synced to ERP</p>
        </motion.div>
      </div>
    </div>);

}
import React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  BarChart3Icon,
  BotIcon,
  CheckIcon,
  CircleCheckIcon,
  DatabaseIcon,
  PackageIcon,
  ReceiptIcon,
  ShoppingCartIcon,
  WalletIcon } from
'lucide-react';
import { VignetteFrame } from './VignetteFrame';
import { media } from '../../data/media';
import { useLoopStep } from '../../hooks/useLoopStep';
import { easeOut, popIn } from '../../utils/motion';

export function TechnologyVignette({ id }: {id: string;}) {
  switch (id) {
    case 'website-development':
      return <ResponsiveSite />;
    case 'ecommerce':
      return <Storefront />;
    case 'booking-systems':
      return <BookingCalendar />;
    case 'custom-business-systems':
      return <WorkflowBoard />;
    case 'erp-distributor':
      return <ErpHub />;
    default:
      return <AgentChat />;
  }
}

function ResponsiveSite() {
  const reduce = useReducedMotion();
  return (
    <VignetteFrame label="Responsive website adapting from desktop to mobile" tone="light">
      <div className="absolute inset-[7%] flex items-center justify-center">
        <motion.div
          variants={popIn}
          className="h-full overflow-hidden rounded-xl bg-white shadow-[0_24px_50px_-24px_rgba(17,24,39,0.35)] ring-1 ring-icegrey/50"
          style={{ width: '100%' }}
          animate={reduce ? undefined : { width: ['100%', '36%', '36%', '100%'] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', times: [0, 0.4, 0.6, 1] }}>
          
          <div className="flex items-center gap-1.5 border-b border-ice px-3 py-2">
            {[0, 1, 2].map((d) =>
            <span key={d} className="h-2 w-2 shrink-0 rounded-full bg-icegrey" />
            )}
          </div>
          <div className="space-y-2.5 p-3">
            <div className="flex h-14 items-end rounded-lg bg-navy p-2.5">
              <span className="h-2 w-1/2 rounded-full bg-white/80" />
            </div>
            <div className="grid gap-2 [grid-template-columns:repeat(auto-fill,minmax(64px,1fr))]">
              {Array.from({ length: 6 }).map((_, i) =>
              <div key={i} className={`h-11 rounded-md ${i === 1 ? 'bg-arctic/20' : 'bg-ice'}`} />
              )}
            </div>
            <div className="h-1.5 w-3/4 rounded-full bg-icegrey" />
            <div className="h-1.5 w-1/2 rounded-full bg-ice" />
          </div>
        </motion.div>
      </div>
    </VignetteFrame>);

}

const products = [media.web, media.marketing, media.smartInterior];

function Storefront() {
  const { ref, step } = useLoopStep(products.length + 1, 1300);
  return (
    <VignetteFrame label="E-commerce store with products added to a cart">
      <div ref={ref} className="absolute inset-[6%] flex flex-col gap-3">
        <motion.div variants={popIn} className="flex items-center justify-between">
          <span className="text-xs font-semibold">Online store</span>
          <span className="relative grid h-9 w-9 place-items-center rounded-full bg-white/10">
            <ShoppingCartIcon className="h-4 w-4" />
            <motion.span
              key={step}
              initial={{ scale: 0.6 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2, ease: easeOut }}
              className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-arctic text-[9px] font-bold text-white">
              
              {step}
            </motion.span>
          </span>
        </motion.div>
        <div className="grid flex-1 grid-cols-3 gap-2">
          {products.map((src, i) => {
            const added = i < step;
            return (
              <motion.div key={src} variants={popIn} className="flex flex-col rounded-xl bg-ocean p-2 ring-1 ring-white/10">
                <img src={src} alt="" className="aspect-square w-full rounded-lg object-cover" />
                <span className="mt-2 h-1.5 w-3/4 rounded-full bg-white/60" />
                <span className="mt-1 h-1.5 w-1/3 rounded-full bg-white/25" />
                <span
                  className={`mt-auto flex items-center justify-center gap-1 rounded-md py-1 text-[9px] font-semibold transition-colors duration-200 ${
                  added ? 'bg-arctic-deep text-white' : 'bg-white/10 text-icegrey'}`
                  }>
                  
                  {added && <CheckIcon className="h-2.5 w-2.5" />}
                  {added ? 'Added' : 'Add to cart'}
                </span>
              </motion.div>);

          })}
        </div>
        <motion.div variants={popIn} className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
          <span className="h-1.5 w-16 rounded-full bg-white/40" />
          <span className="rounded-md bg-white px-3 py-1 text-[10px] font-semibold text-midnight">Checkout</span>
        </motion.div>
      </div>
    </VignetteFrame>);

}

const slots = ['09:00', '10:30', '13:00', '15:30'];

function BookingCalendar() {
  const { ref, step } = useLoopStep(slots.length, 1800);
  return (
    <VignetteFrame label="Booking system with calendar and appointment slots" tone="light">
      <div ref={ref} className="absolute inset-[6%] flex gap-3">
        <motion.div variants={popIn} className="flex-1 rounded-xl bg-white p-3 ring-1 ring-icegrey/50">
          <span className="text-[11px] font-semibold">Select a date</span>
          <div className="mt-2 grid grid-cols-7 gap-1">
            {Array.from({ length: 28 }, (_, i) => i + 1).map((d) =>
            <span
              key={d}
              className={`grid aspect-square place-items-center rounded text-[9px] font-medium ${
              d === 18 ? 'bg-arctic-deep text-white' : d % 7 === 0 ? 'text-icegrey' : 'text-midnight'}`
              }>
              
                {d}
              </span>
            )}
          </div>
        </motion.div>
        <motion.div variants={popIn} className="relative flex w-[38%] flex-col gap-1.5">
          <span className="text-[11px] font-semibold">Available times</span>
          {slots.map((s, i) =>
          <span
            key={s}
            className={`flex items-center justify-between rounded-lg px-2.5 py-2 text-[11px] font-semibold ring-1 transition-colors duration-200 ${
            i === step ? 'bg-arctic-deep text-white ring-arctic-deep' : 'bg-white text-midnight ring-icegrey/50'}`
            }>
            
              {s}
              {i === step && <CheckIcon className="h-3 w-3" />}
            </span>
          )}
          <AnimatePresence mode="wait">
            <motion.span
              key={step}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: easeOut }}
              className="mt-auto flex items-center gap-1.5 rounded-lg bg-midnight px-2.5 py-2 text-[10px] font-medium text-snow">
              
              <CircleCheckIcon className="h-3.5 w-3.5 shrink-0 text-pengo-green-light" />
              Booked · {slots[step]}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      </div>
    </VignetteFrame>);

}

const columns = ['New', 'In progress', 'Done'];

function WorkflowBoard() {
  const { ref, step } = useLoopStep(columns.length, 1700);
  return (
    <VignetteFrame label="Custom business workflow board with tasks moving between stages">
      <div ref={ref} className="absolute inset-[6%] grid grid-cols-3 gap-2.5">
        {columns.map((col, ci) =>
        <motion.div key={col} variants={popIn} className="flex flex-col gap-2 rounded-xl bg-ocean/70 p-2 ring-1 ring-white/10">
            <span className="px-1 text-[10px] font-semibold text-icegrey">{col}</span>
            {step === ci &&
          <motion.div
            layoutId="workflow-card"
            transition={{ duration: 0.3, ease: easeOut }}
            className="rounded-lg bg-white p-2 text-midnight">
            
                <span className="flex items-center gap-1 text-[9px] font-bold text-arctic-deep">
                  <ReceiptIcon className="h-3 w-3" /> Order #A-204
                </span>
                <span className="mt-1.5 block h-1.5 w-3/4 rounded-full bg-icegrey" />
              </motion.div>
          }
            {[0, 1].map((k) =>
          <div key={k} className="rounded-lg bg-white/5 p-2 ring-1 ring-white/10">
                <span className="block h-1.5 w-2/3 rounded-full bg-white/40" />
                <span className="mt-1.5 block h-1.5 w-1/2 rounded-full bg-white/15" />
              </div>
          )}
          </motion.div>
        )}
      </div>
    </VignetteFrame>);

}

const modules = [
{ label: 'Inventory', icon: PackageIcon, x: 20, y: 24 },
{ label: 'Sales', icon: ShoppingCartIcon, x: 80, y: 24 },
{ label: 'Finance', icon: WalletIcon, x: 20, y: 76 },
{ label: 'Reports', icon: BarChart3Icon, x: 80, y: 76 }];


function ErpHub() {
  const reduce = useReducedMotion();
  return (
    <VignetteFrame label="ERP hub connecting inventory, sales, finance and reporting">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {modules.map((m, i) =>
        <g key={m.label}>
            <line x1="50" y1="50" x2={m.x} y2={m.y} stroke="#93C5FD" strokeOpacity="0.3" vectorEffect="non-scaling-stroke" />
            {!reduce &&
          <motion.circle
            r="1.2"
            fill="#3B82F6"
            animate={{ cx: [m.x, 50, m.x], cy: [m.y, 50, m.y] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }} />

          }
          </g>
        )}
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div variants={popIn} className="flex flex-col items-center gap-1 rounded-2xl bg-arctic-deep px-4 py-3 text-white shadow-xl">
          <DatabaseIcon className="h-5 w-5" />
          <span className="text-[11px] font-bold">ERP core</span>
        </motion.div>
      </div>
      {modules.map((m) =>
      <div key={m.label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${m.x}%`, top: `${m.y}%` }}>
          <motion.div variants={popIn} className="flex items-center gap-2 rounded-xl bg-ocean p-2 pr-3 ring-1 ring-white/10">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/10 text-glacier">
              <m.icon className="h-3.5 w-3.5" />
            </span>
            <span className="text-[11px] font-semibold">{m.label}</span>
          </motion.div>
        </div>
      )}
    </VignetteFrame>);

}

function AgentChat() {
  const { ref, step } = useLoopStep(4, 1500);
  const shown = (n: number) => step >= n;
  return (
    <VignetteFrame label="AI agent handling a request and automating an action" tone="light">
      <div ref={ref} className="absolute inset-[7%] flex flex-col rounded-2xl bg-white p-4 ring-1 ring-icegrey/50">
        <div className="flex items-center gap-2 border-b border-ice pb-3">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-arctic-deep text-white">
            <BotIcon className="h-4 w-4" />
          </span>
          <span className="text-xs font-semibold">Pengo AI agent</span>
          <span className="ml-auto flex items-center gap-1 text-[10px] text-pengo-green">
            <span className="h-1.5 w-1.5 rounded-full bg-pengo-green" /> Online
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-end gap-2 pt-3">
          <span className="ml-auto max-w-[75%] rounded-2xl rounded-br-md bg-ice px-3 py-2 text-[11px]">
            Can you prepare the invoice for today’s delivery?
          </span>
          <AnimatePresence>
            {step === 1 &&
            <motion.span key="typing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex w-fit gap-1 rounded-2xl bg-navy px-3 py-2.5">
                {[0, 1, 2].map((d) =>
              <motion.span key={d} className="h-1.5 w-1.5 rounded-full bg-white" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 0.9, repeat: Infinity, delay: d * 0.15 }} />
              )}
              </motion.span>
            }
            {shown(2) &&
            <motion.span key="reply" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="max-w-[78%] rounded-2xl rounded-bl-md bg-navy px-3 py-2 text-[11px] text-snow">
                Done — the invoice is drafted from the delivery record.
              </motion.span>
            }
            {shown(3) &&
            <motion.span key="action" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex w-fit items-center gap-1.5 rounded-full bg-pengo-green/10 px-3 py-1.5 text-[10px] font-semibold text-pengo-green">
                <CircleCheckIcon className="h-3.5 w-3.5" /> Sent to finance for approval
              </motion.span>
            }
          </AnimatePresence>
        </div>
      </div>
    </VignetteFrame>);

}
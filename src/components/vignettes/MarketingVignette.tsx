import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  BellIcon,
  CheckIcon,
  ClockIcon,
  CreditCardIcon,
  HeartIcon,
  MailIcon,
  MegaphoneIcon,
  MessageCircleIcon,
  MessageSquareIcon,
  PlayIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  UserCheckIcon,
  UserIcon,
  UsersIcon } from
'lucide-react';
import { VignetteFrame } from './VignetteFrame';
import { media } from '../../data/media';
import { useLoopStep } from '../../hooks/useLoopStep';
import { easeOut, popIn } from '../../utils/motion';

export function MarketingVignette({ id }: {id: string;}) {
  switch (id) {
    case 'social-media-management':
      return <SocialDashboard />;
    case 'content-creation':
      return <ContentCreation />;
    case 'influencer-marketing':
      return <CreatorNetwork />;
    case 'digital-advertising':
      return <AdAnalytics />;
    case 'marketing-automation':
      return <LeadFunnel />;
    default:
      return <AccountAdmin />;
  }
}

const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const scheduled = [1, 3, 4, 6, 8, 10, 12];
const queue = ['Product launch reel', 'Behind the scenes', 'Customer story', 'Weekend offer'];

function SocialDashboard() {
  const { ref, step } = useLoopStep(queue.length + 1, 1400);
  return (
    <VignetteFrame label="Animated social media management dashboard" tone="light">
      <div ref={ref} className="absolute inset-[6%] flex gap-3">
        <motion.div variants={popIn} className="flex-1 rounded-xl bg-white p-3 ring-1 ring-icegrey/50">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold">Content calendar</span>
            <span className="text-[10px] text-steel">This month</span>
          </div>
          <div className="mt-3 grid grid-cols-7 gap-1.5">
            {days.map((d, i) =>
            <span key={i} className="text-center text-[9px] text-steel">{d}</span>
            )}
            {Array.from({ length: 21 }).map((_, i) =>
            <motion.span key={i} variants={popIn} className={`grid aspect-square place-items-center rounded-md ${scheduled.includes(i) ? 'bg-pengo-orange/15' : 'bg-ice'}`}>
                {scheduled.includes(i) && <span className="h-1.5 w-1.5 rounded-full bg-pengo-orange" />}
              </motion.span>
            )}
          </div>
        </motion.div>
        <motion.div variants={popIn} className="hidden w-[42%] flex-col gap-2 sm:flex">
          {queue.map((title, i) => {
            const published = i < step;
            return (
              <div key={title} className="rounded-xl bg-white p-2.5 ring-1 ring-icegrey/50">
                <p className="truncate text-[11px] font-semibold">{title}</p>
                <span
                  className={`mt-1.5 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-semibold transition-colors duration-300 ${
                  published ? 'bg-pengo-green/10 text-pengo-green' : 'bg-ice text-steel'}`
                  }>
                  
                  {published && <CheckIcon className="h-2.5 w-2.5" />}
                  {published ? 'Published' : 'Scheduled'}
                </span>
              </div>);

          })}
        </motion.div>
      </div>
    </VignetteFrame>);

}

const floatLoop = (delay: number) => ({
  animate: { y: [0, -8, 0] },
  transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' as const, delay }
});

function ContentCreation() {
  return (
    <VignetteFrame label="Floating creative posts and video previews">
      <motion.div variants={popIn} style={{ rotate: -6 }} className="absolute left-[6%] top-[14%] w-[32%]">
        <motion.div {...floatLoop(0)} className="rounded-xl bg-white p-1.5 shadow-2xl">
          <img src={media.marketing} alt="" className="aspect-[4/5] w-full rounded-lg object-cover" />
          <div className="flex items-center gap-1.5 px-1 pb-0.5 pt-1.5 text-midnight">
            <HeartIcon className="h-3 w-3 fill-pengo-red text-pengo-red" />
            <MessageCircleIcon className="h-3 w-3" />
          </div>
        </motion.div>
      </motion.div>
      <motion.div variants={popIn} className="absolute left-[33%] top-[8%] z-10 w-[34%]">
        <motion.div {...floatLoop(0.8)} className="relative aspect-[9/14] overflow-hidden rounded-xl bg-midnight shadow-2xl ring-1 ring-white/10">
          <img src={media.smartInterior} alt="" className="h-full w-full object-cover opacity-80" />
          <span className="absolute left-2 top-2 rounded-full bg-pengo-orange px-2 py-0.5 text-[9px] font-bold text-midnight">Reel</span>
          <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-midnight">
            <PlayIcon className="ml-0.5 h-4 w-4 fill-midnight" />
          </span>
          <div className="absolute inset-x-2 bottom-2 h-1 overflow-hidden rounded-full bg-white/25">
            <motion.div className="h-full origin-left bg-white" animate={{ scaleX: [0, 1] }} transition={{ duration: 5, repeat: Infinity, ease: 'linear' }} />
          </div>
        </motion.div>
      </motion.div>
      <motion.div variants={popIn} style={{ rotate: 5 }} className="absolute right-[6%] top-[20%] w-[29%]">
        <motion.div {...floatLoop(1.6)} className="rounded-xl bg-white p-1.5 shadow-2xl">
          <img src={media.web} alt="" className="aspect-square w-full rounded-lg object-cover" />
          <div className="space-y-1 px-1 pb-1 pt-1.5">
            <div className="h-1.5 w-3/4 rounded-full bg-icegrey" />
            <div className="h-1.5 w-1/2 rounded-full bg-ice" />
          </div>
        </motion.div>
      </motion.div>
      <motion.ul variants={popIn} className="absolute bottom-[7%] left-[6%] right-[6%] flex flex-wrap gap-1.5">
        {['Posts', 'Reels', 'Stories', 'Graphics'].map((t) =>
        <li key={t} className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium ring-1 ring-white/10">{t}</li>
        )}
      </motion.ul>
    </VignetteFrame>);

}

const creators = [
{ x: 20, y: 22 },
{ x: 80, y: 22 },
{ x: 20, y: 78 },
{ x: 80, y: 78 }];


function CreatorNetwork() {
  const { ref, step } = useLoopStep(creators.length, 1400);
  const line: Variants = { hidden: { pathLength: 0 }, show: { pathLength: 1, transition: { duration: 0.8, ease: easeOut } } };
  return (
    <VignetteFrame label="Creator profile cards connected to a brand campaign">
      <div ref={ref} className="absolute inset-0">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
          {creators.map((c, i) =>
          <motion.path
            key={i}
            d={`M50 50 L${c.x} ${c.y}`}
            variants={line}
            stroke={i === step ? '#F39A24' : '#93C5FD'}
            strokeOpacity={i === step ? 0.9 : 0.3}
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            style={{ transition: 'stroke 300ms ease-out, stroke-opacity 300ms ease-out' }} />

          )}
        </svg>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div variants={popIn} className="flex flex-col items-center gap-1.5 rounded-2xl bg-ocean px-4 py-3 ring-1 ring-pengo-orange/40">
            <MegaphoneIcon className="h-5 w-5 text-pengo-orange" />
            <span className="text-[11px] font-semibold">Brand campaign</span>
          </motion.div>
        </div>
        {creators.map((c, i) =>
        <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${c.x}%`, top: `${c.y}%` }}>
            <motion.div
            variants={popIn}
            className={`flex items-center gap-2 rounded-xl bg-ocean p-2 pr-3 ring-1 transition-colors duration-300 ${i === step ? 'ring-pengo-orange/70' : 'ring-white/10'}`}>
            
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10">
                <UserIcon className="h-3.5 w-3.5" />
              </span>
              <span className="space-y-1">
                <span className="block h-1.5 w-10 rounded-full bg-white/70" />
                <span className={`block text-[9px] font-semibold transition-colors duration-300 ${i === step ? 'text-pengo-orange' : 'text-icegrey'}`}>
                  {i === step ? 'Matched' : 'Creator'}
                </span>
              </span>
            </motion.div>
          </div>
        )}
      </div>
    </VignetteFrame>);

}

const bars = [30, 45, 38, 60, 52, 74, 68, 88];
const kpis = [
{ label: 'Reach', fill: 0.8 },
{ label: 'Clicks', fill: 0.6 },
{ label: 'Conversions', fill: 0.42 }];


function AdAnalytics() {
  const linePath = bars.map((h, i) => `${i === 0 ? 'M' : 'L'}${(i + 0.5) / bars.length * 100} ${100 - h}`).join(' ');
  return (
    <VignetteFrame label="Digital advertising analytics and performance charts" tone="light">
      <div className="absolute inset-x-[6%] top-[7%] grid grid-cols-3 gap-2">
        {kpis.map((k) =>
        <motion.div key={k.label} variants={popIn} className="rounded-xl bg-white p-2.5 ring-1 ring-icegrey/50">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-medium text-steel">{k.label}</span>
              <TrendingUpIcon className="h-3 w-3 text-pengo-green" />
            </div>
            <div className="mt-2 h-1 rounded-full bg-ice">
              <motion.div
              className="h-full origin-left rounded-full bg-pengo-orange"
              style={{ width: `${k.fill * 100}%` }}
              variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.8, ease: easeOut, delay: 0.3 } } }} />
            
            </div>
          </motion.div>
        )}
      </div>
      <motion.div variants={popIn} className="absolute inset-x-[6%] bottom-[7%] top-[33%] flex flex-col rounded-xl bg-white p-3 ring-1 ring-icegrey/50">
        <span className="text-[11px] font-semibold">Campaign performance</span>
        <div className="relative mt-2 flex flex-1 items-end gap-1.5">
          {bars.map((h, i) =>
          <motion.div
            key={i}
            className={`flex-1 origin-bottom rounded-t ${i >= bars.length - 2 ? 'bg-arctic-deep' : 'bg-icegrey/70'}`}
            style={{ height: `${h}%` }}
            variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1, transition: { duration: 0.6, ease: easeOut, delay: 0.3 + i * 0.05 } } }} />

          )}
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
            <motion.path
              d={linePath}
              fill="none"
              stroke="#F39A24"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1, transition: { duration: 1.2, ease: easeOut, delay: 0.8 } } }} />
            
          </svg>
        </div>
      </motion.div>
    </VignetteFrame>);

}

const stages = ['New leads', 'Nurture', 'Follow-up', 'Customers'];
const flows = [
{ icon: MailIcon, label: 'Welcome email sent' },
{ icon: ClockIcon, label: 'Wait two days' },
{ icon: MessageSquareIcon, label: 'Follow-up message' },
{ icon: UserCheckIcon, label: 'Assigned to sales' }];


function LeadFunnel() {
  const { ref, step, reduce } = useLoopStep(stages.length, 1300);
  return (
    <VignetteFrame label="Connected lead funnel with automated follow-up workflow">
      <div ref={ref} className="absolute inset-[6%] flex gap-4">
        <div className="relative flex w-[54%] flex-col justify-center gap-2">
          {stages.map((s, i) =>
          <motion.div
            key={s}
            variants={popIn}
            style={{ width: `${100 - i * 18}%` }}
            className={`mx-auto rounded-lg px-3 py-2.5 text-center text-[11px] font-semibold ring-1 transition-colors duration-300 ${
            i === step ? 'bg-pengo-orange/20 text-snow ring-pengo-orange/60' : 'bg-ocean text-icegrey ring-white/10'}`
            }>
            
              {s}
            </motion.div>
          )}
          {!reduce &&
          [0, 1, 2].map((d) =>
          <motion.span
            key={d}
            aria-hidden="true"
            className="absolute left-1/2 top-0 -ml-1 h-2 w-2 rounded-full bg-glacier"
            animate={{ top: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, delay: d * 0.85, ease: 'easeIn' }} />

          )}
        </div>
        <ul className="flex flex-1 flex-col justify-center gap-2">
          {flows.map((f, i) =>
          <motion.li
            key={f.label}
            variants={popIn}
            className={`flex items-center gap-2 rounded-lg p-2 ring-1 transition-colors duration-300 ${i === step ? 'bg-white/10 ring-glacier/50' : 'ring-white/10'}`}>
            
              <f.icon className={`h-3.5 w-3.5 shrink-0 ${i === step ? 'text-glacier' : 'text-icegrey'}`} />
              <span className="text-[10px] font-medium leading-tight sm:text-[11px]">{f.label}</span>
            </motion.li>
          )}
        </ul>
      </div>
    </VignetteFrame>);

}

const adminRows = [
{ icon: UsersIcon, label: 'Team roles & access' },
{ icon: ShieldCheckIcon, label: 'Two-step verification' },
{ icon: CreditCardIcon, label: 'Ad account billing' },
{ icon: BellIcon, label: 'Message notifications' }];


function AccountAdmin() {
  return (
    <VignetteFrame label="Social media account administration settings" tone="light">
      <motion.div variants={popIn} className="absolute inset-x-[10%] inset-y-[9%] flex flex-col rounded-2xl bg-white p-4 ring-1 ring-icegrey/50">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold">Account settings</span>
          <div className="flex -space-x-1.5">
            {['bg-pengo-blue', 'bg-pengo-orange', 'bg-midnight'].map((c) =>
            <span key={c} className={`h-5 w-5 rounded-full ring-2 ring-white ${c}`} />
            )}
          </div>
        </div>
        <ul className="mt-3 flex-1 divide-y divide-ice">
          {adminRows.map((row, i) =>
          <li key={row.label} className="flex items-center gap-3 py-2.5">
              <row.icon className="h-4 w-4 text-steel" />
              <span className="flex-1 text-[11px] font-medium sm:text-xs">{row.label}</span>
              <motion.span
              className="relative h-4 w-7 rounded-full"
              variants={{ hidden: { backgroundColor: '#B7C5D6' }, show: { backgroundColor: '#08633D', transition: { delay: 0.5 + i * 0.25, duration: 0.2 } } }}>
              
                <motion.span
                className="absolute left-0.5 top-0.5 h-3 w-3 rounded-full bg-white"
                variants={{ hidden: { x: 0 }, show: { x: 12, transition: { delay: 0.5 + i * 0.25, duration: 0.2, ease: easeOut } } }} />
              
              </motion.span>
            </li>
          )}
        </ul>
        <motion.p
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay: 1.7 } } }}
          className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-pengo-green">
          
          <CheckIcon className="h-3.5 w-3.5" /> All accounts in good standing
        </motion.p>
      </motion.div>
    </VignetteFrame>);

}
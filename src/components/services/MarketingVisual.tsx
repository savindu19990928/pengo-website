import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  HeartIcon,
  MegaphoneIcon,
  MessageCircleIcon,
  PlayIcon,
  SendIcon,
  Share2Icon,
  SparklesIcon,
  TrendingUpIcon,
  UserIcon } from
'lucide-react';
import { media } from '../../data/media';
import { easeOut } from '../../utils/motion';

type Post = {kind: 'photo';src: string;} | {kind: 'tile';color: string;icon: typeof SparklesIcon;};

const posts: Post[] = [
{ kind: 'photo', src: media.marketing },
{ kind: 'tile', color: 'bg-ocean', icon: SparklesIcon },
{ kind: 'photo', src: media.web },
{ kind: 'tile', color: 'bg-deepteal', icon: PlayIcon }];


const calendarTiles = [
{ src: media.marketing },
{ color: 'bg-arctic' },
{ color: 'bg-midnight' },
{ color: 'bg-glacier' },
{ src: media.smartInterior },
{ color: 'bg-deepteal' }];


const pop: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
};

const floatLoop = (delay: number) => ({
  animate: { y: [0, -8, 0] },
  transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' as const, delay }
});

export function MarketingVisual() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-15% 0px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      className="relative mx-auto aspect-square w-full max-w-[620px]"
      aria-label="Animated illustration of a social media campaign dashboard"
      role="img">
      
      <motion.div variants={pop} className="absolute inset-[7%] rounded-[2.5rem] bg-ice" />

      {/* Phone with a continuously scrolling feed */}
      <div className="absolute left-[28%] top-[8%] z-10 w-[44%]">
        <motion.div variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } } }}>
          <div className="rounded-[2.2rem] bg-midnight p-2 shadow-[0_40px_80px_-30px_rgba(7,17,29,0.55)]">
            <div className="relative aspect-[9/18.5] overflow-hidden rounded-[1.8rem] bg-snow">
              <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-2 border-b border-ice bg-snow px-3 pb-2 pt-4">
                <span className="h-6 w-6 rounded-full bg-arctic" />
                <div className="space-y-1">
                  <div className="h-1.5 w-14 rounded-full bg-midnight/80" />
                  <div className="h-1.5 w-9 rounded-full bg-icegrey" />
                </div>
              </div>
              <div className="pt-14">
                <motion.div animate={{ y: ['0%', '-50%'] }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}>
                  {[...posts, ...posts].map((post, i) =>
                  <div key={i} className="px-3 pb-4">
                      <div className="mb-2 flex items-center gap-1.5">
                        <span className="h-4 w-4 rounded-full bg-icegrey" />
                        <span className="h-1.5 w-12 rounded-full bg-midnight/70" />
                      </div>
                      <div className="aspect-[4/5] overflow-hidden rounded-xl">
                        {post.kind === 'photo' ?
                      <img src={post.src} alt="" className="h-full w-full object-cover" /> :

                      <div className={`grid h-full w-full place-items-center ${post.color}`}>
                            <post.icon className="h-6 w-6 text-glacier" />
                          </div>
                      }
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-midnight">
                        <HeartIcon className={`h-3.5 w-3.5 ${i % 2 === 0 ? 'fill-arctic text-arctic' : ''}`} />
                        <MessageCircleIcon className="h-3.5 w-3.5" />
                        <SendIcon className="h-3.5 w-3.5" />
                      </div>
                      <div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-icegrey/70" />
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Audience growth */}
      <div className="absolute left-0 top-[14%] z-20 w-[40%]">
        <motion.div variants={{ hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } } }}>
          <motion.div {...floatLoop(0)} className="rounded-2xl bg-white p-3.5 shadow-[0_20px_50px_-20px_rgba(7,17,29,0.3)] ring-1 ring-icegrey/40 sm:p-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-midnight">Audience growth</span>
              <TrendingUpIcon className="h-3.5 w-3.5 text-arctic-deep" />
            </div>
            <svg viewBox="0 0 160 70" className="mt-3 w-full" aria-hidden="true">
              <path d="M2 66 H158" stroke="#EEF4F8" strokeWidth="1" />
              <path d="M2 40 H158" stroke="#EEF4F8" strokeWidth="1" />
              <motion.path
                d="M2 62 C 22 58, 30 50, 46 50 S 70 40, 84 36 S 108 30, 120 20 S 146 10, 158 6"
                fill="none"
                stroke="#4AA3D8"
                strokeWidth="2.5"
                strokeLinecap="round"
                variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1, transition: { duration: 1.4, ease: easeOut, delay: 0.4 } } }} />
              
              <motion.circle
                cx="158"
                cy="6"
                r="3.5"
                fill="#176B70"
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay: 1.6 } } }} />
              
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Campaign status */}
      <div className="absolute right-[2%] top-[9%] z-20">
        <motion.div variants={pop}>
          <div className="flex items-center gap-2 rounded-full bg-midnight px-3.5 py-2 text-[11px] font-medium text-snow shadow-lg">
            <span className="relative flex h-2 w-2">
              <motion.span
                className="absolute inset-0 rounded-full bg-glacier"
                animate={{ scale: [1, 2.2], opacity: [0.7, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }} />
              
              <span className="relative h-2 w-2 rounded-full bg-glacier" />
            </span>
            <MegaphoneIcon className="h-3.5 w-3.5 text-glacier" />
            Campaign live
          </div>
        </motion.div>
      </div>

      {/* Engagement bubbles */}
      <div aria-hidden="true" className="absolute right-[20%] top-[34%] z-20 hidden h-40 w-10 sm:block">
        {[HeartIcon, MessageCircleIcon, Share2Icon].map((Icon, i) =>
        <motion.span
          key={i}
          className="absolute bottom-0 left-0 grid h-9 w-9 place-items-center rounded-full bg-white text-arctic-deep shadow-md ring-1 ring-icegrey/40"
          animate={{ y: [0, -110], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, delay: i * 1.2, ease: 'easeOut' }}>
          
            <Icon className="h-4 w-4" />
          </motion.span>
        )}
      </div>

      {/* Content calendar assembling */}
      <div className="absolute bottom-[8%] right-0 z-20 w-[42%]">
        <motion.div
          variants={{ hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut, staggerChildren: 0.07, delayChildren: 0.3 } } }}>
          
          <motion.div {...floatLoop(1.5)} className="rounded-2xl bg-white p-3.5 shadow-[0_20px_50px_-20px_rgba(7,17,29,0.3)] ring-1 ring-icegrey/40 sm:p-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-midnight">Content plan</span>
              <span className="text-[10px] text-steel">This week</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              {calendarTiles.map((tile, i) =>
              <motion.div key={i} variants={pop} className="aspect-square overflow-hidden rounded-lg">
                  {'src' in tile && tile.src ?
                <img src={tile.src} alt="" className="h-full w-full object-cover" /> :

                <div className={`h-full w-full ${tile.color}`} />
                }
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Creator collaboration */}
      <div className="absolute bottom-[16%] left-[2%] z-20">
        <motion.div variants={pop}>
          <motion.div {...floatLoop(0.8)} className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-[0_20px_50px_-20px_rgba(7,17,29,0.3)] ring-1 ring-icegrey/40">
            <div className="flex -space-x-2">
              {['bg-arctic', 'bg-deepteal', 'bg-steel'].map((c) =>
              <span key={c} className={`grid h-7 w-7 place-items-center rounded-full ring-2 ring-white ${c}`}>
                  <UserIcon className="h-3.5 w-3.5 text-white" />
                </span>
              )}
            </div>
            <div className="pr-1">
              <p className="text-[11px] font-semibold text-midnight">Creator collaboration</p>
              <p className="text-[10px] text-steel">Scheduled</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>);

}
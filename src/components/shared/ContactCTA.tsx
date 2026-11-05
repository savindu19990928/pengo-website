import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, MessageCircleIcon } from 'lucide-react';
import { RevealText } from '../motion/RevealText';
import { FadeIn } from '../motion/FadeIn';
import { SnowParticles } from '../SnowParticles';
import { BrandRule } from './BrandRule';
import { media } from '../../data/media';
import { whatsappLink } from '../../data/navigation';
import { easeOut } from '../../utils/motion';

export function ContactCTA() {
  return (
    <section aria-labelledby="cta-title" className="relative isolate flex min-h-[540px] items-center overflow-hidden bg-navy text-snow md:min-h-[620px]">
      <motion.img
        src={media.closingPenguin}
        alt=""
        initial={{ opacity: 0, scale: 1.08, filter: 'blur(14px)', y: 30 }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 1.6, ease: easeOut }}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]" />
      
      <div className="absolute inset-0 -z-10 bg-navy/65 md:bg-navy/30" />
      <SnowParticles density={40} className="absolute inset-0 -z-10 h-full w-full" />

      <div className="mx-auto w-full max-w-[1440px] px-5 py-28 md:px-8 lg:px-12">
        <div className="max-w-2xl">
          <BrandRule segment="w-6" />
          <RevealText
            id="cta-title"
            text="Let's build something great together."
            highlight="great together."
            className="mt-7 font-display text-5xl font-extrabold leading-[1.02] tracking-[-0.035em] md:text-7xl"
            highlightClassName="text-glacier" />
          
          <FadeIn delay={0.2}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-icegrey">
              Tell us about your goals. We’ll help you find the right mix of creativity, technology and intelligent
              solutions to move forward.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-arctic-deep px-7 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-arctic-darker">
                
                Get in Touch
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-white/25 px-7 py-4 text-sm font-semibold transition-colors duration-200 hover:border-glacier hover:text-glacier">
                
                <MessageCircleIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>);

}
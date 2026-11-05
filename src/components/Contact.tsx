import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon, MapPinIcon, MessageCircleIcon } from 'lucide-react';
import { locations, socialLinks } from '../data/company';
import { RevealText } from './motion/RevealText';
import { FadeIn } from './motion/FadeIn';
import { SnowParticles } from './SnowParticles';
import { ContactForm } from './ContactForm';
import { Breadcrumbs } from './shared/Breadcrumbs';
import { BrandRule } from './shared/BrandRule';
import { media } from '../data/media';
import { whatsappLink, whatsappNumber } from '../data/navigation';
import { easeOut } from '../utils/motion';

const nextSteps = [
{ title: 'We review your message', text: 'The right specialist on our team reads every inquiry.' },
{ title: 'A short discovery call', text: 'We learn about your goals, timeline and constraints.' },
{ title: 'A tailored proposal', text: 'Clear scope, approach and next steps — no obligation.' }];


export function Contact() {
  return (
    <>
      <section aria-labelledby="contact-title" className="relative isolate flex min-h-[600px] items-center overflow-hidden bg-navy text-snow md:min-h-[660px]">
        <motion.img
          src={media.closingPenguin}
          alt=""
          initial={{ opacity: 0, scale: 1.08, filter: 'blur(14px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.6, ease: easeOut }}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]" />
        
        <div className="absolute inset-0 -z-10 bg-navy/65 md:bg-navy/30" />
        <SnowParticles density={40} className="absolute inset-0 -z-10 h-full w-full" />

        <div className="mx-auto w-full max-w-[1440px] px-5 pb-24 pt-32 md:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
          <div className="mt-10 max-w-2xl">
            <BrandRule segment="w-6" />
            <RevealText
              as="h1"
              onMount
              id="contact-title"
              text="Let's start a conversation."
              highlight="a conversation."
              className="mt-7 font-display text-5xl font-extrabold leading-[1.02] tracking-[-0.035em] md:text-7xl"
              highlightClassName="text-glacier" />
            
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: easeOut, delay: 0.5 }}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-icegrey">
                Have a business challenge or a project in mind? Tell us about it — we’ll help you find the right way
                forward.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-arctic-deep px-7 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-arctic-darker">
                  
                  <MessageCircleIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
                <a
                  href="#inquiry"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/25 px-7 py-4 text-sm font-semibold transition-colors duration-200 hover:border-glacier hover:text-glacier">
                  
                  Send a message
                  <ArrowDownIcon className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="inquiry" aria-label="Contact form" className="bg-snow text-midnight">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-4">
            <FadeIn>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-[1.75rem] bg-navy p-7 text-snow transition-colors duration-200 hover:bg-ocean">
                
                <MessageCircleIcon className="h-6 w-6 text-glacier" />
                <p className="mt-6 text-sm font-semibold text-icegrey">Prefer to chat?</p>
                <p className="mt-1 font-display text-2xl font-bold tracking-[-0.02em]">{whatsappNumber}</p>
                <p className="mt-3 text-sm text-icegrey">Message us on WhatsApp for a quick response.</p>
              </a>
            </FadeIn>

            <FadeIn delay={0.1} className="mt-12">
              <h2 className="font-display text-lg font-bold">What happens next</h2>
              <ol className="mt-6 space-y-6">
                {nextSteps.map((step, i) =>
                <li key={step.title} className="flex gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-arctic/40 font-display text-sm font-bold text-arctic-deep">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-medium">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-steel">{step.text}</p>
                    </div>
                  </li>
                )}
              </ol>
            </FadeIn>

            <FadeIn delay={0.15} className="mt-12 border-t border-ice pt-8">
              <h2 className="font-display text-lg font-bold">Find us</h2>
              {locations.length > 0 ?
              <ul className="mt-4 space-y-4">
                  {locations.map((loc) =>
                <li key={loc.name} className="flex gap-3">
                      <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-arctic-deep" />
                      <div>
                        <p className="font-medium">{loc.name}</p>
                        <p className="text-sm leading-relaxed text-steel">{loc.address}</p>
                        {loc.mapUrl &&
                    <a href={loc.mapUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold text-arctic-deep hover:underline">
                            Open in Maps
                          </a>
                    }
                      </div>
                    </li>
                )}
                </ul> :

              <p className="mt-4 flex gap-3 text-sm leading-relaxed text-steel">
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-arctic-deep" />
                  Serving clients across Sri Lanka. Office addresses will be listed here soon.
                </p>
              }
              {socialLinks.length > 0 &&
              <ul className="mt-6 flex flex-wrap gap-2">
                  {socialLinks.map((s) =>
                <li key={s.url}>
                      <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full border border-icegrey px-4 py-2 text-sm font-semibold transition-colors duration-200 hover:border-arctic-deep hover:text-arctic-deep">
                    
                        {s.label}
                      </a>
                    </li>
                )}
                </ul>
              }
            </FadeIn>
          </div>

          <FadeIn delay={0.15} className="lg:col-span-8">
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </>);

}
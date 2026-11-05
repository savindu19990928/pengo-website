import React from 'react';
import { PageHero } from '../components/shared/PageHero';
import { FadeIn } from '../components/motion/FadeIn';
import { StoryTimeline } from '../components/about/StoryTimeline';
import { VisionGlobe } from '../components/about/VisionGlobe';
import { MissionNetwork } from '../components/about/MissionNetwork';
import { CoreValues } from '../components/about/CoreValues';
import { IntegratedCapabilities } from '../components/about/IntegratedCapabilities';
import { TeamDisciplines } from '../components/team/TeamDisciplines';
import { TeamStructure } from '../components/about/TeamStructure';
import { ContactCTA } from '../components/shared/ContactCTA';
import { disciplines } from '../data/about';
import { usePageTitle } from '../hooks/usePageTitle';

export function AboutPage() {
  usePageTitle('About Us');
  return (
    <>
      <PageHero
        label="About Pengo"
        title="An integrated digital, technology and innovation company."
        highlight="innovation company."
        intro="Originating from Sri Lanka, Pengo (Pvt) Ltd brings creativity, technology and intelligent solutions together to help businesses grow, connect and move forward."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]} />
      

      <section aria-labelledby="who-title" className="bg-white text-midnight">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12 lg:px-12">
          <FadeIn className="lg:col-span-7">
            <h2 id="who-title" className="font-display text-3xl font-semibold leading-snug tracking-[-0.02em] md:text-[2.5rem] md:leading-[1.2]">
              We bring together digital marketing, creative solutions, technology, AI, IT infrastructure, smart
              technologies and enterprise solutions — so our clients can work with one team that sees the whole picture.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-relaxed text-steel">
              Established in August 2023, our multidisciplinary team of 20+ professionals combines technical expertise
              with practical business understanding.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {disciplines.map((d) =>
              <li key={d} className="rounded-full bg-ice px-3.5 py-1.5 text-sm font-medium">
                  {d}
                </li>
              )}
            </ul>
          </FadeIn>
        </div>
      </section>

      <StoryTimeline />
      <VisionGlobe />
      <MissionNetwork />
      <CoreValues />
      <IntegratedCapabilities />
      <TeamStructure />
      <div id="team" className="scroll-mt-20">
        <TeamDisciplines />
      </div>
      <ContactCTA />
    </>);

}
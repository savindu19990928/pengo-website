import React from 'react';
import { Hero } from '../components/Hero';
import { ClientMarquee } from '../components/ClientMarquee';
import { WhoWeAre } from '../components/home/WhoWeAre';
import { CapabilitiesPreview } from '../components/home/CapabilitiesPreview';
import { Stats } from '../components/Stats';
import { VisionMissionPreview } from '../components/home/VisionMissionPreview';
import { WhyPengo } from '../components/home/WhyPengo';
import { WorkPreview } from '../components/home/WorkPreview';
import { ContactCTA } from '../components/shared/ContactCTA';
import { usePageTitle } from '../hooks/usePageTitle';

export function HomePage() {
  usePageTitle();
  return (
    <>
      <Hero />
      <ClientMarquee />
      <Stats />
      <WhoWeAre />
      <CapabilitiesPreview />
      <VisionMissionPreview />
      <WhyPengo />
      <WorkPreview />
      <ContactCTA />
    </>);

}
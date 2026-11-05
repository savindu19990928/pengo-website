import React from 'react';
import { ServicePageHero } from './ServicePageHero';
import { ServiceIntro } from './ServiceIntro';
import { ServiceShowcase } from './ServiceShowcase';
import { ServiceExpertise } from './ServiceExpertise';
import { ServiceImpact } from './ServiceImpact';
import { ContactCTA } from '../shared/ContactCTA';
import { capabilities, CapabilityId } from '../../data/capabilities';
import { ServicePageContent } from '../../types/servicePage';
import { usePageTitle } from '../../hooks/usePageTitle';

type ServicePageProps = {
  capabilityId: CapabilityId;
  content: ServicePageContent;
  heroVisual: React.ReactNode;
  renderVisual: (id: string) => React.ReactNode;
  introImage?: string;
};

export function ServicePage({ capabilityId, content, heroVisual, renderVisual, introImage }: ServicePageProps) {
  const capability = capabilities.find((c) => c.id === capabilityId) ?? capabilities[0];
  usePageTitle(capability.name);

  return (
    <>
      <ServicePageHero capability={capability} hero={content.hero} visual={heroVisual} />
      <ServiceIntro intro={content.intro} image={introImage ?? capability.image} accent={capability.accent} />
      <ServiceShowcase showcase={content.showcase} services={content.services} accent={capability.accent} renderVisual={renderVisual} />
      <ServiceExpertise expertise={content.expertise} accent={capability.accent} />
      <ServiceImpact impact={content.impact} accent={capability.accent} />
      <ContactCTA />
    </>);

}
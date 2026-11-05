import React from 'react';
import { ServicePage } from '../components/service-page/ServicePage';
import { SystemsVisual } from '../components/services/SystemsVisual';
import { TechnologyVignette } from '../components/vignettes/TechnologyVignette';
import { technologyContent } from '../data/technology';

export function TechnologyPage() {
  return (
    <ServicePage
      capabilityId="technology"
      content={technologyContent}
      heroVisual={<SystemsVisual />}
      renderVisual={(id) => <TechnologyVignette id={id} />} />);


}
import React from 'react';
import { ServicePage } from '../components/service-page/ServicePage';
import { SmartHomeVisual } from '../components/services/SmartHomeVisual';
import { SmartLivingVignette } from '../components/vignettes/SmartLivingVignette';
import { smartLivingContent } from '../data/smartLiving';
import { media } from '../data/media';

export function SmartLivingPage() {
  return (
    <ServicePage
      capabilityId="smart-living"
      content={smartLivingContent}
      heroVisual={<SmartHomeVisual />}
      renderVisual={(id) => <SmartLivingVignette id={id} />}
      introImage={media.smartHome} />);


}
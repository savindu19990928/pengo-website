import React from 'react';
import { ServicePage } from '../components/service-page/ServicePage';
import { DesignHeroVisual } from '../components/heroes/DesignHeroVisual';
import { DesignVignette } from '../components/vignettes/DesignVignette';
import { designContent } from '../data/design';
import { media } from '../data/media';

export function DesignPage() {
  return (
    <ServicePage
      capabilityId="design"
      content={designContent}
      heroVisual={<DesignHeroVisual />}
      renderVisual={(id) => <DesignVignette id={id} />}
      introImage={media.web} />);


}
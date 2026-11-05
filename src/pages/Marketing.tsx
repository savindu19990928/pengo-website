import React from 'react';
import { ServicePage } from '../components/service-page/ServicePage';
import { MarketingVisual } from '../components/services/MarketingVisual';
import { MarketingVignette } from '../components/vignettes/MarketingVignette';
import { marketingContent } from '../data/marketing';

export function MarketingPage() {
  return (
    <ServicePage
      capabilityId="marketing"
      content={marketingContent}
      heroVisual={<MarketingVisual />}
      renderVisual={(id) => <MarketingVignette id={id} />} />);


}
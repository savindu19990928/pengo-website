import React from 'react';
import { ServicePage } from '../components/service-page/ServicePage';
import { SecurityVisual } from '../components/services/SecurityVisual';
import { SecurityVignette } from '../components/vignettes/SecurityVignette';
import { securityContent } from '../data/security';

export function SecurityPage() {
  return (
    <ServicePage
      capabilityId="security"
      content={securityContent}
      heroVisual={<SecurityVisual />}
      renderVisual={(id) => <SecurityVignette id={id} />} />);


}
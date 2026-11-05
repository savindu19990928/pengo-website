import { ServicePageContent } from '../types/servicePage';

export const securityContent: ServicePageContent = {
  hero: {
    title: 'Smarter security. Greater confidence.',
    highlight: 'Greater confidence.',
    intro: 'Reliable security and ELV solutions designed to protect businesses, properties, and people.'
  },
  intro: {
    label: 'Planned protection',
    title: 'Security planned around real risks.',
    highlight: 'around real risks.',
    body: [
    'Security infrastructure is only as good as its planning. We survey each site, design coverage around real risks and install systems that stay dependable day after day.',
    'Our B2B project team coordinates closely with your facilities and operations teams, keeping installations organised and disruption to a minimum.'],

    points: ['Site survey', 'Coverage design', 'Installation', 'Testing & handover'],
    ordered: true
  },
  showcase: {
    title: 'Connected protection, end to end.',
    highlight: 'end to end.',
    intro: 'Six security and infrastructure services, delivered by one coordinated team.'
  },
  services: [
  { id: 'cctv-solutions', title: 'CCTV Solutions', description: 'Camera systems planned for clear, reliable coverage of the areas that matter most.' },
  { id: 'commercial-cctv', title: 'Commercial CCTV Projects', description: 'Multi-camera installations for offices, retail, warehouses and commercial buildings.' },
  { id: 'elv-systems', title: 'ELV Systems', description: 'Structured cabling and extra-low-voltage systems that connect your building.' },
  { id: 'network-infrastructure', title: 'Network Infrastructure', description: 'Reliable wired and wireless networks that keep cameras, devices and teams connected.' },
  { id: 'security-integration', title: 'Security Integration', description: 'Cameras, access control and alarms brought together into a single view.' },
  { id: 'b2b-projects', title: 'B2B Security Projects', description: 'Planned, coordinated project delivery for commercial and business sites.' }],

  expertise: {
    title: 'Engineers you can trust on site.',
    highlight: 'trust on site.',
    body: 'Experienced technicians and project managers who plan carefully, install cleanly and hand over properly.',
    roles: ['Security system engineering', 'ELV installation', 'Network infrastructure', 'Project management']
  },
  impact: {
    title: 'Confidence, built in.',
    highlight: 'built in.',
    items: [
    { title: 'Clear visibility', text: 'Coverage designed around your site, so the areas that matter are always in view.' },
    { title: 'Reliable infrastructure', text: 'Cabling, networks and recording built to stay dependable over time.' },
    { title: 'Organised delivery', text: 'Coordinated projects that keep disruption to your operations to a minimum.' }]

  }
};
import { ServicePageContent } from '../types/servicePage';

export const smartLivingContent: ServicePageContent = {
  hero: {
    title: 'Make your home think smarter.',
    highlight: 'think smarter.',
    intro: 'Connect everyday living with intelligent automation, seamless control, and modern technology.'
  },
  intro: {
    label: 'Everyday intelligence',
    title: 'Technology that fits naturally into daily life.',
    highlight: 'into daily life.',
    body: [
    'A smart home should feel effortless. We design connected environments where lighting, access, climate and devices work together — controlled from a wall panel, a phone or your voice.',
    'With 17+ smart home projects currently in progress, our own technicians handle every stage, from planning and installation to integration and ongoing support.'],

    points: ['Home assessment', 'System design', 'Installation', 'Integration & handover'],
    ordered: true
  },
  showcase: {
    title: 'How it works in everyday life.',
    highlight: 'in everyday life.',
    intro: 'Six technologies, each with a real example of what it does for you at home.'
  },
  services: [
  {
    id: 'smart-home-automation',
    title: 'Smart Home Automation',
    description: 'Routines that coordinate lighting, climate and devices automatically.',
    example: 'At sunset, the blinds lower, the porch light switches on and the living room settles into an evening scene.'
  },
  {
    id: 'smart-lighting',
    title: 'Smart Lighting',
    description: 'Scenes, schedules and dimming for every room.',
    example: 'One “Movie” tap dims the lounge and switches the kitchen off — no getting up from the sofa.'
  },
  {
    id: 'smart-locks',
    title: 'Smart Locks',
    description: 'Keyless entry with secure access and remote control.',
    example: 'Let a family member in while you’re at the office, and get notified the moment the door locks again.'
  },
  {
    id: 'presence-sensors',
    title: 'Presence Sensors',
    description: 'Sensors that know when rooms are occupied.',
    example: 'Hallway lights glow softly when someone walks through at night, then switch off on their own.'
  },
  {
    id: 'smart-device-integration',
    title: 'Smart Device Integration',
    description: 'Devices from different brands working as one.',
    example: 'Your TV, speakers, air conditioning and cameras respond to the same app and voice commands.'
  },
  {
    id: 'intelligent-control-systems',
    title: 'Intelligent Control Systems',
    description: 'Wall panels, apps and voice control in one experience.',
    example: 'Check the whole house from your phone before bed — lights, locks and climate in a single view.'
  }],

  expertise: {
    title: 'Installed and supported by our own team.',
    highlight: 'by our own team.',
    body: 'From the first site visit to final handover, the same Pengo team plans, installs and supports your smart home.',
    roles: ['Smart home technicians', 'System integration', 'Lighting & control design', 'Project management']
  },
  impact: {
    title: 'A home that works for you.',
    highlight: 'works for you.',
    items: [
    { title: 'Everyday comfort', text: 'Lighting and climate that adjust to your routines automatically.' },
    { title: 'Peace of mind', text: 'Know your doors are locked and your home is secure from anywhere.' },
    { title: 'Effortless control', text: 'One simple interface for every connected device in your home.' }]

  }
};
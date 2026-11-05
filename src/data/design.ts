import { ServicePageContent } from '../types/servicePage';

export const designContent: ServicePageContent = {
  hero: {
    title: 'Design experiences your customers will love.',
    highlight: 'your customers will love.',
    intro:
    'Leverage creativity, storytelling, user experience, and engineering to build digital experiences that connect people with brands.'
  },
  intro: {
    label: 'Design that scales',
    title: 'Design requirements that scale from a project to a team.',
    highlight: 'from a project to a team.',
    body: [
    'Whether you need a single landing page, a complete brand refresh or ongoing creative support, Pengo adapts to the stage your business is in.',
    'Start with a clearly defined project, then extend into a dedicated design partnership as your needs grow — with the same team, standards and visual language throughout.'],

    points: ['Defined projects with clear scope', 'Ongoing creative support', 'A dedicated design partnership']
  },
  showcase: {
    title: 'Creative work, engineered to perform.',
    highlight: 'engineered to perform.',
    intro: 'Three ways our design team helps your brand look, move and work better.'
  },
  services: [
  {
    id: 'user-centric',
    title: 'User-centric design experiences',
    description:
    'Create intuitive, responsive, and visually consistent interfaces for websites, applications, and digital platforms — focused on usability, customer experience, innovation, and feedback-driven improvements.',
    points: ['Websites & landing pages', 'Web & mobile app interfaces', 'Design systems', 'Usability reviews']
  },
  {
    id: 'motion',
    title: 'Interactive motion design',
    description:
    'Create engaging visual stories through motion graphics, animated content, transitions, and branded visual experiences.',
    points: ['Motion graphics', 'Animated social content', 'Interface transitions', 'Branded video assets']
  },
  {
    id: 'comprehensive',
    title: 'Comprehensive design solutions',
    description:
    'Deliver creative design solutions that build brand recognition and improve customer engagement across every touchpoint.',
    points: ['Brand identity', 'Marketing collateral', 'Social media creatives', 'Digital design showcases']
  }],

  expertise: {
    title: 'Creative and technical minds, working as one.',
    highlight: 'working as one.',
    body: 'Our designers work side by side with developers and marketers, so every concept is shaped to be built, launched and measured.',
    roles: ['UI / UX design', 'Visual & brand design', 'Motion design', 'Front-end development', 'Content creation']
  },
  impact: {
    title: 'Design that moves the business.',
    highlight: 'moves the business.',
    items: [
    { title: 'Stronger brand recognition', text: 'A consistent visual language across every touchpoint your customers see.' },
    { title: 'Better customer experiences', text: 'Interfaces that are intuitive, accessible and responsive on every device.' },
    { title: 'Faster launches', text: 'Reusable design systems that speed up every new page, product and campaign.' }]

  }
};
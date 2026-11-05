import { ServicePageContent } from '../types/servicePage';

export const technologyContent: ServicePageContent = {
  hero: {
    title: 'Technology that moves your business forward.',
    highlight: 'moves your business forward.',
    intro:
    'From websites to custom business systems, we build digital solutions that simplify operations and create new opportunities.'
  },
  intro: {
    label: 'Built around your business',
    title: 'Software shaped around the way you work.',
    highlight: 'the way you work.',
    body: [
    'Off-the-shelf tools rarely fit how a business actually operates. We start by understanding your workflows, then design and build the platforms that support them.',
    'From a first website to connected systems across sales, inventory and distribution, every solution is built to scale with you.'],

    points: ['Discovery & requirements', 'Design & development', 'Integration & launch', 'Ongoing support'],
    ordered: true
  },
  showcase: {
    title: 'Digital solutions for every stage of growth.',
    highlight: 'every stage of growth.',
    intro: 'Six ways our technology team helps you operate smarter.'
  },
  services: [
  { id: 'website-development', title: 'Website Development', description: 'Modern, responsive, professional websites built around business goals.' },
  { id: 'ecommerce', title: 'E-commerce Solutions', description: 'Online stores with product management, ordering, and customer-friendly shopping experiences.' },
  { id: 'booking-systems', title: 'Booking Systems', description: 'Digital booking and appointment management solutions.' },
  { id: 'custom-business-systems', title: 'Custom Business Systems', description: 'Tailored software solutions designed around specific business workflows.' },
  {
    id: 'erp-distributor',
    title: 'ERP and Distributor Management Systems',
    description: 'Business management platforms that connect operations, inventory, sales, and reporting.'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation and AI Agents',
    description: 'Intelligent automation that reduces repetitive work, improves efficiency, and supports business operations.'
  }],

  expertise: {
    title: 'Engineers who understand business.',
    highlight: 'understand business.',
    body: 'Developers, designers and automation specialists who translate real workflows into reliable software.',
    roles: ['Web development', 'Software engineering', 'UI / UX design', 'AI & automation', 'Project management']
  },
  impact: {
    title: 'Technology with a clear purpose.',
    highlight: 'a clear purpose.',
    items: [
    { title: 'Simpler operations', text: 'Connected systems that remove manual hand-offs and duplicate data entry.' },
    { title: 'New opportunities', text: 'Online stores and booking platforms that open new ways to serve customers.' },
    { title: 'Time back for your team', text: 'Automation that handles repetitive work so people can focus on what matters.' }]

  }
};
import { ServicePageContent } from '../types/servicePage';

export const marketingContent: ServicePageContent = {
  hero: {
    title: 'From your first customer to your millionth.',
    highlight: 'to your millionth.',
    intro:
    'Build stronger brands, reach the right audiences, and turn digital opportunities into measurable business growth.'
  },
  intro: {
    label: 'Strategy to execution',
    title: 'Strategy, all the way to execution.',
    highlight: 'all the way to execution.',
    body: [
    'Great marketing starts with understanding your audience and ends with consistent, measurable action. Pengo plans the strategy, produces the content and runs the channels — so nothing gets lost between the idea and the result.',
    'We work as an extension of your team, aligning every campaign with your brand, your goals and your budget.'],

    points: ['Understand your audience', 'Plan the strategy', 'Create the content', 'Launch the campaigns', 'Measure and optimise'],
    ordered: true
  },
  showcase: {
    title: 'Everything your brand needs to grow online.',
    highlight: 'to grow online.',
    intro: 'Six connected services, managed by one marketing team.'
  },
  services: [
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    description:
    'Ongoing social media management, content planning, publishing, community engagement, and brand consistency.'
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    description: 'Creative social media posts, promotional graphics, video content, reels, and brand storytelling.'
  },
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing',
    description: 'Connect brands with relevant creators and influencers to expand audience reach and build trust.'
  },
  {
    id: 'digital-advertising',
    title: 'Digital Advertising',
    description: 'Campaign planning, paid advertising, audience targeting, tracking, and performance optimization.'
  },
  {
    id: 'marketing-automation',
    title: 'Marketing Automation',
    description: 'Automated communication, lead management, follow-ups, and business process integrations.'
  },
  {
    id: 'social-media-administration',
    title: 'Social Media Administration',
    description: 'Professional management of social media platforms and daily account operations.'
  }],

  expertise: {
    title: 'The people behind your campaigns.',
    highlight: 'behind your campaigns.',
    body: 'Strategists, creators and campaign specialists who know your brand and keep your channels moving every day.',
    roles: ['Social media management', 'Content & creative production', 'Campaign planning', 'Creator partnerships', 'Marketing automation']
  },
  impact: {
    title: 'Marketing that builds momentum.',
    highlight: 'builds momentum.',
    items: [
    { title: 'A consistent brand presence', text: 'Planned, on-brand content that keeps your channels active and credible.' },
    { title: 'The right audiences', text: 'Targeting and creator partnerships that reach people likely to become customers.' },
    { title: 'Growth you can track', text: 'Campaign tracking and reporting so every decision is grounded in data.' }]

  }
};
import { media } from './media';
import { CapabilityId } from './capabilities';

export type CaseStudy = {
  id: string;
  capability: CapabilityId;
  category: string;
  title: string;
  image: string;
  background: string;
  challenge: string;
  approach: string;
  solution: string;
  technologies: string[];
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
{
  id: 'smart-living',
  capability: 'smart-living',
  category: 'Smart Living',
  title: 'Smart Living Programme',
  image: media.smartHome,
  background:
  'Homeowners investing in modern residences who want their lighting, climate and devices to work together.',
  challenge:
  'Bringing devices from different vendors under one simple, reliable control experience that the whole household can use.',
  approach:
  'On-site assessment and needs mapping for every residence, followed by a phased integration plan agreed with the owner.',
  solution:
  'Smart lighting scenes, home automation and intelligent control systems, installed and configured by Pengo’s technical team.',
  technologies: ['Smart lighting', 'Home automation', 'Device integration', 'Intelligent controls'],
  outcome:
  '17+ smart home projects are currently in progress. Detailed outcomes will be published as projects complete and clients approve.'
},
{
  id: 'commercial-security',
  capability: 'security',
  category: 'Security',
  title: 'Commercial Security & ELV',
  image: media.cctv,
  background: 'Commercial environments that need dependable visibility and connected low-voltage infrastructure.',
  challenge: 'Delivering coverage, reliability and easy monitoring without disrupting day-to-day operations on site.',
  approach: 'Site survey, coverage planning and an implementation schedule built around the client’s working hours.',
  solution:
  'Integrated CCTV, ELV and security infrastructure, with system integration and handover to the client’s team.',
  technologies: ['Commercial CCTV', 'ELV systems', 'Network infrastructure', 'System integration'],
  outcome: 'Project outcomes are shared with client approval. Ask us for a walkthrough of relevant work.'
},
{
  id: 'brand-social',
  capability: 'marketing',
  category: 'Marketing',
  title: 'Brand & Social Media Growth',
  image: media.marketing,
  background: 'Growing businesses that need a consistent, credible presence across social platforms.',
  challenge:
  'Producing quality content on a reliable schedule while keeping the brand voice consistent across channels.',
  approach: 'Content strategy, creator partnerships and a monthly content calendar, run by our marketing team.',
  solution: 'Content creation, influencer and creator marketing, and ongoing or one-time social media management.',
  technologies: ['Content production', 'Creator partnerships', 'Social media management', 'Paid social campaigns'],
  outcome: 'Campaign results are shared with client approval and are never published without consent.'
}];
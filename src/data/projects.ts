import { media } from './media';
import { CapabilityId } from './capabilities';

export type Project = {
  id: string;
  category: string;
  tags: CapabilityId[];
  name: string;
  client: string;
  description: string;
  image: string;
  caseStudyId?: string;
};

export const projects: Project[] = [
{
  id: 'smart-living',
  category: 'Smart Home Projects',
  tags: ['smart-living'],
  name: 'Smart Living Programme',
  client: 'Private residences',
  description:
  'An ongoing portfolio of 17+ smart home projects bringing lighting, automation and connected devices together under intelligent control.',
  image: media.smartInterior,
  caseStudyId: 'smart-living'
},
{
  id: 'business-systems',
  category: 'Software & Business Systems',
  tags: ['technology'],
  name: 'Business Systems & ERP',
  client: 'Shared with client approval',
  description:
  'Custom ERP, distributor management and booking systems designed around how each business actually operates.',
  image: media.software
},
{
  id: 'security',
  category: 'CCTV & ELV Projects',
  tags: ['security'],
  name: 'Commercial Security Infrastructure',
  client: 'Shared with client approval',
  description:
  'Integrated CCTV and ELV installations planned for secure, reliable and efficient commercial environments.',
  image: media.cctv,
  caseStudyId: 'commercial-security'
},
{
  id: 'marketing',
  category: 'Digital Marketing Projects',
  tags: ['marketing', 'design'],
  name: 'Content & Social Media Management',
  client: 'Shared with client approval',
  description: 'Content creation, creator partnerships and ongoing social media management for growing brands.',
  image: media.marketing,
  caseStudyId: 'brand-social'
},
{
  id: 'websites',
  category: 'Website Development',
  tags: ['design', 'technology'],
  name: 'Custom Business Websites',
  client: 'Shared with client approval',
  description:
  'E-commerce stores, business websites and web applications designed and built for performance and simple management.',
  image: media.web
}];
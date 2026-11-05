import { media } from './media';
import { Accent } from '../utils/accent';

export type CapabilityId = 'design' | 'marketing' | 'technology' | 'smart-living' | 'security';

export type Capability = {
  id: CapabilityId;
  path: string;
  name: string;
  tagline: string;
  summary: string;
  accent: Accent;
  image: string;
};

export const capabilities: Capability[] = [
{
  id: 'design',
  path: '/design',
  name: 'Design',
  tagline: 'Creative, UX & motion design',
  summary: 'User-centric interfaces, motion design and brand assets that connect people with brands.',
  accent: 'red',
  image: media.web
},
{
  id: 'marketing',
  path: '/marketing',
  name: 'Marketing',
  tagline: 'Social, content & campaigns',
  summary: 'Social media, content, creators and advertising that turn attention into growth.',
  accent: 'orange',
  image: media.marketing
},
{
  id: 'technology',
  path: '/technology',
  name: 'Technology',
  tagline: 'Websites, systems & AI',
  summary: 'Websites, business systems and AI automation that simplify how you operate.',
  accent: 'blue',
  image: media.software
},
{
  id: 'smart-living',
  path: '/smart-living',
  name: 'Smart Living',
  tagline: 'Smart homes & automation',
  summary: 'Connected homes with intelligent lighting, access and seamless control.',
  accent: 'green',
  image: media.smartInterior
},
{
  id: 'security',
  path: '/security',
  name: 'Security',
  tagline: 'CCTV, ELV & networks',
  summary: 'CCTV, ELV and network infrastructure that protect businesses, properties and people.',
  accent: 'blue',
  image: media.cctv
}];
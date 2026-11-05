export type TeamGroup = {
  id: string;
  name: string;
  summary: string;
  description: string;
  focus: string[];
};

export const teamGroups: TeamGroup[] = [
{
  id: 'leadership',
  name: 'Leadership',
  summary: 'Direction, partnerships and quality',
  description:
  'Sets direction, builds long-term client partnerships and keeps every engagement aligned with real business goals.',
  focus: ['Strategy', 'Client partnerships', 'Quality assurance']
},
{
  id: 'technical',
  name: 'Technical team',
  summary: 'Software, automation and integration',
  description:
  'Engineers and technicians who build software, automate workflows and install smart home and security systems.',
  focus: ['Software development', 'AI automation', 'Smart home integration', 'CCTV & ELV']
},
{
  id: 'creative',
  name: 'Creative team',
  summary: 'Brands, interfaces and content',
  description: 'Designers and content creators who shape brand identities, digital interfaces and campaigns.',
  focus: ['Content creation', 'UI design', 'Visual identity']
},
{
  id: 'marketing',
  name: 'Marketing team',
  summary: 'Social, creators and campaigns',
  description: 'Specialists in social media, creator marketing and paid campaigns across the platforms your customers use.',
  focus: ['Social media management', 'Creator marketing', 'Digital advertising']
},
{
  id: 'project-management',
  name: 'Project management',
  summary: 'Planning, delivery and handover',
  description:
  'Plans, coordinates and delivers every project on schedule — from the first site visit through to handover.',
  focus: ['Planning', 'Coordination', 'Delivery']
}];
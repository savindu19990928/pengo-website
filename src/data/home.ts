import { Accent } from '../utils/accent';

export type Reason = {title: string;text: string;accent: Accent;};

export const whyPengo: Reason[] = [
{
  title: 'Multiple capabilities, one company',
  text: 'Design, marketing, technology, smart living and security under one roof — fewer vendors, one accountable partner.',
  accent: 'blue'
},
{
  title: 'Digital and physical technology',
  text: 'From social campaigns and software to cameras and smart switches, we deliver on screen and on site.',
  accent: 'green'
},
{
  title: 'Built around your business',
  text: 'Custom solutions shaped by your goals and workflows, not by a one-size-fits-all template.',
  accent: 'orange'
},
{
  title: 'Creative and technical expertise',
  text: 'Designers, marketers and engineers collaborating on every project from day one.',
  accent: 'red'
},
{
  title: 'Collaboration and ongoing support',
  text: 'We stay involved after launch, with support that keeps your solutions running and improving.',
  accent: 'blue'
}];
// Verified company figures. Only add numbers Pengo has confirmed.
export const companyStats = {
  clientSatisfaction: { value: 90, suffix: '%', label: 'Client satisfaction & retention' },
  teamSize: { value: 20, suffix: '+', label: 'Team members' },
  smartHomeProjects: { value: 17, suffix: '+', label: 'Ongoing smart home projects' },
  established: 'August 2023'
};

// EDITABLE: add confirmed business locations in Sri Lanka, e.g. { name: 'Head office', address: '...', mapUrl: '...' }.
export type Location = {name: string;address: string;mapUrl?: string;};
export const locations: Location[] = [];

// EDITABLE: add the company's real social profile URLs.
export type SocialLink = {label: string;url: string;};
export const socialLinks: SocialLink[] = [];

// How the team is structured.
export const teamModes = [
{
  title: 'Onsite',
  text: 'Technicians and project managers on the ground for smart home, CCTV, ELV and network installations across Sri Lanka.',
  points: ['Site surveys', 'Installation & integration', 'Testing & handover']
},
{
  title: 'Remote',
  text: 'Designers, developers and marketers collaborating digitally on websites, software, content and campaigns.',
  points: ['Design & development', 'Content & campaigns', 'Ongoing support']
}];
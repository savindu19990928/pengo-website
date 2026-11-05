// Official statements — do not rewrite, shorten or change their meaning.
export const visionStatement: string[] = [
'To become a globally recognized, diversified technology and innovation driven enterprise, originating from Sri Lanka, empowering businesses, industries, and communities through intelligent solutions, transformative technologies, and sustainable growth.',
'We aspire to build a world class organization that continuously evolves, creates meaningful impact, and sets new benchmarks in the global business landscape.'];


export const missionStatement: string[] = [
'To empower businesses and individuals through integrated digital, technological, and intelligent solutions that drive growth, efficiency, and innovation.',
'We strive to deliver exceptional value through digital marketing, creative solutions, AI-powered platforms, IT infrastructure, smart technologies, and enterprise solutions.',
'By fostering teamwork, embracing adaptability, maintaining uncompromising standards, and continuously investing in innovation, we aim to build lasting partnerships, develop future ready solutions, and create sustainable value for our clients, our people, and society.'];


export type MissionArea = {name: string;description: string;};

export const missionAreas: MissionArea[] = [
{ name: 'Digital Marketing', description: 'Strategy, content and campaigns that grow brands.' },
{ name: 'Creative Solutions', description: 'Design and storytelling that connect people with brands.' },
{ name: 'AI-powered Platforms', description: 'Intelligent automation and AI agents for everyday operations.' },
{ name: 'IT Infrastructure', description: 'Networks, CCTV and ELV systems built to last.' },
{ name: 'Smart Technologies', description: 'Connected homes and intelligent control systems.' },
{ name: 'Enterprise Solutions', description: 'Business systems, ERP and custom platforms.' }];


// Placeholders — replace with Pengo's confirmed official core values.
export type CoreValue = {name: string;description: string;placeholder: boolean;};

export const coreValues: CoreValue[] = [
{ name: 'Core value', description: 'Official value and description to be confirmed by Pengo.', placeholder: true },
{ name: 'Core value', description: 'Official value and description to be confirmed by Pengo.', placeholder: true },
{ name: 'Core value', description: 'Official value and description to be confirmed by Pengo.', placeholder: true },
{ name: 'Core value', description: 'Official value and description to be confirmed by Pengo.', placeholder: true }];


export type Milestone = {date: string;title: string;text: string;};

export const milestones: Milestone[] = [
{
  date: 'August 2023',
  title: 'Pengo is established',
  text: 'Pengo (Pvt) Ltd is founded in Sri Lanka as a technology and digital solutions company.'
},
{
  date: 'Today',
  title: 'A multidisciplinary team of 20+',
  text: 'Specialists across design, marketing, technology, smart living and security working as one team.'
},
{
  date: 'Ongoing',
  title: '17+ smart home projects in progress',
  text: 'Connected living projects planned, installed and supported by our own technicians.'
},
{
  date: 'Ahead',
  title: 'A global vision',
  text: 'Building a world class organisation that creates meaningful impact — originating from Sri Lanka.'
}];


export const disciplines: string[] = [
'Digital Marketing',
'Creative Design',
'Technology & Software',
'AI Automation',
'Smart Living',
'Security Solutions'];
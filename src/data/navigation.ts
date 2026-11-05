import { CapabilityId } from './capabilities';

export type NavItem = {path: string;label: string;capability?: CapabilityId;};

export const navItems: NavItem[] = [
{ path: '/marketing', label: 'Marketing', capability: 'marketing' },
{ path: '/technology', label: 'Technology', capability: 'technology' },
{ path: '/smart-living', label: 'Smart Living', capability: 'smart-living' },
{ path: '/security', label: 'Security', capability: 'security' },
{ path: '/our-work', label: 'Our Work' },
{ path: '/about', label: 'About Us' },
{ path: '/contact', label: 'Contact' }];


export const companyLinks: NavItem[] = [
{ path: '/about', label: 'About Us' },
{ path: '/our-work', label: 'Our Work' },
{ path: '/contact', label: 'Contact' }];


export const legalLinks: NavItem[] = [
{ path: '/privacy', label: 'Privacy Policy' },
{ path: '/terms', label: 'Terms and Conditions' }];


export const whatsappNumber = '+94 77 739 6597';
export const whatsappLink = 'https://wa.me/94777396597';
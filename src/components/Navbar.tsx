import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, ArrowUpRightIcon, ChevronDownIcon, MessageCircleIcon } from 'lucide-react';
import { PengoLogo } from './PengoLogo';
import { navItems, whatsappLink, whatsappNumber } from '../data/navigation';
import { capabilities, CapabilityId } from '../data/capabilities';
import { designContent } from '../data/design';
import { marketingContent } from '../data/marketing';
import { technologyContent } from '../data/technology';
import { smartLivingContent } from '../data/smartLiving';
import { securityContent } from '../data/security';
import { ServiceItem } from '../types/servicePage';
import { useScrolled } from '../hooks/useScrolled';
import { accentStyles } from '../utils/accent';
import { easeOut } from '../utils/motion';

const servicesByCapability: Record<CapabilityId, ServiceItem[]> = {
  design: designContent.services,
  marketing: marketingContent.services,
  technology: technologyContent.services,
  'smart-living': smartLivingContent.services,
  security: securityContent.services
};

export function Navbar() {
  const scrolled = useScrolled(12);
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuCap, setMenuCap] = useState<CapabilityId | null>(null);
  const closeTimer = useRef<number>();

  const isActive = (path: string) => pathname === path;
  const activeCap = capabilities.find((c) => c.id === menuCap);

  const openMenu = (id: CapabilityId) => {
    window.clearTimeout(closeTimer.current);
    setMenuCap(id);
  };
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMenuCap(null), 140);
  };

  useEffect(() => {
    setMobileOpen(false);
    setMenuCap(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setMenuCap(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      onMouseLeave={scheduleClose}
      className={`fixed inset-x-0 top-0 z-50 border-b border-ice bg-white transition-shadow duration-300 ${
      scrolled || menuCap ? 'shadow-[0_10px_30px_-18px_rgba(17,24,39,0.35)]' : ''}`
      }>
      
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 transition-[height] duration-300 md:px-8 lg:px-12 ${
        scrolled ? 'h-16' : 'h-20'}`
        }>
        
        <Link to="/" aria-label="Pengo — home" className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arctic">
          <PengoLogo height={30} />
        </Link>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {navItems.map((item) => {
            const active = isActive(item.path);
            const cap = item.capability;
            return (
              <li key={item.path} onMouseEnter={() => cap ? openMenu(cap) : setMenuCap(null)}>
                <Link
                  to={item.path}
                  aria-current={active ? 'page' : undefined}
                  aria-haspopup={cap ? 'true' : undefined}
                  aria-expanded={cap ? menuCap === cap : undefined}
                  onFocus={() => cap ? openMenu(cap) : setMenuCap(null)}
                  className={`relative flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-[15px] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arctic ${
                  active || menuCap === cap ? 'text-arctic-deep' : 'text-midnight hover:text-arctic-deep'}`
                  }>
                  
                  {item.label}
                  {cap &&
                  <ChevronDownIcon
                    aria-hidden="true"
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${menuCap === cap ? 'rotate-180' : ''}`} />

                  }
                  {active &&
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-arctic-deep"
                    transition={{ type: 'spring', stiffness: 420, damping: 36 }} />

                  }
                </Link>
              </li>);

          })}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            onMouseEnter={() => setMenuCap(null)}
            className="hidden items-center gap-1.5 whitespace-nowrap rounded-full bg-arctic-deep px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-arctic-darker focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arctic focus-visible:ring-offset-2 sm:inline-flex">
            
            Get a Quote
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-ice text-midnight transition-colors duration-200 hover:border-arctic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arctic xl:hidden">
            
            <span className="relative block h-3 w-5">
              <motion.span
                className="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-midnight"
                animate={mobileOpen ? { y: 5, rotate: 45 } : { y: 0, rotate: 0 }}
                transition={{ duration: 0.2, ease: easeOut }} />
              
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-midnight"
                animate={mobileOpen ? { y: -5, rotate: -45 } : { y: 0, rotate: 0 }}
                transition={{ duration: 0.2, ease: easeOut }} />
              
            </span>
          </button>
        </div>
      </nav>

      {/* Capabilities mega menu */}
      <AnimatePresence>
        {activeCap &&
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18, ease: easeOut }}
          onMouseEnter={() => openMenu(activeCap.id)}
          className="absolute inset-x-0 top-full hidden border-t border-ice bg-white shadow-[0_24px_48px_-24px_rgba(17,24,39,0.3)] xl:block">
          
            <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-10 px-12 py-10">
              <div className="col-span-4">
                <p className="text-xs font-semibold text-steel">Capabilities</p>
                <ul className="mt-4 space-y-1">
                  {capabilities.map((c) =>
                <li key={c.id}>
                      <Link
                    to={c.path}
                    onMouseEnter={() => setMenuCap(c.id)}
                    onFocus={() => setMenuCap(c.id)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-colors duration-150 ${
                    c.id === activeCap.id ? 'bg-snow' : 'hover:bg-snow'}`
                    }>
                    
                        <span aria-hidden="true" className={`h-2 w-2 shrink-0 rounded-full ${accentStyles[c.accent].dot}`} />
                        <span>
                          <span className="block font-display text-[15px] font-bold text-midnight">{c.name}</span>
                          <span className="block text-sm text-steel">{c.tagline}</span>
                        </span>
                      </Link>
                    </li>
                )}
                </ul>
              </div>
              <div className="col-span-5 border-l border-ice pl-10">
                <p className="text-xs font-semibold text-steel">{activeCap.name} services</p>
                <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1">
                  {servicesByCapability[activeCap.id].map((s) =>
                <li key={s.id}>
                      <Link
                    to={`${activeCap.path}#${s.id}`}
                    className="block rounded-lg px-3 py-2.5 text-[15px] text-midnight transition-colors duration-150 hover:bg-snow hover:text-arctic-deep">
                    
                        {s.title}
                      </Link>
                    </li>
                )}
                </ul>
              </div>
              <div className="col-span-3">
                <Link to={activeCap.path} className="group block overflow-hidden rounded-2xl bg-navy">
                  <div className="overflow-hidden">
                    <img src={activeCap.image} alt="" className="aspect-[16/10] w-full object-cover opacity-85 transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
                  </div>
                  <div className="p-5 text-snow">
                    <p className="text-sm leading-relaxed text-icegrey">{activeCap.summary}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold">
                      Explore {activeCap.name}
                      <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: easeOut }}
          className="absolute inset-x-0 top-full h-[100svh] overflow-y-auto border-t border-ice bg-white px-5 pb-40 pt-6 md:px-8 xl:hidden">
          
            <p className="text-xs font-semibold text-steel">Capabilities</p>
            <ul className="mt-2">
              {capabilities.map((c) =>
            <li key={c.id}>
                  <Link
                to={c.path}
                aria-current={isActive(c.path) ? 'page' : undefined}
                className="flex items-center gap-3 border-b border-ice py-4">
                
                    <span aria-hidden="true" className={`h-2 w-2 rounded-full ${accentStyles[c.accent].dot}`} />
                    <span className={`font-display text-2xl font-bold tracking-tight ${isActive(c.path) ? 'text-arctic-deep' : 'text-midnight'}`}>
                      {c.name}
                    </span>
                    <span className="ml-auto hidden text-sm text-steel sm:block">{c.tagline}</span>
                  </Link>
                </li>
            )}
            </ul>
            <ul className="mt-6">
              {navItems.
            filter((item) => !item.capability).
            map((item) =>
            <li key={item.path}>
                    <Link
                to={item.path}
                aria-current={isActive(item.path) ? 'page' : undefined}
                className={`flex items-center justify-between border-b border-ice py-4 font-display text-2xl font-bold tracking-tight ${
                isActive(item.path) ? 'text-arctic-deep' : 'text-midnight'}`
                }>
                
                      {item.label}
                      <ArrowUpRightIcon className="h-5 w-5 text-steel" />
                    </Link>
                  </li>
            )}
            </ul>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-arctic-deep px-6 py-4 text-sm font-semibold text-white">
                Get a Quote
                <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
              <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ice px-6 py-4 text-sm font-semibold text-midnight">
              
                <MessageCircleIcon className="h-4 w-4" />
                {whatsappNumber}
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircleIcon } from 'lucide-react';
import { PengoLogo } from './PengoLogo';
import { PenguinSilhouette } from './PenguinSilhouette';
import { BrandRule } from './shared/BrandRule';
import { companyLinks, legalLinks, whatsappLink, whatsappNumber } from '../data/navigation';
import { capabilities } from '../data/capabilities';
import { accentStyles } from '../utils/accent';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-midnight">
      <BrandRule className="absolute inset-x-0 top-0" segment="flex-1 !rounded-none" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-8 hidden md:block">
        <PenguinSilhouette revealOnView strokeWidth={1.2} className="h-[440px] text-midnight/[0.06]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 pb-10 pt-20 md:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" aria-label="Pengo — home" className="inline-block">
              <PengoLogo height={36} />
            </Link>
            <p className="mt-6 max-w-sm leading-relaxed text-steel">
              An integrated digital, technology and innovation company originating from Sri Lanka — bringing creativity,
              technology and intelligent solutions together.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-arctic-deep px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-arctic-darker">
              
              <MessageCircleIcon className="h-4 w-4" />
              WhatsApp {whatsappNumber}
            </a>
          </div>

          <nav aria-label="Capabilities" className="lg:col-span-3 lg:col-start-6">
            <h2 className="text-sm font-semibold text-midnight">Capabilities</h2>
            <ul className="mt-5 space-y-3">
              {capabilities.map((c) =>
              <li key={c.id}>
                  <Link to={c.path} className="flex items-center gap-2.5 text-[15px] text-steel transition-colors duration-200 hover:text-arctic-deep">
                    <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${accentStyles[c.accent].dot}`} />
                    {c.name}
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <nav aria-label="Company" className="lg:col-span-2">
            <h2 className="text-sm font-semibold text-midnight">Company</h2>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) =>
              <li key={link.path}>
                  <Link to={link.path} className="text-[15px] text-steel transition-colors duration-200 hover:text-arctic-deep">
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold text-midnight">Contact</h2>
            <dl className="mt-5 space-y-3 text-[15px]">
              <div>
                <dt className="text-sm text-steel">WhatsApp</dt>
                <dd>
                  <a href={whatsappLink} target="_blank" rel="noreferrer" className="font-medium text-midnight transition-colors duration-200 hover:text-arctic-deep">
                    {whatsappNumber}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-ice pt-8 text-sm text-steel md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Pengo (Pvt) Ltd. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) =>
            <li key={link.path}>
                <Link to={link.path} className="transition-colors duration-200 hover:text-arctic-deep">
                  {link.label}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </footer>);

}
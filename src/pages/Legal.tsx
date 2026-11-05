import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircleIcon } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { whatsappLink, whatsappNumber } from '../data/navigation';
import { usePageTitle } from '../hooks/usePageTitle';

type LegalPageProps = {type: 'privacy' | 'terms';};

const copy = {
  privacy: { title: 'Privacy Policy', label: 'Legal' },
  terms: { title: 'Terms and Conditions', label: 'Legal' }
};

export function LegalPage({ type }: LegalPageProps) {
  const { title, label } = copy[type];
  usePageTitle(title);

  return (
    <>
      <PageHero label={label} title={title} crumbs={[{ label: 'Home', to: '/' }, { label: title }]} />
      <section className="bg-white text-midnight">
        <div className="mx-auto max-w-3xl px-5 py-24 md:px-8">
          <h2 className="font-display text-2xl font-bold tracking-[-0.02em]">This document is being finalised.</h2>
          <p className="mt-4 text-lg leading-relaxed text-steel">
            Pengo (Pvt) Ltd’s official {title.toLowerCase()} will be published here. If you have a question in the
            meantime, please contact us directly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-arctic-deep px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-arctic-darker">
              
              <MessageCircleIcon className="h-4 w-4" />
              WhatsApp {whatsappNumber}
            </a>
            <Link to="/contact" className="inline-flex items-center rounded-full border border-ice px-6 py-3 text-sm font-semibold transition-colors duration-200 hover:border-arctic hover:text-arctic-deep">
              Contact page
            </Link>
          </div>
        </div>
      </section>
    </>);

}
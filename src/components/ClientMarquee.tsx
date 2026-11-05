import React from 'react';
import { useReducedMotion } from 'framer-motion';
import { clients, Client } from '../data/clients';
import { Waterline } from './shared/Waterline';

// Client logos and names are rendered exactly as supplied in data/clients.ts — layout only.
function ClientItem({ client, hidden = false }: {client: Client;hidden?: boolean;}) {
  return (
    <div className="flex h-full flex-col items-center rounded-2xl bg-snow px-4 pb-5 pt-5 ring-1 ring-ice">
      <div className="flex h-16 w-full items-center justify-center md:h-20">
        <img
          src={client.logo}
          alt={hidden ? '' : `${client.name} logo`}
          loading="lazy"
          draggable={false}
          className="h-full w-auto max-w-full object-contain" />
        
      </div>
      <span className="mt-4 flex min-h-[2.6em] items-start justify-center text-center text-[11px] font-medium uppercase leading-snug tracking-[0.1em] text-midnight md:text-xs">
        {client.name}
      </span>
    </div>);

}

export function ClientMarquee() {
  const reduce = useReducedMotion();

  return (
    <section id="trusted" aria-labelledby="trusted-heading" className="relative bg-white pb-14 pt-20 md:pb-20 md:pt-28">
      <Waterline className="absolute inset-x-0 top-0" />
      <h2 id="trusted-heading" className="px-5 text-center font-display text-xl font-semibold tracking-[-0.01em] text-midnight md:text-2xl">
        Trusted by businesses across Sri Lanka
      </h2>

      {reduce ?
      <ul className="mx-auto mt-10 grid max-w-[1440px] grid-cols-2 gap-3 px-5 sm:grid-cols-3 md:mt-14 md:grid-cols-4 md:gap-4 md:px-8 lg:grid-cols-6 lg:px-12">
          {clients.map((client) =>
        <li key={client.name}>
              <ClientItem client={client} />
            </li>
        )}
        </ul> :

      <div className="marquee relative mt-10 overflow-hidden md:mt-14">
          {/* Two identical sequences; the track moves exactly one sequence width, so the loop is seamless.
             The full sequence is wider than any screen, so a client never appears twice at once. */}
          <div className="marquee-track flex w-max">
            {[0, 1].map((copy) =>
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-stretch">
                {clients.map((client) =>
            <li key={`${copy}-${client.name}`} className="w-[164px] shrink-0 pr-4 md:w-[212px] md:pr-6">
                    <ClientItem client={client} hidden={copy === 1} />
                  </li>
            )}
              </ul>
          )}
          </div>
        </div>
      }
    </section>);

}
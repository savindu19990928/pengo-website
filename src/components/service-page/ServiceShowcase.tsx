import React from 'react';
import { RevealText } from '../motion/RevealText';
import { SectionLabel } from '../motion/SectionLabel';
import { FadeIn } from '../motion/FadeIn';
import { ServiceItem, ServicePageContent } from '../../types/servicePage';
import { Accent, accentStyles } from '../../utils/accent';

type ServiceShowcaseProps = {
  showcase: ServicePageContent['showcase'];
  services: ServiceItem[];
  accent: Accent;
  renderVisual: (id: string) => React.ReactNode;
};

export function ServiceShowcase({ showcase, services, accent, renderVisual }: ServiceShowcaseProps) {
  const styles = accentStyles[accent];

  return (
    <section id="services" aria-labelledby="showcase-title" className="scroll-mt-20 bg-snow text-midnight">
      <div className="mx-auto max-w-[1440px] px-5 pt-24 md:px-8 md:pt-32 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel tone="light">Services</SectionLabel>
            <RevealText
              id="showcase-title"
              text={showcase.title}
              highlight={showcase.highlight}
              className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-6xl"
              highlightClassName="text-arctic-deep" />
            
          </div>
          <FadeIn delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-relaxed text-steel">{showcase.intro}</p>
          </FadeIn>
        </div>

        <div className="mt-16 pb-12 md:pb-20">
          {services.map((service, i) => {
            const odd = i % 2 === 1;
            return (
              <article
                key={service.id}
                id={service.id}
                aria-labelledby={`${service.id}-title`}
                className="grid scroll-mt-28 items-center gap-10 border-t border-ice py-14 md:py-20 lg:grid-cols-12 lg:gap-12">
                
                <div className={`lg:row-start-1 lg:col-span-6 ${odd ? 'lg:col-start-7' : 'lg:col-start-1'}`}>{renderVisual(service.id)}</div>
                <FadeIn className={`lg:row-start-1 lg:col-span-5 ${odd ? 'lg:col-start-1' : 'lg:col-start-8'}`}>
                  <span aria-hidden="true" className={`block h-1 w-8 rounded-full ${styles.bar}`} />
                  <h3 id={`${service.id}-title`} className="mt-6 font-display text-3xl font-bold leading-tight tracking-[-0.02em] md:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-steel">{service.description}</p>
                  {service.points &&
                  <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                      {service.points.map((p) =>
                    <li key={p} className="flex items-center gap-2.5 text-[15px] font-medium">
                          <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-midnight/40" />
                          {p}
                        </li>
                    )}
                    </ul>
                  }
                  {service.example &&
                  <div className="mt-8 flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-ice">
                      <span aria-hidden="true" className={`w-0.5 shrink-0 rounded-full ${styles.bar}`} />
                      <div>
                        <p className="text-sm font-semibold">In everyday life</p>
                        <p className="mt-1.5 leading-relaxed text-steel">{service.example}</p>
                      </div>
                    </div>
                  }
                </FadeIn>
              </article>);

          })}
        </div>
      </div>
    </section>);

}
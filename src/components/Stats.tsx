import React from 'react';
import { FadeIn } from './motion/FadeIn';
import { useCountUp } from '../hooks/useCountUp';
import { companyStats } from '../data/company';

function CountStat({ value, suffix, label }: {value: number;suffix: string;label: string;}) {
  const { ref, value: current } = useCountUp(value);
  return (
    <div className="flex flex-col-reverse border-t border-ice pt-5">
      <dt className="mt-2 text-sm font-medium text-steel">{label}</dt>
      <dd className="font-display text-5xl font-extrabold tracking-[-0.04em] text-midnight">
        <span ref={ref}>{current}</span>
        <span className="text-arctic-deep">{suffix}</span>
      </dd>
    </div>);

}

export function Stats() {
  const { clientSatisfaction, teamSize, smartHomeProjects, established } = companyStats;
  const { ref, value } = useCountUp(clientSatisfaction.value);

  return (
    <section aria-labelledby="stats-heading" className="bg-white text-midnight">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
          <FadeIn className="lg:col-span-7">
            <h2 id="stats-heading" className="sr-only">
              Pengo in numbers
            </h2>
            <p className="font-display text-[7rem] font-extrabold leading-[0.85] tracking-[-0.06em] sm:text-[10rem] xl:text-[12rem]">
              <span ref={ref}>{value}</span>
              <span className="text-arctic-deep">{clientSatisfaction.suffix}</span>
            </p>
            <p className="mt-6 font-display text-2xl font-bold tracking-[-0.02em] md:text-3xl">{clientSatisfaction.label}</p>
            <p className="mt-3 max-w-md leading-relaxed text-steel">
              Businesses across diverse commercial sectors stay with Pengo — because one partner handles it all.
            </p>
          </FadeIn>

          <dl className="grid gap-8 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1 xl:grid-cols-3">
            <FadeIn>
              <div className="flex flex-col-reverse border-t border-ice pt-5">
                <dt className="mt-2 text-sm font-medium text-steel">Established</dt>
                <dd className="font-display text-midnight">
                  <span className="block text-sm font-semibold text-arctic-deep">{established.split(' ')[0]}</span>
                  <span className="text-5xl font-extrabold tracking-[-0.04em]">{established.split(' ')[1]}</span>
                </dd>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <CountStat {...teamSize} />
            </FadeIn>
            <FadeIn delay={0.16}>
              <CountStat {...smartHomeProjects} />
            </FadeIn>
          </dl>
        </div>
      </div>
    </section>);

}
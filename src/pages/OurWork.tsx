import React from 'react';
import { PageHero } from '../components/shared/PageHero';
import { ClientWall } from '../components/work/ClientWall';
import { ProjectFilter } from '../components/work/ProjectFilter';
import { CaseStudyExplorer } from '../components/case-studies/CaseStudyExplorer';
import { SectionLabel } from '../components/motion/SectionLabel';
import { RevealText } from '../components/motion/RevealText';
import { ContactCTA } from '../components/shared/ContactCTA';
import { usePageTitle } from '../hooks/usePageTitle';

export function OurWorkPage() {
  usePageTitle('Our Work');
  return (
    <>
      <PageHero
        label="Our work"
        title="Turning ideas into real-world solutions."
        highlight="real-world solutions."
        intro="Projects and case studies across design, marketing, technology, smart living and security."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Our Work' }]} />
      
      <ClientWall />
      <ProjectFilter />
      <div id="case-studies" className="scroll-mt-20 bg-ice text-midnight">
        <div className="mx-auto max-w-[1440px] px-5 pt-24 md:px-8 md:pt-28 lg:px-12">
          <SectionLabel tone="light">Case studies</SectionLabel>
          <RevealText
            text="Real challenges. Thoughtful solutions."
            highlight="Thoughtful solutions."
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl"
            highlightClassName="text-arctic-deep" />
          
        </div>
        <CaseStudyExplorer />
      </div>
      <ContactCTA />
    </>);

}
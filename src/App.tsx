import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { SiteLayout } from './components/SiteLayout';
import { HomePage } from './pages/Home';
import { DesignPage } from './pages/Design';
import { MarketingPage } from './pages/Marketing';
import { TechnologyPage } from './pages/Technology';
import { SmartLivingPage } from './pages/SmartLiving';
import { SecurityPage } from './pages/Security';
import { OurWorkPage } from './pages/OurWork';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { LegalPage } from './pages/Legal';
import { NotFoundPage } from './pages/NotFound';

export function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/design" element={<DesignPage />} />
            <Route path="/marketing" element={<MarketingPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/smart-living" element={<SmartLivingPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/our-work" element={<OurWorkPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<LegalPage type="privacy" />} />
            <Route path="/terms" element={<LegalPage type="terms" />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </MotionConfig>
    </BrowserRouter>);

}
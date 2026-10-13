import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { Workshop } from './components/Workshop';
import { MonthlyOffers } from './components/MonthlyOffers';
import { LocationAndContact } from './components/LocationAndContact';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AdminGuideModal } from './components/AdminGuideModal';

export default function App() {
  const [guideModalOpen, setGuideModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Fixed Header */}
      <Navbar onOpenGuide={() => setGuideModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Categories Showcase (Kids, Urban/Work, MTB) */}
        <Categories />

        {/* Specialized Workshop & Parts */}
        <Workshop />

        {/* Monthly Offers (2 independent slots) */}
        <MonthlyOffers />

        {/* Location & Navigation Routes */}
        <LocationAndContact />

        {/* Final Conversion CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer onOpenGuide={() => setGuideModalOpen(true)} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Store Owner Instructions Modal */}
      <AdminGuideModal
        isOpen={guideModalOpen}
        onClose={() => setGuideModalOpen(false)}
      />
    </div>
  );
}

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TimeLossSection } from './components/TimeLossSection';
import { HowItWorks } from './components/HowItWorks';
import { ExamplesSection } from './components/ExamplesSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LegalModals } from './components/LegalModals';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'legal' | 'privacy' | null>(null);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#1B2A41] text-[#F5F3EF] selection:bg-[#D97757] selection:text-white">
      {/* 1. Sticky Header */}
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="flex-grow">
        {/* 2. Hero Section (Bleu Nuit) */}
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 3. Section Où perdez-vous du temps ? (Blanc Cassé) */}
        <TimeLossSection />

        {/* 4. Section Comment ça marche en 3 étapes (Bleu Nuit) */}
        <HowItWorks onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 5. Section Exemples concrets de flux (Blanc Cassé) */}
        <ExamplesSection />

        {/* 6. Section À propos de Joshua (Bleu Nuit) */}
        <AboutSection />

        {/* 7. Section FAQ (Blanc Cassé) */}
        <FaqSection onOpenPrivacyModal={() => setLegalModalType('privacy')} />

        {/* 8. Section Contact (Bleu Nuit) */}
        <ContactSection onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      {/* 9. Footer (Bleu Nuit Foncé) */}
      <Footer
        onOpenLegalModal={() => setLegalModalType('legal')}
        onOpenPrivacyModal={() => setLegalModalType('privacy')}
      />

      {/* Booking Calendar Modal (15 minutes) */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Legal & Privacy Modals */}
      <LegalModals
        modalType={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

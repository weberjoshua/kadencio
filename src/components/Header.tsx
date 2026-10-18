import React, { useState } from 'react';
import { Menu, X, Clock } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Où perdez-vous du temps ?', href: '#perte-de-temps' },
    { label: 'Offre & Tarifs', href: '#offre' },
    { label: 'Exemples', href: '#exemples' },
    { label: 'À propos', href: '#a-propos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1B2A41]/95 backdrop-blur-md border-b border-[#2C4263]/70 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="text-2xl font-bold tracking-tight text-[#F5F3EF] hover:opacity-95 transition-opacity whitespace-nowrap shrink-0 flex items-center font-sans"
        >
          Kadencio<span className="text-[#D97757]">.</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav
          aria-label="Navigation principale"
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#F5F3EF]/85"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors hover:underline underline-offset-8 decoration-[#D97757] whitespace-nowrap shrink-0 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#D97757] hover:bg-[#C56546] rounded-md transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D97757] focus:ring-offset-2 focus:ring-offset-[#1B2A41] whitespace-nowrap shrink-0"
          >
            <Clock className="w-4 h-4" />
            <span>Réserver 15 minutes</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F5F3EF] hover:bg-[#223450] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D97757]"
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1B2A41] border-b border-[#2C4263] px-4 pt-3 pb-6 space-y-3">
          <nav aria-label="Navigation mobile" className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#F5F3EF]/90 hover:text-white py-2 px-1 border-b border-[#2C4263]/40"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#D97757] hover:bg-[#C56546] rounded-md transition-colors"
            >
              <Clock className="w-4 h-4" />
              <span>Réserver 15 minutes</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

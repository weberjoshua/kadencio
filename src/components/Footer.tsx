import React from 'react';
import { MapPin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenLegalModal: () => void;
  onOpenPrivacyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLegalModal,
  onOpenPrivacyModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#142032] text-[#F5F3EF] border-t border-[#2C4263]/60 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#2C4263]/50">
          <div>
            <a
              href="#"
              className="text-2xl font-bold tracking-tight text-[#F5F3EF] flex items-center font-sans"
            >
              Kadencio<span className="text-[#D97757]">.</span>
            </a>
            <p className="text-xs text-[#F5F3EF]/70 mt-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D97757]" />
              <span>Lot · Occitanie</span>
              <span aria-hidden="true">·</span>
              <span>Figeac, Cahors, Brive et alentours</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#F5F3EF]/80">
            <a
              href="mailto:joshua@kadencio.fr"
              className="hover:text-white flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#D97757]" />
              <span>joshua@kadencio.fr</span>
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1.5 p-1 rounded hover:bg-[#223450] transition-colors focus:outline-none"
              aria-label="Retour en haut de page"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#D97757]" />
              <span>Haut de page</span>
            </button>
          </div>
        </div>

        {/* Legal & Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5F3EF]/60">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={onOpenLegalModal}
              className="hover:text-white underline underline-offset-2 decoration-[#2C4263] hover:decoration-[#D97757] transition-colors"
            >
              Mentions légales
            </button>
            <span aria-hidden="true" className="text-[#2C4263]">·</span>
            <button
              type="button"
              onClick={onOpenPrivacyModal}
              className="hover:text-white underline underline-offset-2 decoration-[#2C4263] hover:decoration-[#D97757] transition-colors"
            >
              Politique de confidentialité
            </button>
            <span aria-hidden="true" className="text-[#2C4263]">·</span>
            <span>SIRET : [En cours d’immatriculation / SIRET]</span>
          </div>

          <div>
            <p>© {new Date().getFullYear()} Kadencio. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

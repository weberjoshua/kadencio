import React from 'react';
import { ArrowRight, MapPin, CheckCircle2, Clock } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative bg-[#1B2A41] text-[#F5F3EF] pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle geographic kicker - no pill, clean inline text with fine dot */}
        <div className="flex items-center gap-2 text-sm text-[#F5F3EF]/75 font-normal mb-6">
          <MapPin className="w-4 h-4 text-[#D97757] shrink-0" />
          <span>Prestataire local · Basé dans le Lot</span>
          <span aria-hidden="true">·</span>
          <span>Figeac, Cahors, Brive et alentours</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F3EF] leading-[1.15] text-balance max-w-4xl mb-6">
          Moins de tâches répétitives. Plus de temps pour l&apos;essentiel.
        </h1>

        {/* Hero Subtitle */}
        <p className="text-lg sm:text-xl text-[#F5F3EF]/85 leading-relaxed max-w-3xl mb-10 font-normal">
          Je trouve où votre entreprise perd du temps, puis je mets en place un processus qui vous en fait gagner. Pour les TPE/PME du Lot.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-[#D97757] hover:bg-[#C56546] rounded-md transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D97757] focus:ring-offset-2 focus:ring-offset-[#1B2A41]"
          >
            <Clock className="w-5 h-5" />
            <span>Réserver 15 minutes</span>
          </button>

          <a
            href="#offre"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-[#F5F3EF] hover:text-white bg-[#223450] hover:bg-[#2A4063] border border-[#2C4263] rounded-md transition-colors"
          >
            <span>Voir l&apos;offre</span>
            <ArrowRight className="w-4 h-4 text-[#D97757]" />
          </a>
        </div>

        {/* Trust markers: quiet 3-point strip */}
        <div className="pt-8 border-t border-[#2C4263]/60 grid grid-cols-1 sm:grid-cols-3 gap-5 text-sm text-[#F5F3EF]/80">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#D97757] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Sans changer vos outils</p>
              <p className="text-xs text-[#F5F3EF]/70 mt-0.5">Directement dans vos emails, Excel, Google Sheets ou logiciels habituels.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#D97757] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Interlocuteur unique & local</p>
              <p className="text-xs text-[#F5F3EF]/70 mt-0.5">Un accompagnement humain, direct, réactif et proche de vous dans le Lot.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#D97757] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Sans jargon technique</p>
              <p className="text-xs text-[#F5F3EF]/70 mt-0.5">Des solutions simples, pragmatiques et immédiatement utilisables par votre équipe.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

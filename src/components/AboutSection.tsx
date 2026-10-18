import React from 'react';
import { MapPin, Mail, Coffee } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="a-propos" className="py-24 bg-[#1B2A41] text-[#F5F3EF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left Column: Square Photo Placeholder */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-sm aspect-square bg-[#223450] rounded-2xl border-2 border-[#2C4263] p-4 flex flex-col justify-between shadow-md relative overflow-hidden group">
              {/* Subtle decorative background pattern */}
              <div className="absolute inset-0 bg-radial from-[#2A4063]/40 to-transparent pointer-events-none" />

              {/* Top tag */}
              <div className="flex items-center justify-between text-xs text-[#F5F3EF]/70 z-10">
                <span className="font-semibold text-[#D97757]">Fondateur</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D97757]" />
                  Lot (46)
                </span>
              </div>

              {/* Center Portrait / Placeholder Graphic */}
              <div className="flex flex-col items-center justify-center my-auto py-6 z-10 text-center">
                <div className="w-28 h-28 rounded-full bg-[#1B2A41] border-2 border-[#D97757]/60 flex items-center justify-center mb-3 shadow-inner">
                  <span className="text-3xl font-bold tracking-tight text-white font-sans">
                    J<span className="text-[#D97757]">.</span>
                  </span>
                </div>
                <p className="text-base font-bold text-white">Joshua</p>
                <p className="text-xs text-[#F5F3EF]/70 mt-0.5">Conseil & Mise en place de processus</p>
              </div>

              {/* Bottom caption */}
              <div className="z-10 text-center pt-3 border-t border-[#2C4263]/70">
                <p className="text-[11px] text-[#F5F3EF]/60 italic">
                  Interlocuteur unique pour toutes vos démarches
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio in First Person ("je") */}
          <div className="md:col-span-7">
            <p className="text-sm font-semibold tracking-wider uppercase text-[#D97757] mb-2">
              À propos
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6 text-balance">
              Un voisin compétent, pas une grosse agence
            </h2>

            <div className="space-y-4 text-base text-[#F5F3EF]/85 leading-relaxed font-normal">
              <p>
                Je m&apos;appelle <strong>Joshua</strong>, je suis basé dans le <strong>Lot</strong>. Après plusieurs
                années passées à structurer et fiabiliser des flux de travail administratifs, j&apos;ai constaté que la
                plupart des artisans, commerçants et dirigeants de TPE perdent leurs soirées et leurs week-ends sur des
                saisies manuelles interminables.
              </p>
              <p>
                J&apos;ai créé <strong>Kadencio</strong> avec une idée simple : vous apporter une aide directe, pragmatique et
                accessible, sans changer vos habitudes. Pas de logiciels obscurs ni de promesses théoriques, mais des
                processus bien réglés qui tournent silencieusement dans vos outils quotidiens.
              </p>
              <p>
                Quand nous travaillons ensemble, vous n&apos;avez pas affaire à un centre d&apos;appels ou à des
                intermédiaires : je viens vous voir ou nous échangeons directement, et je m&apos;assure personnellement que
                tout fonctionne comme prévu.
              </p>
            </div>

            {/* Quick contact / conversation note */}
            <div className="mt-8 pt-6 border-t border-[#2C4263] flex flex-wrap items-center gap-6 text-sm text-[#F5F3EF]/80">
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-[#D97757]" />
                <span>Disponible pour un café à Figeac ou Cahors</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D97757]" />
                <a href="mailto:joshua@kadencio.fr" className="hover:text-white underline underline-offset-4 decoration-[#D97757]">
                  joshua@kadencio.fr
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

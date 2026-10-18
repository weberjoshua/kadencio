import React from 'react';
import { Check, ArrowRight, Clock, ShieldCheck, Zap } from 'lucide-react';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  return (
    <section id="offre" className="py-24 bg-[#1B2A41] text-[#F5F3EF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold tracking-wider uppercase text-[#D97757] mb-2">
            Méthode & Tarifs transparents
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 text-balance">
            Comment ça marche
          </h2>
          <p className="text-lg text-[#F5F3EF]/85 leading-relaxed font-normal">
            Une progression claire en 3 étapes. Vous commencez par un diagnostic rapide pour identifier les gains
            immédiats, sans engagement lourd.
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {/* Étape 1: Diagnostic Express */}
          <div className="bg-[#223450] rounded-xl p-7 border border-[#2C4263] flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D97757]">
                  Étape 01
                </span>
                <span className="text-xs text-[#F5F3EF]/70 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  45 à 60 min
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Diagnostic Express</h3>
              <p className="text-sm text-[#F5F3EF]/80 mb-6 leading-relaxed">
                Un échange direct pour analyser vos goulots d’étranglement, comprendre vos outils actuels et chiffrer
                précisément le temps que vous pouvez récupérer.
              </p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-[#2C4263]">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-white tabular-nums">250 €</span>
                  <span className="text-xs text-[#F5F3EF]/70 font-medium">tarif de lancement</span>
                </div>
                <p className="text-xs text-[#D97757] mt-1.5 font-medium">
                  Déduits du Sprint si vous le signez sous 30 jours.
                </p>
              </div>

              {/* Inclusions */}
              <ul className="space-y-3 text-sm text-[#F5F3EF]/85 mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#D97757] shrink-0 mt-0.5" />
                  <span>45 à 60 minutes d’échange ciblé en visio ou dans vos locaux</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#D97757] shrink-0 mt-0.5" />
                  <span>Rapport synthétique de 2 pages avec vos 3 gains les plus rapides</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#D97757] shrink-0 mt-0.5" />
                  <span>Gains chiffrés en heures par semaine et plan d’action concret</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full py-3 px-4 rounded-md text-sm font-semibold text-white bg-[#D97757] hover:bg-[#C56546] transition-colors flex items-center justify-center gap-2"
            >
              <span>Réserver mon Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Étape 2: Sprint Processus */}
          <div className="bg-[#243754] rounded-xl p-7 border-2 border-[#D97757]/80 flex flex-col justify-between relative shadow-lg">
            <div className="absolute -top-3 left-6 bg-[#D97757] text-white text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded">
              Le cœur de l&apos;action
            </div>

            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D97757]">
                  Étape 02
                </span>
                <span className="text-xs text-[#F5F3EF]/70 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-[#D97757]" />
                  Mise en place rapide
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Sprint Processus</h3>
              <p className="text-sm text-[#F5F3EF]/80 mb-6 leading-relaxed">
                Un flux de travail complet mis en place de bout en bout (une source, une destination), directement dans
                vos logiciels existants.
              </p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-[#2C4263]">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums whitespace-nowrap">À partir de 750 €</span>
                  <span className="text-xs text-[#F5F3EF]/70 font-medium">sur devis</span>
                </div>
                <p className="text-xs text-[#F5F3EF]/70 mt-1.5">
                  Tarif adapté à la complexité de votre flux.
                </p>
              </div>

              {/* Inclusions */}
              <ul className="space-y-3 text-sm text-[#F5F3EF]/85 mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#D97757] shrink-0 mt-0.5" />
                  <span>Flux de travail opérationnel de bout en bout (source vers destination)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#D97757] shrink-0 mt-0.5" />
                  <span>Dans vos outils actuels (Gmail/Outlook, Sheets, Airtable, CRM...)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#D97757] shrink-0 mt-0.5" />
                  <span>Formation de l’équipe de 30 minutes incluse</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#D97757] shrink-0 mt-0.5" />
                  <span>15 jours de support et ajustements offerts</span>
                </li>
              </ul>
            </div>

            <a
              href="#contact"
              className="w-full py-3 px-4 rounded-md text-sm font-semibold text-white bg-[#D97757] hover:bg-[#C56546] transition-colors flex items-center justify-center gap-2"
            >
              <span>Demander un devis Sprint</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Étape 3: Kadencio Care */}
          <div className="bg-[#223450] rounded-xl p-7 border border-[#2C4263] flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D97757]">
                  Étape 03
                </span>
                <span className="text-xs text-[#F5F3EF]/70 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Tranquillité
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Kadencio Care</h3>
              <p className="text-sm text-[#F5F3EF]/80 mb-6 leading-relaxed">
                Votre processus surveillé et maintenu dans le temps, pour ne jamais être bloqué si un outil évolue ou si
                un imprévu survient.
              </p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-[#2C4263]">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-white tabular-nums">250 €</span>
                  <span className="text-xs text-[#F5F3EF]/70 font-medium">/ mois</span>
                </div>
                <p className="text-xs text-[#F5F3EF]/70 mt-1.5">
                  Sans engagement de durée contraignant.
                </p>
              </div>

              {/* Inclusions */}
              <ul className="space-y-3 text-sm text-[#F5F3EF]/85 mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#D97757] shrink-0 mt-0.5" />
                  <span>Suivi mensuel et corrections rapides en cas de dysfonctionnement</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#D97757] shrink-0 mt-0.5" />
                  <span>Une petite amélioration ou réglage supplémentaire chaque mois</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#D97757] shrink-0 mt-0.5" />
                  <span>Rapport simple : volumes traités, erreurs évitées, heures gagnées</span>
                </li>
              </ul>
            </div>

            <a
              href="#contact"
              className="w-full py-3 px-4 rounded-md text-sm font-semibold text-white bg-[#1B2A41] hover:bg-[#152235] border border-[#2C4263] transition-colors flex items-center justify-center gap-2"
            >
              <span>Me contacter pour le suivi</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Note on Deduction */}
        <div className="bg-[#142032] border border-[#2C4263]/70 rounded-lg p-5 text-center max-w-2xl mx-auto">
          <p className="text-sm text-[#F5F3EF]/90">
            <strong className="text-white">Engagement zéro risque :</strong> Le tarif du Diagnostic Express (250 €) est
            intégralement déduit de votre facture si vous signez le Sprint sous 30 jours.
          </p>
        </div>
      </div>
    </section>
  );
};

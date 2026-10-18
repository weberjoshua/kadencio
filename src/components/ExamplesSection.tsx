import React from 'react';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

export const ExamplesSection: React.FC = () => {
  const examples = [
    {
      title: 'Factures fournisseurs',
      context: 'Fini la saisie manuelle ligne par ligne à la réception des emails.',
      steps: [
        'Factures PDF reçues par email',
        'Extraction des informations clés',
        'Validation humaine en 1 clic',
        'Tableau Google Sheets ou logiciel comptable',
      ],
      details: 'Fournisseur, date, numéro de facture, HT, TVA et TTC sont directement rangés au bon format.',
    },
    {
      title: 'Devis & Commandes',
      context: 'Une vue claire et consolidée de vos propositions en cours.',
      steps: [
        'Devis reçus ou émis',
        'Champs clés extraits',
        'Mise à jour automatique',
        'Tableau de suivi commercial centralisé',
      ],
      details: 'Vos équipes ont accès à un statut à jour sans devoir fouiller dans les boîtes de réception.',
    },
    {
      title: 'Demandes clients entrantes',
      context: 'Chaque demande est orientée rapidement vers le bon collaborateur.',
      steps: [
        'Demandes clients par email',
        'Tri et catégorisation',
        'Notification immédiate',
        'Réponse type ou transmission au bon interlocuteur',
      ],
      details: 'Moins de délais de réponse et plus aucun message oublié entre deux boîtes partagées.',
    },
  ];

  return (
    <section id="exemples" className="py-24 bg-[#F5F3EF] text-[#1B2A41]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold tracking-wider uppercase text-[#D97757] mb-2">
            Cas d&apos;usage types
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1B2A41] mb-4 text-balance">
            Exemples concrets de flux mis en place
          </h2>
          <p className="text-lg text-[#1B2A41]/80 leading-relaxed font-normal">
            Voici trois schémas types de processus automatisés de bout en bout pour fluidifier le quotidien d&apos;une TPE ou PME.
          </p>
        </div>

        {/* 3 Flow Cards */}
        <div className="space-y-8">
          {examples.map((item, idx) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 sm:p-8 border border-[#E2DDD5] shadow-xs hover:border-[#D97757]/40 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6 pb-4 border-b border-[#E2DDD5]">
                <div>
                  <span className="text-xs font-semibold text-[#D97757] uppercase tracking-wider">
                    Flux 0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-[#1B2A41] mt-0.5">{item.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#1B2A41]/70 italic">{item.context}</p>
              </div>

              {/* Arrowed Steps flow */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {item.steps.map((step, stepIndex) => (
                  <div key={step} className="relative flex flex-col">
                    <div className="bg-[#F5F3EF] rounded-lg p-4 border border-[#E2DDD5] h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-[#1B2A41]/60">Étape {stepIndex + 1}</span>
                        <CheckCircle2 className="w-4 h-4 text-[#D97757]" />
                      </div>
                      <p className="text-sm font-medium text-[#1B2A41] leading-snug">{step}</p>
                    </div>

                    {/* Arrow between steps (desktop only) */}
                    {stepIndex < item.steps.length - 1 && (
                      <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-[#E2DDD5] items-center justify-center text-[#D97757] shadow-xs">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Outcome note */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#1B2A41]/80 bg-[#F5F3EF]/60 rounded-md p-3 border border-[#E2DDD5]">
                <FileText className="w-4 h-4 text-[#D97757] shrink-0" />
                <span>
                  <strong>Résultat pratique :</strong> {item.details}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

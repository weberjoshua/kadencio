import React, { useState } from 'react';
import {
  Receipt,
  FileSpreadsheet,
  Mail,
  BellRing,
  RefreshCw,
  Clock,
  Sparkles,
} from 'lucide-react';
import { estimateTimeSavings } from '../utils/businessLogic';

export const TimeLossSection: React.FC = () => {
  // Interactive mini-simulator for time spent
  const [taskHours, setTaskHours] = useState({
    invoicesHours: 3,
    quotesHours: 2,
    clientRequestsHours: 2,
    followupsHours: 1,
    toolSyncHours: 2,
  });

  const savings = estimateTimeSavings(taskHours);

  const painPoints = [
    {
      id: 'factures',
      title: 'Saisie de factures',
      icon: Receipt,
      description:
        'Ouvrir chaque PDF reçu, recopier manuellement les montants, les taux de TVA et les lignes dans un tableur ou un outil comptable.',
      exampleHours: 3,
      key: 'invoicesHours' as const,
    },
    {
      id: 'devis',
      title: 'Devis',
      icon: FileSpreadsheet,
      description:
        'Retranscrire les coordonnées, vérifier les prix un à un, mettre en forme et envoyer des propositions commerciales répétitives.',
      exampleHours: 2,
      key: 'quotesHours' as const,
    },
    {
      id: 'demandes',
      title: 'Demandes clients',
      icon: Mail,
      description:
        'Trier la boîte mail générale, dispatcher manuellement vers la bonne personne, avec le risque d’oublier un message ou de tarder à répondre.',
      exampleHours: 2,
      key: 'clientRequestsHours' as const,
    },
    {
      id: 'relances',
      title: 'Relances',
      icon: BellRing,
      description:
        'Vérifier manuellement qui a payé, retrouver les devis sans réponse, et réécrire des relances cordiales au cas par cas.',
      exampleHours: 1,
      key: 'followupsHours' as const,
    },
    {
      id: 'outils',
      title: 'Mise à jour d’outils',
      icon: RefreshCw,
      description:
        'Faire de la double saisie entre votre boîte mail, votre tableau Excel, votre carnet de contacts et votre logiciel de facturation.',
      exampleHours: 2,
      key: 'toolSyncHours' as const,
    },
  ];

  return (
    <section id="perte-de-temps" className="py-20 bg-[#F5F3EF] text-[#1B2A41]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-semibold tracking-wider uppercase text-[#D97757] mb-2">
            Diagnostic quotidien
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1B2A41] mb-4 text-balance">
            Où perdez-vous du temps ?
          </h2>
          <p className="text-lg text-[#1B2A41]/80 leading-relaxed font-normal">
            Dans la plupart des TPE et PME, plusieurs heures s’évaporent chaque semaine dans des gestes administratifs
            mécaniques. Des tâches nécessaires, mais qui n’apportent aucune valeur à vos clients.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-lg p-6 border border-[#E2DDD5] shadow-xs hover:border-[#D97757]/40 transition-all ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-md bg-[#F5F3EF] text-[#1B2A41] flex items-center justify-center mb-4 border border-[#E2DDD5]">
                  <Icon className="w-5 h-5 text-[#D97757]" />
                </div>
                <h3 className="text-lg font-bold text-[#1B2A41] mb-2">{item.title}</h3>
                <p className="text-sm text-[#1B2A41]/75 leading-relaxed">{item.description}</p>
              </div>
            );
          })}

          {/* 6th Card: Micro Time Audit Simulator */}
          <div className="bg-[#1B2A41] text-[#F5F3EF] rounded-lg p-6 border border-[#2C4263] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D97757] mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Impact cumulé</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Combien d’heures par semaine ?</h3>
              <p className="text-xs text-[#F5F3EF]/70 mb-4 leading-relaxed">
                Ajustez le temps passé chaque semaine sur ces 5 gestes pour évaluer le temps récupérable :
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#F5F3EF]/80">Total estimé perdu :</span>
                  <span className="font-bold text-white tabular-nums">
                    {savings.totalWeeklyHoursLost} h / semaine
                  </span>
                </div>
                <div className="w-full bg-[#243754] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#D97757] h-full transition-all duration-300"
                    style={{
                      width: `${Math.min(100, (savings.totalWeeklyHoursLost / 20) * 100)}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#2C4263]/70">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-[#F5F3EF]/75">Temps récupérable :</span>
                <span className="text-xl font-bold text-[#D97757] tabular-nums">
                  ~{savings.estimatedHoursSavedWeekly} h / sem.
                </span>
              </div>
              <p className="text-[11px] text-[#F5F3EF]/60 mt-1">
                Soit environ <strong className="text-white font-semibold">{savings.estimatedAnnualHoursSaved} heures</strong> par an réinjectées dans votre activité.
              </p>
            </div>
          </div>
        </div>

        {/* Small reassurance footline */}
        <div className="text-center text-xs text-[#1B2A41]/60">
          Un processus fiable et bien configuré permet d&apos;éliminer la quasi-totalité de ces manipulations répétitives.
        </div>
      </div>
    </section>
  );
};

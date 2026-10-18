import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqSectionProps {
  onOpenPrivacyModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenPrivacyModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Est-ce que je dois changer d’outils ?',
      answer: (
        <p>
          Non, absolument pas. C’est le principe même de Kadencio : je m’adapte à ce que vous utilisez déjà au
          quotidien (votre boîte mail Gmail ou Outlook, vos classeurs Google Sheets ou Excel, votre logiciel de devis et
          facturation ou votre CRM). Aucun nouvel outil complexe à appréhender pour votre équipe.
        </p>
      ),
    },
    {
      question: 'Que deviennent mes documents ?',
      answer: (
        <p>
          Vos documents et données restent strictement confidentiels et continuent de résider dans votre propre
          environnement sécurisé. Rien n’est revendu, rien n’est partagé à des tiers et rien n’est stocké sur des
          serveurs non autorisés. Vous pouvez consulter notre{' '}
          <button
            type="button"
            onClick={onOpenPrivacyModal}
            className="text-[#D97757] hover:underline font-semibold inline focus:outline-none"
          >
            politique de confidentialité
          </button>{' '}
          pour en savoir plus sur nos engagements RGPD.
        </p>
      ),
    },
    {
      question: 'Combien de temps pour voir un résultat ?',
      answer: (
        <p>
          Dès le <strong>Diagnostic Express</strong>, vous recevez votre rapport sous 48h ouvrées après notre échange
          avec vos 3 gains prioritaires chiffrés. Pour un <strong>Sprint Processus</strong>, la mise en service complète
          prend généralement entre 1 et 2 semaines, tests et formation de votre équipe inclus.
        </p>
      ),
    },
    {
      question: 'Et si ça ne convient pas ?',
      answer: (
        <p>
          C’est exactement pour cela que le <strong>Diagnostic Express (250 €)</strong> a été conçu : il vous permet
          d’obtenir un état des lieux clair et chiffré avant tout engagement plus conséquent. Si vous décidez de ne pas
          poursuivre, vous gardez le plan d’action complet. Si vous lancez le Sprint sous 30 jours, ces 250 € sont
          directement déduits de votre facture.
        </p>
      ),
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#F5F3EF] text-[#1B2A41]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-wider uppercase text-[#D97757] mb-2 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            <span>Questions fréquentes</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1B2A41] mb-4 text-balance">
            Des réponses simples à vos questions
          </h2>
          <p className="text-base text-[#1B2A41]/75 font-normal">
            Vous avez une autre question ? N’hésitez pas à m’écrire directement ou à réserver un échange de 15 minutes.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-lg border border-[#E2DDD5] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#1B2A41] hover:text-[#D97757] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D97757] focus:ring-inset"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D97757] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-sm sm:text-base text-[#1B2A41]/80 leading-relaxed border-t border-[#F5F3EF] pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalsProps {
  modalType: 'legal' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ modalType, onClose }) => {
  if (!modalType) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl bg-[#1B2A41] text-[#F5F3EF] rounded-xl border border-[#2C4263] p-6 sm:p-8 shadow-2xl my-8 max-h-[85vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#F5F3EF]/70 hover:text-white rounded-md hover:bg-[#223450] focus:outline-none focus:ring-2 focus:ring-[#D97757]"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {modalType === 'legal' ? (
          <div className="space-y-6 text-sm text-[#F5F3EF]/85">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D97757]">
              <FileText className="w-4 h-4" />
              <span>Informations légales</span>
            </div>
            <h2 id="legal-modal-title" className="text-2xl font-bold text-white">
              Mentions Légales
            </h2>

            <div>
              <h3 className="font-bold text-white text-base mb-1">1. Éditeur du site</h3>
              <p>
                Le site <strong>Kadencio</strong> est édité par Joshua [Nom du fondateur], exerçant en tant que
                prestataire indépendant sous le nom commercial <strong>Kadencio</strong>.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs">
                <li>Localisation : Département du Lot (46), Région Occitanie, France.</li>
                <li>Numéro SIRET : [En cours d’immatriculation / SIRET à compléter].</li>
                <li>Email de contact : joshua@kadencio.fr</li>
                <li>Directeur de la publication : Joshua.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white text-base mb-1">2. Hébergement</h3>
              <p className="text-xs">
                Le site est hébergé sur les infrastructures de Google Cloud / Firebase Hosting, avec des centres de
                données situés au sein de l’Union Européenne (RGPD conforme).
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white text-base mb-1">3. Propriété intellectuelle</h3>
              <p className="text-xs">
                L’ensemble des éléments constituant le site Kadencio (textes, graphismes, logos, mise en page) est
                protégé par le droit d’auteur. Toute reproduction ou représentation totale ou partielle sans
                autorisation écrite préalable est interdite.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white text-base mb-1">4. Absence de traceurs et cookies tiers</h3>
              <p className="text-xs">
                Ce site n’utilise aucun cookie publicitaire, aucun traceur de profilage tiers et aucune transmission de
                données à des régies marketing. La navigation est respectueuse de votre vie privée par défaut.
              </p>
            </div>

            <div className="pt-4 border-t border-[#2C4263] flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-[#D97757] hover:bg-[#C56546] text-white text-xs font-semibold rounded transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-sm text-[#F5F3EF]/85">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D97757]">
              <Shield className="w-4 h-4" />
              <span>Protection des données personnelles</span>
            </div>
            <h2 id="legal-modal-title" className="text-2xl font-bold text-white">
              Politique de Confidentialité
            </h2>

            <div>
              <h3 className="font-bold text-white text-base mb-1">1. Principes généraux</h3>
              <p className="text-xs">
                Chez Kadencio, la confidentialité de vos données d’entreprise et de vos processus est primordiale. Nous
                appliquons les règles du Règlement Général sur la Protection des Données (RGPD - Règlement UE 2016/679).
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white text-base mb-1">2. Données collectées</h3>
              <p className="text-xs">
                Nous ne collectons que les informations que vous nous transmettez volontairement via le formulaire de
                contact ou lors de la prise de rendez-vous : nom, entreprise, adresse email, numéro de téléphone et la
                description de votre besoin.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white text-base mb-1">3. Finalité et durée de conservation</h3>
              <p className="text-xs">
                Ces informations sont utilisées exclusivement pour vous répondre, organiser le Diagnostic Express ou
                exécuter nos prestations de Sprint Processus. Elles ne sont <strong>jamais vendues, louées ni cédées</strong>{' '}
                à des tiers. Elles sont conservées pour une durée maximale de 3 ans à compter du dernier échange.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white text-base mb-1">4. Sécurité des flux de travail</h3>
              <p className="text-xs">
                Dans le cadre de nos prestations, les automatisations mises en place opèrent directement dans vos propres
                environnements (votre compte Google Workspace, Microsoft 365, Airtable ou CRM). Vos documents et factures
                ne transitent pas par nos serveurs personnels.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white text-base mb-1">5. Vos droits</h3>
              <p className="text-xs">
                Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression de vos données
                personnelles. Pour exercer ce droit, adressez un message à <strong>joshua@kadencio.fr</strong>.
              </p>
            </div>

            <div className="pt-4 border-t border-[#2C4263] flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-[#D97757] hover:bg-[#C56546] text-white text-xs font-semibold rounded transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

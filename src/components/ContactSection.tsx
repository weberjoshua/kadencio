import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { validateContactForm, ContactFormData } from '../utils/businessLogic';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(formData);

    if (!result.valid) {
      setErrors(result.errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate swift local client submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#1B2A41] text-[#F5F3EF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct contact info & Fast Booking CTA */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold tracking-wider uppercase text-[#D97757] mb-2">
              Contact direct
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6 text-balance">
              Parlons de votre quotidien
            </h2>
            <p className="text-base text-[#F5F3EF]/85 leading-relaxed mb-8 font-normal">
              Que vous ayez une question précise, envie d’un premier échange informel de 15 minutes ou besoin d’un
              Diagnostic Express, je vous réponds sous 24h ouvrées.
            </p>

            {/* 15-Minute Booking Highlight Card */}
            <div className="bg-[#223450] border border-[#2C4263] rounded-xl p-6 mb-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#D97757] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>Le plus rapide</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Réserver 15 minutes en direct
              </h3>
              <p className="text-xs text-[#F5F3EF]/75 mb-4 leading-relaxed">
                Choisissez directement un créneau téléphonique ou visio sans échange d&apos;emails inutile.
              </p>
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#D97757] hover:bg-[#C56546] rounded-md transition-colors"
              >
                <Clock className="w-4 h-4" />
                <span>Réserver 15 minutes</span>
              </button>
            </div>

            {/* Direct Coordinates */}
            <div className="space-y-4 text-sm text-[#F5F3EF]/85">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D97757] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a
                    href="mailto:joshua@kadencio.fr"
                    className="hover:text-white underline underline-offset-4 decoration-[#D97757]"
                  >
                    joshua@kadencio.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D97757] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Téléphone</p>
                  <a
                    href="tel:+33647325535"
                    className="hover:text-white font-medium"
                  >
                    06 47 32 55 35
                  </a>
                  <p className="text-xs text-[#F5F3EF]/60 mt-0.5">
                    Du lundi au vendredi de 8h30 à 18h30
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D97757] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Zone d’intervention</p>
                  <p className="text-sm text-[#F5F3EF]/80">
                    Lot · Occitanie (Figeac, Cahors, Brive et communes alentours)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#223450] rounded-xl p-8 border border-[#2C4263] shadow-lg">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#1B2A41] border-2 border-[#D97757] flex items-center justify-center mx-auto text-[#D97757]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message bien reçu !</h3>
                <p className="text-sm text-[#F5F3EF]/85 max-w-md mx-auto leading-relaxed">
                  Merci <strong>{formData.name}</strong>. J’ai bien reçu votre demande pour{' '}
                  <strong>{formData.company}</strong> et je reviens vers vous par email (
                  <span className="text-white">{formData.email}</span>) sous 24 heures ouvrées.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
                  }}
                  className="mt-4 px-4 py-2 text-xs font-medium text-[#F5F3EF]/80 hover:text-white bg-[#1B2A41] rounded border border-[#2C4263] transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-2">Envoyez-moi un message</h3>
                <p className="text-xs text-[#F5F3EF]/70 mb-4">
                  Détaillez vos logiciels actuels et les tâches qui vous prennent trop de temps.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nom */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-[#F5F3EF] mb-1.5">
                      Votre nom <span className="text-[#D97757]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex : Philippe Martinez"
                      className={`w-full px-3.5 py-2.5 rounded-md bg-[#1B2A41] border text-[#F5F3EF] text-sm focus:outline-none focus:ring-2 focus:ring-[#D97757] ${
                        errors.name ? 'border-red-400' : 'border-[#2C4263]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Entreprise */}
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-[#F5F3EF] mb-1.5">
                      Nom de votre entreprise <span className="text-[#D97757]">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Ex : SARL Quercy Énergie"
                      className={`w-full px-3.5 py-2.5 rounded-md bg-[#1B2A41] border text-[#F5F3EF] text-sm focus:outline-none focus:ring-2 focus:ring-[#D97757] ${
                        errors.company ? 'border-red-400' : 'border-[#2C4263]'
                      }`}
                    />
                    {errors.company && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.company}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#F5F3EF] mb-1.5">
                      Email professionnel <span className="text-[#D97757]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="philippe@quercy-energie.fr"
                      className={`w-full px-3.5 py-2.5 rounded-md bg-[#1B2A41] border text-[#F5F3EF] text-sm focus:outline-none focus:ring-2 focus:ring-[#D97757] ${
                        errors.email ? 'border-red-400' : 'border-[#2C4263]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-[#F5F3EF] mb-1.5">
                      Téléphone <span className="text-[#F5F3EF]/60 font-normal">(optionnel)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="06 12 34 56 78"
                      className={`w-full px-3.5 py-2.5 rounded-md bg-[#1B2A41] border text-[#F5F3EF] text-sm focus:outline-none focus:ring-2 focus:ring-[#D97757] ${
                        errors.phone ? 'border-red-400' : 'border-[#2C4263]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#F5F3EF] mb-1.5">
                    Votre message <span className="text-[#D97757]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Expliquez-moi en quelques mots où vous perdez du temps (ex : saisie de factures dans Excel, relance des devis, tri d'emails...)"
                    className={`w-full px-3.5 py-2.5 rounded-md bg-[#1B2A41] border text-[#F5F3EF] text-sm focus:outline-none focus:ring-2 focus:ring-[#D97757] ${
                      errors.message ? 'border-red-400' : 'border-[#2C4263]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#D97757] hover:bg-[#C56546] rounded-md transition-colors shadow-sm disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer mon message'}</span>
                </button>

                <p className="text-[11px] text-[#F5F3EF]/60 text-center">
                  Vos informations sont uniquement utilisées pour vous répondre. Aucun démarchage commercial abusif.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

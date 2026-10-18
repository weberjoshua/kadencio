import React, { useState } from 'react';
import { X, Calendar, Clock, Video, Phone, Building2, CheckCircle2, ExternalLink } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [meetingType, setMeetingType] = useState<'visio' | 'phone' | 'onsite'>('visio');
  const [selectedDay, setSelectedDay] = useState('Mardi 21 Octobre');
  const [selectedTime, setSelectedTime] = useState('10:00');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const availableDays = [
    { label: 'Lun 20 Oct', full: 'Lundi 20 Octobre' },
    { label: 'Mar 21 Oct', full: 'Mardi 21 Octobre' },
    { label: 'Mer 22 Oct', full: 'Mercredi 22 Octobre' },
    { label: 'Jeu 23 Oct', full: 'Jeudi 23 Octobre' },
    { label: 'Ven 24 Oct', full: 'Vendredi 24 Octobre' },
  ];

  const availableSlots = ['09:30', '10:00', '11:15', '14:00', '15:30', '17:00'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setConfirmed(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto"
    >
      <div className="relative w-full max-w-lg bg-[#1B2A41] text-[#F5F3EF] rounded-xl border border-[#2C4263] p-6 sm:p-8 shadow-2xl my-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#F5F3EF]/70 hover:text-white rounded-md hover:bg-[#223450] focus:outline-none focus:ring-2 focus:ring-[#D97757]"
          aria-label="Fermer la fenêtre de réservation"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmed ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#223450] border-2 border-[#D97757] text-[#D97757] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Créneau réservé !</h3>
            <p className="text-sm text-[#F5F3EF]/85 leading-relaxed">
              Merci <strong>{name}</strong>. Notre échange de 15 minutes est noté pour le{' '}
              <strong className="text-white">{selectedDay} à {selectedTime}</strong>.
            </p>
            <p className="text-xs text-[#F5F3EF]/70">
              Un email d&apos;invitation avec le lien vous a été envoyé à <strong>{email}</strong>.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setConfirmed(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-[#D97757] hover:bg-[#C56546] text-white text-sm font-semibold rounded-md transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D97757] mb-1">
              <Clock className="w-4 h-4" />
              <span>15 minutes sans engagement</span>
            </div>
            <h3 id="booking-title" className="text-2xl font-bold text-white mb-2">
              Réserver 15 minutes d’échange
            </h3>
            <p className="text-xs text-[#F5F3EF]/80 mb-6 leading-relaxed">
              Discutons de vos tâches administratives pour voir si Kadencio peut vous faire gagner du temps.
            </p>

            {/* Direct Calendly / Cal.com link button option */}
            <div className="mb-6 p-3 bg-[#223450] rounded-lg border border-[#2C4263] flex items-center justify-between text-xs">
              <span className="text-[#F5F3EF]/80">Vous préférez ouvrir directement notre agenda ?</span>
              <a
                href="https://cal.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-[#D97757] hover:underline shrink-0 ml-2"
              >
                <span>Cal.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Meeting Type */}
              <div>
                <label className="block text-xs font-semibold text-[#F5F3EF] mb-1.5">
                  Format souhaité
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setMeetingType('visio')}
                    className={`py-2 px-2.5 rounded-md text-xs font-medium border flex items-center justify-center gap-1.5 transition-colors ${
                      meetingType === 'visio'
                        ? 'bg-[#D97757] text-white border-[#D97757]'
                        : 'bg-[#223450] text-[#F5F3EF]/80 border-[#2C4263] hover:text-white'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Visio Meet</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMeetingType('phone')}
                    className={`py-2 px-2.5 rounded-md text-xs font-medium border flex items-center justify-center gap-1.5 transition-colors ${
                      meetingType === 'phone'
                        ? 'bg-[#D97757] text-white border-[#D97757]'
                        : 'bg-[#223450] text-[#F5F3EF]/80 border-[#2C4263] hover:text-white'
                    }`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Téléphone</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMeetingType('onsite')}
                    className={`py-2 px-2.5 rounded-md text-xs font-medium border flex items-center justify-center gap-1.5 transition-colors ${
                      meetingType === 'onsite'
                        ? 'bg-[#D97757] text-white border-[#D97757]'
                        : 'bg-[#223450] text-[#F5F3EF]/80 border-[#2C4263] hover:text-white'
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Sur place (Lot)</span>
                  </button>
                </div>
              </div>

              {/* Day Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#F5F3EF] mb-1.5">
                  Jour
                </label>
                <div className="grid grid-cols-5 gap-1.5">
                  {availableDays.map((day) => (
                    <button
                      key={day.full}
                      type="button"
                      onClick={() => setSelectedDay(day.full)}
                      className={`py-2 px-1 rounded text-center text-xs transition-colors border ${
                        selectedDay === day.full
                          ? 'bg-[#D97757] text-white border-[#D97757] font-semibold'
                          : 'bg-[#223450] text-[#F5F3EF]/80 border-[#2C4263] hover:text-white'
                      }`}
                    >
                      {day.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#F5F3EF] mb-1.5">
                  Heure ({selectedDay})
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                  {availableSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-1.5 px-2 rounded text-center text-xs tabular-nums transition-colors border ${
                        selectedTime === time
                          ? 'bg-[#D97757] text-white border-[#D97757] font-semibold'
                          : 'bg-[#223450] text-[#F5F3EF]/80 border-[#2C4263] hover:text-white'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* User details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label htmlFor="booking-name" className="block text-xs font-semibold text-[#F5F3EF] mb-1">
                    Votre nom *
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jean Dupont"
                    className="w-full px-3 py-2 text-xs rounded bg-[#142032] border border-[#2C4263] text-white focus:outline-none focus:ring-1 focus:ring-[#D97757]"
                  />
                </div>
                <div>
                  <label htmlFor="booking-company" className="block text-xs font-semibold text-[#F5F3EF] mb-1">
                    Votre entreprise
                  </label>
                  <input
                    id="booking-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="SARL Quercy"
                    className="w-full px-3 py-2 text-xs rounded bg-[#142032] border border-[#2C4263] text-white focus:outline-none focus:ring-1 focus:ring-[#D97757]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="booking-email" className="block text-xs font-semibold text-[#F5F3EF] mb-1">
                    Email *
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jean@quercy.fr"
                    className="w-full px-3 py-2 text-xs rounded bg-[#142032] border border-[#2C4263] text-white focus:outline-none focus:ring-1 focus:ring-[#D97757]"
                  />
                </div>
                <div>
                  <label htmlFor="booking-phone" className="block text-xs font-semibold text-[#F5F3EF] mb-1">
                    Téléphone
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="06 12 34 56 78"
                    className="w-full px-3 py-2 text-xs rounded bg-[#142032] border border-[#2C4263] text-white focus:outline-none focus:ring-1 focus:ring-[#D97757]"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-md text-sm font-semibold text-white bg-[#D97757] hover:bg-[#C56546] transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirmer mon échange de 15 minutes</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

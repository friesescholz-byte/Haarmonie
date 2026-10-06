import React, { useState } from 'react';
import { SALON_DATA } from '../data/content';
import { CheckCircle2, User, Phone, Mail } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Schnitt & Styling',
    preferredDay: 'Dienstag',
    preferredTime: 'Vormittags (09:00 - 12:00 Uhr)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white relative border-t border-zinc-200" id="termin">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-zinc-600 bg-zinc-100 border border-zinc-300 px-3.5 py-1 rounded-none">
            Online-Anfrage
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-black">
            Termin vereinbaren.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-zinc-600 font-normal">
            Senden Sie uns Ihren Wunschtermin. Wir bestätigen Ihre Reservierung telefonisch oder per E-Mail.
          </p>
        </div>

        {submitted ? (
          <div className="bg-zinc-50 border border-zinc-300 rounded-none p-6 sm:p-12 text-center space-y-4 shadow-sm">
            <CheckCircle2 className="w-12 h-12 text-black mx-auto" />
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-black">
              Vielen Dank für Ihre Anfrage!
            </h3>
            <p className="text-zinc-600 max-w-md mx-auto text-xs sm:text-sm">
              Wir haben Ihre Daten erhalten und melden uns zeitnah persönlich bei Ihnen, um Ihren Wunschtermin zu bestätigen.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs font-bold uppercase tracking-wider text-black hover:underline cursor-pointer py-2"
              >
                Weitere Anfrage senden
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-50/70 border border-zinc-200 rounded-none p-5 sm:p-10 shadow-sm space-y-5 sm:space-y-6 text-left"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
                  Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-zinc-400 absolute left-4 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Ihr vollständiger Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-zinc-300 rounded-none text-base sm:text-sm focus:outline-none focus:border-black transition-colors text-black"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
                  Telefonnummer *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-zinc-400 absolute left-4 top-3.5" />
                  <input
                    type="tel"
                    required
                    placeholder="Für Rückfragen &amp; Bestätigung"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-zinc-300 rounded-none text-base sm:text-sm focus:outline-none focus:border-black transition-colors text-black"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
                  E-Mail-Adresse
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-zinc-400 absolute left-4 top-3.5" />
                  <input
                    type="email"
                    placeholder="ihre.email@beispiel.de"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-zinc-300 rounded-none text-base sm:text-sm focus:outline-none focus:border-black transition-colors text-black"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
                  Gewünschte Leistung
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-none text-base sm:text-sm focus:outline-none focus:border-black transition-colors text-black"
                >
                  <option>Schnitt &amp; Styling</option>
                  <option>Farbe &amp; Veredelung</option>
                  <option>Herren-Service</option>
                  <option>Haarverdichtung &amp; Haarverlängerung (SIMPLIE)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
                  Bevorzugter Wochentag
                </label>
                <select
                  value={formData.preferredDay}
                  onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-none text-base sm:text-sm focus:outline-none focus:border-black transition-colors text-black"
                >
                  <option>Dienstag</option>
                  <option>Mittwoch</option>
                  <option>Donnerstag</option>
                  <option>Freitag</option>
                  <option>Samstag</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
                  Bevorzugte Uhrzeit
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-none text-base sm:text-sm focus:outline-none focus:border-black transition-colors text-black"
                >
                  <option>Vormittags (09:00 - 12:00 Uhr)</option>
                  <option>Mittags (12:00 - 15:00 Uhr)</option>
                  <option>Nachmittags (15:00 - 18:00 Uhr)</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
                Nachricht oder individuelle Wünsche (optional)
              </label>
              <textarea
                rows={3}
                placeholder="Haben Sie besondere Wünsche oder Fragen zu Ihrem Besuch?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-4 bg-white border border-zinc-300 rounded-none text-base sm:text-sm focus:outline-none focus:border-black transition-colors text-black"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-black hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-widest rounded-none transition-all border border-black shadow-sm cursor-pointer min-h-[48px]"
              >
                Terminanfrage absenden
              </button>
            </div>
          </form>
        )}

      </div>
    </section>
  );
};

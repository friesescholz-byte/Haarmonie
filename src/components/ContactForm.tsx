import React, { useState } from 'react';
import { SALON_DATA } from '../data/content';
import { Calendar, CheckCircle2, User, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Haarschnitt & Styling',
    preferredDay: 'Dienstag - Freitag',
    preferredTime: 'Vormittags (09:00 - 12:00)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 sm:py-32 bg-white relative" id="termin">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-zinc-600 bg-zinc-100 border border-zinc-200 px-3.5 py-1 rounded-full">
            Online-Anfrage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-black">
            Termin vereinbaren.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-normal">
            Senden Sie uns Ihren Wunschtermin. Wir bestätigen Ihre Reservierung telefonisch oder per E-Mail.
          </p>
        </div>

        {submitted ? (
          <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 sm:p-12 text-center space-y-4 animate-fadeIn shadow-clean">
            <CheckCircle2 className="w-14 h-14 text-black mx-auto" />
            <h3 className="text-2xl font-heading font-bold text-black">
              Vielen Dank für Ihre Anfrage!
            </h3>
            <p className="text-zinc-600 max-w-md mx-auto">
              Wir haben Ihre Daten erhalten und melden uns zeitnah persönlich bei Ihnen, um Ihren Wunschtermin zu bestätigen.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm font-bold text-black hover:underline"
              >
                Weitere Anfrage senden
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-50/70 border border-zinc-200 rounded-3xl p-6 sm:p-10 shadow-clean space-y-6 text-left"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    className="w-full pl-11 pr-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-black transition-colors text-black"
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
                    placeholder="Für Rückfragen & Bestätigung"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-black transition-colors text-black"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    className="w-full pl-11 pr-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-black transition-colors text-black"
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
                  className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-black transition-colors text-black"
                >
                  <option>Damen Haarschnitt &amp; Styling</option>
                  <option>Damen Coloration / Balayage</option>
                  <option>Herren Haarschnitt &amp; Styling</option>
                  <option>Bart- &amp; Konturenservice</option>
                  <option>Botanical Hair Spa Pflege</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
                  Bevorzugter Wochentag
                </label>
                <select
                  value={formData.preferredDay}
                  onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-black transition-colors text-black"
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
                  className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-black transition-colors text-black"
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
                className="w-full p-4 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-black transition-colors text-black"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-black hover:bg-zinc-800 text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg"
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

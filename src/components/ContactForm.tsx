import React, { useState } from 'react';
import { Phone, Calendar, Clock, User, Mail, MessageSquare, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { SALON_DATA } from '../data/content';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Damen: Schnitt & Styling',
    day: 'Dienstag / Mittwoch',
    time: 'Vormittags (09:00 - 12:00)',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden" id="termin">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#C59A44] block">
              Terminvereinbarung
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#071B33] leading-tight">
              Wunschtermin ganz einfach anfragen.
            </h2>
            <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
              Senden Sie uns hier bequem Ihre Wunschzeiten oder rufen Sie uns direkt im Salon an. Wir melden uns umgehend bei Ihnen zurück!
            </p>

            <div className="p-6 bg-white border border-[#EAE6DF] rounded-2xl shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF3E0] flex items-center justify-center text-[#C59A44]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#718096] uppercase font-semibold block">Direkt anrufen</span>
                  <a
                    href={`tel:${SALON_DATA.phoneClean}`}
                    className="text-xl font-heading font-bold text-[#071B33] hover:text-[#C59A44] transition-colors"
                  >
                    {SALON_DATA.phone}
                  </a>
                </div>
              </div>
              <p className="text-xs text-[#718096] leading-relaxed border-t border-slate-100 pt-3">
                💡 <strong>Tipp:</strong> Vormittags zwischen 09:00 und 11:30 Uhr ist Friseurmeister Matthias Zahn besonders entspannt telefonisch erreichbar.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#EAE6DF] shadow-lux-lg">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#071B33]">
                  Vielen Dank für Ihre Anfrage!
                </h3>
                <p className="text-slate-600 text-base max-w-md mx-auto">
                  Wir haben Ihre Terminanfrage erhalten und melden uns schnellstmöglich telefonisch bei Ihnen, um Ihren Wunschtermin zu bestätigen.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-block mt-4 text-xs font-bold uppercase tracking-wider text-[#C59A44] hover:underline"
                >
                  Neue Anfrage senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-[#071B33] mb-1">
                    Terminanfrage senden
                  </h3>
                  <p className="text-xs sm:text-sm text-[#718096]">
                    Füllen Sie kurz das Formular aus – wir stimmen den Termin persönlich mit Ihnen ab.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#071B33] uppercase tracking-wider mb-2">
                      Ihr vollständiger Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="z. B. Sabine Meyer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE6DF] text-sm text-[#071B33] focus:outline-none focus:border-[#C59A44] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#071B33] uppercase tracking-wider mb-2">
                      Telefonnummer für Rückruf *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="z. B. 0170 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE6DF] text-sm text-[#071B33] focus:outline-none focus:border-[#C59A44] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#071B33] uppercase tracking-wider mb-2">
                      E-Mail Adresse (optional)
                    </label>
                    <input
                      type="email"
                      placeholder="name@beispiel.de"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE6DF] text-sm text-[#071B33] focus:outline-none focus:border-[#C59A44] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#071B33] uppercase tracking-wider mb-2">
                      Gewünschte Behandlung
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE6DF] text-sm text-[#071B33] focus:outline-none focus:border-[#C59A44] focus:bg-white transition-all"
                    >
                      <option value="Damen: Schnitt & Styling">Damen: Schnitt &amp; Styling</option>
                      <option value="Aveda Pflanzenfarbe & Balayage">Aveda Pflanzenfarbe &amp; Balayage</option>
                      <option value="Festliche Hochsteckfrisur / Brautstyling">Festliche Hochsteckfrisur / Brautstyling</option>
                      <option value="Botanical Hair Spa Pflege">Botanical Hair Spa Pflege</option>
                      <option value="Herren: Meisterhaarschnitt & Bart">Herren: Meisterhaarschnitt &amp; Bart</option>
                      <option value="Sonstiges">Sonstiges / Individuelle Beratung</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#071B33] uppercase tracking-wider mb-2">
                      Bevorzugte Tage
                    </label>
                    <select
                      value={formData.day}
                      onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE6DF] text-sm text-[#071B33] focus:outline-none focus:border-[#C59A44] focus:bg-white transition-all"
                    >
                      <option value="Dienstag / Mittwoch">Dienstag / Mittwoch</option>
                      <option value="Donnerstag / Freitag">Donnerstag / Freitag</option>
                      <option value="Samstag Vormittag">Samstag Vormittag</option>
                      <option value="Flexibel">Ganz flexibel</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#071B33] uppercase tracking-wider mb-2">
                      Bevorzugte Uhrzeit
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE6DF] text-sm text-[#071B33] focus:outline-none focus:border-[#C59A44] focus:bg-white transition-all"
                    >
                      <option value="Vormittags (09:00 - 12:00)">Vormittags (09:00 - 12:00)</option>
                      <option value="Nachmittags (13:00 - 16:00)">Nachmittags (13:00 - 16:00)</option>
                      <option value="Spätnachmittag (16:00 - 18:00)">Spätnachmittag (16:00 - 18:00)</option>
                      <option value="Flexibel">Flexibel</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#071B33] uppercase tracking-wider mb-2">
                    Ihre Nachricht oder Wünsche (optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Besondere Haarwünsche, Farbvorstellungen oder Fragen..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#EAE6DF] text-sm text-[#071B33] focus:outline-none focus:border-[#C59A44] focus:bg-white transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#071B33] hover:bg-[#102A4C] text-white font-bold text-base rounded-full flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Send className="w-4 h-4 text-[#D4AF37]" />
                  <span>Unverbindliche Terminanfrage absenden</span>
                </button>

                <p className="text-[11px] text-center text-[#718096]">
                  🔒 Ihre Daten werden streng vertraulich ausschließlich zur Kontaktaufnahme genutzt.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

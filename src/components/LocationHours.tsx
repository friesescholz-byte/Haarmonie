import React from 'react';
import { SALON_DATA } from '../data/content';
import { Phone, MapPin, Clock, Car } from 'lucide-react';

export const LocationHours: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white" id="kontakt">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Contact & Opening Times */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#C59A44] block mb-2">
                Kontakt &amp; Anfahrt
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0A0A0C]">
                Wir freuen uns auf Ihren Besuch.
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#C59A44] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-bold text-lg text-[#0A0A0C]">Adresse</h4>
                  <p className="text-base text-[#4A5568]">
                    {SALON_DATA.name}<br />
                    {SALON_DATA.address}, {SALON_DATA.zipCity}
                  </p>
                  <p className="text-xs sm:text-sm text-[#718096] mt-1">
                    Kostenlose Parkmöglichkeiten direkt vor dem Salon in der Parkstraße.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#C59A44] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-bold text-lg text-[#0A0A0C]">Telefonische Terminvereinbarung</h4>
                  <a
                    href={`tel:${SALON_DATA.phoneClean}`}
                    className="text-2xl font-bold font-heading text-[#0A0A0C] hover:text-[#C59A44] transition-colors block mt-0.5"
                  >
                    {SALON_DATA.phone}
                  </a>
                  <p className="text-xs sm:text-sm text-[#718096] mt-1">
                    Termine bitte bevorzugt telefonisch vereinbaren.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-2">
                <Clock className="w-6 h-6 text-[#C59A44] flex-shrink-0 mt-1" />
                <div className="w-full">
                  <h4 className="font-heading font-bold text-lg text-[#0A0A0C] mb-3">Öffnungszeiten</h4>
                  <div className="space-y-2 text-sm text-[#4A5568]">
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span className="font-medium">Dienstag – Freitag</span>
                      <span className="font-bold text-[#0A0A0C]">09:00 – 18:00 Uhr</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span className="font-medium">Samstag</span>
                      <span className="font-bold text-[#0A0A0C]">08:00 – 13:00 Uhr</span>
                    </div>
                    <div className="flex justify-between py-1.5 text-slate-400">
                      <span>Montag &amp; Sonntag</span>
                      <span>Geschlossen</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={`tel:${SALON_DATA.phoneClean}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0A0A0C] hover:bg-[#222226] text-white px-8 py-4 rounded-full font-bold text-base tracking-wide transition-all shadow-md"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Jetzt anrufen: {SALON_DATA.phone}</span>
              </a>
            </div>
          </div>

          {/* Right: Embedded Google Map */}
          <div className="lg:col-span-6">
            <div className="h-full min-h-[380px] rounded-3xl overflow-hidden border border-[#EAE6DF] shadow-md bg-slate-100">
              <iframe
                title="Standort Haarmonie Matthias Zahn Parkstraße 15 Nienburg"
                src="https://maps.google.com/maps?q=Parkstra%C3%9Fe%2015,%2031582%20Nienburg&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[420px] border-0"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

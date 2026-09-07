import React from 'react';
import { SALON_DATA } from '../data/content';
import { Clock, MapPin, Phone } from 'lucide-react';

export const LocationHours: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-zinc-50/50 border-t border-zinc-200" id="kontakt">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Column */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-zinc-600 bg-white border border-zinc-200 px-3.5 py-1 rounded-full mb-3">
                Standort &amp; Öffnungszeiten
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black leading-tight">
                Besuchen Sie uns in Nienburg.
              </h2>
            </div>

            <div className="space-y-4 text-zinc-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-black">Salon Haarmonie Matthias Zahn</strong>
                  <span>Parkstraße 15, 31582 Nienburg/Weser</span>
                  <span className="block text-xs text-zinc-500 mt-0.5">Kostenlose Parkmöglichkeiten direkt vor dem Haus.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-black">Telefonische Terminabstimmung</strong>
                  <a href={`tel:${SALON_DATA.phoneClean}`} className="hover:underline font-bold text-black">
                    {SALON_DATA.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours Table */}
            <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-clean max-w-md space-y-3">
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-black flex items-center gap-2 pb-2 border-b border-zinc-100">
                <Clock className="w-4 h-4 text-black" />
                <span>Öffnungszeiten</span>
              </h3>
              <div className="space-y-2 text-xs text-zinc-700">
                {SALON_DATA.hours.map((h) => (
                  <div key={h.day} className="flex justify-between py-1 border-b border-zinc-50 last:border-0">
                    <span className={h.open ? 'font-medium text-black' : 'text-zinc-400'}>{h.day}</span>
                    <span className={h.open ? 'font-bold text-black' : 'text-zinc-400'}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Column: Farbige Google Maps Karte ohne Grayscale */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-clean-lg border border-zinc-200 aspect-[4/3] relative bg-zinc-100">
              <iframe
                title="Salon Haarmonie Standort"
                src="https://maps.google.com/maps?q=Parkstra%C3%9Fe%2015,%2031582%20Nienburg&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { SALON_DATA } from '../data/content';

export const TraditionStory: React.FC = () => {
  return (
    <section className="py-28 sm:py-36 text-white relative overflow-hidden bg-zinc-950" id="tradition">
      
      {/* Feststehendes (Parallax) Hintergrundbild: Haarmonie_05.webp wie im Hero DEUTLICH SICHTBAR */}
      <div
        className="absolute inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-75 filter contrast-[1.08] saturate-[1.05]"
        style={{
          backgroundImage: `url('https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/neu/Haarmonie_05.webp')`,
        }}
      />
      {/* Weicher, dezenter Overlay (nur 55% Schwarz) damit das Salon-Bild atmosphärisch durchscheint */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[0.5px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center space-y-8 relative z-10">
        
        <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-white bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30 shadow-md">
          Tradition &bull; Parkstraße 15
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-5xl font-heading font-bold leading-tight max-w-3xl mx-auto text-white drop-shadow-md">
          „Traditionelles Friseurhandwerk trifft auf zeitgemäße Ästhetik.“
        </h2>

        <p className="text-base sm:text-xl text-zinc-200 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-sm">
          In unserem denkmalgeschützten Salon schaffen wir Raum für Ruhe, individuelle Beratung und Schnitte von bleibendem Wert.
        </p>

        <div className="pt-4 space-y-4 max-w-md mx-auto">
          <div>
            <a
              href="#termin"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-zinc-200 text-black px-9 py-4 rounded-full font-bold text-base tracking-wide transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5 text-black" />
              <span>Termin online anfragen</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-zinc-200 drop-shadow-xs">
            <span>Oder direkt anrufen:</span>
            <a
              href={`tel:${SALON_DATA.phoneClean}`}
              className="font-bold text-white hover:text-zinc-200 transition-colors inline-flex items-center gap-1.5 underline decoration-white/70 hover:decoration-white"
            >
              <Phone className="w-4 h-4" />
              <span>{SALON_DATA.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

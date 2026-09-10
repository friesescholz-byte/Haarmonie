import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { SALON_DATA } from '../data/content';
import { VineClassic } from './BotanicalAccent';

export const TraditionStory: React.FC = () => {
  return (
    <section className="py-28 sm:py-36 text-white relative overflow-hidden bg-zinc-950" id="tradition">
      
      {/* Feststehendes (Parallax) Hintergrundbild: Haarmonie_05.webp */}
      <div
        className="absolute inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-75 filter contrast-[1.08] saturate-[1.05]"
        style={{
          backgroundImage: `url('https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/neu/Haarmonie_05.webp')`,
        }}
      />
      {/* Weicher 55%-Overlay */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[0.5px] pointer-events-none z-0" />

      {/* Original-Pflanzenranke zart hinter dem Meister-Zitat zentriert */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 pointer-events-none z-0 opacity-25 rotate-6">
        <VineClassic className="w-36 sm:w-44 h-80 sm:h-[420px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center space-y-8 relative z-10">
        
        <div className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-white bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-none border border-white/30">
          Parkstraße 15 &bull; Nienburg
        </div>

        <h2 className="text-3xl sm:text-5xl font-heading font-bold leading-tight max-w-3xl mx-auto text-white drop-shadow-md">
          „Präzision in Form. <br />
          <span className="text-zinc-300 font-normal">
            Natürlichkeit im Fall.“
          </span>
        </h2>

        <p className="text-base sm:text-lg text-zinc-200 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-sm">
          In unserem denkmalgeschützten Salon schaffen wir einen geschützten Raum für Ruhe, ungeteilte Beratung und individuelle Schnittkunst.
        </p>

        <div className="pt-4 space-y-4 max-w-md mx-auto">
          <div>
            <a
              href="#termin"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-zinc-200 text-black px-9 py-4 rounded-none font-bold text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg"
            >
              <Calendar className="w-4 h-4 text-black" />
              <span>Termin online anfragen</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300">
            <span>Direkt anrufen:</span>
            <a
              href={`tel:${SALON_DATA.phoneClean}`}
              className="font-bold text-white hover:text-zinc-200 transition-colors inline-flex items-center gap-1.5 underline decoration-white/60 hover:decoration-white"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{SALON_DATA.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

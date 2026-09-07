import React from 'react';
import { Calendar, Phone, UserCheck, Scissors, Leaf } from 'lucide-react';
import { SALON_DATA } from '../data/content';

export const AboutTeam: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden" id="ueber-uns">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16 sm:space-y-20">
        
        {/* 1. Header & Story */}
        <div className="max-w-3xl space-y-5 text-left">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 bg-zinc-100 border border-zinc-200 px-3.5 py-1 rounded-full">
            Über uns &bull; Matthias Zahn &amp; Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-black leading-[1.15] tracking-tight">
            „Wir nehmen uns Zeit für das Wesentliche: Ihr Haar.“
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed font-normal pt-1">
            Bei Haarmonie empfängt Sie ein eingespieltes, herzliches Team rund um Friseurmeister Matthias Zahn. Wir verbinden über 25 Jahre Meisterkompetenz mit moderner Schnitt- und Farbästhetik – ohne Hektik und ohne wechselnde Gesichter.
          </p>
        </div>

        {/* 2. Drei dezente Säulen: OHNE Kacheln, OHNE 01/02/03, mit edlen Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 text-left pt-2">
          
          {/* Säule 1: Feste Vertrauenspersonen */}
          <div className="space-y-3.5">
            <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-black">
              <UserCheck className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-bold text-lg sm:text-xl text-black">
              Feste Vertrauenspersonen
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-normal">
              Kontinuität und persönlicher Bezug statt ständiger Personalwechsel. Ihr Friseur kennt Ihre Wünsche und Ihr Haar.
            </p>
          </div>

          {/* Säule 2: Individuelle Typ-Diagnostik */}
          <div className="space-y-3.5">
            <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-black">
              <Scissors className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-bold text-lg sm:text-xl text-black">
              Individuelle Typ-Diagnostik
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-normal">
              Schnitte und Nuancen, abgestimmt auf Ihre Gesichtsform, Ihren persönlichen Stil und Ihren Alltag.
            </p>
          </div>

          {/* Säule 3: Reine Pflanzenpflege */}
          <div className="space-y-3.5">
            <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-black">
              <Leaf className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-bold text-lg sm:text-xl text-black">
              Reine Pflanzenpflege
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-normal">
              Schonende Aveda-Pflanzenfarben und revitalisierende Tiefenpflege für gesundes, glanzvolles Haar.
            </p>
          </div>

        </div>

        {/* 3. Aufgeräumte Button- & Anruf-Zeile */}
        <div className="flex flex-wrap items-center gap-6 pt-2">
          <a
            href="#termin"
            className="inline-flex items-center gap-2.5 bg-black hover:bg-zinc-800 text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Termin vereinbaren</span>
          </a>

          <div className="flex items-center gap-2 text-sm text-zinc-700">
            <span>Oder direkt anrufen:</span>
            <a
              href={`tel:${SALON_DATA.phoneClean}`}
              className="font-bold text-black hover:text-zinc-600 transition-colors inline-flex items-center gap-1.5 underline decoration-zinc-300 hover:decoration-black"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{SALON_DATA.phone}</span>
            </a>
          </div>
        </div>

        {/* 4. Großes 16:9 Widescreen-Salon-Video */}
        <div className="pt-4 max-w-5xl mx-auto">
          <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl bg-black border border-zinc-200 relative group">
            <video
              src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Haarmonie-Video.mp4"
              controls
              playsInline
              autoPlay
              muted
              loop
              className="w-full h-full object-contain bg-black"
            >
              Ihr Browser unterstützt dieses Video nicht.
            </video>
          </div>
          <span className="block text-center text-xs text-zinc-400 mt-4 font-medium">
            Einblicke in den Salon &bull; Meister Matthias Zahn bei der Arbeit in der Parkstraße 15
          </span>
        </div>

      </div>
    </section>
  );
};

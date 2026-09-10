import React from 'react';
import { Calendar, Phone, UserCheck, Scissors, Leaf } from 'lucide-react';
import { SALON_DATA } from '../data/content';
import { VineTall } from './BotanicalAccent';

export const AboutTeam: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden" id="ueber-uns">
      
      {/* Große, imposante Original-Pflanzenranke entlang des gesamten rechten Randes */}
      <div className="absolute top-8 -right-8 sm:-right-12 lg:-right-14 pointer-events-none z-0 opacity-75 sm:opacity-85">
        <VineTall className="w-48 sm:w-64 lg:w-80 h-[900px] sm:h-[1150px] lg:h-[1400px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16 sm:space-y-20 relative z-10">
        
        {/* 1. Header & Story */}
        <div className="max-w-3xl space-y-4 text-left">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#2F5E3D] bg-[#2F5E3D]/10 border border-[#2F5E3D]/30 px-3.5 py-1 rounded-none">
            Über uns &bull; Matthias Zahn &amp; Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-black leading-[1.15] tracking-tight">
            „Wir nehmen uns Zeit für das Wesentliche: Ihr Haar.“
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal pt-1">
            Bei Haarmonie empfängt Sie ein eingespieltes, herzliches Team rund um Friseurmeister Matthias Zahn. Wir verbinden über 25 Jahre Meisterkompetenz mit moderner Schnitt- und Farbästhetik – ohne Hektik und ohne wechselnde Gesichter.
          </p>
        </div>

        {/* 2. Drei offene Säulen mit edlen Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 text-left pt-2 border-t border-zinc-200 pt-10">
          
          {/* Säule 1 */}
          <div className="space-y-3.5">
            <div className="w-10 h-10 border border-[#2F5E3D]/30 flex items-center justify-center text-[#2F5E3D] bg-[#2F5E3D]/5 rounded-none">
              <UserCheck className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-bold text-lg text-black">
              Feste Vertrauenspersonen
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-normal">
              Kontinuität und persönlicher Bezug statt ständiger Personalwechsel. Ihr Friseur kennt Ihre Wünsche und Ihr Haar.
            </p>
          </div>

          {/* Säule 2 */}
          <div className="space-y-3.5">
            <div className="w-10 h-10 border border-[#2F5E3D]/30 flex items-center justify-center text-[#2F5E3D] bg-[#2F5E3D]/5 rounded-none">
              <Scissors className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-bold text-lg text-black">
              Individuelle Typ-Diagnostik
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-normal">
              Schnitte und Nuancen, abgestimmt auf Ihre Gesichtsform, Ihren persönlichen Stil und Ihren Alltag.
            </p>
          </div>

          {/* Säule 3: Reine Pflanzenpflege */}
          <div className="space-y-3.5">
            <div className="w-10 h-10 border border-[#2F5E3D]/30 flex items-center justify-center text-[#2F5E3D] bg-[#2F5E3D]/5 rounded-none">
              <Leaf className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-bold text-lg text-black">
              Reine Pflanzenpflege
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-normal">
              Schonende Aveda-Pflanzenfarben und revitalisierende Tiefenpflege für gesundes, glanzvolles Haar.
            </p>
          </div>

        </div>

        {/* 3. Eckige Button- & Anruf-Zeile */}
        <div className="flex flex-wrap items-center gap-5 pt-2">
          <a
            href="#termin"
            className="inline-flex items-center gap-2.5 bg-black hover:bg-zinc-800 text-white px-8 py-3.5 rounded-none text-xs font-bold uppercase tracking-widest transition-all border border-black"
          >
            <Calendar className="w-4 h-4" />
            <span>Termin vereinbaren</span>
          </a>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-600">
            <span>Direkt anrufen:</span>
            <a
              href={`tel:${SALON_DATA.phoneClean}`}
              className="font-bold text-black hover:text-[#2F5E3D] transition-colors inline-flex items-center gap-1.5 underline decoration-zinc-300 hover:decoration-[#2F5E3D]"
            >
              <Phone className="w-3.5 h-3.5 text-[#2F5E3D]" />
              <span>{SALON_DATA.phone}</span>
            </a>
          </div>
        </div>

        {/* 4. Großes 16:9 Widescreen-Salon-Video */}
        <div className="pt-6 max-w-5xl mx-auto">
          <div className="aspect-video w-full rounded-none overflow-hidden bg-black border border-zinc-300 relative shadow-sm">
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
          <span className="block text-center text-xs text-zinc-400 mt-4 font-medium uppercase tracking-wider">
            Einblicke in den Salon &bull; Meister Matthias Zahn bei der Arbeit in der Parkstraße 15
          </span>
        </div>

      </div>
    </section>
  );
};

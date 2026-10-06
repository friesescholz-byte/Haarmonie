import React from 'react';
import { Calendar, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { SALON_DATA } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[720px] sm:min-h-[800px] lg:min-h-[860px] w-full flex items-center overflow-hidden bg-[#111613]">
      
      {/* 1. Full-bleed Hintergrund: Hero-Haarmonie_01.webp, mittig zentriert & feststehend */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-center bg-fixed filter brightness-[0.95] contrast-[1.05]"
        style={{
          backgroundImage: `url('https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Hero-Haarmonie_01.webp')`,
        }}
      />

      {/* 2. Diagonales, semi-transparentes Glaselement auf der linken Seite (durchsichtig mit Blur) */}
      <div
        className="absolute inset-y-0 left-0 w-full lg:w-[60%] xl:w-[57%] z-10 bg-gradient-to-r from-black/85 via-[#101512]/75 to-[#141B16]/50 backdrop-blur-md lg:[clip-path:polygon(0_0,100%_0,84%_100%,0_100%)] shadow-2xl"
      />

      {/* 3. Content Container mit großzügigen Abständen oben und unten */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-20 pt-36 pb-20 sm:pt-44 sm:pb-28 lg:pt-48 lg:pb-36">
        <div className="max-w-xl lg:max-w-xl xl:max-w-2xl text-left space-y-8">

          {/* Hauptüberschrift (ohne Eyebrow) */}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-heading font-bold text-white leading-[1.18] tracking-tight drop-shadow-sm">
            Wir freuen uns, Sie in unserem über 100 jährigen Haus zu begrüßen –{' '}
            <span className="text-zinc-200 font-normal">
              wo Tradition und Moderne aufeinander treffen.
            </span>
          </h1>

          {/* Subtitle Text */}
          <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-normal max-w-lg drop-shadow-xs">
            Lassen Sie sich verwöhnen und genießen Sie bei uns Zeit nur für sich und ihr Wohlbefinden.
          </p>

          {/* CTA Buttons im Weymann-Stil mit Haarmonie-Farben */}
          <div className="space-y-4 pt-2">
            <div>
              <a
                href="#termin"
                className="inline-flex items-center justify-center gap-3 bg-[#2F5E3D] hover:bg-[#254B30] text-white px-8 py-4 rounded-none font-bold text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg group"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Termin online anfragen</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div>
              <a
                href={`tel:${SALON_DATA.phoneClean}`}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-200 hover:text-white transition-colors group"
              >
                <span>Direkt anrufen: {SALON_DATA.phone}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#C5A880]" />
              </a>
            </div>
          </div>

          {/* Bottom Info Bar wie bei Weymann (Telefon & E-Mail / Standort) */}
          <div className="pt-6 border-t border-white/20 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-zinc-200 font-medium">
            <a
              href={`tel:${SALON_DATA.phoneClean}`}
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{SALON_DATA.phone}</span>
            </a>

            <a
              href={`mailto:${SALON_DATA.email}`}
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{SALON_DATA.email}</span>
            </a>

            <div className="inline-flex items-center gap-2 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Parkstraße 15, Nienburg</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

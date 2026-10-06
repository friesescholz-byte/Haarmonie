import React from 'react';
import { Calendar, Phone, MapPin } from 'lucide-react';
import { SALON_DATA } from '../data/content';

export const HausTradition: React.FC = () => {
  return (
    <section className="relative min-h-[620px] sm:min-h-[700px] lg:min-h-[760px] flex items-center overflow-hidden bg-zinc-950" id="haus">
      {/* Background Image: Über 100-jähriges Haus Parkstraße */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-[0.88] contrast-[1.08] transition-transform duration-1000 scale-100"
        style={{
          backgroundImage: `url('https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/haarmonie_haus.webp')`,
        }}
      />

      {/* Sanfter Kontrast-Gradient für absolute Lesbarkeit */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 py-20 sm:py-28">
        <div className="max-w-2xl">
          
          {/* Weymann-Stil: Hochwertiges Glaselement mit edlem Frosting & Rahmen */}
          <div className="backdrop-blur-md bg-black/65 sm:bg-zinc-950/70 border border-white/20 p-8 sm:p-12 lg:p-14 rounded-none shadow-2xl text-left space-y-6">
            
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#C5A880] bg-[#C5A880]/15 border border-[#C5A880]/35 px-3 py-1 rounded-none">
                HAARMONIE &bull; Tradition &amp; Moderne
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-[1.2] tracking-tight">
              Wir freuen uns, Sie in unserem über 100 jährigen Haus zu begrüßen – <span className="text-zinc-300 font-normal">wo Tradition und Moderne aufeinander treffen.</span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-normal pt-1">
              Lassen Sie sich verwöhnen und genießen Sie bei uns Zeit nur für sich und ihr Wohlbefinden.
            </p>

            <div className="pt-2 flex items-center gap-2.5 text-xs text-zinc-300 font-medium uppercase tracking-wider border-t border-white/15 pt-5">
              <MapPin className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
              <span>Parkstraße 15 &bull; 31582 Nienburg/Weser</span>
            </div>

            {/* Aktionen: Termin & Anruf */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#termin"
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-zinc-100 text-black px-7 py-3.5 rounded-none font-bold text-xs uppercase tracking-widest transition-all shadow-md"
              >
                <Calendar className="w-4 h-4 text-black" />
                <span>Termin anfragen</span>
              </a>

              <a
                href={`tel:${SALON_DATA.phoneClean}`}
                className="inline-flex items-center justify-center gap-2.5 border border-white/40 hover:border-white text-white hover:bg-white/10 px-6 py-3.5 rounded-none font-semibold text-xs uppercase tracking-widest transition-all backdrop-blur-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{SALON_DATA.phone}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

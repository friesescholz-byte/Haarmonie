import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { SALON_DATA } from '../data/content';

export const TraditionStory: React.FC = () => {
  return (
    <section className="py-28 sm:py-40 bg-[#0A0A0C] text-white relative overflow-hidden" id="tradition">
      
      {/* 1. FIXED (Parallax) Background Image: Haarmonie02.webp softly shining through black */}
      <div
        className="absolute inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-40 filter contrast-[1.12] saturate-[0.9]"
        style={{
          backgroundImage: `url('https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Salon/Haarmonie02.webp')`,
        }}
      />

      {/* Atmospheric Dark Overlays to ensure 100% text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0C]/90 via-[#0A0A0C]/60 to-[#0A0A0C]/95 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#0A0A0C]/30 to-[#0A0A0C] pointer-events-none z-0" />

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center space-y-8">
        
        <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37] bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 px-4 py-1.5 rounded-full font-heading shadow-sm">
          100 Jahre Traditionshaus &bull; Parkstraße 15
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight max-w-4xl mx-auto">
          „Wir schneiden nicht einfach nur Haare. <br />
          <span className="font-italic-serif text-[#D4AF37] font-normal">
            Wir schenken Zeit &amp; Wohlbefinden.“
          </span>
        </h2>

        <p className="text-base sm:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed">
          In einer hektischen Welt bieten wir Ihnen einen geschützten Rückzugsort. Treten Sie ein in unser denkmalgeschütztes Traditionshaus, atmen Sie durch und genießen Sie ungeteilte meisterliche Aufmerksamkeit.
        </p>

        {/* Unified CTA Button with Call link underneath */}
        <div className="pt-6 space-y-4 max-w-md mx-auto">
          <div>
            <a
              href="#termin"
              className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0A0C] px-9 py-4 rounded-full font-bold text-base tracking-wide transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-0.5 group font-heading"
            >
              <Calendar className="w-5 h-5 text-[#0A0A0C] group-hover:rotate-6 transition-transform" />
              <span>Termin online anfragen</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
            <span>Oder direkt anrufen:</span>
            <a
              href={`tel:${SALON_DATA.phoneClean}`}
              className="font-bold text-[#D4AF37] hover:text-white transition-colors inline-flex items-center gap-1.5 underline decoration-[#D4AF37]/50 hover:decoration-white"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>{SALON_DATA.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

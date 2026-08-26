import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { SALON_DATA } from '../data/content';

export const TraditionStory: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#071B33] text-white relative overflow-hidden" id="tradition">
      
      {/* Background salon image with high-end dark luxury overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <img
          src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Salon/Haarmonie03.webp"
          alt="Altbau Salon Haarmonie"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071B33] via-[#071B33]/80 to-[#071B33]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center space-y-8">
        
        <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37] border border-[#D4AF37]/40 px-4 py-1.5 rounded-full font-heading">
          100 Jahre Traditionshaus &bull; Parkstraße 15
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight max-w-4xl mx-auto">
          „Wir schneiden nicht einfach nur Haare. <br />
          <span className="font-italic-serif text-[#D4AF37] font-normal">
            Wir schenken Zeit &amp; Wohlbefinden.“
          </span>
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          In einer hektischen Welt bieten wir Ihnen einen geschützten Rückzugsort. Treten Sie ein in unser denkmalgeschütztes Traditionshaus, atmen Sie durch und genießen Sie ungeteilte meisterliche Aufmerksamkeit.
        </p>

        {/* Unified CTA Button with Call link underneath */}
        <div className="pt-6 space-y-4 max-w-md mx-auto">
          <div>
            <a
              href="#termin"
              className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#E5C158] text-[#071B33] px-9 py-4 rounded-full font-bold text-base tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group font-heading"
            >
              <Calendar className="w-5 h-5 text-[#071B33] group-hover:rotate-6 transition-transform" />
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

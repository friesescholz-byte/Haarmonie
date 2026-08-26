import React from 'react';
import { TRANSFORMATIONS } from '../data/content';
import { Phone, Calendar, Sparkles } from 'lucide-react';
import { SALON_DATA } from '../data/content';

export const BeforeAfterShowcase: React.FC = () => {
  return (
    <section
      className="py-24 sm:py-32 bg-gradient-to-b from-white via-[#FAF5EC] to-[#FAF8F5] relative overflow-hidden border-t border-[#EAE6DF]/60"
      id="transformationen"
    >
      {/* Soft ambient warm radial glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C59A44]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#FAF3E0]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#C59A44] bg-[#FAF3E0] border border-[#C59A44]/30 px-3.5 py-1 rounded-full mb-3 font-heading">
            Vorher &amp; Nachher
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#071B33] leading-tight">
            Echte Ergebnisse aus dem Salon.
          </h2>
          <p className="text-base sm:text-lg text-[#556375] mt-3">
            Typgerechte Schnitte, leuchtende Nuancen und nachhaltige Pflanzenpflege im direkten Vergleich.
          </p>
        </div>

        {/* Transformation Cards Grid with Professional, Subtle Hover Interactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {TRANSFORMATIONS.map((item) => (
            <div
              key={item.id}
              className="group space-y-4 bg-white/90 backdrop-blur-xs p-5 sm:p-6 rounded-3xl border border-[#EAE6DF] shadow-sm hover:shadow-lux-lg hover:border-[#C59A44]/60 hover:-translate-y-1.5 transition-all duration-500 relative cursor-default"
            >
              
              {/* Image Pair Side by Side */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                
                {/* Before Image */}
                <div className="space-y-2">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#EAE6DF] relative">
                    <img
                      src={item.before}
                      alt={`${item.title} Vorher`}
                      className="w-full h-full object-cover object-center filter saturate-[0.95]"
                    />
                  </div>
                  <span className="block text-center text-xs font-semibold tracking-wider text-[#8C9AA8] uppercase">
                    Vorher
                  </span>
                </div>

                {/* After Image with Subtle Zoom Hover */}
                <div className="space-y-2">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#C59A44]/50 shadow-md relative">
                    <img
                      src={item.after}
                      alt={`${item.title} Nachher`}
                      className="w-full h-full object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                    {/* Subtle Gold Shimmer Corner on Hover */}
                    <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37] block shadow-xs" />
                    </div>
                  </div>
                  <span className="block text-center text-xs font-bold tracking-wider text-[#071B33] uppercase group-hover:text-[#C59A44] transition-colors">
                    Nachher
                  </span>
                </div>

              </div>

              {/* Precise Text Below with subtle hover accent */}
              <div className="pt-2">
                <h3 className="font-heading font-bold text-xl text-[#071B33] group-hover:text-[#071B33] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#556375] mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Consultation CTA matching the Hero style */}
        <div className="mt-16 text-center pt-10 border-t border-[#EAE6DF]/80 space-y-4 max-w-xl mx-auto">
          <p className="text-base sm:text-lg text-[#2D3748] font-medium">
            Wünschen auch Sie eine typgerechte Farb- oder Schnittveränderung?
          </p>
          
          <div>
            <a
              href="#termin"
              className="inline-flex items-center justify-center gap-3 bg-[#071B33] hover:bg-[#102A4C] text-white px-9 py-4 rounded-full font-bold text-base tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group font-heading"
            >
              <Calendar className="w-5 h-5 text-[#D4AF37] group-hover:rotate-6 transition-transform" />
              <span>Termin online anfragen</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-[#4A5568]">
            <span>Oder direkt im Salon anrufen:</span>
            <a
              href={`tel:${SALON_DATA.phoneClean}`}
              className="font-bold text-[#071B33] hover:text-[#C59A44] transition-colors inline-flex items-center gap-1.5 underline decoration-[#C59A44]/50 hover:decoration-[#C59A44]"
            >
              <Phone className="w-4 h-4 text-[#C59A44]" />
              <span>{SALON_DATA.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

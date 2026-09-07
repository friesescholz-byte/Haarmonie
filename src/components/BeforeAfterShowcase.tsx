import React from 'react';
import { TRANSFORMATIONS, SALON_DATA } from '../data/content';
import { Phone, Calendar } from 'lucide-react';

export const BeforeAfterShowcase: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-zinc-50/50 border-t border-zinc-200" id="transformationen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Title */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-zinc-600 bg-white border border-zinc-200 px-3.5 py-1 rounded-full mb-3 shadow-xs">
            Vorher &amp; Nachher
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-black leading-tight">
            Echte Ergebnisse aus dem Salon.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 mt-3 font-normal">
            Typgerechte Schnitte, leuchtende Nuancen und nachhaltige Pflanzenpflege im direkten Vergleich.
          </p>
        </div>

        {/* Transformation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {TRANSFORMATIONS.map((item) => (
            <div
              key={item.id}
              className="group space-y-4 bg-white p-5 sm:p-6 rounded-3xl border border-zinc-200 shadow-clean hover:shadow-clean-lg hover:border-black transition-all duration-300 cursor-default"
            >
              
              {/* Image Pair Side by Side */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                
                {/* Before Image */}
                <div className="space-y-2">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 relative">
                    <img
                      src={item.before}
                      alt={`${item.title} Vorher`}
                      className="w-full h-full object-cover object-center filter saturate-90"
                    />
                  </div>
                  <span className="block text-center text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                    Vorher
                  </span>
                </div>

                {/* After Image */}
                <div className="space-y-2">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-300 shadow-xs relative">
                    <img
                      src={item.after}
                      alt={`${item.title} Nachher`}
                      className="w-full h-full object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                  </div>
                  <span className="block text-center text-xs font-bold tracking-wider text-black uppercase">
                    Nachher
                  </span>
                </div>

              </div>

              {/* Text Below */}
              <div className="pt-2">
                <h3 className="font-heading font-bold text-xl text-black">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 mt-1 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Consultation CTA */}
        <div className="mt-16 text-center pt-10 border-t border-zinc-200 space-y-4 max-w-xl mx-auto">
          <p className="text-base sm:text-lg text-zinc-800 font-medium">
            Wünschen auch Sie eine typgerechte Farb- oder Schnittveränderung?
          </p>
          
          <div>
            <a
              href="#termin"
              className="inline-flex items-center justify-center gap-3 bg-black hover:bg-zinc-800 text-white px-9 py-4 rounded-full font-semibold text-base tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              <span>Termin online anfragen</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-zinc-600">
            <span>Oder direkt im Salon anrufen:</span>
            <a
              href={`tel:${SALON_DATA.phoneClean}`}
              className="font-bold text-black hover:text-zinc-600 transition-colors inline-flex items-center gap-1.5 underline decoration-zinc-300 hover:decoration-black"
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

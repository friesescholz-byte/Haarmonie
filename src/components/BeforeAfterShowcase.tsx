import React from 'react';
import { TRANSFORMATIONS } from '../data/content';
import { Phone, Calendar } from 'lucide-react';
import { SALON_DATA } from '../data/content';

export const BeforeAfterShowcase: React.FC = () => {
  return (
    <section
      className="pt-20 pb-24 sm:pt-28 sm:pb-32 bg-[#1C1E24] text-white relative"
      id="transformationen"
    >
      {/* 1. Designer Organic Curved Transition from White into #1C1E24 */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none -translate-y-[98%]">
        <svg
          className="relative block w-full h-16 sm:h-24 lg:h-28"
          viewBox="0 0 1440 90"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Main Dark Graphite Wave Fill */}
          <path
            d="M0,50 C360,10 720,80 1080,25 C1240,5 1360,40 1440,50 L1440,90 L0,90 Z"
            fill="#1C1E24"
          />

          {/* Primary Golden Wave Stroke */}
          <path
            d="M0,50 C360,10 720,80 1080,25 C1240,5 1360,40 1440,50"
            stroke="url(#curveGold)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Secondary Soft Golden Strand */}
          <path
            d="M0,35 C280,5 640,65 980,15 C1160, -5 1320,30 1440,38"
            stroke="#DFBE72"
            strokeWidth="0.9"
            strokeOpacity="0.5"
            strokeDasharray="5 3"
          />

          <defs>
            <linearGradient id="curveGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C59A44" stopOpacity="0.2" />
              <stop offset="30%" stopColor="#D4AF37" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#F5D77F" stopOpacity="1" />
              <stop offset="100%" stopColor="#C59A44" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Subtle warm ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#C59A44]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37] bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 px-4 py-1.5 rounded-full mb-3 font-heading shadow-sm">
            Vorher &amp; Nachher
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
            Echte Ergebnisse aus dem Salon.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-3 font-normal">
            Typgerechte Schnitte, leuchtende Nuancen und nachhaltige Pflanzenpflege im direkten Vergleich.
          </p>
        </div>

        {/* Transformation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {TRANSFORMATIONS.map((item) => (
            <div
              key={item.id}
              className="group space-y-4 bg-[#262830] p-5 sm:p-6 rounded-3xl border border-white/10 shadow-xl hover:border-[#D4AF37]/60 hover:-translate-y-1.5 transition-all duration-500 relative cursor-default"
            >
              
              {/* Image Pair Side by Side */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                
                {/* Before Image */}
                <div className="space-y-2">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-black/40 border border-white/10 relative">
                    <img
                      src={item.before}
                      alt={`${item.title} Vorher`}
                      className="w-full h-full object-cover object-center opacity-90"
                    />
                  </div>
                  <span className="block text-center text-xs font-semibold tracking-wider text-slate-400 uppercase">
                    Vorher
                  </span>
                </div>

                {/* After Image with Subtle Zoom Hover */}
                <div className="space-y-2">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-black/40 border border-[#D4AF37]/60 shadow-lg relative">
                    <img
                      src={item.after}
                      alt={`${item.title} Nachher`}
                      className="w-full h-full object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37] block shadow-sm" />
                    </div>
                  </div>
                  <span className="block text-center text-xs font-bold tracking-wider text-[#D4AF37] uppercase">
                    Nachher
                  </span>
                </div>

              </div>

              {/* Text Below */}
              <div className="pt-2">
                <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 mt-1 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Consultation CTA */}
        <div className="mt-16 text-center pt-10 border-t border-white/10 space-y-4 max-w-xl mx-auto">
          <p className="text-base sm:text-lg text-slate-200 font-medium">
            Wünschen auch Sie eine typgerechte Farb- oder Schnittveränderung?
          </p>
          
          <div>
            <a
              href="#termin"
              className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0A0C] px-9 py-4 rounded-full font-bold text-base tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group font-heading"
            >
              <Calendar className="w-5 h-5 text-[#0A0A0C] group-hover:rotate-6 transition-transform" />
              <span>Termin online anfragen</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
            <span>Oder direkt im Salon anrufen:</span>
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

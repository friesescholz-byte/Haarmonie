import React from 'react';
import { FESTIVE_STYLES } from '../data/content';
import { SALON_DATA } from '../data/content';
import { Calendar, Phone } from 'lucide-react';

export const FestiveGallery: React.FC = () => {
  return (
    <section
      className="py-24 sm:py-32 bg-[#1C1E24] text-white relative overflow-hidden"
      id="festfrisuren"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C59A44]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37] bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 px-4 py-1.5 rounded-full mb-3 font-heading shadow-sm">
            Hochzeit &amp; Besondere Anlässe
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
            Festliche Hochsteckkunst.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-3 font-normal">
            Handwerkliche Steckfrisuren und Brautstylings, die den gesamten Festtag zuverlässig, sicher und mühelos halten.
          </p>
        </div>

        {/* 3 Large Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {FESTIVE_STYLES.map((item) => (
            <div
              key={item.id}
              className="group space-y-4 bg-[#262830] p-5 rounded-3xl border border-white/10 shadow-xl hover:shadow-lux-lg hover:border-[#D4AF37]/60 hover:-translate-y-1.5 transition-all duration-500 cursor-default"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-black/40 relative border border-white/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
              <div className="pt-1">
                <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 mt-1.5 leading-relaxed font-normal">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Unified CTA Section */}
        <div className="mt-16 text-center pt-10 border-t border-white/10 space-y-4 max-w-xl mx-auto">
          <p className="text-base sm:text-lg text-slate-200 font-medium">
            Planen Sie eine Hochzeit oder einen besonderen Festanlass?
          </p>

          <div>
            <a
              href="#termin"
              className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0A0C] px-9 py-4 rounded-full font-bold text-base tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group font-heading"
            >
              <Calendar className="w-5 h-5 text-[#0A0A0C] group-hover:rotate-6 transition-transform" />
              <span>Festfrisur-Termin online anfragen</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
            <span>Oder telefonisch beraten lassen:</span>
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

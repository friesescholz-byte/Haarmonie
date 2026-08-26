import React from 'react';
import { FESTIVE_STYLES } from '../data/content';
import { SALON_DATA } from '../data/content';
import { Calendar, Phone } from 'lucide-react';

export const FestiveGallery: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden" id="festfrisuren">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#C59A44] bg-[#FAF3E0] border border-[#C59A44]/30 px-3.5 py-1 rounded-full mb-3 font-heading">
            Hochzeit &amp; Besondere Anlässe
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#071B33] leading-tight">
            Festliche Hochsteckkunst.
          </h2>
          <p className="text-base sm:text-lg text-[#556375] mt-3">
            Handwerkliche Steckfrisuren und Brautstylings, die den gesamten Festtag zuverlässig, sicher und mühelos halten.
          </p>
        </div>

        {/* 3 Large Image Cards with subtle, elegant hover interactions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {FESTIVE_STYLES.map((item) => (
            <div
              key={item.id}
              className="group space-y-4 bg-white p-5 rounded-3xl border border-[#EAE6DF] shadow-sm hover:shadow-lux-lg hover:border-[#C59A44]/50 hover:-translate-y-1.5 transition-all duration-500 cursor-default"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF8F5] relative border border-[#EAE6DF]/60">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
              <div className="pt-1">
                <h3 className="font-heading font-bold text-xl text-[#071B33] group-hover:text-[#C59A44] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#556375] mt-1.5 leading-relaxed">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Unified CTA Section (Smooth Scroll to Contact Form) */}
        <div className="mt-16 text-center pt-10 border-t border-[#EAE6DF]/80 space-y-4 max-w-xl mx-auto">
          <p className="text-base sm:text-lg text-[#2D3748] font-medium">
            Planen Sie eine Hochzeit oder einen besonderen Festanlass?
          </p>

          <div>
            <a
              href="#termin"
              className="inline-flex items-center justify-center gap-3 bg-[#071B33] hover:bg-[#102A4C] text-white px-9 py-4 rounded-full font-bold text-base tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group font-heading"
            >
              <Calendar className="w-5 h-5 text-[#D4AF37] group-hover:rotate-6 transition-transform" />
              <span>Festfrisur-Termin online anfragen</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-[#4A5568]">
            <span>Oder telefonisch beraten lassen:</span>
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

      {/* Subtle & Elegant Divider into the Next Section (Decent & Fine) */}
      <div className="relative w-full pt-16 pb-2 pointer-events-none">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-center gap-4">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#C59A44]/40 to-[#C59A44]" />
          <div className="w-2 h-2 rounded-full border border-[#C59A44] bg-[#FAF8F5]" />
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#C59A44]/40 to-[#C59A44]" />
        </div>
      </div>

    </section>
  );
};

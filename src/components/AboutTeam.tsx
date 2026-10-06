import React, { useState } from 'react';
import { Calendar, Phone, X } from 'lucide-react';
import { SALON_DATA, PARTNER_BRANDS, PartnerBrand } from '../data/content';

// Optisch perfekt balancierte Logogrößen für die Partner
const LOGO_CONFIG: Record<string, { imgClass: string }> = {
  'Aveda': { imgClass: 'h-8 sm:h-11 max-w-[150px]' },
  'SIMPLIE': { imgClass: 'h-7 sm:h-10 max-w-[140px]' },
  'Nailberry': { imgClass: 'h-9 sm:h-12 max-w-[130px]' },
  'Hair Help the Oceans': { imgClass: 'h-10 sm:h-14 max-w-[120px]' },
  'Intercoiffure Mondial': { imgClass: 'h-10 sm:h-14 max-w-[120px]' }
};

export const AboutTeam: React.FC = () => {
  const [selectedPartner, setSelectedPartner] = useState<PartnerBrand | null>(null);

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white relative overflow-hidden" id="ueber-uns">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-14 sm:space-y-20 lg:space-y-24 relative z-10">
        
        {/* 1. Header, Text & Großes Team-Foto untereinander nach Kundenwunsch */}
        <div className="space-y-8 sm:space-y-12">
          <div className="max-w-4xl space-y-5 sm:space-y-6 text-left">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-black leading-[1.2] sm:leading-[1.18] tracking-tight">
              Bei uns empfängt Sie ein erfahrenes Team rund um Friseurmeister und Gründer Matthias Zahn.
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-zinc-600 leading-relaxed font-normal">
              <p>
                Wir bieten Individualität, Innovation und Qualität auf zeitgemäßem Niveau im Friseurhandwerk.
              </p>
              <p className="text-zinc-700 bg-stone-50 border-l-2 border-[#2F5E3D] p-3.5 sm:p-4 text-xs sm:text-base leading-relaxed">
                Umweltschutz und Nachhaltigkeit sind uns dabei sehr wichtig, dies kommt auch durch die Auswahl unserer Partner zum Ausdruck.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
              <a
                href="#termin"
                className="inline-flex items-center justify-center gap-2.5 bg-black hover:bg-zinc-800 text-white px-8 py-3.5 rounded-none text-xs font-bold uppercase tracking-widest transition-all border border-black shadow-xs w-full sm:w-auto text-center"
              >
                <Calendar className="w-4 h-4" />
                <span>Termin vereinbaren</span>
              </a>

              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-600">
                <span>Rufen Sie an:</span>
                <a
                  href={`tel:${SALON_DATA.phoneClean}`}
                  className="font-bold text-black hover:text-[#2F5E3D] transition-colors inline-flex items-center gap-1.5 underline decoration-zinc-300 hover:decoration-[#2F5E3D]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#2F5E3D]" />
                  <span>{SALON_DATA.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Großes Team-Foto als Platzhalter über die volle Breite (100% clean, ohne Text oder Tags) */}
          <div className="w-full">
            <div className="w-full aspect-[16/10] sm:aspect-[16/8] lg:aspect-[21/9] max-h-[620px] bg-zinc-100 overflow-hidden border border-zinc-200 shadow-sm relative group">
              <img
                src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Salon/Haarmonie02.webp"
                alt="Salon Haarmonie Team"
                className="w-full h-full object-cover object-center group-hover:scale-101 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* 2. Partner-Präsentation mit interaktivem Lightbox-Modal */}
        <div className="pt-8 sm:pt-10 border-t border-zinc-200">
          <div className="mb-6 sm:mb-8 text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2F5E3D]">
              Geprüfte Qualität &amp; Nachhaltigkeit
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-black mt-1">
              Unsere ausgewählten Partner
            </h3>
          </div>

          {/* 5 Partner-Cards: Responsive Grid mit optimiertem 5. Element auf Mobile */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-6">
            {PARTNER_BRANDS.map((partner, idx) => {
              const config = LOGO_CONFIG[partner.name] || { imgClass: 'h-10 max-w-[140px]' };
              const isLastOnMobile = idx === PARTNER_BRANDS.length - 1;
              return (
                <button
                  key={partner.name}
                  type="button"
                  onClick={() => setSelectedPartner(partner)}
                  className={`group bg-stone-50 hover:bg-white border border-zinc-200 hover:border-zinc-900 p-4 sm:p-6 flex flex-col items-center justify-center gap-3 sm:gap-4 transition-all duration-300 rounded-none cursor-pointer text-center hover:shadow-md ${
                    isLastOnMobile ? 'col-span-2 md:col-span-1 max-w-xs mx-auto w-full md:max-w-none' : ''
                  }`}
                >
                  <div className="h-12 sm:h-16 w-full flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      className={`${config.imgClass} w-auto object-contain transition-all duration-300 group-hover:scale-105`}
                    />
                  </div>
                  <div className="pt-2 border-t border-zinc-200/80 w-full">
                    <span className="block text-[11px] font-bold text-black uppercase tracking-wider group-hover:text-[#2F5E3D] transition-colors">
                      {partner.name}
                    </span>
                    <span className="text-[10px] text-zinc-500 line-clamp-1 mt-0.5">
                      {partner.category}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Partner Lightbox Modal - Mobil mit max-height Scroll & leichtem Schließen */}
      {selectedPartner && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedPartner(null)}
        >
          <div
            className="bg-white max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 border border-zinc-300 rounded-none relative shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - 44px Touch Target */}
            <button
              type="button"
              onClick={() => setSelectedPartner(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-11 h-11 flex items-center justify-center text-zinc-500 hover:text-black hover:bg-zinc-100 transition-colors rounded-none cursor-pointer"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header with Large Logo */}
            <div className="mb-6 pb-6 border-b border-zinc-100 flex items-center justify-center min-h-[90px] sm:min-h-[100px] bg-stone-50/70 p-4 border">
              <img
                src={selectedPartner.logo}
                alt={`${selectedPartner.name} Logo`}
                className="max-h-14 sm:max-h-20 max-w-[220px] sm:max-w-[240px] w-auto object-contain"
              />
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-xl sm:text-2xl font-heading font-bold text-black">
                {selectedPartner.name}
              </h4>

              <p className="text-sm font-semibold text-zinc-800 italic">
                „{selectedPartner.tagline}“
              </p>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal pt-1">
                {selectedPartner.description}
              </p>
            </div>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-zinc-100 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedPartner(null)}
                className="w-full sm:w-auto bg-black hover:bg-zinc-800 text-white px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-none transition-colors cursor-pointer text-center"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

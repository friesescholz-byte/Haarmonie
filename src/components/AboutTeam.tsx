import React from 'react';
import { SALON_DATA } from '../data/content';
import { CheckCircle2, Calendar } from 'lucide-react';

export const AboutTeam: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden" id="ueber-uns">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Prominent, Large Salon/Team Image (6 cols) */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-[#FAF8F5] aspect-[4/3] sm:aspect-[16/12] lg:aspect-[5/4] border border-[#EAE6DF] group relative">
              <img
                src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Salon/Haarmonie02.webp"
                alt="Salon Haarmonie Matthias Zahn Nienburg"
                className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Right Column: Generous, High-End Copy (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-3">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#C59A44] bg-[#FAF3E0] border border-[#C59A44]/30 px-3.5 py-1 rounded-full font-heading">
                Über uns &bull; Matthias Zahn &amp; Team
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-heading font-bold text-[#071B33] leading-[1.15]">
                „Wir nehmen uns echte Zeit für Sie und Ihr Haar.“
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed font-normal">
              Bei Haarmonie empfängt Sie ein eingespieltes, herzliches Team rund um Friseurmeister Matthias Zahn. Wir glauben daran, dass ein gelungener Friseurbesuch auf <strong>Zuhören, ehrlicher Typberatung und handwerklicher Perfektion</strong> beruht – ohne Hektik und ohne wechselnde Gesichter.
            </p>

            {/* 3 Core Trust Pillars */}
            <div className="space-y-4 pt-1">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C59A44] flex-shrink-0 mt-0.5" />
                <span className="text-base text-[#2D3748]">
                  <strong>Feste Vertrauenspersonen:</strong> Kontinuität und persönlicher Bezug statt ständiger Personalwechsel.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C59A44] flex-shrink-0 mt-0.5" />
                <span className="text-base text-[#2D3748]">
                  <strong>Individuelle Typ-Diagnostik:</strong> Schnitte und Nuancen, die zu Ihrer Gesichtsform und Ihrem Alltag passen.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C59A44] flex-shrink-0 mt-0.5" />
                <span className="text-base text-[#2D3748]">
                  <strong>100% Aveda Wohlfühl-Erlebnis:</strong> Reine Pflanzenpflege und aromatische Sinnesrituale bei jedem Besuch.
                </span>
              </div>
            </div>

            {/* Micro Call to Action */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="#termin"
                className="inline-flex items-center gap-2 bg-[#071B33] hover:bg-[#102A4C] text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Termin vereinbaren</span>
              </a>
              <span className="text-xs text-[#718096]">
                Parkstraße 15, 31582 Nienburg
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

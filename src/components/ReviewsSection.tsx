import React from 'react';
import { REVIEWS, SALON_DATA } from '../data/content';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5]" id="bewertungen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-[#C59A44] font-bold text-xs uppercase tracking-widest bg-[#FAF3E0] px-3 py-1 rounded-full mb-3">
            Echtes Kundenfeedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A0A0C] tracking-tight">
            Was Nienburg über Haarmonie sagt
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex text-[#D4AF37]">
              {'★'.repeat(5)}
            </div>
            <span className="text-sm font-bold text-[#0A0A0C]">
              {SALON_DATA.googleRating} von 5.0 Sternen auf Google
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8E2D8] rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lux transition-all duration-300 flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-[#D4AF37]/30 absolute top-5 right-5" />

              <div>
                <div className="flex text-[#D4AF37] text-sm mb-3">
                  {'★'.repeat(rev.stars)}
                </div>
                <span className="inline-block bg-[#FAF3E0] text-[#0A0A0C] text-[11px] font-bold px-2.5 py-0.5 rounded mb-3">
                  {rev.highlight}
                </span>
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  „{rev.text}“
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8E2D8] flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#0A0A0C] block">{rev.name}</span>
                  <span className="text-slate-500">{rev.city}</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-600 font-semibold text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verifiziert</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

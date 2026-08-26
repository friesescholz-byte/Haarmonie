import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FAF8F5]" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#C59A44] font-bold text-xs uppercase tracking-widest bg-[#FAF3E0] px-3 py-1 rounded-full mb-3">
            Häufige Fragen
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#071B33] tracking-tight">
            Transparenz & Wissenswertes
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Häufig gestellte Fragen rund um Ihren Besuch bei Haarmonie Matthias Zahn.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E8E2D8] rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-[#FAF8F5] transition-colors"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#071B33]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C59A44] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

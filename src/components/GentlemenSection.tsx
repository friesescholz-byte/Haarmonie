import React from 'react';
import { HERREN_STYLES } from '../data/content';
import { Scissors, ShieldCheck, Clock, CheckCircle } from 'lucide-react';

export const GentlemenSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0A0A0C] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#222226] border border-[#D4AF37]/40 px-3.5 py-1.5 rounded-full text-[#D4AF37] text-xs font-semibold">
              <Scissors className="w-4 h-4" />
              <span>Gentlemen's Cut & Care</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
              Klassisches Meisterhandwerk für den anspruchsvollen Mann.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Kein Hipster-Barbershop-Lärm, keine Hektik: Bei uns genießen Sie handwerkliche Präzision, diskrete Beratung und eine ruhige Atmosphäre, in der Sie sich entspannt zurücklehnen können.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200">Präziser Haarschnitt mit Schere & Maschine</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200">Exakte Bartkonturierung & Pflege</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200">Belebende Kopfhautmassage mit Aveda Men</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="tel:+495021913508"
                className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#C59A44] text-[#0A0A0C] font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow hover:scale-105"
              >
                <span>Herren-Termin vereinbaren</span>
              </a>
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {HERREN_STYLES.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#222226]/80 border border-[#D4AF37]/30 rounded-2xl overflow-hidden shadow-lux group flex flex-col justify-between"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-serif font-bold text-sm text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

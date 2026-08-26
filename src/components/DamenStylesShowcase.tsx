import React, { useState } from 'react';
import { DAMEN_GALLERY, HERREN_GALLERY, SALON_DATA } from '../data/content';
import { ChevronLeft, ChevronRight, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const DamenStylesShowcase: React.FC = () => {
  // Damen Slider State (4 items per page)
  const [damenPage, setDamenPage] = useState(0);
  const itemsPerPage = 4;
  const totalDamenPages = Math.ceil(DAMEN_GALLERY.length / itemsPerPage);

  const currentDamenItems = DAMEN_GALLERY.slice(
    damenPage * itemsPerPage,
    (damenPage + 1) * itemsPerPage
  );

  // Herren Slider State (4 items per page)
  const [herrenPage, setHerrenPage] = useState(0);
  const totalHerrenPages = Math.ceil(HERREN_GALLERY.length / itemsPerPage);

  const currentHerrenItems = HERREN_GALLERY.slice(
    herrenPage * itemsPerPage,
    (herrenPage + 1) * itemsPerPage
  );

  const nextDamen = () => {
    setDamenPage((prev) => (prev + 1) % totalDamenPages);
  };

  const prevDamen = () => {
    setDamenPage((prev) => (prev - 1 + totalDamenPages) % totalDamenPages);
  };

  const nextHerren = () => {
    setHerrenPage((prev) => (prev + 1) % totalHerrenPages);
  };

  const prevHerren = () => {
    setHerrenPage((prev) => (prev - 1 + totalHerrenPages) % totalHerrenPages);
  };

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden" id="frisuren">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
        
        {/* ================= PART 1: DAMEN SLIDER GALLERY ================= */}
        <div>
          {/* Section Header with Arrows */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#C59A44] bg-[#FAF3E0] border border-[#C59A44]/30 px-3.5 py-1 rounded-full mb-3 font-heading">
                Damen-Schnitt &amp; Coloration
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#071B33]">
                Individuelle Haarschnitte &amp; Glanz.
              </h2>
            </div>

            {/* Navigation Arrows & Page Indicator */}
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <span className="text-xs font-semibold text-[#718096] mr-2">
                Seite {damenPage + 1} / {totalDamenPages}
              </span>
              
              <button
                onClick={prevDamen}
                className="w-11 h-11 rounded-full border border-[#EAE6DF] hover:border-[#C59A44] bg-[#FAF8F5] hover:bg-[#071B33] text-[#071B33] hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs hover:shadow-md"
                aria-label="Vorherige 4 Damen-Frisuren"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextDamen}
                className="w-11 h-11 rounded-full border border-[#EAE6DF] hover:border-[#C59A44] bg-[#FAF8F5] hover:bg-[#071B33] text-[#071B33] hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs hover:shadow-md"
                aria-label="Nächste 4 Damen-Frisuren"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 4-Item Grid with Smooth Fade/Slide Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={damenPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
            >
              {currentDamenItems.map((style) => (
                <div
                  key={style.id}
                  className="group space-y-3 bg-[#FAF8F5] p-3.5 sm:p-4 rounded-3xl border border-[#EAE6DF] shadow-xs hover:shadow-lux hover:border-[#C59A44]/50 hover:-translate-y-1.5 transition-all duration-500 cursor-default"
                >
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-xs relative border border-[#EAE6DF]/60">
                    <img
                      src={style.image}
                      alt={style.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="px-1 pt-1">
                    <h4 className="font-heading font-bold text-base text-[#071B33] group-hover:text-[#C59A44] transition-colors leading-snug">
                      {style.title}
                    </h4>
                    <p className="text-xs text-[#556375] mt-1 leading-relaxed">
                      {style.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================= PART 2: HERREN SLIDER GALLERY ================= */}
        <div className="pt-16 border-t border-[#EAE6DF]">
          {/* Section Header with Arrows */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#C59A44] bg-[#FAF3E0] border border-[#C59A44]/30 px-3.5 py-1 rounded-full mb-3 font-heading">
                Herren-Bereich
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#071B33]">
                Präzises Handwerk für den Mann.
              </h2>
              <p className="text-base text-[#556375] mt-2">
                Ruhige Atmosphäre, exakte Haarschnitte mit Schere &amp; Maschine sowie diskrete Bartpflege.
              </p>
            </div>

            {/* Navigation Arrows & Page Indicator */}
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <span className="text-xs font-semibold text-[#718096] mr-2">
                Seite {herrenPage + 1} / {totalHerrenPages}
              </span>
              
              <button
                onClick={prevHerren}
                className="w-11 h-11 rounded-full border border-[#EAE6DF] hover:border-[#C59A44] bg-[#FAF8F5] hover:bg-[#071B33] text-[#071B33] hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs hover:shadow-md"
                aria-label="Vorherige 4 Herren-Frisuren"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextHerren}
                className="w-11 h-11 rounded-full border border-[#EAE6DF] hover:border-[#C59A44] bg-[#FAF8F5] hover:bg-[#071B33] text-[#071B33] hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs hover:shadow-md"
                aria-label="Nächste 4 Herren-Frisuren"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 4-Item Grid with Smooth Fade/Slide Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={herrenPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
            >
              {currentHerrenItems.map((style) => (
                <div
                  key={style.id}
                  className="group space-y-3 bg-[#FAF8F5] p-3.5 sm:p-4 rounded-3xl border border-[#EAE6DF] shadow-xs hover:shadow-lux hover:border-[#C59A44]/50 hover:-translate-y-1.5 transition-all duration-500 cursor-default"
                >
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-xs relative border border-[#EAE6DF]/60">
                    <img
                      src={style.image}
                      alt={style.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="px-1 pt-1">
                    <h4 className="font-heading font-bold text-base text-[#071B33] group-hover:text-[#C59A44] transition-colors leading-snug">
                      {style.title}
                    </h4>
                    <p className="text-xs text-[#556375] mt-1 leading-relaxed">
                      {style.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

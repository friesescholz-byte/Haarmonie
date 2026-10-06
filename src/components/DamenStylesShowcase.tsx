import React, { useState, useEffect } from 'react';
import { GalleryItem } from '../data/content';
import { getDamenStyles, getHerrenStyles } from '../data/styleStore';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const DamenStylesShowcase: React.FC = () => {
  const [damenStyles, setDamenStyles] = useState<GalleryItem[]>([]);
  const [herrenStyles, setHerrenStyles] = useState<GalleryItem[]>([]);

  const loadStyles = () => {
    setDamenStyles(getDamenStyles());
    setHerrenStyles(getHerrenStyles());
  };

  useEffect(() => {
    loadStyles();
    window.addEventListener('haarmonie_styles_updated', loadStyles);
    return () => window.removeEventListener('haarmonie_styles_updated', loadStyles);
  }, []);

  const [damenPage, setDamenPage] = useState(0);
  const itemsPerPage = 4;
  const totalDamenPages = Math.max(1, Math.ceil(damenStyles.length / itemsPerPage));

  const currentDamenItems = damenStyles.slice(
    damenPage * itemsPerPage,
    (damenPage + 1) * itemsPerPage
  );

  const [herrenPage, setHerrenPage] = useState(0);
  const totalHerrenPages = Math.max(1, Math.ceil(herrenStyles.length / itemsPerPage));

  const currentHerrenItems = herrenStyles.slice(
    herrenPage * itemsPerPage,
    (herrenPage + 1) * itemsPerPage
  );

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-zinc-200" id="frisuren">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24 relative z-10">
        
        {/* Damen Slider */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="w-full overflow-hidden relative">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#2F5E3D] bg-[#2F5E3D]/10 border border-[#2F5E3D]/30 px-3.5 py-1 rounded-none mb-3 relative z-10">
                Damen-Schnitt &amp; Coloration
              </span>
              {/* Headline strikt in einer Zeile */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-heading font-bold text-black whitespace-nowrap tracking-tight relative z-10">
                Individuelle Haarschnitte &amp; Glanz.
              </h2>
              <p className="text-base text-zinc-600 mt-2 font-normal relative z-10">
                Typgerechte Schnittkunst, brillante Farbnuancen und revitalisierende Pflanzenpflege für natürlich fallendes Haar.
              </p>
            </div>

            {/* Eckige Pfeil-Buttons */}
            <div className="flex items-center gap-2 self-start md:self-auto flex-shrink-0">
              <span className="text-xs font-semibold text-zinc-500 mr-2 whitespace-nowrap uppercase tracking-wider">
                Seite {damenPage + 1} / {totalDamenPages}
              </span>
              
              <button
                onClick={() => setDamenPage((prev) => (prev - 1 + totalDamenPages) % totalDamenPages)}
                className="w-10 h-10 rounded-none border border-zinc-300 hover:border-black bg-white hover:bg-black text-black hover:text-white flex items-center justify-center transition-all shadow-xs"
                aria-label="Vorherige Damen-Frisuren"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setDamenPage((prev) => (prev + 1) % totalDamenPages)}
                className="w-10 h-10 rounded-none border border-zinc-300 hover:border-black bg-white hover:bg-black text-black hover:text-white flex items-center justify-center transition-all shadow-xs"
                aria-label="Nächste Damen-Frisuren"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={damenPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
            >
              {currentDamenItems.map((style) => (
                <div
                  key={style.id}
                  className="group space-y-3 bg-zinc-50/70 p-3 sm:p-4 rounded-none border border-zinc-200 hover:border-black transition-all duration-300 cursor-default"
                >
                  <div className="aspect-[3/4] rounded-none overflow-hidden bg-white shadow-xs relative border border-zinc-200">
                    <img
                      src={style.image}
                      alt={style.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-500 ease-out rounded-none"
                    />
                  </div>
                  <div className="px-1 pt-1">
                    <h4 className="font-heading font-bold text-base text-black leading-snug">
                      {style.title}
                    </h4>
                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                      {style.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Herren Slider */}
        <div className="pt-16 border-t border-zinc-200 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="w-full overflow-hidden relative">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#2F5E3D] bg-[#2F5E3D]/10 border border-[#2F5E3D]/30 px-3.5 py-1 rounded-none mb-3 relative z-10">
                Herren-Bereich
              </span>
              {/* Headline strikt in einer Zeile */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-heading font-bold text-black whitespace-nowrap tracking-tight relative z-10">
                Präzises Handwerk für den Mann.
              </h2>
              <p className="text-base text-zinc-600 mt-2 font-normal relative z-10">
                Ruhige Atmosphäre, exakte Schnitte mit Schere &amp; Maschine sowie gepflegte Bartkonturen.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto flex-shrink-0">
              <span className="text-xs font-semibold text-zinc-500 mr-2 whitespace-nowrap uppercase tracking-wider">
                Seite {herrenPage + 1} / {totalHerrenPages}
              </span>
              
              <button
                onClick={() => setHerrenPage((prev) => (prev - 1 + totalHerrenPages) % totalHerrenPages)}
                className="w-10 h-10 rounded-none border border-zinc-300 hover:border-black bg-white hover:bg-black text-black hover:text-white flex items-center justify-center transition-all shadow-xs"
                aria-label="Vorherige Herren-Frisuren"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setHerrenPage((prev) => (prev + 1) % totalHerrenPages)}
                className="w-10 h-10 rounded-none border border-zinc-300 hover:border-black bg-white hover:bg-black text-black hover:text-white flex items-center justify-center transition-all shadow-xs"
                aria-label="Nächste Herren-Frisuren"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={herrenPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
            >
              {currentHerrenItems.map((style) => (
                <div
                  key={style.id}
                  className="group space-y-3 bg-zinc-50/70 p-3 sm:p-4 rounded-none border border-zinc-200 hover:border-black transition-all duration-300 cursor-default"
                >
                  <div className="aspect-[3/4] rounded-none overflow-hidden bg-white shadow-xs relative border border-zinc-200">
                    <img
                      src={style.image}
                      alt={style.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-500 ease-out rounded-none"
                    />
                  </div>
                  <div className="px-1 pt-1">
                    <h4 className="font-heading font-bold text-base text-black leading-snug">
                      {style.title}
                    </h4>
                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
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

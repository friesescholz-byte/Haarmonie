import React, { useState, useEffect } from 'react';
import { Phone, Calendar, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SALON_DATA } from '../data/content';

const HERO_IMAGES = [
  {
    id: 1,
    url: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image06.webp",
    alt: "Haarmonie Schnitt & Coloration"
  },
  {
    id: 2,
    url: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image12.webp",
    alt: "Dimensionales Blond & Schnitt"
  },
  {
    id: 3,
    url: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image13.webp",
    alt: "Warmes Kupfer-Gold Styling"
  }
];

export const Hero: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const largeImage = HERO_IMAGES[activeIdx];
  const smallImage1 = HERO_IMAGES[(activeIdx + 1) % HERO_IMAGES.length];
  const smallImage2 = HERO_IMAGES[(activeIdx + 2) % HERO_IMAGES.length];

  return (
    <section className="relative pt-40 pb-20 sm:pt-48 sm:pb-28 lg:pt-52 lg:pb-32 overflow-hidden bg-white">
      
      {/* Background Image: Haarmonie_05.webp deutlich sichtbarer (60% Opacity mit sanftem Verlauf) */}
      <div
        className="absolute inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-60 filter contrast-[1.12] saturate-[1.05]"
        style={{
          backgroundImage: `url('https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/neu/Haarmonie_05.webp')`,
        }}
      />
      {/* Subtile, leichte Verläufe für perfekte Lesbarkeit des Texts links */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/30 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white pointer-events-none z-0" />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-zinc-800 bg-white/90 backdrop-blur-md border border-zinc-200/80 px-4 py-1.5 rounded-full shadow-xs">
                Friseurmeister Matthias Zahn &bull; Parkstraße 15
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-bold text-black leading-[1.12] tracking-tight">
                Traditionelles Handwerk. <br />
                <span className="text-zinc-600 font-normal">
                  Zeitgemäße Ästhetik.
                </span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-zinc-700 leading-relaxed max-w-xl font-normal bg-white/70 backdrop-blur-xs p-3 rounded-2xl border border-white/60">
              Präzise Haarschnitte, typgerechte Coloration und ganzheitliche Pflanzenpflege in ruhiger Salon-Atmosphäre mitten in Nienburg.
            </p>

            {/* 1 Button Layout with Direct Phone Underneath */}
            <div className="space-y-4 pt-1">
              <div>
                <a
                  href="#termin"
                  className="inline-flex items-center justify-center gap-3 bg-black hover:bg-zinc-800 text-white px-9 py-4 rounded-full font-semibold text-base tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Termin online anfragen</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-sm text-zinc-700">
                <span>Oder direkt anrufen:</span>
                <a
                  href={`tel:${SALON_DATA.phoneClean}`}
                  className="font-bold text-black hover:text-zinc-600 transition-colors inline-flex items-center gap-1.5 underline decoration-zinc-400 hover:decoration-black"
                >
                  <Phone className="w-4 h-4" />
                  <span>{SALON_DATA.phone}</span>
                </a>
              </div>
            </div>

            {/* Key Facts */}
            <div className="pt-8 border-t border-zinc-200/80 grid grid-cols-3 gap-6 text-black">
              <div>
                <span className="block text-3xl font-heading font-bold text-black">25+</span>
                <span className="text-xs sm:text-sm text-zinc-600 uppercase tracking-wider font-semibold">Jahre Meister</span>
              </div>
              <div>
                <span className="block text-3xl font-heading font-bold text-black">100+</span>
                <span className="text-xs sm:text-sm text-zinc-600 uppercase tracking-wider font-semibold">Jahre Haus</span>
              </div>
              
              <a
                href={SALON_DATA.googleReviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block hover:-translate-y-0.5 transition-transform"
                title="Google Bewertungen ansehen"
              >
                <div className="flex items-center gap-1">
                  <span className="block text-3xl font-heading font-bold text-black group-hover:underline">
                    4.8 ★
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 opacity-70 group-hover:opacity-100 transition-all" />
                </div>
                <span className="text-xs sm:text-sm text-zinc-600 group-hover:text-black uppercase tracking-wider font-semibold block transition-colors">
                  Google Trust
                </span>
              </a>
            </div>

          </div>

          {/* Right Images */}
          <div
            className="lg:col-span-6 relative select-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="grid grid-cols-12 gap-4 sm:gap-6 items-center">
              
              {/* PRIMARY LARGE IMAGE (8 cols) */}
              <div className="col-span-8 rounded-3xl overflow-hidden shadow-clean-lg bg-zinc-100 aspect-[3/4] relative border border-zinc-200">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={largeImage.id}
                    src={largeImage.url}
                    alt={largeImage.alt}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }}
                    className="w-full h-full object-cover object-center absolute inset-0"
                  />
                </AnimatePresence>
              </div>

              {/* SECONDARY TWO SMALL STACKED IMAGES (4 cols) */}
              <div className="col-span-4 space-y-4 sm:space-y-6">
                
                {/* Small Image 1 */}
                <div
                  onClick={() => setActiveIdx((activeIdx + 1) % HERO_IMAGES.length)}
                  className="rounded-2xl overflow-hidden shadow-clean bg-zinc-100 aspect-[3/4] cursor-pointer relative border border-zinc-200 hover:border-black transition-all duration-300 hover:scale-[1.02]"
                >
                  <AnimatePresence initial={false}>
                    <motion.img
                      key={smallImage1.id}
                      src={smallImage1.url}
                      alt={smallImage1.alt}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="w-full h-full object-cover object-center absolute inset-0"
                    />
                  </AnimatePresence>
                </div>

                {/* Small Image 2 */}
                <div
                  onClick={() => setActiveIdx((activeIdx + 2) % HERO_IMAGES.length)}
                  className="rounded-2xl overflow-hidden shadow-clean bg-zinc-100 aspect-[3/4] cursor-pointer relative border border-zinc-200 hover:border-black transition-all duration-300 hover:scale-[1.02]"
                >
                  <AnimatePresence initial={false}>
                    <motion.img
                      key={smallImage2.id}
                      src={smallImage2.url}
                      alt={smallImage2.alt}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="w-full h-full object-cover object-center absolute inset-0"
                    />
                  </AnimatePresence>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

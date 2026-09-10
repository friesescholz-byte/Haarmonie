import React, { useState, useEffect } from 'react';
import { Phone, Calendar, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SALON_DATA } from '../data/content';
import { VineClassic, VineTall } from './BotanicalAccent';

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
      
      {/* Background Image: Haarmonie_05.webp */}
      <div
        className="absolute inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-60 filter contrast-[1.12] saturate-[1.05]"
        style={{
          backgroundImage: `url('https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/neu/Haarmonie_05.webp')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/35 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white pointer-events-none z-0" />



      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column: Starker Slogan, 100% Eckig */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#2F5E3D] bg-[#2F5E3D]/10 border border-[#2F5E3D]/30 px-4 py-1.5 rounded-none shadow-xs">
                Friseurmeister Matthias Zahn &bull; Parkstraße 15
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-heading font-bold text-black leading-[1.12] tracking-tight">
                Schnittkunst mit Haltung. <br />
                <span className="text-zinc-600 font-normal">
                  Zeit für Ihre eigene Ästhetik.
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-zinc-700 leading-relaxed max-w-xl font-normal bg-white/75 backdrop-blur-xs p-4 border border-zinc-200 rounded-none shadow-xs">
              Typgerechte Schnittpräzision, brillante Farbnuancen und pflanzliche Haarpflege in entspannter Salon-Atmosphäre mitten in Nienburg.
            </p>

            {/* Eckiger Button mit Telefonnummer */}
            <div className="space-y-4 pt-1">
              <div>
                <a
                  href="#termin"
                  className="inline-flex items-center justify-center gap-3 bg-black hover:bg-zinc-800 text-white px-9 py-4 rounded-none font-bold text-xs uppercase tracking-widest transition-all border border-black shadow-sm hover:shadow"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Termin online anfragen</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-600 uppercase tracking-wider">
                <span>Direkt anrufen:</span>
                <a
                  href={`tel:${SALON_DATA.phoneClean}`}
                  className="font-bold text-black hover:text-[#2F5E3D] transition-colors inline-flex items-center gap-1.5 underline decoration-zinc-400 hover:decoration-[#2F5E3D]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#2F5E3D]" />
                  <span>{SALON_DATA.phone}</span>
                </a>
              </div>
            </div>

            {/* Key Facts mit dezentem botanischem Akzent */}
            <div className="pt-8 border-t border-zinc-200 grid grid-cols-3 gap-6 text-black relative">
              <div className="absolute -bottom-10 left-1/4 pointer-events-none z-0 opacity-40 -rotate-12 hidden sm:block">
                <VineClassic className="w-24 sm:w-28 h-56 sm:h-64" flipped={true} />
              </div>
              <div className="relative z-10">
                <span className="block text-3xl font-heading font-bold text-black">25+</span>
                <span className="text-xs text-zinc-600 uppercase tracking-wider font-semibold">Jahre Meister</span>
              </div>
              <div className="relative z-10">
                <span className="block text-3xl font-heading font-bold text-black">100+</span>
                <span className="text-xs text-zinc-600 uppercase tracking-wider font-semibold">Jahre Haus</span>
              </div>
              
              <a
                href={SALON_DATA.googleReviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block hover:-translate-y-0.5 transition-transform relative z-10"
                title="Google Bewertungen ansehen"
              >
                <div className="flex items-center gap-1">
                  <span className="block text-3xl font-heading font-bold text-black group-hover:text-[#2F5E3D] transition-colors">
                    4.8 ★
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 opacity-70 group-hover:opacity-100 transition-all" />
                </div>
                <span className="text-xs text-zinc-600 group-hover:text-black uppercase tracking-wider font-semibold block transition-colors">
                  Google Trust
                </span>
              </a>
            </div>

          </div>

          {/* Right Images: 100% Eckig */}
          <div
            className="lg:col-span-6 relative select-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Ranke entspringt architektonisch direkt hinter der Bildkomposition (deutlich größer) */}
            <div className="absolute -top-16 sm:-top-24 -right-4 sm:-right-8 lg:-right-10 pointer-events-none z-0 opacity-85 rotate-6">
              <VineTall className="w-36 sm:w-48 lg:w-56 h-[480px] sm:h-[580px] lg:h-[680px]" />
            </div>

            <div className="grid grid-cols-12 gap-4 sm:gap-6 items-center relative z-10">
              
              {/* PRIMARY LARGE IMAGE (8 cols) - ECKIG */}
              <div className="col-span-8 rounded-none overflow-hidden bg-zinc-100 aspect-[3/4] relative border border-zinc-200 shadow-sm">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={largeImage.id}
                    src={largeImage.url}
                    alt={largeImage.alt}
                    initial={{ opacity: 0, scale: 1.01 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }}
                    className="w-full h-full object-cover object-center absolute inset-0"
                  />
                </AnimatePresence>
              </div>

              {/* SECONDARY TWO SMALL STACKED IMAGES (4 cols) - ECKIG */}
              <div className="col-span-4 space-y-4 sm:space-y-6">
                
                {/* Small Image 1 */}
                <div
                  onClick={() => setActiveIdx((activeIdx + 1) % HERO_IMAGES.length)}
                  className="rounded-none overflow-hidden bg-zinc-100 aspect-[3/4] cursor-pointer relative border border-zinc-200 hover:border-black transition-all duration-300"
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
                  className="rounded-none overflow-hidden bg-zinc-100 aspect-[3/4] cursor-pointer relative border border-zinc-200 hover:border-black transition-all duration-300"
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

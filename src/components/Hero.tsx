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
    url: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image01.webp",
    alt: "Festfrisur Hochsteckkunst"
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

  // Automatic smooth rotation every 5 seconds
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
    <section className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 lg:pt-48 lg:pb-36 overflow-hidden">
      
      {/* 1. FIXED (Parallax) Historic Salon Background Image */}
      <div
        className="absolute inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-60 filter contrast-[1.12] saturate-[1.05]"
        style={{
          backgroundImage: `url('https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Salon/Haarmonie01.webp')`,
        }}
      />
      {/* Soft gradient protection over the fixed background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/92 via-[#FAF8F5]/70 to-[#FAF8F5]/35 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/85 via-transparent to-[#FAF8F5]/95 pointer-events-none z-0" />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#C59A44] bg-[#FAF3E0]/95 backdrop-blur-md border border-[#C59A44]/40 px-4 py-1.5 rounded-full shadow-xs">
                Friseurmeister Matthias Zahn &bull; Parkstraße 15
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-heading font-bold text-[#071B33] leading-[1.14] tracking-tight">
                Zeit für Sie. <br />
                <span className="font-italic-serif text-[#C59A44] font-normal text-4xl sm:text-5xl lg:text-[60px] inline-block my-1">
                  Im 100-jährigen
                </span> <br />
                Traditionshaus.
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-[#2D3748] leading-relaxed max-w-xl font-normal bg-[#FAF8F5]/75 backdrop-blur-xs p-3 rounded-2xl border border-white/60 shadow-xs">
              Meisterhafte Schnittpräzision, typgerechte Beratung und ganzheitliche Aveda-Pflanzenpflege in ruhiger Altbau-Atmosphäre mitten in Nienburg.
            </p>

            {/* 1 Button Layout with Phone Call Link stylishly underneath */}
            <div className="space-y-4 pt-1">
              <div>
                <a
                  href="#termin"
                  className="inline-flex items-center justify-center gap-3 bg-[#071B33] hover:bg-[#102A4C] text-white px-9 py-4 rounded-full font-bold text-base tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
                >
                  <Calendar className="w-5 h-5 text-[#D4AF37] group-hover:rotate-6 transition-transform" />
                  <span>Termin online anfragen</span>
                </a>
              </div>

              {/* Clean, readable direct call info underneath */}
              <div className="flex items-center gap-2 text-sm text-[#4A5568]">
                <span>Oder direkt anrufen:</span>
                <a
                  href={`tel:${SALON_DATA.phoneClean}`}
                  className="font-bold text-[#071B33] hover:text-[#C59A44] transition-colors inline-flex items-center gap-1.5 underline decoration-[#C59A44]/50 hover:decoration-[#C59A44]"
                >
                  <Phone className="w-4 h-4 text-[#C59A44]" />
                  <span>{SALON_DATA.phone}</span>
                </a>
              </div>
            </div>

            {/* Key Facts with Clickable Google Trust Link */}
            <div className="pt-8 border-t border-[#EAE6DF]/80 grid grid-cols-3 gap-6 text-[#071B33]">
              <div>
                <span className="block text-3xl font-heading font-bold text-[#071B33]">25+</span>
                <span className="text-xs sm:text-sm text-[#4A5568] uppercase tracking-wider font-semibold">Jahre Meister</span>
              </div>
              <div>
                <span className="block text-3xl font-heading font-bold text-[#071B33]">100+</span>
                <span className="text-xs sm:text-sm text-[#4A5568] uppercase tracking-wider font-semibold">Jahre Haus</span>
              </div>
              
              {/* Clickable 4.8 Google Trust Link */}
              <a
                href={SALON_DATA.googleReviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block hover:-translate-y-0.5 transition-transform"
                title="Google Bewertungen ansehen oder schreiben (öffnet in neuem Tab)"
              >
                <div className="flex items-center gap-1">
                  <span className="block text-3xl font-heading font-bold text-[#C59A44] group-hover:underline">
                    4.8 ★
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#C59A44] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </div>
                <span className="text-xs sm:text-sm text-[#4A5568] group-hover:text-[#071B33] uppercase tracking-wider font-semibold block transition-colors">
                  Google Trust
                </span>
              </a>
            </div>

          </div>

          {/* Right Images: Silky Smooth Simultaneous Crossfade */}
          <div
            className="lg:col-span-6 relative select-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="grid grid-cols-12 gap-4 sm:gap-6 items-center">
              
              {/* PRIMARY LARGE IMAGE (8 cols) */}
              <div className="col-span-8 rounded-3xl overflow-hidden shadow-2xl bg-[#FAF8F5] aspect-[3/4] relative border border-white/80">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={largeImage.id}
                    src={largeImage.url}
                    alt={largeImage.alt}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                    className="w-full h-full object-cover object-center absolute inset-0"
                  />
                </AnimatePresence>
              </div>

              {/* SECONDARY TWO SMALL STACKED IMAGES (4 cols) */}
              <div className="col-span-4 space-y-4 sm:space-y-6">
                
                {/* Small Image 1 */}
                <div
                  onClick={() => setActiveIdx((activeIdx + 1) % HERO_IMAGES.length)}
                  className="rounded-2xl overflow-hidden shadow-lg bg-[#FAF8F5] aspect-[3/4] cursor-pointer relative border border-white/80 hover:border-[#C59A44] transition-all duration-300 hover:scale-[1.03]"
                >
                  <AnimatePresence initial={false}>
                    <motion.img
                      key={smallImage1.id}
                      src={smallImage1.url}
                      alt={smallImage1.alt}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.9, ease: "easeInOut" }}
                      className="w-full h-full object-cover object-center absolute inset-0"
                    />
                  </AnimatePresence>
                </div>

                {/* Small Image 2 */}
                <div
                  onClick={() => setActiveIdx((activeIdx + 2) % HERO_IMAGES.length)}
                  className="rounded-2xl overflow-hidden shadow-lg bg-[#FAF8F5] aspect-[3/4] cursor-pointer relative border border-white/80 hover:border-[#C59A44] transition-all duration-300 hover:scale-[1.03]"
                >
                  <AnimatePresence initial={false}>
                    <motion.img
                      key={smallImage2.id}
                      src={smallImage2.url}
                      alt={smallImage2.alt}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.9, ease: "easeInOut" }}
                      className="w-full h-full object-cover object-center absolute inset-0"
                    />
                  </AnimatePresence>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 2. Seamless Organic Curved Transition with Golden Hair Strands */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        
        <svg
          className="relative block w-full h-20 sm:h-28 lg:h-36"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Main White Organic Wave Fill */}
          <path
            d="M0,40 C320,110 480,10 720,55 C960,100 1180,20 1440,50 L1440,120 L0,120 Z"
            fill="#FFFFFF"
          />

          {/* Primary Golden Hair Wave Line */}
          <path
            d="M0,40 C320,110 480,10 720,55 C960,100 1180,20 1440,50"
            stroke="url(#hairGold1)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Secondary Delicate Golden Strands */}
          <path
            d="M0,25 C260,95 540,5 820,70 C1100,120 1260,15 1440,35"
            stroke="url(#hairGold2)"
            strokeWidth="1.2"
            strokeDasharray="6 3"
            strokeOpacity="0.85"
          />
          <path
            d="M0,55 C380,120 620,25 940,45 C1160,60 1340,30 1440,65"
            stroke="#DFBE72"
            strokeWidth="0.8"
            strokeOpacity="0.5"
          />

          <defs>
            <linearGradient id="hairGold1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C59A44" stopOpacity="0.2" />
              <stop offset="30%" stopColor="#D4AF37" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#F5D77F" stopOpacity="1" />
              <stop offset="85%" stopColor="#C59A44" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#C59A44" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="hairGold2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#DFBE72" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#C59A44" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

      </div>

    </section>
  );
};

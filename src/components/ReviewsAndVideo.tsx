import React, { useRef, useState } from 'react';
import { Quote, CheckCircle2, Play, Pause, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';
import { SALON_DATA, REVIEWS } from '../data/content';

export const ReviewsAndVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white relative overflow-hidden" id="referenzen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16 sm:space-y-20 relative z-10">
        
        {/* 1. Header (Eyebrow entfernt & auf Desktop in einer Zeile nach Kundenwunsch) */}
        <div className="max-w-5xl text-left space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-heading font-bold text-black tracking-tight leading-[1.15] lg:whitespace-nowrap">
            Was Nienburg über Haarmonie sagt.
          </h2>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-1">
            <div className="flex text-amber-500 text-sm">
              {'★'.repeat(5)}
            </div>
            <span className="text-xs sm:text-sm font-bold text-black">
              4.8 von 5.0 Sternen auf Google
            </span>
            <span className="text-zinc-300 hidden sm:inline">&bull;</span>
            <a
              href={SALON_DATA.googleReviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500 hover:text-black uppercase tracking-wider font-semibold inline-flex items-center gap-1 underline decoration-zinc-300 min-h-[36px] sm:min-h-0 items-center"
            >
              <span>Alle Bewertungen lesen</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 2. Drei echte, saubere Google-Bewertungen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-stone-50/70 border border-zinc-200 hover:border-zinc-400 p-6 sm:p-8 flex flex-col justify-between rounded-none transition-all duration-300 relative group shadow-xs hover:shadow-sm"
            >
              <Quote className="w-8 h-8 text-zinc-300 absolute top-6 right-6 group-hover:text-[#2F5E3D]/40 transition-colors" />

              <div className="space-y-3 sm:space-y-4">
                <div className="flex text-amber-500 text-sm">
                  {'★'.repeat(rev.stars)}
                </div>
                <span className="inline-block bg-white text-black text-xs font-bold px-2.5 py-1 border border-zinc-200">
                  {rev.highlight}
                </span>
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal italic">
                  „{rev.text}“
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-zinc-200 flex items-center justify-between text-xs">
                <div>
                  <strong className="block text-black font-heading font-bold text-sm">
                    {rev.name}
                  </strong>
                  <span className="text-zinc-500">{rev.city} &bull; {rev.date}</span>
                </div>
                <div className="flex items-center gap-1 text-[#2F5E3D] font-semibold text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Google</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Salon-Video ("Was für ein besonderer Tag!" - Hochformat 9:16) */}
        <div className="pt-10 sm:pt-14 border-t border-zinc-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Linke Spalte: Redaktionelle Einblicke & Botschaft */}
            <div className="lg:col-span-7 text-left space-y-5 sm:space-y-6">
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2F5E3D]">
                  Einblicke in den Salon
                </span>
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-black tracking-tight leading-[1.15]">
                  Was für ein besonderer Tag bei Haarmonie.
                </h3>
              </div>

              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                Erleben Sie das Ambiente, die Menschen und die Handwerkskunst in der Parkstraße 15 in Bewegung. Ein Ort der Ruhe, Entspannung und meisterhaften Friseurkunst.
              </p>

              {/* Redaktionelle Salon-Merkmale */}
              <div className="pt-2 border-t border-zinc-100 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2F5E3D] mt-2 shrink-0" />
                  <p className="text-xs sm:text-sm text-zinc-700">
                    <strong className="text-black font-semibold">Persönliche Atmosphäre:</strong> Zeit für individuelle Beratung und typgerechte Schnitte.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2F5E3D] mt-2 shrink-0" />
                  <p className="text-xs sm:text-sm text-zinc-700">
                    <strong className="text-black font-semibold">Aveda Aroma-Rituale:</strong> Entspannung für Kopfhaut, Haar und Sinne.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2F5E3D] mt-2 shrink-0" />
                  <p className="text-xs sm:text-sm text-zinc-700">
                    <strong className="text-black font-semibold">Handwerkliche Perfektion:</strong> Typgerechtes Styling auf Meister-Niveau.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#termin"
                  className="inline-flex items-center justify-center gap-2 bg-black hover:bg-zinc-800 text-white px-7 py-3.5 rounded-none text-xs font-bold uppercase tracking-widest transition-all border border-black shadow-xs"
                >
                  <span>Termin vereinbaren</span>
                </a>
              </div>
            </div>

            {/* Rechte Spalte: Echtes Hochkant-Video (9:16 Portrait-Format) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[9/16] bg-black rounded-none overflow-hidden border border-zinc-300 shadow-xl group">
                <video
                  ref={videoRef}
                  src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Was%20f%C3%BCr%20ein%20besonderer%20Tag!%20%20.mp4"
                  playsInline
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={togglePlay}
                >
                  Ihr Browser unterstützt dieses Video nicht.
                </video>

                {/* Video Controls Overlay - Touch-optimiert mit min. 44px Buttons */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-2 z-20">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="w-11 h-11 flex items-center justify-center bg-black/75 hover:bg-black text-white rounded-none backdrop-blur-sm border border-white/20 transition-all cursor-pointer"
                    title={isPlaying ? 'Pause' : 'Abspielen'}
                    aria-label={isPlaying ? 'Pause' : 'Abspielen'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>

                  <button
                    type="button"
                    onClick={toggleMute}
                    className="w-11 h-11 flex items-center justify-center bg-black/75 hover:bg-black text-white rounded-none backdrop-blur-sm border border-white/20 transition-all cursor-pointer"
                    title={isMuted ? 'Ton einschalten' : 'Ton stummschalten'}
                    aria-label={isMuted ? 'Ton einschalten' : 'Ton stummschalten'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

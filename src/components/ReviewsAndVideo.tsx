import React, { useRef, useState } from 'react';
import { Star, Quote, CheckCircle2, Play, Pause, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';
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
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden" id="referenzen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-20 relative z-10">
        
        {/* 1. Header & Trust Stats */}
        <div className="max-w-3xl text-left space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#2F5E3D] bg-[#2F5E3D]/10 border border-[#2F5E3D]/30 px-3.5 py-1 rounded-none">
            Referenzen &bull; Echte Erfahrungen
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-black tracking-tight leading-[1.15]">
            Was Nienburg über Haarmonie sagt.
          </h2>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <div className="flex text-amber-500">
              {'★'.repeat(5)}
            </div>
            <span className="text-sm font-bold text-black">
              4.8 von 5.0 Sternen auf Google
            </span>
            <span className="text-zinc-400">&bull;</span>
            <a
              href={SALON_DATA.googleReviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500 hover:text-black uppercase tracking-wider font-semibold inline-flex items-center gap-1 underline decoration-zinc-300"
            >
              <span>Alle Bewertungen lesen</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 2. Drei echte, saubere Google-Bewertungen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-stone-50/70 border border-zinc-200 hover:border-zinc-400 p-8 flex flex-col justify-between rounded-none transition-all duration-300 relative group"
            >
              <Quote className="w-8 h-8 text-zinc-300 absolute top-6 right-6 group-hover:text-[#2F5E3D]/40 transition-colors" />

              <div className="space-y-4">
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

              <div className="mt-8 pt-5 border-t border-zinc-200 flex items-center justify-between text-xs">
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

        {/* 3. Salon-Video ("Was für ein besonderer Tag!") */}
        <div className="pt-10 border-t border-zinc-200 space-y-6">
          <div className="max-w-3xl text-left space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2F5E3D]">
              Einblicke in den Salon
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-black">
              Was für ein besonderer Tag bei Haarmonie.
            </h3>
            <p className="text-sm text-zinc-600">
              Erleben Sie das Ambiente, die Menschen und die Handwerkskunst in der Parkstraße 15 in Bewegung.
            </p>
          </div>

          <div className="relative aspect-video w-full max-w-5xl mx-auto bg-black rounded-none overflow-hidden border border-zinc-300 shadow-lg group">
            <video
              ref={videoRef}
              src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Was%20f%C3%BCr%20ein%20besonderer%20Tag!%20%20.mp4"
              playsInline
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              onClick={togglePlay}
            >
              Ihr Browser unterstützt dieses Video nicht.
            </video>

            {/* Video Controls Overlay */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 z-20">
              <button
                type="button"
                onClick={togglePlay}
                className="bg-black/70 hover:bg-black text-white p-2.5 rounded-none backdrop-blur-sm border border-white/20 transition-all cursor-pointer"
                title={isPlaying ? 'Pause' : 'Abspielen'}
                aria-label={isPlaying ? 'Pause' : 'Abspielen'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={toggleMute}
                className="bg-black/70 hover:bg-black text-white p-2.5 rounded-none backdrop-blur-sm border border-white/20 transition-all cursor-pointer"
                title={isMuted ? 'Ton einschalten' : 'Ton stummschalten'}
                aria-label={isMuted ? 'Ton einschalten' : 'Ton stummschalten'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            <div className="absolute top-4 left-4 z-20 pointer-events-none">
              <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-3 py-1 border border-white/20">
                Salon Haarmonie &bull; Parkstraße 15
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

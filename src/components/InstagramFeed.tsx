import React from 'react';
import { ArrowUpRight, Heart } from 'lucide-react';
import { SALON_DATA } from '../data/content';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// 6 Aktuelle kuratierte Looks & Momente für den Feed
const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image06.webp",
    caption: "Natürliche Balayage-Reflexe & Aveda Glanzversiegelung.",
    likes: "48"
  },
  {
    id: 2,
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image12.webp",
    caption: "Dimensionales Blond & präziser Stufenschnitt.",
    likes: "62"
  },
  {
    id: 3,
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image13.webp",
    caption: "Warmes Kupfer-Gold – handwerklich meisterhaft nuanciert.",
    likes: "55"
  },
  {
    id: 4,
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image11.webp",
    caption: "Präzisions-Bob: Zeitlose Linienführung für jede Gesichtsform.",
    likes: "71"
  },
  {
    id: 5,
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image14.webp",
    caption: "Schonende SIMPLIE Haarverdichtung für natürliches Volumen.",
    likes: "84"
  },
  {
    id: 6,
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image07.webp",
    caption: "Reichhaltige Tiefenpflege & seidiges Glossing in der Parkstraße.",
    likes: "59"
  }
];

export const InstagramFeed: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-stone-50/60 border-t border-zinc-200" id="instagram">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-14">
        
        {/* Header mit Instagram Handle & Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#2F5E3D] bg-[#2F5E3D]/10 border border-[#2F5E3D]/30 px-3.5 py-1 rounded-none">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>{SALON_DATA.instagramHandle}</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-black tracking-tight leading-[1.15]">
              Haarmonie auf Instagram
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 font-normal">
              Aktuelle Looks. Farben. Inspirationen. Einblicke in unseren Salon.
            </p>
          </div>

          <a
            href={SALON_DATA.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-black hover:bg-zinc-800 text-white px-7 py-3.5 rounded-none text-xs font-bold uppercase tracking-widest transition-all w-full sm:w-auto self-start md:self-end border border-black shadow-xs"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Auf Instagram folgen</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Behold Widget Container (Hook für externe Behold Integration) */}
        <div id="behold-feed-container" className="hidden empty:hidden" data-behold-id="haarmonie-nienburg" />

        {/* 6 Neueste Beiträge im sauberen Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={SALON_DATA.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group aspect-square relative bg-zinc-100 overflow-hidden border border-zinc-200 block"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Dark Overlay mit Like & Info */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-white text-left">
                <div className="flex justify-between items-center text-xs text-zinc-300">
                  <InstagramIcon className="w-4 h-4 text-white" />
                  <span className="flex items-center gap-1 font-semibold text-[11px]">
                    <Heart className="w-3.5 h-3.5 fill-current text-rose-500" />
                    {post.likes}
                  </span>
                </div>

                <p className="text-[11px] leading-snug line-clamp-3 text-zinc-200">
                  {post.caption}
                </p>

                <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold flex items-center gap-1">
                  <span>Ansehen</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center pt-2">
          <span className="text-xs text-zinc-400 font-medium tracking-wide">
            Folgen Sie uns für tägliche Vorher-Nachher Transformationen &amp; Salon-Momente &bull; {SALON_DATA.instagramHandle}
          </span>
        </div>

      </div>
    </section>
  );
};

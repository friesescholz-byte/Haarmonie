import React from 'react';
import { Award, Home, Leaf, Star, Sparkles, MapPin } from 'lucide-react';
import { SALON_DATA } from '../data/content';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: Award,
      title: "25+ Jahre Meisterbetrieb",
      desc: "Gelebtes Handwerk & fundierte Typdiagnostik von Friseurmeister Matthias Zahn."
    },
    {
      icon: Home,
      title: "100-jähriges Traditionshaus",
      desc: "Wohlfühlatmosphäre mit hohen Decken, Ruhe und Raum zum Entschleunigen."
    },
    {
      icon: Leaf,
      title: "100% Aveda-Partner",
      desc: "Pflanzliche Spitzenpflege & Sinnesrituale ohne stechenden Ammoniakgeruch."
    },
    {
      icon: Star,
      title: "4.8 ★ Google-Reputation",
      desc: "Treue Stammkunden und höchste Zufriedenheit mitten in Nienburg."
    }
  ];

  return (
    <section className="bg-[#0A0A0C] text-white py-8 border-y border-[#D4AF37]/30 shadow-lux">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start gap-3.5 group">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#B88934] text-[#0A0A0C] flex items-center justify-center flex-shrink-0 shadow group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-white group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

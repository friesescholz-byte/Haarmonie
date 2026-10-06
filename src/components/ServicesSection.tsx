import React from 'react';
import { Calendar, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';

export const ServicesSection: React.FC = () => {
  return (
    <section className="pt-24 pb-28 sm:pt-36 sm:pb-40 bg-[#101512] text-white relative z-20" id="leistungen">
      
      {/* ========================================================================= */}
      {/* 1. OBERER DESIGN-ÜBERGANG: Weich fließende Haarsträhnen-Welle (100% knickfrei) */}
      {/* ========================================================================= */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-30 pointer-events-none -translate-y-[98%]">
        <svg
          className="relative block w-full h-10 sm:h-16 lg:h-24"
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Sanfter botanischer Haarsträhnen-Verlauf in Haarmonie-Waldgrün */}
            <linearGradient id="hairStrandBotanicalTop" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2F5E3D" stopOpacity="0.2" />
              <stop offset="30%" stopColor="#3F7E54" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#3F7E54" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#2F5E3D" stopOpacity="0.2" />
            </linearGradient>
            
            {/* Sanfte Salbei-Begleitlinie */}
            <linearGradient id="hairStrandSageTop" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5E8E6E" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#5E8E6E" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#5E8E6E" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Basis-Füllung in der dunklen Hintergrundfarbe von Leistungen (#101512) */}
          <path
            d="M0,45 C480,15 960,65 1440,35 L1440,80 L0,80 Z"
            fill="#101512"
          />

          {/* Primäre seidige Haupt-Haarsträhne (fließender kontinuierlicher Bogen) */}
          <path
            d="M0,45 C480,15 960,65 1440,35"
            stroke="url(#hairStrandBotanicalTop)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Begleitende feine Haarsträhne (harmonischer paralleler Schwung) */}
          <path
            d="M0,38 C480,8 960,58 1440,28"
            stroke="url(#hairStrandSageTop)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12 sm:space-y-16 lg:space-y-20 relative z-10">
        
        {/* Header auf schwarzem Grund mit weißer Schrift */}
        <div className="max-w-3xl text-left space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-[1.18] sm:leading-[1.15]">
            Was wir für Ihr Haar tun.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed font-normal pt-1">
            Von präzisen Schnitten bis zu individuellen Farbkonzepten: Bei Haarmonie geht es nicht um ein Standardprogramm, sondern um Leistungen, die zu Ihrem Haar, Ihrem Stil und Ihren Vorstellungen passen.
          </p>
        </div>

        {/* Die 4 Kernbereiche im Grid als WEISSE Kacheln mit schwarzem Text nach Kundenwunsch */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-zinc-200 hover:border-zinc-400 p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 rounded-none shadow-xl hover:shadow-2xl group text-left"
            >
              <div>
                {/* Image and Number Header */}
                <div className="flex items-center justify-between mb-5 sm:mb-6 pb-3 sm:pb-4 border-b border-zinc-100">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F5E3D] bg-[#2F5E3D]/10 px-2.5 py-1">
                    {service.tag}
                  </span>
                  <span className="text-2xl sm:text-3xl font-heading font-bold text-zinc-300 group-hover:text-black transition-colors">
                    {service.number}
                  </span>
                </div>

                <div className="aspect-[16/9] w-full bg-zinc-100 mb-5 sm:mb-6 overflow-hidden border border-zinc-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-bold text-black mb-2.5 sm:mb-3">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm lg:text-base text-zinc-600 leading-relaxed font-normal mb-5 sm:mb-6">
                  {service.description}
                </p>

                {/* Details List */}
                <ul className="space-y-2 sm:space-y-2.5 pt-2 border-t border-zinc-100">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                      <Check className="w-4 h-4 text-[#2F5E3D] flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button - Responsive Umbruch für saubere Mobile-Ansicht */}
              <div className="pt-6 sm:pt-8 mt-5 sm:mt-6 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <a
                  href="#termin"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black group-hover:text-[#2F5E3D] transition-colors py-1"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#2F5E3D]" />
                  <span>Jetzt anfragen</span>
                </a>
                <span className="text-[11px] sm:text-xs text-zinc-400 font-medium">
                  Persönliche Beratung inklusive
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Beratungs-Hinweis (Weiß mit schwarzem Text für einheitliche Card-Optik) */}
        <div className="bg-white border border-zinc-200 p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left shadow-lg">
          <div className="space-y-2">
            <h4 className="text-base sm:text-lg font-heading font-bold text-black">
              Sie sind sich unsicher, welche Behandlung die richtige für Sie ist?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600">
              Wir nehmen uns vor jedem Schnitt und jeder Farbveränderung die nötige Zeit für eine individuelle Haardiagnose.
            </p>
          </div>
          <a
            href="#termin"
            className="w-full sm:w-auto text-center flex-shrink-0 bg-black hover:bg-zinc-800 text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-all rounded-none font-sans font-bold"
          >
            Beratungstermin buchen
          </a>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 2. UNTERER DESIGN-ÜBERGANG: Weich fließende Haarsträhnen-Welle (100% knickfrei) */}
      {/* ========================================================================= */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-30 pointer-events-none translate-y-[98%]">
        <svg
          className="relative block w-full h-10 sm:h-16 lg:h-24"
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Sanfter botanischer Haarsträhnen-Verlauf in Haarmonie-Waldgrün */}
            <linearGradient id="hairStrandBotanicalBottom" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2F5E3D" stopOpacity="0.2" />
              <stop offset="30%" stopColor="#3F7E54" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#3F7E54" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#2F5E3D" stopOpacity="0.2" />
            </linearGradient>

            {/* Sanfte Salbei-Begleitlinie */}
            <linearGradient id="hairStrandSageBottom" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5E8E6E" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#5E8E6E" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#5E8E6E" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Basis-Füllung in der dunklen Hintergrundfarbe von Leistungen (#101512) */}
          <path
            d="M0,0 L1440,0 L1440,40 C960,15 480,60 0,30 Z"
            fill="#101512"
          />

          {/* Primäre geschwungene Haarsträhne (fließender, mathematisch knickfreier Bogen) */}
          <path
            d="M0,30 C480,60 960,15 1440,40"
            stroke="url(#hairStrandBotanicalBottom)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Begleitende feine Haarsträhne (harmonischer paralleler Schwung) */}
          <path
            d="M0,37 C480,67 960,22 1440,47"
            stroke="url(#hairStrandSageBottom)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

    </section>
  );
};

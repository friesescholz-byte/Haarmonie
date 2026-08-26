import React from 'react';
import { VolumeX, Sparkles, Smile, ShieldAlert, CheckCircle, ShieldCheck } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  const problems = [
    {
      problemTitle: "Hektik, Lärm & Massenabfertigung",
      problemText: "Du suchst Entspannung, sitzt aber im lauten Durchgangsverkehr, Föhne dröhnen und Friseure bedienen drei Kunden parallel.",
      solutionTitle: "Die Altbau-Ruheoase in der Parkstraße",
      solutionText: "Großzügige, lichte Räume im 100-jährigen Traditionshaus. Matthias Zahn und sein Team reservieren ungeteilte Zeit für Sie. Echte Entschleunigung.",
      badge: "Ruhe & Entspannung"
    },
    {
      problemTitle: "Angst vor Fehlberatung & bösen Überraschungen",
      problemText: "Wünsche werden überhört – am Ende ist das Haar 5 cm zu kurz, die Nuance passt nicht zum Teint oder der Schnitt sitzt zuhause nicht mehr.",
      solutionTitle: "25+ Jahre Meisterkompetenz & Typ-Diagnostik",
      solutionText: "Vor dem ersten Schnitt analysieren wir Haarstruktur, Wirbel, Gesichtsform und Alltagstauglichkeit. Ein Haarschnitt, der langfristig perfekt fällt.",
      badge: "Sicherheit & Beratung"
    },
    {
      problemTitle: "Kopfhautbrennen & aggressive Chemiegerüche",
      problemText: "Beißender Ammoniakgeruch beim Auftragen, juckende Kopfhaut und nach wenigen Wochen sprödes, glanzloses Haar.",
      solutionTitle: "100% Aveda Botanical Spa & Pflanzenfarben",
      solutionText: "Bis zu 96% pflanzlich gewonnene Rezepturen, ätherische Aroma-Öle und pflegende Essenzen für strahlenden Glanz und maximale Schonung.",
      badge: "Pflanzliche Pflege"
    },
    {
      problemTitle: "Fluktuations-Angst & wechselndes Personal",
      problemText: "Ständige Personalwechsel in vielen Salons machen jeden Besuch zum Glücksspiel: Sitzt heute ein erfahrener Stylist vor mir oder ein Anfänger?",
      solutionTitle: "Beständiger Meisterbetrieb seit 25 Jahren",
      solutionText: "Seit einem Vierteljahrhundert eine feste Institution in Nienburg. Matthias Zahn bürgt persönlich für gleichbleibend exzellente Qualität.",
      badge: "Verlässliche Qualität"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white" id="vorteile">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-[#C59A44] font-bold text-xs uppercase tracking-widest bg-[#FAF3E0] px-3 py-1 rounded-full mb-3">
            Warum Haarmonie anders ist
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#071B33] tracking-tight">
            Schluss mit Salon-Stress. <br />
            <span className="italic font-normal text-[#C59A44]">Willkommen in Ihrer persönlichen Wohlfühloase.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Wir kennen die typischen Sorgen von Friseurbesuchern – und haben unseren gesamten Salon darauf ausgerichtet, Ihnen pure Entspannung und vollendete Handwerkskunst zu garantieren.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lux transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#E8E2D8]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#071B33] bg-white border border-[#D4AF37]/40 px-2.5 py-1 rounded-md">
                    {item.badge}
                  </span>
                  <span className="text-xs font-semibold text-rose-700 bg-rose-50 px-2.5 py-1 rounded">
                    Typisches Problem
                  </span>
                </div>

                {/* Problem Statement */}
                <div className="mb-4">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#071B33] mb-1.5">
                    {item.problemTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.problemText}
                  </p>
                </div>
              </div>

              {/* Solution Box */}
              <div className="mt-4 bg-emerald-50/80 border border-emerald-200/80 rounded-xl p-4 text-emerald-950">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs sm:text-sm font-bold text-emerald-900 mb-1">
                      🏆 Die Haarmonie-Lösung: {item.solutionTitle}
                    </strong>
                    <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                      {item.solutionText}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

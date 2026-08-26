import React from 'react';
import { Coffee, Sparkles, Heart } from 'lucide-react';

export const AvedaRitual: React.FC = () => {
  const rituals = [
    {
      title: "Begrüßungstee",
      text: "Wärmender Aveda Comforting Bio-Kräutertee zur Einstimmung."
    },
    {
      title: "Aroma-Öl-Reise",
      text: "Wählen Sie Ihren persönlichen Lieblingsduft aus reinen Pflanzenessenzen."
    },
    {
      title: "Kopf- & Nackenmassage",
      text: "Entspannung am Waschbecken vor jedem Haarschnitt."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5]" id="ritual">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C59A44] block mb-2">
            Bei jedem Besuch inklusive
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0A0A0C]">
            Das Aveda Sinnes-Ritual.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rituals.map((r, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-[#EAE6DF] space-y-3 shadow-sm">
              <span className="text-xs font-bold text-[#C59A44] uppercase tracking-wider">
                0{i + 1}
              </span>
              <h3 className="font-serif font-bold text-xl text-[#0A0A0C]">
                {r.title}
              </h3>
              <p className="text-sm text-[#556375] leading-relaxed">
                {r.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

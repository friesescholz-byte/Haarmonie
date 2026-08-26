import React, { useState } from 'react';
import { Calendar, Phone, Clock, CheckCircle2, Sparkles, X, ArrowRight, Scissors, Heart, User } from 'lucide-react';
import { SALON_DATA } from '../data/content';

interface TerminSpickzettelProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const TerminSpickzettel: React.FC<TerminSpickzettelProps> = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState<string>('Damen: Schnitt & Styling');
  const [selectedDay, setSelectedDay] = useState<string>('Dienstag / Mittwoch');
  const [selectedTime, setSelectedTime] = useState<string>('Vormittags (09:00 - 12:00)');

  const services = [
    { label: 'Damen: Schnitt & Styling', icon: Scissors },
    { label: 'Aveda Pflanzenfarbe & Balayage', icon: Sparkles },
    { label: 'Festfrisur / Hochzeits-Styling', icon: Heart },
    { label: 'Botanical Hair Spa Kur', icon: Sparkles },
    { label: 'Herren: Meisterhaarschnitt', icon: User }
  ];

  const days = [
    'Dienstag / Mittwoch',
    'Donnerstag / Freitag',
    'Samstag Vormittag',
    'Flexibel'
  ];

  const times = [
    'Vormittags (09:00 - 12:00)',
    'Nachmittags (13:00 - 16:00)',
    'Spätnachmittag (16:00 - 18:00)',
    'Flexibel'
  ];

  const content = (
    <div className="bg-white rounded-3xl border border-[#E8E2D8] p-6 sm:p-8 shadow-lux-lg max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-[#E8E2D8]">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C59A44] bg-[#FAF3E0] px-3 py-1 rounded-full mb-1">
            <Calendar className="w-3.5 h-3.5" />
            Schritt für Schritt zum Wunschtermin
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#071B33]">
            Ihr persönlicher Termin-Spickzettel
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Wählen Sie kurz Ihre Wünsche aus. Beim anschließenden Anruf haben Sie alle Details parat!
          </p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-500"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Step 1: Service */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-[#071B33] uppercase tracking-wider mb-2.5">
          1. Was möchten Sie machen lassen?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {services.map((s) => {
            const Icon = s.icon;
            const active = selectedService === s.label;
            return (
              <button
                key={s.label}
                type="button"
                onClick={() => setSelectedService(s.label)}
                className={`p-3 rounded-xl text-xs font-semibold flex items-center gap-2.5 text-left transition-all ${
                  active
                    ? 'bg-[#071B33] text-[#D4AF37] border-2 border-[#D4AF37] shadow'
                    : 'bg-[#FAF8F5] text-slate-700 hover:bg-slate-200 border border-[#E8E2D8]'
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? 'text-[#D4AF37]' : 'text-[#C59A44]'}`} />
                <span>{s.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Day & Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div>
          <label className="block text-xs font-bold text-[#071B33] uppercase tracking-wider mb-2">
            2. Bevorzugte Wochentage:
          </label>
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="w-full p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] text-xs font-semibold text-[#071B33] focus:outline-none focus:border-[#071B33]"
          >
            {days.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#071B33] uppercase tracking-wider mb-2">
            3. Bevorzugtes Zeitfenster:
          </label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] text-xs font-semibold text-[#071B33] focus:outline-none focus:border-[#071B33]"
          >
            {times.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Summary Box */}
      <div className="bg-[#FAF3E0] border border-[#D4AF37]/50 rounded-2xl p-4 sm:p-5 mb-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#071B33] mb-2">
          <Sparkles className="w-4 h-4 text-[#C59A44]" />
          <span>Ihr Vorbereiteter Wunsch:</span>
        </div>
        <p className="text-sm font-serif font-bold text-[#071B33]">
          „Hallo Matthias, ich hätte gerne einen Termin für <span className="text-[#C59A44]">{selectedService}</span>, am besten <span className="text-[#C59A44]">{selectedDay}</span> ({selectedTime}).“
        </p>
        <span className="block text-[11px] text-slate-600 mt-2">
          💡 <strong>Tipp:</strong> Vormittags zwischen 09:00 und 11:30 Uhr ist Matthias Zahn telefonisch besonders entspannt erreichbar.
        </span>
      </div>

      {/* Final Call CTA */}
      <a
        href={`tel:${SALON_DATA.phoneClean}`}
        className="w-full py-4 bg-[#071B33] hover:bg-[#102A4C] text-white font-bold text-base rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lux hover:scale-[1.01] border border-[#D4AF37]/40"
      >
        <Phone className="w-5 h-5 text-[#D4AF37]" />
        <span>Jetzt mit Vorbereitung anrufen: {SALON_DATA.phone}</span>
      </a>
    </div>
  );

  if (isOpen) {
    return (
      <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
        <div className="w-full max-w-3xl my-8">
          {content}
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF8F5] to-white" id="spickzettel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-serif font-bold text-[#071B33]">
            Unkompliziert zum Wunschtermin
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Nutzen Sie unseren Spickzettel, um Ihren Anruf in 10 Sekunden vorzubereiten.
          </p>
        </div>
        {content}
      </div>
    </section>
  );
};

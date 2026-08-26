import React from 'react';
import { Phone, Calendar, Clock } from 'lucide-react';
import { SALON_DATA } from '../data/content';

interface StickyMobileBarProps {
  onOpenSpickzettel: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenSpickzettel }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#071B33] border-t border-[#D4AF37]/40 p-2.5 shadow-2xl flex items-center gap-2">
      <button
        onClick={onOpenSpickzettel}
        className="flex-1 py-3 px-3 rounded-xl bg-white text-[#071B33] font-bold text-xs flex items-center justify-center gap-1.5 shadow"
      >
        <Calendar className="w-4 h-4 text-[#C59A44]" />
        <span>Termin-Planer</span>
      </button>

      <a
        href={`tel:${SALON_DATA.phoneClean}`}
        className="flex-1 py-3 px-3 rounded-xl bg-[#D4AF37] text-[#071B33] font-bold text-xs flex items-center justify-center gap-1.5 shadow"
      >
        <Phone className="w-4 h-4" />
        <span>Anrufen</span>
      </a>
    </div>
  );
};

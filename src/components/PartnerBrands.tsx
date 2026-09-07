import React from 'react';
import { PARTNER_BRANDS } from '../data/content';

// Optisch perfekt balancierte Größen für die freigestellten, transparenten Logos
const LOGO_CONFIG: Record<string, { imgClass: string }> = {
  'Aveda': {
    imgClass: 'h-10 sm:h-12 lg:h-14 max-w-[200px]'
  },
  'Nailberry': {
    imgClass: 'h-14 sm:h-16 lg:h-18 max-w-[160px]'
  },
  'Hair Help the Oceans': {
    imgClass: 'h-16 sm:h-20 lg:h-22 max-w-[160px]'
  },
  'Intercoiffure Mondial': {
    imgClass: 'h-14 sm:h-17 lg:h-20 max-w-[150px]'
  }
};

export const PartnerBrands: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-y border-zinc-200/80" id="partner">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 items-center justify-items-center">
          {PARTNER_BRANDS.map((partner) => {
            const config = LOGO_CONFIG[partner.name] || { imgClass: 'h-14 max-w-[160px]' };
            return (
              <a
                key={partner.name}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 w-full h-24 sm:h-28 group transition-all duration-300"
                title={`${partner.name} Website besuchen`}
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  className={`${config.imgClass} w-auto object-contain opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300`}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

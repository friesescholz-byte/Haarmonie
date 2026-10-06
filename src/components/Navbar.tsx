import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar } from 'lucide-react';
import { SALON_DATA } from '../data/content';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Über uns', href: '#ueber-uns' },
    { label: 'Leistungen', href: '#leistungen' },
    { label: 'Referenzen', href: '#referenzen' },
    { label: 'Instagram', href: '#instagram' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-1.5 sm:py-2 border-b border-zinc-200'
          : 'bg-white/90 backdrop-blur-sm py-2 sm:py-2.5 border-b border-zinc-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center">
        
        {/* Prominentes Logo */}
        <a href="#" className="flex-shrink-0 flex items-center pr-4 sm:pr-6 group">
          <img
            src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Haarmonie_Logo_transparent_ergebnis.webp"
            alt="Haarmonie Matthias Zahn Logo"
            className="h-12 sm:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter invert"
          />
        </a>

        {/* Clean Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[14px] font-medium text-zinc-700 uppercase tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-black transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Eckige CTA-Buttons (rounded-none) */}
        <div className="hidden md:flex items-center gap-3 pl-4 flex-shrink-0">
          <a
            href="#termin"
            className="inline-flex items-center gap-2 bg-black hover:bg-zinc-800 text-white px-6 py-3 rounded-none text-xs font-bold uppercase tracking-widest transition-all border border-black"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Termin anfragen</span>
          </a>

          <a
            href={`tel:${SALON_DATA.phoneClean}`}
            className="inline-flex items-center gap-2 text-zinc-900 hover:text-black px-4 py-3 rounded-none text-xs font-bold tracking-widest uppercase transition-colors border border-zinc-300 hover:border-black"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{SALON_DATA.phone}</span>
          </a>
        </div>

        {/* Mobile Hamburger mit min. 44px Touch-Target */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-11 h-11 flex items-center justify-center text-black rounded-none cursor-pointer"
          aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 px-6 py-6 space-y-2 shadow-2xl animate-fadeIn rounded-none">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-zinc-900 hover:text-black py-2.5 uppercase tracking-wider min-h-[44px] flex items-center border-b border-zinc-50 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-zinc-100 space-y-2.5">
            <a
              href="#termin"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 bg-black text-white rounded-none text-center text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 min-h-[48px]"
            >
              <Calendar className="w-4 h-4" />
              <span>Termin online anfragen</span>
            </a>
            <a
              href={`tel:${SALON_DATA.phoneClean}`}
              className="w-full py-3 bg-white text-zinc-900 rounded-none text-center text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 border border-zinc-300 min-h-[48px]"
            >
              <Phone className="w-4 h-4" />
              <span>{SALON_DATA.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

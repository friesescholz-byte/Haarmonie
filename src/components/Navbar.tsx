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
    { label: 'Partner', href: '#partner' },
    { label: 'Transformationen', href: '#transformationen' },
    { label: 'Schnitt & Farbe', href: '#frisuren' },
    { label: 'Salon', href: '#tradition' },
    { label: 'Kontakt & Anfahrt', href: '#kontakt' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-zinc-200'
          : 'bg-white/90 backdrop-blur-sm py-6 border-b border-zinc-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center">
        
        {/* Significantly Larger, Prominent Logo */}
        <a href="#" className="flex-shrink-0 flex items-center pr-6 group">
          <img
            src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Haarmonie_Logo_transparent_ergebnis.webp"
            alt="Haarmonie Matthias Zahn Logo"
            className="h-14 sm:h-18 lg:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter invert"
          />
        </a>

        {/* Clean, Monochromatic Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[15px] font-medium text-zinc-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-black transition-colors tracking-normal whitespace-nowrap py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Spacious Monochromatic CTA */}
        <div className="hidden md:flex items-center gap-4 pl-4 flex-shrink-0">
          <a
            href="#termin"
            className="inline-flex items-center gap-2 bg-black hover:bg-zinc-800 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Termin anfragen</span>
          </a>

          <a
            href={`tel:${SALON_DATA.phoneClean}`}
            className="inline-flex items-center gap-2 text-zinc-900 hover:text-zinc-600 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-colors whitespace-nowrap border border-zinc-200"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{SALON_DATA.phone}</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-black"
          aria-label="Menü"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 px-6 py-6 space-y-4 shadow-2xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg font-medium text-zinc-900 hover:text-black py-1.5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-zinc-100 space-y-2.5">
            <a
              href="#termin"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 bg-black text-white rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2 shadow"
            >
              <Calendar className="w-4 h-4" />
              <span>Termin online anfragen</span>
            </a>
            <a
              href={`tel:${SALON_DATA.phoneClean}`}
              className="w-full py-3 bg-zinc-100 text-zinc-900 rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2 border border-zinc-200"
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

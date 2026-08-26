import React, { useState } from 'react';
import { SALON_DATA } from '../data/content';
import { Phone, MapPin, Mail, ArrowUpRight, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'impressum' | 'datenschutz' | null>(null);

  return (
    <footer className="bg-[#071B33] text-white pt-20 pb-12 border-t-2 border-[#C59A44]/40 relative overflow-hidden">
      
      {/* Subtle ambient light glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C59A44]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Larger Logo (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <a href="#" className="inline-block group">
              <img
                src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Haarmonie_Logo_transparent_ergebnis.webp"
                alt="Haarmonie Matthias Zahn Logo"
                className="h-16 sm:h-18 lg:h-20 w-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <p className="text-sm text-slate-300 leading-relaxed max-w-md font-normal">
              Ihr Friseursalon im 100-jährigen Traditionshaus in der Parkstraße 15, Nienburg. Über 25 Jahre meisterhafte Schnittkunst, individuelle Typberatung und ganzheitliche Aveda-Pflanzenpflege.
            </p>
            <div className="flex items-center gap-4 text-xs text-[#D4AF37] font-semibold pt-1">
              <span>&bull; Friseurmeisterbetrieb</span>
              <span>&bull; Aveda Exklusiv-Partner</span>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#D4AF37]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="#ueber-uns" className="hover:text-white transition-colors">Über uns &amp; Team</a></li>
              <li><a href="#transformationen" className="hover:text-white transition-colors">Transformationen</a></li>
              <li><a href="#festfrisuren" className="hover:text-white transition-colors">Festfrisuren</a></li>
              <li><a href="#frisuren" className="hover:text-white transition-colors">Damen &amp; Herren</a></li>
              <li><a href="#tradition" className="hover:text-white transition-colors">Das Traditionshaus</a></li>
              <li><a href="#termin" className="hover:text-white transition-colors">Termin anfragen</a></li>
            </ul>
          </div>

          {/* Col 3: Öffnungszeiten (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#D4AF37]">
              Öffnungszeiten
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex justify-between pb-1 border-b border-white/5">
                <span>Di – Fr:</span>
                <span className="font-bold text-white">09 – 18 Uhr</span>
              </div>
              <div className="flex justify-between pb-1 border-b border-white/5">
                <span>Samstag:</span>
                <span className="font-bold text-white">08 – 13 Uhr</span>
              </div>
              <div className="flex justify-between text-slate-400 pt-1">
                <span>Mo &amp; So:</span>
                <span>Geschlossen</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 leading-tight pt-1">
              Kostenlose Parkplätze direkt vor dem Salon in der Parkstraße.
            </p>
          </div>

          {/* Col 4: Kontakt & Google Bewertung mit echtem Google G Icon (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#D4AF37]">
              Kontakt &amp; Trust
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href={`tel:${SALON_DATA.phoneClean}`}
                className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>{SALON_DATA.phone}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>Parkstraße 15, 31582 Nienburg</span>
              </div>
              <a
                href={`mailto:${SALON_DATA.email}`}
                className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>{SALON_DATA.email}</span>
              </a>
            </div>

            {/* Authentic Google Review Card with Google 'G' Logo Box */}
            <div className="pt-2">
              <a
                href={SALON_DATA.googleReviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-[#C59A44] p-3.5 rounded-2xl transition-all group w-full shadow-xs hover:shadow-md"
              >
                {/* Clean Google 'G' Icon Box */}
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white group-hover:text-[#D4AF37] transition-colors flex items-center gap-1">
                      Google-Bewertung <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="flex text-[#D4AF37] text-[11px]">★★★★★</div>
                    <span className="text-[10px] text-slate-300 font-semibold">4.8 (80+ Reviews)</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Legal & Agency Credit */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Haarmonie Matthias Zahn &bull; Alle Rechte vorbehalten.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setModalType('impressum')}
              className="hover:text-white transition-colors underline"
            >
              Impressum
            </button>
            <button
              onClick={() => setModalType('datenschutz')}
              className="hover:text-white transition-colors underline"
            >
              Datenschutz
            </button>
            <a
              href="https://scholz-friese-webdesign.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:underline font-medium"
            >
              Design: Scholz &amp; Friese
            </a>
          </div>
        </div>

      </div>

      {/* Legal Modals */}
      {modalType && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setModalType(null)}
        >
          <div
            className="bg-white text-[#1E2530] rounded-3xl max-w-xl w-full p-8 max-h-[85vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalType(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            {modalType === 'impressum' && (
              <div className="space-y-4 text-xs sm:text-sm text-left">
                <h3 className="text-2xl font-heading font-bold text-[#071B33]">Impressum</h3>
                <p><strong>Angaben gemäß § 5 TMG:</strong></p>
                <p>
                  Haarmonie Matthias Zahn<br />
                  Friseurmeister<br />
                  Parkstraße 15<br />
                  31582 Nienburg/Weser
                </p>
                <p>
                  <strong>Kontakt:</strong><br />
                  Telefon: 05021 - 91 35 08<br />
                  E-Mail: info@haarmonie-nienburg.com
                </p>
                <p>
                  <strong>Berufsbezeichnung:</strong> Friseurmeister (verliehen in Deutschland)<br />
                  <strong>Zuständige Kammer:</strong> Handwerkskammer Hannover
                </p>
              </div>
            )}

            {modalType === 'datenschutz' && (
              <div className="space-y-4 text-xs sm:text-sm text-left">
                <h3 className="text-2xl font-heading font-bold text-[#071B33]">Datenschutzerklärung</h3>
                <p>
                  Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO).
                </p>
                <p>
                  <strong>1. Datenerhebung bei Terminanfragen:</strong><br />
                  Daten, die Sie über unser Terminformular oder telefonisch übermitteln, nutzen wir ausschließlich zur Abstimmung Ihres Wunschtermins und zur Kundenbetreuung.
                </p>
                <p>
                  <strong>2. Ihre Rechte:</strong><br />
                  Sie haben jederzeit das Recht auf kostenfreie Auskunft, Berichtigung oder Löschung Ihrer Daten.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};

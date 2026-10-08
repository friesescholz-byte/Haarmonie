import React, { useState, useEffect } from 'react';
import { SALON_DATA } from '../data/content';
import { Phone, MapPin, Mail, ArrowUpRight, X, Shield, FileText, Accessibility } from 'lucide-react';

interface FooterProps {
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  const [modalType, setModalType] = useState<'impressum' | 'datenschutz' | 'barrierefreiheit' | null>(null);

  // Hash-basierte Navigation unterstützen (#impressum, #datenschutz, #barrierefreiheit)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#impressum') setModalType('impressum');
      else if (hash === '#datenschutz') setModalType('datenschutz');
      else if (hash === '#barrierefreiheit') setModalType('barrierefreiheit');
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const closeModal = () => {
    setModalType(null);
    if (['#impressum', '#datenschutz', '#barrierefreiheit'].includes(window.location.hash)) {
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  return (
    <footer className="bg-black text-white pt-20 pb-12 border-t border-zinc-800 relative overflow-hidden" id="kontakt">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-zinc-800">
          
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-5 space-y-5">
            <a href="#" className="inline-block group">
              <img
                src="https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Haarmonie_Logo_transparent_ergebnis.webp"
                alt="Haarmonie Matthias Zahn Logo"
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-md font-normal">
              Individuelle Schnittkunst mit Haltung und zeitgemäße Ästhetik. Parkstraße 15, 31582 Nienburg/Weser.
            </p>
            <div className="flex items-center gap-4 text-xs text-zinc-400 font-semibold pt-1 uppercase tracking-wider">
              <span>Friseurmeisterbetrieb &bull; Aveda Salon</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 uppercase tracking-wider">
              <li><a href="#ueber-uns" className="hover:text-white transition-colors">Über uns</a></li>
              <li><a href="#leistungen" className="hover:text-white transition-colors">Leistungen</a></li>
              <li><a href="#referenzen" className="hover:text-white transition-colors">Referenzen</a></li>
              <li><a href="#instagram" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#termin" className="hover:text-white transition-colors">Termin anfragen</a></li>
            </ul>
          </div>

          {/* Col 3: Öffnungszeiten */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white">
              Öffnungszeiten
            </h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <div className="flex justify-between pb-1 border-b border-zinc-800">
                <span>Di – Fr:</span>
                <span className="font-bold text-white">09 – 18 Uhr</span>
              </div>
              <div className="flex justify-between pb-1 border-b border-zinc-800">
                <span>Samstag:</span>
                <span className="font-bold text-white">08 – 13 Uhr</span>
              </div>
              <div className="flex justify-between text-zinc-500 pt-1">
                <span>Mo &amp; So:</span>
                <span>Geschlossen</span>
              </div>
            </div>
            <p className="text-[11px] text-zinc-500 leading-tight pt-1">
              Kostenlose Kundenparkplätze direkt vor dem Salon in der Parkstraße.
            </p>
          </div>

          {/* Col 4: Kontakt & Google Bewertung */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white">
              Kontakt
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-400">
              <a
                href={`tel:${SALON_DATA.phoneClean}`}
                className="flex items-center gap-2 text-white hover:text-zinc-300 transition-colors font-bold text-sm"
              >
                <Phone className="w-4 h-4 shrink-0 text-[#2F5E3D]" />
                <span>{SALON_DATA.phone}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-[#2F5E3D]" />
                <span>Parkstraße 15, 31582 Nienburg</span>
              </div>
              <a
                href={`mailto:${SALON_DATA.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0 text-[#2F5E3D]" />
                <span>{SALON_DATA.email}</span>
              </a>
              <a
                href={SALON_DATA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors pt-1"
              >
                <ArrowUpRight className="w-4 h-4 shrink-0 text-zinc-400" />
                <span>Instagram: {SALON_DATA.instagramHandle}</span>
              </a>
            </div>

            {/* Google Review Card */}
            <div className="pt-2">
              <a
                href={SALON_DATA.googleReviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 p-3.5 rounded-none transition-all group w-full shadow-xs hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-none bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white group-hover:text-zinc-200 transition-colors flex items-center gap-1">
                      Google-Bewertung <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="flex text-amber-400 text-[11px]">★★★★★</div>
                    <span className="text-[10px] text-zinc-400 font-semibold">4.8 (80+ Reviews)</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Haarmonie Matthias Zahn &bull; Alle Rechte vorbehalten.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            <button
              type="button"
              onClick={() => setModalType('impressum')}
              className="hover:text-white transition-colors underline cursor-pointer"
            >
              Impressum
            </button>
            <button
              type="button"
              onClick={() => setModalType('datenschutz')}
              className="hover:text-white transition-colors underline cursor-pointer"
            >
              Datenschutz
            </button>
            <button
              type="button"
              onClick={() => setModalType('barrierefreiheit')}
              className="hover:text-white transition-colors underline cursor-pointer"
            >
              Barrierefreiheitserklärung
            </button>
            <a
              href="https://scholz-friese-webdesign.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white underline font-medium"
            >
              Design by SF Webdesign
            </a>
          </div>
        </div>

      </div>

      {/* Legal Modals - Großformatig, sauber formatiert mit Tabs */}
      {modalType && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="bg-white text-zinc-900 rounded-none max-w-3xl w-full p-6 sm:p-10 max-h-[88vh] overflow-y-auto relative shadow-2xl border border-zinc-300 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 flex items-center justify-center hover:bg-zinc-100 text-zinc-500 hover:text-black rounded-none transition-colors cursor-pointer"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Tabs Header */}
            <div className="flex items-center gap-2 sm:gap-3 border-b border-zinc-200 pb-4 mb-6 pr-12 overflow-x-auto">
              <button
                type="button"
                onClick={() => setModalType('impressum')}
                className={`px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-none transition-colors cursor-pointer flex items-center gap-1.5 ${
                  modalType === 'impressum'
                    ? 'bg-black text-white'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Impressum</span>
              </button>

              <button
                type="button"
                onClick={() => setModalType('datenschutz')}
                className={`px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-none transition-colors cursor-pointer flex items-center gap-1.5 ${
                  modalType === 'datenschutz'
                    ? 'bg-black text-white'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Datenschutz</span>
              </button>

              <button
                type="button"
                onClick={() => setModalType('barrierefreiheit')}
                className={`px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-none transition-colors cursor-pointer flex items-center gap-1.5 ${
                  modalType === 'barrierefreiheit'
                    ? 'bg-black text-white'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                <Accessibility className="w-3.5 h-3.5" />
                <span>Barrierefreiheit</span>
              </button>
            </div>

            {/* TAB 1: IMPRESSUM */}
            {modalType === 'impressum' && (
              <div className="space-y-6 text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2F5E3D]">
                    Rechtliche Angaben
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-black mt-1">
                    Impressum
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
                  </p>
                </div>

                <div className="p-4 bg-stone-50 border-l-2 border-[#2F5E3D]">
                  <strong className="block text-black font-semibold text-sm">Haarmonie Matthias Zahn</strong>
                  <span>Friseurmeisterbetrieb &bull; Inhaber: Matthias Zahn</span><br />
                  <span>Parkstraße 15</span><br />
                  <span>31582 Nienburg/Weser</span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-heading font-bold text-black uppercase tracking-wider">
                    Kontakt
                  </h4>
                  <p>
                    Telefon: <a href="tel:+495021913508" className="text-black font-semibold underline">05021 - 91 35 08</a><br />
                    E-Mail: <a href="mailto:info@haarmonie-nienburg.com" className="text-black font-semibold underline">info@haarmonie-nienburg.com</a><br />
                    Website: <a href="https://haarmonie-nienburg.com" className="text-black underline">haarmonie-nienburg.com</a>
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-heading font-bold text-black uppercase tracking-wider">
                    Berufsbezeichnung &amp; Kammerzugehörigkeit
                  </h4>
                  <p>
                    <strong>Berufsbezeichnung:</strong> Friseurmeister (verliehen in der Bundesrepublik Deutschland)<br />
                    <strong>Zuständige Handwerkskammer:</strong> Handwerkskammer Hannover, Berliner Allee 17, 30175 Hannover<br />
                    <strong>Berufsrechtliche Regelungen:</strong> Handwerksordnung (HwO) (abrufbar unter: <a href="https://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noopener noreferrer" className="underline">www.gesetze-im-internet.de/hwo/</a>)
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-heading font-bold text-black uppercase tracking-wider">
                    Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                  </h4>
                  <p>
                    Matthias Zahn<br />
                    Parkstraße 15<br />
                    31582 Nienburg/Weser
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-heading font-bold text-black uppercase tracking-wider">
                    EU-Streitschlichtung &amp; Verbraucherstreitbeilegung
                  </h4>
                  <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="underline">https://ec.europa.eu/consumers/odr</a>. Unsere E-Mail-Adresse finden Sie oben im Impressum.
                  </p>
                  <p>
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-zinc-200">
                  <h4 className="text-sm font-heading font-bold text-black uppercase tracking-wider">
                    Haftung für Inhalte &amp; Links
                  </h4>
                  <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-zinc-200">
                  <h4 className="text-sm font-heading font-bold text-black uppercase tracking-wider">
                    Urheberrecht
                  </h4>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: DATENSCHUTZERKLÄRUNG */}
            {modalType === 'datenschutz' && (
              <div className="space-y-6 text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2F5E3D]">
                    Datenschutz &amp; Transparenz
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-black mt-1">
                    Datenschutzerklärung
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    Informationen zur Erhebung und Verarbeitung personenbezogener Daten gemäß DSGVO
                  </p>
                </div>

                {/* 1. Verantwortlicher */}
                <div className="space-y-2">
                  <h4 className="text-sm font-heading font-bold text-black uppercase tracking-wider">
                    1. Name und Kontaktdaten des Verantwortlichen
                  </h4>
                  <p>
                    Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze ist:
                  </p>
                  <div className="p-4 bg-stone-50 border-l-2 border-[#2F5E3D]">
                    <strong className="block text-black font-semibold text-sm">Haarmonie Matthias Zahn</strong>
                    <span>Parkstraße 15, 31582 Nienburg/Weser</span><br />
                    <span>Telefon: 05021 - 91 35 08</span><br />
                    <span>E-Mail: info@haarmonie-nienburg.com</span>
                  </div>
                </div>

                {/* 2. Hosting & Cloudflare CDN */}
                <div className="space-y-2">
                  <h4 className="text-sm font-heading font-bold text-black uppercase tracking-wider">
                    2. Bereitstellung der Website &amp; Server-Logfiles (Cloudflare Pages)
                  </h4>
                  <p>
                    Diese Website wird über Cloudflare Pages gehostet (Cloudflare Inc., 101 Townsend St, San Francisco, CA 94107, USA). Beim Aufrufen unserer Website erfasst der Provider automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Browsertyp und Browserversion sowie verwendetes Betriebssystem</li>
                    <li>Referrer URL (die zuvor besuchte Seite)</li>
                    <li>Hostname des zugreifenden Rechners / anonymisierte IP-Adresse</li>
                    <li>Uhrzeit und Datum der Serveranfrage</li>
                  </ul>
                  <p>
                    Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website.
                  </p>
                </div>

                {/* 3. Kontakt- & Terminformular */}
                <div className="space-y-2">
                  <h4 className="text-sm font-heading font-bold text-black uppercase tracking-wider">
                    3. Online-Terminformular &amp; Kontaktaufnahme
                  </h4>
                  <p>
                    Wenn Sie uns per Online-Formular eine Terminanfrage zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten (Name, Telefonnummer, E-Mail-Adresse, gewünschte Leistung, Wunschtermin und Nachricht) zwecks Bearbeitung der Terminanfrage und für den Fall von Anschlussfragen bei uns verarbeitet und gespeichert.
                  </p>
                  <p>
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen zusammenhängt. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
                  </p>
                </div>

                {/* 4. Cloudflare Turnstile */}
                <div className="space-y-2">
                  <h4 className="text-sm font-heading font-bold text-black uppercase tracking-wider">
                    4. Spam-Schutz mit Cloudflare Turnstile
                  </h4>
                  <p>
                    Wir nutzen Cloudflare Turnstile auf unserer Website zur Absicherung unseres Kontaktformulars gegen Spam, automatisierte Angriffe und Bots. Anbieter ist Cloudflare Inc. Turnstile prüft auf datenschutzfreundliche Weise anhand von browserbasierten Herausforderungen, ob die Eingabe durch einen Menschen oder missbräuchlich durch maschinelle Programme erfolgt, ohne dass Nutzer mühsame Bilderrätsel lösen müssen.
                  </p>
                  <p>
                    Die Nutzung erfolgt auf Grundlage unseres berechtigten Interesses an der Abwehr von Spam und Bot-Angriffen (Art. 6 Abs. 1 lit. f DSGVO).
                  </p>
                </div>

                {/* 5. Cookies & Consent-Management */}
                <div className="space-y-2">
                  <h4 className="text-sm font-heading font-bold text-black uppercase tracking-wider">
                    5. Cookies &amp; Consent Management (Cookie-Banner)
                  </h4>
                  <p>
                    Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät abgelegt werden und die Ihr Browser speichert. Einige Cookies sind technisch notwendig, um grundlegende Funktionen der Website bereitzustellen (Art. 6 Abs. 1 lit. f DSGVO).
                  </p>
                  <p>
                    Andere Cookies (z. B. für Analyse- und Marketingzwecke) werden ausschließlich nach Ihrer ausdrücklichen Einwilligung über unser Cookie-Banner / Consent-Management-Tool eingesetzt (Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre getroffene Auswahl jederzeit mit Wirkung für die Zukunft im Cookie-Banner anpassen oder widerrufen.
                  </p>
                </div>

                {/* 6. Google Analytics */}
                <div className="space-y-2">
                  <h4 className="text-sm font-heading font-bold text-black uppercase tracking-wider">
                    6. Webanalyse mit Google Analytics
                  </h4>
                  <p>
                    Soweit Sie über unser Consent-Tool Ihre Einwilligung erteilt haben, nutzt diese Website Google Analytics, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google“).
                  </p>
                  <p>
                    Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Wir haben die IP-Anonymisierung aktiviert, sodass Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union zuvor gekürzt wird.
                  </p>
                  <p>
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft über das Cookie-Banner widerrufen.
                  </p>
                </div>

                {/* 7. Meta-Pixel */}
                <div className="space-y-2">
                  <h4 className="text-sm font-heading font-bold text-black uppercase tracking-wider">
                    7. Meta-Pixel (Facebook- &amp; Instagram-Pixel)
                  </h4>
                  <p>
                    Soweit Sie im Cookie-Banner eingewilligt haben, setzen wir das Meta-Pixel der Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland ein. Mit Hilfe des Pixels kann das Verhalten von Seitenbesuchern nachverfolgt werden, nachdem diese durch Klick auf eine Werbeanzeige auf Facebook oder Instagram auf unsere Website weitergeleitet wurden.
                  </p>
                  <p>
                    Dies dient dazu, die Wirksamkeit von Werbeanzeigen für statistische und Marktforschungszwecke auszuwerten und zukünftige Werbemaßnahmen zu optimieren. Die erhobenen Daten sind für uns anonym. Meta speichert und verarbeitet die Daten jedoch, sodass eine Verbindung zum jeweiligen Nutzerprofil möglich ist.
                  </p>
                  <p>
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Sie können Ihre Einwilligung jederzeit über das Cookie-Banner widerrufen.
                  </p>
                </div>

                {/* 8. Google Maps & Google Bewertungen */}
                <div className="space-y-2">
                  <h4 className="text-sm font-heading font-bold text-black uppercase tracking-wider">
                    8. Google Maps &amp; Google Rezensionen
                  </h4>
                  <p>
                    Wir binden Kartendienste von Google Maps ein, um Ihnen unseren Salonstandort in der Parkstraße 15, 31582 Nienburg visuell darzustellen und eine einfache Anfahrtsplanung zu ermöglichen. Bei der Nutzung von Google Maps können Daten (insb. Ihre IP-Adresse) an Google übertragen werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO bzw. Ihre Einwilligung via Consent-Banner (Art. 6 Abs. 1 lit. a DSGVO).
                  </p>
                  <p>
                    Auf unserer Website sind zudem Verlinkungen und Auszüge aus unserem Google Unternehmensprofil mit echten Kundenrezensionen eingebunden, um Transparenz und Qualität zu belegen.
                  </p>
                </div>

                {/* 9. Instagram Feed */}
                <div className="space-y-2">
                  <h4 className="text-sm font-heading font-bold text-black uppercase tracking-wider">
                    9. Instagram-Präsenz &amp; Feed
                  </h4>
                  <p>
                    Wir unterhalten eine Onlinepräsenz auf Instagram (Meta Platforms Ireland Limited), um über unsere Friseurleistungen, Styling-Trends und den Salonalltag zu informieren (<a href="https://www.instagram.com/haarmonie_matthiaszahn/" target="_blank" rel="noopener noreferrer" className="underline">@haarmonie_matthiaszahn</a>). Wenn Sie unser Profil oder verlinkte Beiträge aufrufen, gelten die Datenschutzbestimmungen von Instagram / Meta.
                  </p>
                </div>

                {/* 10. Betroffenenrechte */}
                <div className="space-y-2 pt-2 border-t border-zinc-200">
                  <h4 className="text-sm font-heading font-bold text-black uppercase tracking-wider">
                    10. Ihre Rechte als betroffene Person
                  </h4>
                  <p>
                    Sie haben nach der DSGVO umfassende Rechte:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie können Auskunft über Ihre von uns verarbeiteten Daten verlangen.</li>
                    <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie können die unverzügliche Berichtigung unrichtiger Daten verlangen.</li>
                    <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer bei uns gespeicherten Daten verlangen.</li>
                    <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie können die Einschränkung der Verarbeitung verlangen.</li>
                    <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können die Übertragung Ihrer Daten an sich oder Dritte in einem gängigen Format verlangen.</li>
                    <li><strong>Recht auf Widerspruch (Art. 21 DSGVO):</strong> Sie können gegen Verarbeitungen auf Grundlage berechtigter Interessen Widerspruch einlegen.</li>
                    <li><strong>Recht auf Widerruf (Art. 7 Abs. 3 DSGVO):</strong> Einmal erteilte Einwilligungen können Sie jederzeit widerrufen.</li>
                  </ul>
                  <p className="pt-2">
                    <strong>Beschwerderecht bei der Aufsichtsbehörde:</strong><br />
                    Ihnen steht zudem das Recht zu, sich bei der zuständigen Aufsichtsbehörde zu beschweren: <em>Die Landesbeauftragte für den Datenschutz Niedersachsen, Prinzenstraße 5, 30159 Hannover</em> (<a href="https://www.lfd.niedersachsen.de" target="_blank" rel="noopener noreferrer" className="underline">www.lfd.niedersachsen.de</a>).
                  </p>
                </div>
              </div>
            )}

            {/* TAB 3: ERKLÄRUNG ZUR BARRIEREFREIHEIT */}
            {modalType === 'barrierefreiheit' && (
              <div className="space-y-6 text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2F5E3D]">
                    Digitale Inklusion &amp; BFSG
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-black mt-1">
                    Erklärung zur Barrierefreiheit
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    Stand: 08. Oktober 2026 &bull; Zuletzt überprüft und aktualisiert
                  </p>
                </div>

                <p>
                  Die Betreiberin dieser Website (<strong>Haarmonie Matthias Zahn</strong>, <a href="https://haarmonie-nienburg.com" className="underline">haarmonie-nienburg.com</a>) legt großen Wert auf eine möglichst barrierefreie, gleichberechtigte Zugänglichkeit ihrer digitalen Inhalte für alle Menschen.
                </p>

                <p>
                  Diese Website wurde unter Berücksichtigung moderner Standards für digitale Barrierefreiheit gestaltet und wird kontinuierlich weiter optimiert. Rechtsgrundlagen für diese Erklärung sind das Niedersächsische Behindertengleichstellungsgesetz (NBGG), die Barrierefreie-Informationstechnik-Verordnung (BITV 2.0) sowie das <strong>Barrierefreiheitsstärkungsgesetz (BFSG)</strong> in Umsetzung des European Accessibility Acts (EAA).
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-heading font-bold text-black uppercase tracking-wider">
                    1. Vereinbarkeit mit den Anforderungen
                  </h4>
                  <p>
                    Diese Website ist weitestgehend mit den Anforderungen der BITV 2.0 sowie der europäischen Norm EN 301 549 (entsprechend den Richtlinien für barrierefreie Webinhalte WCAG 2.1 / 2.2, Konformitätsstufe AA) vereinbar. Ein Großteil der Funktionen, Formulare und Inhalte ist tastaturbedienbar und semantisch strukturiert.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-heading font-bold text-black uppercase tracking-wider">
                    2. Noch bestehende Einschränkungen
                  </h4>
                  <p>
                    Wir arbeiten stetig an der Verbesserung unseres digitalen Angebots. Einzelne, noch bestehende Einschränkungen betreffen zurzeit:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong>Eingebettete Fremdinhalte &amp; Karten:</strong> Externe Dienste wie Google Maps oder Instagram-Widgets können herstellerbedingt noch Barrieren aufweisen, auf die wir nur bedingt Einfluss haben.</li>
                    <li><strong>Videos &amp; Untertitel:</strong> Unser Salon-Video bietet stimmungsvolle visuelle Eindrücke; eine vollständige Untertitelung oder Audiodeskription befindet sich in Vorbereitung.</li>
                    <li><strong>Farbkontraste in feinen Textdetails:</strong> Einzelne dezente Nuancen werden laufend optimiert, um auch bei starkem Lichteinfall optimale Lesbarkeit zu gewährleisten.</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-heading font-bold text-black uppercase tracking-wider">
                    3. Erstellung und Überprüfung dieser Erklärung
                  </h4>
                  <p>
                    Diese Erklärung zur Barrierefreiheit wurde im Oktober 2026 erstellt und durch eine interne Selbstbewertung nach den Kriterien der WCAG 2.1 / BITV 2.0 überprüft.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-heading font-bold text-black uppercase tracking-wider">
                    4. Feedback und Kontakt
                  </h4>
                  <p>
                    Sollten Ihnen Barrieren auf unserer Website auffallen oder Sie Hinweise zur Verbesserung der Zugänglichkeit haben, freuen wir uns über Ihre Rückmeldung. Bitte wenden Sie sich direkt an uns:
                  </p>
                  <div className="p-4 bg-stone-50 border-l-2 border-[#2F5E3D]">
                    <strong className="block text-black font-semibold text-sm">Haarmonie Matthias Zahn</strong>
                    <span>Parkstraße 15, 31582 Nienburg/Weser</span><br />
                    <span>Telefon: <a href="tel:+495021913508" className="underline font-semibold text-black">05021 - 91 35 08</a></span><br />
                    <span>E-Mail: <a href="mailto:info@haarmonie-nienburg.com" className="underline font-semibold text-black">info@haarmonie-nienburg.com</a></span>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-zinc-200">
                  <h4 className="text-sm font-heading font-bold text-black uppercase tracking-wider">
                    5. Durchsetzungsverfahren
                  </h4>
                  <p>
                    Falls Sie innerhalb von vier Wochen keine zufriedenstellende Antwort auf Ihre Anfrage zur Barrierefreiheit erhalten, können Sie sich an die zuständige Schlichtungs- und Durchsetzungsstelle des Landes Niedersachsen wenden:
                  </p>
                  <p className="p-3 bg-zinc-50 border border-zinc-200 text-xs">
                    <strong>Schlichtungsstelle nach dem NBGG bei der Landesbeauftragten für Menschen mit Behinderungen in Niedersachsen</strong><br />
                    Hannah-Arendt-Platz 2, 30159 Hannover<br />
                    Telefon: 0511 / 120-4010 &bull; E-Mail: schlichtungsstelle@ms.niedersachsen.de<br />
                    Internet: <a href="https://www.ms.niedersachsen.de" target="_blank" rel="noopener noreferrer" className="underline">www.ms.niedersachsen.de</a>
                  </p>
                </div>
              </div>
            )}

            {/* Modal Footer */}
            <div className="mt-8 pt-5 border-t border-zinc-200 flex justify-end">
              <button
                type="button"
                onClick={closeModal}
                className="bg-black hover:bg-zinc-800 text-white px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-none transition-colors cursor-pointer text-center"
              >
                Schließen
              </button>
            </div>

          </div>
        </div>
      )}
    </footer>
  );
};

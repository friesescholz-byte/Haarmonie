import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, User, Phone, Mail, Send, Loader2, AlertCircle, ShieldCheck } from 'lucide-react';

const TURNSTILE_SITEKEY = "0x4AAAAAAFRIHRsBMw2Rj7mH";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Schnitt & Styling',
    preferredDay: 'Dienstag',
    preferredTime: 'Vormittags (09:00 - 12:00 Uhr)',
    message: ''
  });

  const [turnstileToken, setTurnstileToken] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  // Turnstile Widget initialisieren (mit Polling & StrictMode-Schutz)
  useEffect(() => {
    let interval: any;

    const renderWidget = () => {
      if (turnstileRef.current && (window as any).turnstile && !widgetIdRef.current) {
        try {
          // Container leeren, um StrictMode-Doppelrender-Fehler zu vermeiden
          turnstileRef.current.innerHTML = '';

          widgetIdRef.current = (window as any).turnstile.render(turnstileRef.current, {
            sitekey: TURNSTILE_SITEKEY,
            callback: (token: string) => {
              setTurnstileToken(token);
              setErrorMessage('');
            },
            'expired-callback': () => setTurnstileToken(''),
            theme: 'light',
          });
          if (interval) clearInterval(interval);
        } catch (e) {
          console.error('Turnstile render error:', e);
        }
      }
    };

    renderWidget();

    if (!widgetIdRef.current) {
      interval = setInterval(() => {
        if ((window as any).turnstile) {
          renderWidget();
        }
      }, 100);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (widgetIdRef.current && (window as any).turnstile) {
        try {
          (window as any).turnstile.remove(widgetIdRef.current);
        } catch (e) {}
        widgetIdRef.current = null;
      }
    };
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!turnstileToken) {
      setErrorMessage('Bitte bestätigen Sie kurz den Spam-Schutz (Turnstile).');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://friesescholzwebdesign.pages.dev/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source: 'haarmonie',
          turnstileToken,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          preferredDay: formData.preferredDay,
          preferredTime: formData.preferredTime,
          message: formData.message,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success !== false) {
        setSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: 'Schnitt & Styling',
          preferredDay: 'Dienstag',
          preferredTime: 'Vormittags (09:00 - 12:00 Uhr)',
          message: ''
        });
        setTurnstileToken('');
      } else {
        setErrorMessage(result.message || 'Die Anfrage konnte leider nicht übermittelt werden. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.');
        if (widgetIdRef.current && (window as any).turnstile) {
          try {
            (window as any).turnstile.reset(widgetIdRef.current);
          } catch (e) {}
        }
        setTurnstileToken('');
      }
    } catch (err) {
      setErrorMessage('Verbindungsfehler beim Absenden. Bitte überprüfen Sie Ihre Internetverbindung oder rufen Sie uns direkt an.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white relative border-t border-zinc-200" id="termin">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#2F5E3D] bg-stone-50 border border-zinc-200 px-3.5 py-1 rounded-none">
            Online-Anfrage
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-black">
            Termin vereinbaren.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-zinc-600 font-normal">
            Senden Sie uns Ihren Wunschtermin. Wir bestätigen Ihre Reservierung telefonisch oder per E-Mail.
          </p>
        </div>

        {submitted ? (
          <div className="bg-stone-50/80 border border-zinc-300 rounded-none p-8 sm:p-12 text-center space-y-4 shadow-sm animate-fade-in">
            <CheckCircle2 className="w-12 h-12 text-[#2F5E3D] mx-auto" />
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-black">
              Vielen Dank für Ihre Anfrage!
            </h3>
            <p className="text-zinc-600 max-w-md mx-auto text-xs sm:text-sm leading-relaxed">
              Wir haben Ihre Terminanfrage erhalten und melden uns zeitnah persönlich bei Ihnen, um Ihren Besuch abzustimmen.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs font-bold uppercase tracking-wider text-black hover:text-[#2F5E3D] underline cursor-pointer py-2 transition-colors"
              >
                Weitere Anfrage senden
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-stone-50/70 border border-zinc-200 rounded-none p-5 sm:p-10 shadow-sm space-y-5 sm:space-y-6 text-left"
          >
            {errorMessage && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Hinweis:</strong> {errorMessage}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
                  Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-zinc-400 absolute left-4 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Ihr vollständiger Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-zinc-300 rounded-none text-base sm:text-sm focus:outline-none focus:border-black transition-colors text-black"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
                  Telefonnummer *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-zinc-400 absolute left-4 top-3.5" />
                  <input
                    type="tel"
                    required
                    placeholder="Für Rückfragen &amp; Bestätigung"
                    value={formData.phone}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (/^[0-9+\s()/-]*$/.test(val)) {
                        setFormData({ ...formData, phone: val });
                      }
                    }}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-zinc-300 rounded-none text-base sm:text-sm focus:outline-none focus:border-black transition-colors text-black"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
                  E-Mail-Adresse (optional)
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-zinc-400 absolute left-4 top-3.5" />
                  <input
                    type="email"
                    placeholder="ihre.email@beispiel.de"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-zinc-300 rounded-none text-base sm:text-sm focus:outline-none focus:border-black transition-colors text-black"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
                  Gewünschte Leistung
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-none text-base sm:text-sm focus:outline-none focus:border-black transition-colors text-black"
                >
                  <option>Schnitt &amp; Styling</option>
                  <option>Farbe &amp; Veredelung</option>
                  <option>Herren-Service</option>
                  <option>Haarverdichtung &amp; Haarverlängerung (SIMPLIE)</option>
                  <option>Beratungsgespräch / Individuell</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
                  Bevorzugter Wochentag
                </label>
                <select
                  value={formData.preferredDay}
                  onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-none text-base sm:text-sm focus:outline-none focus:border-black transition-colors text-black"
                >
                  <option>Dienstag</option>
                  <option>Mittwoch</option>
                  <option>Donnerstag</option>
                  <option>Freitag</option>
                  <option>Samstag</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
                  Bevorzugte Uhrzeit
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-none text-base sm:text-sm focus:outline-none focus:border-black transition-colors text-black"
                >
                  <option>Vormittags (09:00 - 12:00 Uhr)</option>
                  <option>Mittags (12:00 - 15:00 Uhr)</option>
                  <option>Nachmittags (15:00 - 18:00 Uhr)</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
                Nachricht oder individuelle Wünsche (optional)
              </label>
              <textarea
                rows={3}
                placeholder="Haben Sie besondere Wünsche oder Fragen zu Ihrem Besuch?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-4 bg-white border border-zinc-300 rounded-none text-base sm:text-sm focus:outline-none focus:border-black transition-colors text-black"
              />
            </div>

            {/* Cloudflare Turnstile Spam-Schutz */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-zinc-600 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#2F5E3D]" />
                <span>Spam-Schutz *</span>
              </div>
              <div ref={turnstileRef} className="min-h-[65px] flex items-center"></div>
            </div>

            <div className="pt-2 space-y-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-black hover:bg-zinc-800 disabled:bg-zinc-400 text-white font-bold text-xs uppercase tracking-widest rounded-none transition-all border border-black shadow-sm cursor-pointer min-h-[48px] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Wird gesendet...</span>
                  </>
                ) : (
                  <>
                    <span>Terminanfrage absenden</span>
                    <Send className="w-3.5 h-3.5 ml-1" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-zinc-500 text-center leading-relaxed">
                Mit dem Absenden erklären Sie sich mit der Verarbeitung Ihrer angegebenen Daten zur Bearbeitung Ihrer Terminanfrage gemäß unserer <a href="#datenschutz" className="underline hover:text-black">Datenschutzerklärung</a> einverstanden.
              </p>
            </div>
          </form>
        )}

      </div>
    </section>
  );
};

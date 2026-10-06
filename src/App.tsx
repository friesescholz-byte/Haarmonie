import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutTeam } from './components/AboutTeam';
import { ServicesSection } from './components/ServicesSection';
import { ReviewsAndVideo } from './components/ReviewsAndVideo';
import { InstagramFeed } from './components/InstagramFeed';
import { ContactForm } from './components/ContactForm';
import { LocationHours } from './components/LocationHours';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/AdminDashboard';

export function App() {
  const [isAdmin, setIsAdmin] = useState(() => {
    return window.location.pathname === '/admin' || window.location.hash === '#admin';
  });

  useEffect(() => {
    const handleLocation = () => {
      setIsAdmin(window.location.pathname === '/admin' || window.location.hash === '#admin');
    };

    window.addEventListener('popstate', handleLocation);
    window.addEventListener('hashchange', handleLocation);
    return () => {
      window.removeEventListener('popstate', handleLocation);
      window.removeEventListener('hashchange', handleLocation);
    };
  }, []);

  const openAdmin = () => {
    window.history.pushState(null, '', '/admin');
    setIsAdmin(true);
    window.scrollTo(0, 0);
  };

  const closeAdmin = () => {
    window.history.pushState(null, '', '/');
    setIsAdmin(false);
    window.scrollTo(0, 0);
  };

  if (isAdmin) {
    return <AdminDashboard onBack={closeAdmin} />;
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-black selection:text-white">
      <Navbar />
      <main>
        {/* 1. Weymann-Style Hero mit Haus-Foto & Haarmonie-Farben */}
        <Hero />

        {/* 2. Über uns – Frisurenbilder / Team mit Partner-Logos & Modal (inkl. SIMPLIE) */}
        <AboutTeam />

        {/* 4. Was wir für Ihr Haar tun (4 Kernleistungen: Schnitt & Styling, Farbe, Herren, Haarverdichtung) */}
        <ServicesSection />

        {/* 5. Referenzen & Video (3 Google-Bewertungen + Video "Was für ein besonderer Tag!") */}
        <ReviewsAndVideo />

        {/* 6. Haarmonie auf Instagram (6 Neueste Beiträge, Behold-ready) */}
        <InstagramFeed />

        {/* 7. Kontakt- & Terminformular (100% Eckig) */}
        <ContactForm />

        {/* 8. Öffnungszeiten, Standort & Google Maps (100% Eckig, ohne Ranken) */}
        <LocationHours />
      </main>
      <Footer onOpenAdmin={openAdmin} />
    </div>
  );
}

export default App;

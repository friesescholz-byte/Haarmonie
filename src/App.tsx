import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnerBrands } from './components/PartnerBrands';
import { AboutTeam } from './components/AboutTeam';
import { DamenStylesShowcase } from './components/DamenStylesShowcase';
import { TraditionStory } from './components/TraditionStory';
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
        {/* 1. Hero mit neuem Slogan & eckigem Design */}
        <Hero />

        {/* 2. Partner & Brands Logo-Wall mit transparenten Logos */}
        <PartnerBrands />

        {/* 3. Über uns mit dezenten Icons, eckigem Widescreen-Video & ohne Kacheln */}
        <AboutTeam />

        {/* 4. Damen- & Herren-Katalog (100% Eckig, einzeilige Headlines) */}
        <DamenStylesShowcase />

        {/* 5. Traditionshaus Statement (Haarmonie_05.webp sichtbar im Hintergrund) */}
        <TraditionStory />

        {/* 6. Kontakt- & Terminformular (100% Eckig) */}
        <ContactForm />

        {/* 7. Öffnungszeiten, Standort & farbige Google Maps (100% Eckig) */}
        <LocationHours />
      </main>
      <Footer onOpenAdmin={openAdmin} />
    </div>
  );
}

export default App;

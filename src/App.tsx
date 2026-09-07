import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnerBrands } from './components/PartnerBrands';
import { AboutTeam } from './components/AboutTeam';
import { BeforeAfterShowcase } from './components/BeforeAfterShowcase';
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
        {/* 1. Hero mit Haarmonie_05.webp & fokussierter Headline */}
        <Hero />

        {/* 2. Partner & Brands Logo-Wall */}
        <PartnerBrands />

        {/* 3. Über uns mit großem 16:9 Salon-Video */}
        <AboutTeam />

        {/* 4. Vorher/Nachher Transformationen */}
        <BeforeAfterShowcase />

        {/* 5. Damen- & Herren-Katalog (Headlines einzeilig, angebunden an Admin-Store) */}
        <DamenStylesShowcase />

        {/* 6. Traditionshaus Statement (Haarmonie_05.webp im Hintergrund sichtbar) */}
        <TraditionStory />

        {/* 7. Kontakt- & Terminformular */}
        <ContactForm />

        {/* 8. Öffnungszeiten, Standort & farbige Google Maps */}
        <LocationHours />
      </main>
      <Footer onOpenAdmin={openAdmin} />
    </div>
  );
}

export default App;

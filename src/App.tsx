import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutTeam } from './components/AboutTeam';
import { BeforeAfterShowcase } from './components/BeforeAfterShowcase';
import { FestiveGallery } from './components/FestiveGallery';
import { DamenStylesShowcase } from './components/DamenStylesShowcase';
import { TraditionStory } from './components/TraditionStory';
import { ContactForm } from './components/ContactForm';
import { LocationHours } from './components/LocationHours';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E2530] font-sans selection:bg-[#D4AF37] selection:text-[#0A0A0C]">
      <Navbar />
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Über uns & Team */}
        <AboutTeam />

        {/* 3. Transformationen (Vorher/Nachher) */}
        <BeforeAfterShowcase />

        {/* 4. Festfrisuren & Brautstyling */}
        <FestiveGallery />

        {/* 5. Damen- & Herren-Slider-Galerien */}
        <DamenStylesShowcase />

        {/* 6. 100 Jahre Traditionshaus Statement */}
        <TraditionStory />

        {/* 7. Kontakt- & Terminformular */}
        <ContactForm />

        {/* 8. Öffnungszeiten, Standort & Google Maps */}
        <LocationHours />
      </main>
      <Footer />
    </div>
  );
}

export default App;

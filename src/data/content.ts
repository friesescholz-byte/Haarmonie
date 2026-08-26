export interface Transformation {
  id: string;
  title: string;
  category: string;
  description: string;
  before: string;
  after: string;
}

export interface FestiveStyle {
  id: string;
  title: string;
  occasion: string;
  image: string;
  details: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle?: string;
  desc?: string;
  highlight?: string;
  image: string;
}

export type DamenStyle = GalleryItem;
export type HerrenStyle = GalleryItem;

export const SALON_DATA = {
  name: "Haarmonie Matthias Zahn",
  subname: "Friseurmeister & Aveda Salon",
  address: "Parkstraße 15",
  zipCity: "31582 Nienburg/Weser",
  phone: "05021 - 91 35 08",
  phoneClean: "+495021913508",
  email: "info@haarmonie-nienburg.com",
  experienceYears: "25+",
  buildingAge: "100+",
  googleRating: 4.8,
  googleReviewCount: "80+",
  googleReviewLink: "https://search.google.com/local/writereview?placeid=ChIJvfY1RVaMsEcRqTTb7uuS8ok",
  r2Base: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/",
  
  hours: [
    { day: "Montag", time: "Geschlossen", open: false },
    { day: "Dienstag", time: "09:00 – 18:00 Uhr", open: true, bestCall: "09:00 - 11:30" },
    { day: "Mittwoch", time: "09:00 – 18:00 Uhr", open: true, bestCall: "09:00 - 11:30" },
    { day: "Donnerstag", time: "09:00 – 18:00 Uhr", open: true, bestCall: "09:00 - 11:30" },
    { day: "Freitag", time: "09:00 – 18:00 Uhr", open: true, bestCall: "09:00 - 11:30" },
    { day: "Samstag", time: "08:00 – 13:00 Uhr", open: true, bestCall: "08:00 - 09:30" },
    { day: "Sonntag", time: "Geschlossen", open: false }
  ]
};

// 4 Echte Vorher-Nachher Transformationen
export const TRANSFORMATIONS: Transformation[] = [
  {
    id: "trans-1",
    title: "Volumen-Wellen & Tiefenglanz in Schokobraun",
    category: "Farbe & Styling",
    description: "Von glanzlosem, trockenem Haar zu einer elastischen Wellenpracht mit sattem Schokoladenglanz und gesund versiegelten Spitzen.",
    before: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image21.webp",
    after: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image20.webp"
  },
  {
    id: "trans-2",
    title: "Strahlendes Gold-Balayage & Soft Waves",
    category: "Balayage & Nuancierung",
    description: "Von mattem Ansatz zu lebendigen, lichtreflektierenden Blond-Nuancen mit fließendem Schwung durch schonende Aveda-Pflanzenfarben.",
    before: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image05.webp",
    after: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image06.webp"
  },
  {
    id: "trans-3",
    title: "Warmes Kastanien-Kupfer & Tiefenaufbau",
    category: "Botanical Hair Spa",
    description: "Gezielte pflanzliche Tiefenpflege und Veredelung mit warmen Kupfer-Reflexen für spürbare Geschmeidigkeit und natürliche Fülle.",
    before: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image18.webp",
    after: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image17.webp"
  },
  {
    id: "trans-4",
    title: "Kühles Luxus-Blond & Glamour-Waves",
    category: "Farbkorrektur & Schnitt",
    description: "Vollendete Farbharmonisierung zu einem klaren, kühlen Ash-Blond mit atemberaubendem Glanz und seidenweicher Haarlänge.",
    before: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image15.webp",
    after: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image14.webp"
  }
];

// Festliche Frauen Frisuren
export const FESTIVE_STYLES: FestiveStyle[] = [
  {
    id: "festive-1",
    title: "Klassische Hochsteckfrisur mit Perlen-Diadem",
    occasion: "Hochzeit, Gala & Abschlussball",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image01.webp",
    details: "Kunstvoll drapierter Chignon mit filigranem Perlen-Haarschmuck und zarten Nackensträhnen für einen unvergesslichen Festtag."
  },
  {
    id: "festive-2",
    title: "Tiefer Chignon mit floraler Schmuckspange",
    occasion: "Brautstyling & Festanlässe",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image02.webp",
    details: "Seidig glatte Formgebung im tiefen Nackenbereich, veredelt mit glitzerndem Blütenschmuck – puristisch, modern und elegant."
  },
  {
    id: "festive-3",
    title: "Flechtkranz-Updo mit frischem Blütenkranz",
    occasion: "Sommerfeste & Romantische Feiern",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image04.webp",
    details: "Akkurate Flechtkunst kombiniert mit zarten rosa Blumenkränzen für einen leichten, verspielten und sicheren Halt."
  }
];

// Damen Frisuren Katalog (8 Bilder für Slider-Pages)
export const DAMEN_GALLERY: GalleryItem[] = [
  {
    id: "damen-1",
    title: "Warmes Kupfer-Gold",
    subtitle: "Schonende Aveda-Pflanzenfarben",
    highlight: "Strahlende Farbbrillanz durch schonende Pflanzenpigmente",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image13.webp"
  },
  {
    id: "damen-2",
    title: "Dimensionales Ash-Blonde",
    subtitle: "Kühler Glanz & Soft Waves",
    highlight: "Kühler Glanz ohne Gelbstich dank Aveda Nuancierung",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image12.webp"
  },
  {
    id: "damen-3",
    title: "Voluminöser Präzisions-Bob",
    subtitle: "Perfekter Schwung & Schnittlinien",
    highlight: "Präzise Schnittlinien für perfekten Schwung bei jeder Kopfbewegung",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image11.webp"
  },
  {
    id: "damen-4",
    title: "Klassische Stufen & Fülle",
    subtitle: "Botanical Hair Spa Treatment",
    highlight: "Gesunde Spitzen und fühlbare Fülle durch Botanical Hair Treatment",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image10.webp"
  },
  {
    id: "damen-5",
    title: "Sonniges Honig-Balayage",
    subtitle: "Sanfte, fließende Lichtreflexe",
    highlight: "Fließende Übergänge für natürliches Rauswachsen",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image03.webp"
  },
  {
    id: "damen-6",
    title: "Samtiges Haselnuss-Brünett",
    subtitle: "Tiefenpflege & Glanzversiegelung",
    highlight: "Satte Farbtiefe mit reichhaltigen Ölen",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image07.webp"
  },
  {
    id: "damen-7",
    title: "Moderne Textur & Beach Waves",
    subtitle: "Mühelose Leichtigkeit im Alltag",
    highlight: "Natürliche Bewegung für jeden Haartyp",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image08.webp"
  },
  {
    id: "damen-8",
    title: "Elegantes Glossing & Glanz",
    subtitle: "Seidiges Finish ohne Haarschäden",
    highlight: "Schützender Schutzfilm für langanhaltende Farbintensität",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image09.webp"
  }
];

export const DAMEN_STYLES = DAMEN_GALLERY;

// Herren Frisuren Katalog (8 Bilder für Slider-Pages)
export const HERREN_GALLERY: GalleryItem[] = [
  {
    id: "herren-1",
    title: "Klassischer Business Cut",
    subtitle: "Präzision mit Schere & Maschine",
    desc: "Präzise Konturen mit Schere & Maschine für einen souveränen, gepflegten Auftritt.",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "herren-2",
    title: "Modern Textured Crop",
    subtitle: "Natürliche Bewegung & Matt-Paste",
    desc: "Natürliche Bewegung mit pflegenden Matt-Pasten für unkompliziertes Styling.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "herren-3",
    title: "Bart- & Konturenservice",
    subtitle: "Exakte Linien & Aveda Men Pflege",
    desc: "Exakte Linienführung und beruhigende Pflege für die sensible Männerhaut.",
    image: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "herren-4",
    title: "Gentlemen Scissor Cut",
    subtitle: "Zeitloser Schnitt & Styling",
    desc: "Klassische Scherenarbeit mit sanftem Fall und natürlicher Dynamik.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "herren-5",
    title: "Souveräner Side-Part",
    subtitle: "Klassischer Scheitel & Glanz",
    desc: "Scharfer Scheitel und gepflegte Seitenpartien für den eleganten Anlass.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "herren-6",
    title: "Moderne Kurzhaar-Kontur",
    subtitle: "Frischer Nacken & Schläfen-Fade",
    desc: "Saubere Übergänge an Schläfen und Nackenlinie für maximale Frische.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "herren-7",
    title: "Natürliche Locken & Fülle",
    subtitle: "Pflege & Definition mit Aveda",
    desc: "Form und Bändigung für naturgewelltes Männerhaar ohne Beschweren.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "herren-8",
    title: "Gepflegter Vollbart & Schnitt",
    subtitle: "Harmonie aus Bart & Kopfhaar",
    desc: "Perfekte Abstimmung von Bartkontur und Haarschnitt aus Meisterhand.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
  }
];

export const HERREN_STYLES = HERREN_GALLERY;

// Kundenrezensionen
export const REVIEWS = [
  {
    name: "Sabine K.",
    city: "Nienburg/Weser",
    stars: 5,
    text: "Seit über 10 Jahren mein absoluter Lieblingssalon. Matthias Zahn versteht sein Handwerk blind. Die Atmosphäre in dem alten Haus ist so friedlich und die Aveda-Produkte tun meinen Haaren einfach nur gut!",
    highlight: "Friedliche Altbau-Atmosphäre & Meisterhand"
  },
  {
    name: "Christian M.",
    city: "Nienburg",
    stars: 5,
    text: "Endlich ein Friseur, bei dem man nicht mit lauter Musik beschallt wird. Pünktlich dran, perfekte Beratung, meisterhafter Haarschnitt. Hier nimmt man sich noch echte Zeit für den Kunden.",
    highlight: "Keine Hektik, 100% Pünktlichkeit"
  },
  {
    name: "Laura W.",
    city: "Landkreis Nienburg",
    stars: 5,
    text: "Ich hatte furchtbare Angst vor einer Farbveränderung. Matthias hat mich so einfühlsam beraten und das Ergebnis mit der Pflanzenfarbe ist der Wahnsinn – seidig weich und strahlend. Vielen Dank!",
    highlight: "Sensationelle Pflanzenfarben"
  }
];

// Häufige Fragen (FAQ)
export const FAQS = [
  {
    q: "Warum vergibt Matthias Zahn Termine bevorzugt telefonisch?",
    a: "Jeder Mensch hat eine einzigartige Haarstruktur, Haardichte und individuelle Wünsche. In einem kurzen, persönlichen Gespräch (05021 - 913508) können wir die benötigte Behandlungszeit exakt planen. So vermeiden wir Wartezeiten und stellen sicher, dass wir ungeteilte Zeit für Sie reservieren."
  },
  {
    q: "Was unterscheidet Aveda-Pflanzenfarben von herkömmlichen Haarfarben?",
    a: "Aveda-Farben basieren auf bis zu 96% natürlich gewonnenen Inhaltsstoffen wie Jojoba-, Sonnenblumen- und Rizinusöl. Sie verzichten auf beißenden Ammoniakgeruch, schonen die empfindliche Kopfhaut und versiegeln das Haar mit einem langanhaltenden, natürlichen Glanz."
  },
  {
    q: "Was beinhaltet das Haarmonie Verwöhn-Ritual?",
    a: "Bei jedem Besuch begrüßen wir Sie mit einem beruhigenden Aveda Comforting Kräutertee, laden Sie zu einer kurzen Aroma-Reise mit reinen ätherischen Ölen ein und verwöhnen Sie am Waschbecken mit einer wohltuenden Kopf- und Nacken-Entspannungsmassage."
  },
  {
    q: "Gibt es Parkmöglichkeiten am Salon in der Parkstraße 15?",
    a: "Ja! Die Parkstraße ist eine ruhige, grüne Seitenstraße abseits des Fußgängerzonen-Trubels. Sie finden entspannte Parkmöglichkeiten direkt vor dem Salon oder im unmittelbaren Umfeld."
  }
];

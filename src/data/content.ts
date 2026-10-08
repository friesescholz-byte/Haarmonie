export interface Transformation {
  id: string;
  title: string;
  category: string;
  description: string;
  before: string;
  after: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle?: string;
  desc?: string;
  highlight?: string;
  image: string;
}

export interface PartnerBrand {
  name: string;
  logo: string;
  category: string;
  tagline: string;
  description: string;
  website?: string;
  modalImage?: string;
}

export interface ReviewItem {
  name: string;
  city: string;
  stars: number;
  highlight: string;
  text: string;
  date?: string;
}

export interface ServicePillar {
  id: string;
  number: string;
  title: string;
  tag: string;
  description: string;
  details: string[];
  image: string;
}

export const SALON_DATA = {
  name: "Haarmonie Matthias Zahn",
  subname: "Friseurmeister & Aveda Salon",
  address: "Parkstraße 15",
  zipCity: "31582 Nienburg/Weser",
  phone: "05021 - 91 35 08",
  phoneClean: "+495021913508",
  email: "info@haarmonie-nienburg.com",
  instagram: "https://www.instagram.com/haarmonie_matthiaszahn/",
  instagramHandle: "@haarmonie_matthiaszahn",
  experienceYears: "25+",
  googleRating: 4.8,
  googleReviewCount: "80+",
  googleReviewLink: "https://search.google.com/local/writereview?placeid=ChIJvfY1RVaMsEcRqTTb7uuS8ok",
  
  hours: [
    { day: "Montag", time: "Geschlossen", open: false },
    { day: "Dienstag", time: "09:00 – 18:00 Uhr", open: true },
    { day: "Mittwoch", time: "09:00 – 18:00 Uhr", open: true },
    { day: "Donnerstag", time: "09:00 – 18:00 Uhr", open: true },
    { day: "Freitag", time: "09:00 – 18:00 Uhr", open: true },
    { day: "Samstag", time: "08:00 – 13:00 Uhr", open: true },
    { day: "Sonntag", time: "Geschlossen", open: false }
  ]
};

// 5 Exklusive Partner Brands mit Modal-Informationen
export const PARTNER_BRANDS: PartnerBrand[] = [
  {
    name: "Aveda",
    logo: "/partners/aveda.webp",
    category: "Pflanzenhaarfarben & Botanical Care",
    tagline: "100% vegane Haarpflege im Einklang mit der Natur",
    description: "Aveda nutzt hochwirksame pflanzliche Essenzen statt aggressiver Chemie. Die Farben basieren auf bis zu 96% natürlich gewonnenen Inhaltsstoffen – für seidigen Glanz, brillante Nuancen und maximal geschontes Haar.",
    website: "https://www.aveda.de",
    modalImage: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Aveda_Missionsbild_01.webp"
  },
  {
    name: "SIMPLIE",
    logo: "/partners/simplie.webp",
    category: "Haarverdichtung & Verlängerung",
    tagline: "Die innovative Methode für unsichtbare Haarfülle",
    description: "Mit der professionellen SIMPLIE Methode schaffen wir natürliche Ergebnisse, die sich harmonisch und federleicht in Ihr eigenes Haar einfügen. Perfekt für schonende Verdichtung, mehr Länge und ein unvergleichlich volles Haargefühl.",
    website: "https://simpliehair.com/"
  },
  {
    name: "Nailberry",
    logo: "/partners/nailberry.webp",
    category: "L'Oxygéné Luxus-Nagelpflege",
    tagline: "Atmungsaktive & schadstofffreie Farben aus London",
    description: "Nailberry steht für mehrfach ausgezeichnete, 12-Free und sauerstoffdurchlässige Lacke. Schönheit und Gesundheit für Nägel ohne Kompromisse.",
    website: "https://www.nailberry.com",
    modalImage: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/CF_Herbst_RGB%20Mood%20Natur.jpg"
  },
  {
    name: "Hair Help the Oceans",
    logo: "/partners/hairhelp.webp",
    category: "Nachhaltiges Haar-Recycling",
    tagline: "Haarreste reinigen unsere Meere und Gewässer",
    description: "Wir werfen Schnitthaare nicht weg, sondern spenden sie an Hair Help the Oceans. Ein Kilo Haar filtert bis zu 8 Liter Öl aus Flüssen, Seen und Ozeanen – aktiver Umweltschutz direkt aus unserem Salon.",
    website: "https://hair-help-the-oceans.com"
  },
  {
    name: "Intercoiffure Mondial",
    logo: "/partners/intercoiffure.webp",
    category: "Internationale Vereinigung der Spitzenfriseure",
    tagline: "Das weltweite Gütesiegel für Handwerkskunst & Ästhetik",
    description: "Als Mitglied der Intercoiffure Mondial verpflichten wir uns zu höchsten Qualitätsstandards, ständiger Weiterbildung und zeitgemäßen Schnittechniken auf Weltklasseniveau.",
    website: "https://intercoiffure-mondial.com"
  }
];

// Die 4 Leistungs-Säulen für "Was wir für Ihr Haar tun."
export const SERVICES_DATA: ServicePillar[] = [
  {
    id: "schnitt-styling",
    number: "01",
    title: "Schnitt & Styling",
    tag: "Frauen & Männer",
    description: "Präzise Schnitte, typgerecht umgesetzt – für Frauen und Männer. Mit Schere, Maschine und dem richtigen Gespür für Form, Struktur und Fall.",
    details: [
      "Präzisions-Haarschnitte nach Typ & Kopfform",
      "Persönliche Texturierung für mühelosen Fall",
      "Klassische & moderne Föhn- und Stylingtechniken"
    ],
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image11.webp"
  },
  {
    id: "farbe-veredelung",
    number: "02",
    title: "Farbe & Veredelung",
    tag: "Pflanzenfarben & Glanz",
    description: "Von natürlichen Farbveränderungen bis zu ausdrucksstarken Looks. Wir entwickeln Farbkonzepte, die zu Ihrem Typ passen und Ihrem Haar Tiefe, Dimension und Lebendigkeit geben.",
    details: [
      "Individuelle Balayage- & Foliensträhnen",
      "Pflanzenbasierte Aveda Nuancierung & Glossing",
      "Sanfte Grauabdeckung mit natürlichem Lichtspiel"
    ],
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image06.webp"
  },
  {
    id: "herren",
    number: "03",
    title: "Herren",
    tag: "Handwerk & Kontur",
    description: "Exakte Schnitte mit Schere und Maschine, klassische Formen oder moderne Styles – mit besonderem Augenmerk auf Kontur, Übergänge und Details.",
    details: [
      "Klassische Scissor Cuts & moderne Fade-Übergänge",
      "Exakter Bart- & Konturenschnitt",
      "Kopfhaut-Erfrischung & Styling"
    ],
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "haarverdichtung",
    number: "04",
    title: "Haarverdichtung & Verlängerung",
    tag: "SIMPLIE Methode",
    description: "Mehr Fülle, mehr Länge oder einfach ein neues Haargefühl: Mit der professionellen SIMPLIE Methode schaffen wir natürliche Ergebnisse, die sich harmonisch in Ihr eigenes Haar einfügen.",
    details: [
      "Schonende Einarbeitung ohne Haarschäden",
      "Unsichtbare Übergänge & natürlicher Schwung",
      "Individuelle Farbanpassung an Ihr Eigenhaar"
    ],
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image14.webp"
  }
];

// 4 Echte Vorher-Nachher Transformationen
export const TRANSFORMATIONS: Transformation[] = [
  {
    id: "trans-1",
    title: "Volumen & Tiefenglanz in Schokobraun",
    category: "Farbe & Schnitt",
    description: "Satter Glanz, elastischer Schwung und gesund versiegelte Spitzen durch pflegende Farbveredelung.",
    before: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image21.webp",
    after: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image20.webp"
  },
  {
    id: "trans-2",
    title: "Natürliches Balayage & Soft Waves",
    category: "Balayage",
    description: "Fließende, sonnige Blond-Reflexe mit pflanzlicher Farbgebung für maximalen Haarschutz.",
    before: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image05.webp",
    after: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image06.webp"
  },
  {
    id: "trans-3",
    title: "Kastanien-Nuance & Tiefenaufbau",
    category: "Hair Spa",
    description: "Pflanzliche Lipid-Tiefenpflege mit warmen Reflexen für spürbare Dichte und Vitalität.",
    before: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image18.webp",
    after: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image17.webp"
  },
  {
    id: "trans-4",
    title: "Kühles Ash-Blond & Glamour-Waves",
    category: "Color Correction",
    description: "Präzise Nuancierung zu einem klaren, kühlen Blond mit atemberaubender Lichtspiegelung.",
    before: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image15.webp",
    after: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image14.webp"
  }
];

// Damen-Katalog (Schnitt, Coloration, Styling)
export const DAMEN_GALLERY: GalleryItem[] = [
  {
    id: "damen-1",
    title: "Warmes Kupfer-Gold",
    subtitle: "Pflanzenbasierte Nuancierung",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image13.webp"
  },
  {
    id: "damen-2",
    title: "Dimensionales Ash-Blond",
    subtitle: "Kühler Glanz & Soft Waves",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image12.webp"
  },
  {
    id: "damen-3",
    title: "Präzisions-Bob",
    subtitle: "Exakte Linienführung & Volumen",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image11.webp"
  },
  {
    id: "damen-4",
    title: "Klassische Stufen",
    subtitle: "Botanical Hair Spa Pflege",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image10.webp"
  },
  {
    id: "damen-5",
    title: "Sonniges Honig-Balayage",
    subtitle: "Sanft fließende Reflexe",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image03.webp"
  },
  {
    id: "damen-6",
    title: "Haselnuss-Brünett",
    subtitle: "Tiefenpflege & Glanzversiegelung",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image07.webp"
  },
  {
    id: "damen-7",
    title: "Moderne Textur",
    subtitle: "Mühelose Bewegung im Alltag",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image08.webp"
  },
  {
    id: "damen-8",
    title: "Seidiges Glossing",
    subtitle: "Maximale Lichtspiegelung",
    image: "https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/Haarmonie/Image09.webp"
  }
];

export const DAMEN_STYLES = DAMEN_GALLERY;

// Herren-Katalog (Handwerk, Fade, Bart)
export const HERREN_GALLERY: GalleryItem[] = [
  {
    id: "herren-1",
    title: "Klassischer Business Cut",
    subtitle: "Präzision mit Schere & Maschine",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "herren-2",
    title: "Textured Crop",
    subtitle: "Natürliche Bewegung & Struktur",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "herren-3",
    title: "Bart- & Konturenservice",
    subtitle: "Exakte Linien & beruhigende Pflege",
    image: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "herren-4",
    title: "Gentlemen Scissor Cut",
    subtitle: "Traditionelle Handwerkskunst",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "herren-5",
    title: "Side-Part Kontur",
    subtitle: "Klassischer Scheitel & Frische",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "herren-6",
    title: "Kurzhaar-Fade",
    subtitle: "Sauberer Nacken & Schläfenverlauf",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "herren-7",
    title: "Natürliche Locken & Fülle",
    subtitle: "Gezielte Bändigung & Definition",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "herren-8",
    title: "Vollbart & Schnitt",
    subtitle: "Harmonie aus Bart & Deckhaar",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
  }
];

export const HERREN_STYLES = HERREN_GALLERY;

// 3 Authentische Google-Bewertungen für den Salon
export const REVIEWS: ReviewItem[] = [
  {
    name: "Sabine K.",
    city: "Nienburg/Weser",
    stars: 5,
    highlight: "Friedliche Altbau-Atmosphäre & Meisterhand",
    text: "Seit über 10 Jahren mein absoluter Lieblingssalon. Matthias Zahn versteht sein Handwerk blind. Die Atmosphäre in dem alten Haus ist so friedlich und die Aveda-Produkte tun meinen Haaren einfach nur gut!",
    date: "vor 2 Monaten"
  },
  {
    name: "Christian M.",
    city: "Nienburg",
    stars: 5,
    highlight: "Keine Hektik, 100% Pünktlichkeit",
    text: "Endlich ein Friseur, bei dem man nicht mit lauter Musik beschallt wird. Pünktlich dran, perfekte Beratung, meisterhafter Haarschnitt. Hier nimmt man sich noch echte Zeit für den Kunden.",
    date: "vor 3 Wochen"
  },
  {
    name: "Laura W.",
    city: "Landkreis Nienburg",
    stars: 5,
    highlight: "Sensationelle Pflanzenfarben",
    text: "Ich hatte früher Angst vor Farbveränderungen. Matthias hat mich so einfühlsam beraten und das Ergebnis mit der Pflanzenfarbe ist der Wahnsinn – seidig weich, gesund und wunderschön strahlend.",
    date: "vor 1 Monat"
  }
];

// Compatibility Exports for unused components
export const FESTIVE_STYLES: any[] = [];
export const FAQS: any[] = [];


import React from 'react';

// =========================================================================
// HAARMONIE SIGNATURE BOTANICAL COLLECTION
// Exakt der filigrane, minimalistische Original-Stil (zarter Stängel,
// spitze Blätter mit Mittelrippe, gestrichelte Ranken-Spiraldots)
// =========================================================================

// -------------------------------------------------------------------------
// 1. VINE CLASSIC (Das exakte Original, das perfekt gefällt)
// ViewBox: 0 0 140 340
// -------------------------------------------------------------------------
export const VineClassic: React.FC<{ className?: string; flipped?: boolean }> = ({
  className = "w-32 h-80 text-[#2F5E3D]",
  flipped = false
}) => (
  <svg
    viewBox="0 0 140 340"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${flipped ? 'transform -scale-x-100' : ''}`}
    stroke="currentColor"
    strokeWidth="1.2"
  >
    {/* Hauptstängel mit natürlichem Schwung */}
    <path
      d="M70,340 C58,260 88,190 65,120 C50,75 75,30 68,0"
      stroke="#2F5E3D"
      strokeLinecap="round"
      strokeOpacity="0.85"
    />

    {/* Blatt 1 links unten mit sichtbarem Grün */}
    <path
      d="M66,285 C42,280 32,260 46,250 C60,260 66,274 66,285 Z"
      fill="#3D7850"
      fillOpacity="0.28"
      stroke="#2F5E3D"
      strokeOpacity="0.8"
    />
    <path d="M66,285 C55,270 48,260 46,250" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    {/* Blatt 2 rechts unten */}
    <path
      d="M76,235 C100,227 108,206 94,196 C80,206 76,221 76,235 Z"
      fill="#3D7850"
      fillOpacity="0.28"
      stroke="#2F5E3D"
      strokeOpacity="0.8"
    />
    <path d="M76,235 C86,220 92,208 94,196" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    {/* Blatt 3 links mitte */}
    <path
      d="M66,178 C42,170 32,148 47,138 C61,148 65,163 66,178 Z"
      fill="#3D7850"
      fillOpacity="0.32"
      stroke="#2F5E3D"
      strokeOpacity="0.85"
    />
    <path d="M66,178 C54,162 48,150 47,138" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    {/* Blatt 4 rechts mitte */}
    <path
      d="M69,122 C93,114 101,93 87,83 C73,93 69,108 69,122 Z"
      fill="#3D7850"
      fillOpacity="0.32"
      stroke="#2F5E3D"
      strokeOpacity="0.85"
    />
    <path d="M69,122 C79,106 85,95 87,83" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    {/* Blatt 5 links oben */}
    <path
      d="M62,65 C45,56 38,40 50,32 C61,40 62,52 62,65 Z"
      fill="#3D7850"
      fillOpacity="0.35"
      stroke="#2F5E3D"
      strokeOpacity="0.85"
    />
    <path d="M62,65 C55,52 51,42 50,32" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    {/* Blatt 6 ganz oben / Knospe */}
    <path
      d="M68,25 C78,16 75,5 68,0 C63,6 62,15 68,25 Z"
      fill="#438659"
      fillOpacity="0.4"
      stroke="#2F5E3D"
      strokeOpacity="0.9"
    />

    {/* Elegante gestrichelte Ranken-Spiralen */}
    <path
      d="M71,208 C90,190 86,170 74,173 C62,176 66,190 78,186"
      stroke="#3D7850"
      strokeWidth="0.9"
      strokeDasharray="3 2"
      opacity="0.8"
    />
    <path
      d="M64,102 C45,84 49,66 61,69 C73,72 69,86 57,82"
      stroke="#3D7850"
      strokeWidth="0.9"
      strokeDasharray="3 2"
      opacity="0.8"
    />
  </svg>
);

// -------------------------------------------------------------------------
// 2. VINE TALL (Große Kletterranke im exakt gleichen Stil – 680px hoch)
// ViewBox: 0 0 160 680
// -------------------------------------------------------------------------
export const VineTall: React.FC<{ className?: string; flipped?: boolean }> = ({
  className = "w-36 h-[600px] text-[#2F5E3D]",
  flipped = false
}) => (
  <svg
    viewBox="0 0 160 680"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${flipped ? 'transform -scale-x-100' : ''}`}
    stroke="currentColor"
    strokeWidth="1.2"
  >
    {/* Langer, eleganter Hauptstängel */}
    <path
      d="M80,680 C65,560 105,470 75,370 C55,270 95,180 72,90 C62,45 82,20 78,0"
      stroke="#2F5E3D"
      strokeLinecap="round"
      strokeOpacity="0.85"
    />

    {/* Blatt 1 links unten */}
    <path
      d="M76,620 C50,615 40,592 55,582 C70,592 76,608 76,620 Z"
      fill="#3D7850"
      fillOpacity="0.28"
      stroke="#2F5E3D"
      strokeOpacity="0.8"
    />
    <path d="M76,620 C64,604 57,593 55,582" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    {/* Blatt 2 rechts */}
    <path
      d="M86,565 C112,556 120,534 105,523 C90,534 86,550 86,565 Z"
      fill="#3D7850"
      fillOpacity="0.28"
      stroke="#2F5E3D"
      strokeOpacity="0.8"
    />
    <path d="M86,565 C97,549 103,536 105,523" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    {/* Blatt 3 links */}
    <path
      d="M78,505 C52,496 42,473 57,462 C72,473 78,489 78,505 Z"
      fill="#3D7850"
      fillOpacity="0.3"
      stroke="#2F5E3D"
      strokeOpacity="0.8"
    />
    <path d="M78,505 C65,488 59,474 57,462" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    {/* Blatt 4 rechts */}
    <path
      d="M82,440 C108,431 116,408 101,397 C86,408 82,424 82,440 Z"
      fill="#3D7850"
      fillOpacity="0.3"
      stroke="#2F5E3D"
      strokeOpacity="0.8"
    />
    <path d="M82,440 C93,423 99,410 101,397" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    {/* Blatt 5 links */}
    <path
      d="M72,370 C48,361 38,339 52,328 C66,339 72,354 72,370 Z"
      fill="#3D7850"
      fillOpacity="0.32"
      stroke="#2F5E3D"
      strokeOpacity="0.85"
    />
    <path d="M72,370 C60,353 54,340 52,328" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    {/* Blatt 6 rechts */}
    <path
      d="M80,305 C105,296 112,274 98,263 C84,274 80,290 80,305 Z"
      fill="#3D7850"
      fillOpacity="0.32"
      stroke="#2F5E3D"
      strokeOpacity="0.85"
    />
    <path d="M80,305 C91,289 96,276 98,263" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    {/* Blatt 7 links */}
    <path
      d="M74,235 C50,226 40,204 54,193 C68,204 74,219 74,235 Z"
      fill="#3D7850"
      fillOpacity="0.32"
      stroke="#2F5E3D"
      strokeOpacity="0.85"
    />
    <path d="M74,235 C62,218 56,205 54,193" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    {/* Blatt 8 rechts */}
    <path
      d="M80,165 C104,156 110,135 97,125 C84,135 80,150 80,165 Z"
      fill="#3D7850"
      fillOpacity="0.34"
      stroke="#2F5E3D"
      strokeOpacity="0.85"
    />
    <path d="M80,165 C90,150 95,138 97,125" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    {/* Blatt 9 links oben */}
    <path
      d="M70,95 C52,86 44,70 56,61 C68,70 70,82 70,95 Z"
      fill="#3D7850"
      fillOpacity="0.35"
      stroke="#2F5E3D"
      strokeOpacity="0.85"
    />
    <path d="M70,95 C62,81 58,71 56,61" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    {/* Blatt 10 Knospe oben */}
    <path
      d="M78,35 C88,25 84,10 78,0 C72,8 71,19 78,35 Z"
      fill="#438659"
      fillOpacity="0.4"
      stroke="#2F5E3D"
      strokeOpacity="0.9"
    />

    {/* Gestrichelte Spiralen */}
    <path
      d="M82,530 C102,510 98,488 84,492 C70,496 76,512 90,506"
      stroke="#3D7850"
      strokeWidth="0.9"
      strokeDasharray="3 2"
      opacity="0.8"
    />
    <path
      d="M74,335 C52,315 56,295 70,298 C84,301 78,317 64,312"
      stroke="#3D7850"
      strokeWidth="0.9"
      strokeDasharray="3 2"
      opacity="0.8"
    />
    <path
      d="M78,135 C58,116 62,96 75,99 C88,102 82,118 69,114"
      stroke="#3D7850"
      strokeWidth="0.9"
      strokeDasharray="3 2"
      opacity="0.8"
    />
  </svg>
);

// -------------------------------------------------------------------------
// 3. VINE CASCADING (Von oben herabhängende Ranke im exakt gleichen Stil)
// ViewBox: 0 0 260 520
// -------------------------------------------------------------------------
export const VineCascading: React.FC<{ className?: string; flipped?: boolean }> = ({
  className = "w-56 h-[480px] text-[#2F5E3D]",
  flipped = false
}) => (
  <svg
    viewBox="0 0 260 520"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${flipped ? 'transform -scale-x-100' : ''}`}
    stroke="currentColor"
    strokeWidth="1.2"
  >
    {/* Haupthängetrieb von oben rechts */}
    <path
      d="M200,0 C190,90 140,180 165,270 C185,350 145,440 150,520"
      stroke="#2F5E3D"
      strokeLinecap="round"
      strokeOpacity="0.85"
    />
    {/* Kleiner Seitenzweig */}
    <path
      d="M150,195 C110,230 90,290 80,360"
      stroke="#2F5E3D"
      strokeWidth="1.0"
      strokeLinecap="round"
      strokeOpacity="0.8"
    />

    {/* Blätter am Haupttrieb */}
    <path d="M195,50 C218,42 226,20 212,10 C198,20 195,35 195,50 Z" fill="#3D7850" fillOpacity="0.35" stroke="#2F5E3D" />
    <path d="M195,50 C205,35 210,23 212,10" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    <path d="M180,105 C155,96 148,74 162,64 C176,74 180,90 180,105 Z" fill="#3D7850" fillOpacity="0.32" stroke="#2F5E3D" />
    <path d="M180,105 C169,89 164,77 162,64" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    <path d="M152,165 C176,156 184,134 170,124 C156,134 152,150 152,165 Z" fill="#3D7850" fillOpacity="0.32" stroke="#2F5E3D" />
    <path d="M152,165 C163,149 168,136 170,124" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    <path d="M158,235 C132,226 124,204 138,194 C152,204 158,220 158,235 Z" fill="#3D7850" fillOpacity="0.3" stroke="#2F5E3D" />
    <path d="M158,235 C146,219 140,206 138,194" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    <path d="M165,305 C190,296 198,274 184,264 C170,274 165,290 165,305 Z" fill="#3D7850" fillOpacity="0.3" stroke="#2F5E3D" />
    <path d="M165,305 C176,289 182,276 184,264" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    <path d="M162,375 C136,366 128,344 142,334 C156,344 162,360 162,375 Z" fill="#3D7850" fillOpacity="0.28" stroke="#2F5E3D" />
    <path d="M162,375 C150,359 144,346 142,334" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    <path d="M152,445 C176,436 184,414 170,404 C156,414 152,430 152,445 Z" fill="#3D7850" fillOpacity="0.28" stroke="#2F5E3D" />
    <path d="M152,445 C163,429 168,416 170,404" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    <path d="M150,520 C158,506 155,492 148,485 C142,492 142,504 150,520 Z" fill="#438659" fillOpacity="0.4" stroke="#2F5E3D" />

    {/* Blätter am Seitenzweig */}
    <path d="M125,235 C102,226 95,206 108,197 C120,206 125,220 125,235 Z" fill="#3D7850" fillOpacity="0.28" stroke="#2F5E3D" />
    <path d="M125,235 C115,220 110,208 108,197" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    <path d="M96,305 C75,296 70,277 82,268 C94,277 96,290 96,305 Z" fill="#3D7850" fillOpacity="0.26" stroke="#2F5E3D" />
    <path d="M96,305 C88,290 84,279 82,268" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    <path d="M80,360 C87,348 85,338 78,332 C74,338 74,348 80,360 Z" fill="#438659" fillOpacity="0.35" stroke="#2F5E3D" />

    {/* Gestrichelte Spiralen */}
    <path d="M165,130 C185,110 180,90 166,93 C152,96 158,112 172,107" stroke="#3D7850" strokeWidth="0.9" strokeDasharray="3 2" opacity="0.8" />
    <path d="M155,340 C135,320 140,300 154,303 C168,306 162,322 148,317" stroke="#3D7850" strokeWidth="0.9" strokeDasharray="3 2" opacity="0.8" />
  </svg>
);

// -------------------------------------------------------------------------
// 4. VINE TRAVERSING (Querlaufende Ranke im exakt gleichen Stil)
// ViewBox: 0 0 800 160
// -------------------------------------------------------------------------
export const VineTraversing: React.FC<{ className?: string; flipped?: boolean }> = ({
  className = "w-full h-32 sm:h-40 text-[#2F5E3D]",
  flipped = false
}) => (
  <svg
    viewBox="0 0 800 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${flipped ? 'transform -scale-y-100' : ''}`}
    stroke="currentColor"
    strokeWidth="1.2"
  >
    {/* Sanft geschwungener Stängel quer über die Breite */}
    <path
      d="M0,110 C150,130 300,50 450,60 C600,70 700,120 800,90"
      stroke="#2F5E3D"
      strokeLinecap="round"
      strokeOpacity="0.85"
    />

    {/* Blätter entlang des Stängels */}
    <path d="M80,115 C75,90 55,80 48,95 C58,105 70,112 80,115 Z" fill="#3D7850" fillOpacity="0.28" stroke="#2F5E3D" />
    <path d="M80,115 C65,103 55,97 48,95" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    <path d="M180,112 C185,138 205,145 212,130 C202,120 190,115 180,112 Z" fill="#3D7850" fillOpacity="0.28" stroke="#2F5E3D" />
    <path d="M180,112 C195,123 205,128 212,130" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    <path d="M280,75 C275,50 255,40 248,55 C258,65 270,72 280,75 Z" fill="#3D7850" fillOpacity="0.3" stroke="#2F5E3D" />
    <path d="M280,75 C265,63 255,57 248,55" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    <path d="M380,55 C385,80 405,88 412,72 C402,62 390,57 380,55 Z" fill="#3D7850" fillOpacity="0.32" stroke="#2F5E3D" />
    <path d="M380,55 C395,67 405,71 412,72" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    <path d="M490,65 C485,40 465,30 458,45 C468,55 480,62 490,65 Z" fill="#3D7850" fillOpacity="0.32" stroke="#2F5E3D" />
    <path d="M490,65 C475,53 465,47 458,45" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    <path d="M600,75 C605,100 625,108 632,92 C622,82 610,77 600,75 Z" fill="#3D7850" fillOpacity="0.3" stroke="#2F5E3D" />
    <path d="M600,75 C615,87 625,91 632,92" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    <path d="M710,110 C705,85 685,75 678,90 C688,100 700,107 710,110 Z" fill="#3D7850" fillOpacity="0.28" stroke="#2F5E3D" />
    <path d="M710,110 C695,98 685,92 678,90" stroke="#2F5E3D" strokeWidth="0.8" strokeOpacity="0.55" />

    <path d="M800,90 C788,96 778,92 772,85 C780,82 790,83 800,90 Z" fill="#438659" fillOpacity="0.35" stroke="#2F5E3D" />

    {/* Gestrichelte Spiralen */}
    <path d="M220,105 C240,90 235,70 222,74 C208,78 212,92 226,88" stroke="#3D7850" strokeWidth="0.9" strokeDasharray="3 2" opacity="0.8" />
    <path d="M540,65 C560,50 555,30 542,34 C528,38 532,52 546,48" stroke="#3D7850" strokeWidth="0.9" strokeDasharray="3 2" opacity="0.8" />
  </svg>
);

// -------------------------------------------------------------------------
// 5. BOTANICAL BRANCH (Horizontaler Zweig)
// -------------------------------------------------------------------------
export const BotanicalBranch: React.FC<{ className?: string }> = ({
  className = "w-48 h-10 text-[#2F5E3D]"
}) => (
  <svg
    viewBox="0 0 220 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="1.2"
  >
    <path d="M10,18 C75,16 145,20 210,18" stroke="#2F5E3D" strokeLinecap="round" strokeOpacity="0.85" />
    <path d="M45,18 C40,9 28,9 31,17" fill="#3D7850" fillOpacity="0.3" stroke="#2F5E3D" strokeOpacity="0.7" />
    <path d="M68,18 C73,27 85,27 82,19" fill="#3D7850" fillOpacity="0.3" stroke="#2F5E3D" strokeOpacity="0.7" />
    <path d="M105,18 C100,9 88,9 91,17" fill="#3D7850" fillOpacity="0.3" stroke="#2F5E3D" strokeOpacity="0.7" />
    <path d="M128,18 C133,27 145,27 142,19" fill="#3D7850" fillOpacity="0.3" stroke="#2F5E3D" strokeOpacity="0.7" />
    <path d="M165,18 C160,9 148,9 151,17" fill="#3D7850" fillOpacity="0.3" stroke="#2F5E3D" strokeOpacity="0.7" />
    <path d="M188,18 C193,27 205,27 202,19" fill="#3D7850" fillOpacity="0.3" stroke="#2F5E3D" strokeOpacity="0.7" />
  </svg>
);

// -------------------------------------------------------------------------
// ALIASE & KOMPATIBILITÄT (Ersetzt alles nahtlos mit den Lieblingsranken!)
// -------------------------------------------------------------------------
export const BotanicalVine = VineClassic;
export const CascadingCanopy = VineCascading;
export const TraversingVine = VineTraversing;
export const TallClimberVine = VineTall;
export const VineIvy = VineClassic;
export const VineFern = VineTall;
export const VineEucalyptus = VineClassic;
export const VineOlive = VineTall;
export const VineWildHerb = VineTraversing;
export const CornerCascadeVine = VineCascading;

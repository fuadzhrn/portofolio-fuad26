import type { Localized } from "@/lib/i18n";

// Personal data (source: CLAUDE.md). No phone number: the repo is public.

// ─── Types ────────────────────────────────────────────────────────────────────

// A paragraph split into segments so key names can be highlighted.
export type TextSegment = { text: Localized | string; strong?: boolean };

export type Stat = { value: Localized | string; label: Localized };

export type Pillar = { title: Localized; description: Localized };

export type TimelineItem = {
  year: string;
  period: Localized;
  category: Localized;
  title: Localized;
  description: Localized;
  badge?: Localized;
  gold?: boolean;
  active?: boolean;
};

export type EducationItem = {
  kind: "education" | "pln" | "vale";
  title: Localized;
  place: string;
  detail?: Localized;
  period: Localized | string;
  badge?: Localized;
};

export type Certification = {
  name: string;
  issuer: string;
  validity: Localized;
  badge: Localized;
};

export type Publication = {
  slug: string; // project slug in data/projects.ts (title + doiUrl come from there)
  venue: Localized;
  year: string;
};

// ─── Identity ─────────────────────────────────────────────────────────────────

export const profile = {
  name: "Muh Fuad Zahran Firman",
  shortName: "M. Fuad Zahran",
  role: {
    en: "Web Developer & System Analyst — Data & AI Integration",
    id: "Web Developer & System Analyst — Integrasi Data & AI",
  },
  // The role split into the two hero badges.
  roleBadges: [
    { en: "Web Developer & System Analyst", id: "Web Developer & System Analyst" },
    { en: "Data & AI Integration", id: "Integrasi Data & AI" },
  ] as Localized[],
  location: { en: "Makassar, Indonesia", id: "Makassar, Indonesia" },
  availability: { en: "Open to work · 2026", id: "Terbuka untuk bekerja · 2026" },
  openTo: {
    en: "Open to Jakarta, Surabaya & remote",
    id: "Bersedia di Jakarta, Surabaya & remote",
  },
  email: "fuadzahran64@gmail.com",
  github: { handle: "fuadzhrn", url: "https://github.com/fuadzhrn" },
  linkedin: { handle: "fuadzahrann", url: "https://www.linkedin.com/in/fuadzahrann" },
  // TODO: ask owner — add public/cv/cv-fuad-zahran.pdf, then set this to its path.
  cvUrl: null as string | null,
};

// ─── Home: hero ───────────────────────────────────────────────────────────────

export const heroIntro: Localized = {
  en: "I build websites and real systems with Laravel, integrating AI (YOLO + OCR) and data analytics. Based in Makassar, Indonesia — open to Jakarta, Surabaya and remote.",
  id: "Saya membangun website dan sistem nyata dengan Laravel, lengkap dengan integrasi AI (YOLO + OCR) dan analitik data. Berbasis di Makassar, Indonesia — bersedia di Jakarta, Surabaya, maupun remote.",
};

export const stats: Stat[] = [
  { value: "5", label: { en: "Live client sites", id: "Situs klien live" } },
  { value: "2", label: { en: "SINTA 2 journals", id: "Jurnal SINTA 2" } },
  { value: "2", label: { en: "Corporate internships", id: "Magang korporat" } },
  { value: { en: "3.80", id: "3,80" }, label: { en: "GPA", id: "IPK" } },
];

// ─── Home: what I bring (4 pillars) ───────────────────────────────────────────

export const pillars: Pillar[] = [
  {
    title: { en: "Web Development", id: "Web Development" },
    description: {
      en: "Laravel, PHP and MySQL websites built end to end, with five live client sites.",
      id: "Website Laravel, PHP, dan MySQL yang dibangun dari awal sampai akhir, dengan lima situs klien yang sudah live.",
    },
  },
  {
    title: { en: "AI Integration", id: "Integrasi AI" },
    description: {
      en: "YOLO and OCR models served through FastAPI and integrated into real systems.",
      id: "Model YOLO dan OCR yang dijalankan lewat FastAPI dan terintegrasi ke sistem nyata.",
    },
  },
  {
    title: { en: "Computer Vision", id: "Computer Vision" },
    description: {
      en: "Face recognition and DeepSORT tracking to identify and follow people on camera.",
      id: "Face recognition dan pelacakan DeepSORT untuk mengenali dan mengikuti orang di kamera.",
    },
  },
  {
    title: { en: "Data Analytics", id: "Analitik Data" },
    description: {
      en: "SQL, Excel and Power BI dashboards that turn raw data into clear KPIs.",
      id: "Dashboard SQL, Excel, dan Power BI yang mengubah data mentah menjadi KPI yang jelas.",
    },
  },
];

// ─── Bio ──────────────────────────────────────────────────────────────────────

export const bio: TextSegment[][] = [
  [
    { text: { en: "I'm ", id: "Saya " } },
    { text: "Muh Fuad Zahran Firman", strong: true },
    { text: { en: ", a Computer Engineering graduate from ", id: ", lulusan Teknik Komputer " } },
    { text: "Universitas Negeri Makassar", strong: true },
    {
      text: {
        en: " (2026, GPA 3.80, Cum Laude) and a freelance web developer working with Laravel.",
        id: " (2026, IPK 3,80, Cum Laude) sekaligus web developer freelance yang bekerja dengan Laravel.",
      },
    },
  ],
  [
    {
      text: {
        en: "I have built real systems with AI integration (YOLO + OCR) and data analytics, completed two corporate internships, and published two papers in SINTA 2 journals.",
        id: "Saya sudah membangun sistem nyata dengan integrasi AI (YOLO + OCR) dan analitik data, menyelesaikan dua magang korporat, dan menerbitkan dua paper di jurnal SINTA 2.",
      },
    },
  ],
];

export const availabilityTags: { label: Localized; gold?: boolean }[] = [
  { label: { en: "Freelance Projects", id: "Proyek Freelance" }, gold: true },
  { label: { en: "Full-time Roles", id: "Posisi Full-time" } },
  { label: { en: "Jakarta · Surabaya · Remote", id: "Jakarta · Surabaya · Remote" } },
];

// ─── Timeline (newest first) ──────────────────────────────────────────────────

export const timeline: TimelineItem[] = [
  {
    year: "2026",
    period: { en: "Feb 2026 – Present", id: "Feb 2026 – Sekarang" },
    category: { en: "Work", id: "Pekerjaan" },
    title: {
      en: "Freelance Web Developer (Laravel)",
      id: "Web Developer Freelance (Laravel)",
    },
    description: {
      en: "Building client websites end to end with Laravel. Five client sites are live.",
      id: "Membangun website klien dari awal sampai akhir dengan Laravel. Lima situs klien sudah live.",
    },
    badge: { en: "5 live client sites", id: "5 situs klien live" },
    active: true,
  },
  {
    year: "2026",
    period: { en: "2026", id: "2026" }, // TODO: ask owner — year of entry
    category: { en: "Education", id: "Pendidikan" },
    title: {
      en: "S.Kom, Computer Engineering — Universitas Negeri Makassar",
      id: "S.Kom, Teknik Komputer — Universitas Negeri Makassar",
    },
    description: {
      en: "Graduated with a GPA of 3.80, Cum Laude.",
      id: "Lulus dengan IPK 3,80, predikat Cum Laude.",
    },
    badge: { en: "GPA 3.80 · Cum Laude", id: "IPK 3,80 · Cum Laude" },
    gold: true,
  },
  {
    year: "2025",
    period: { en: "Sep – Dec 2025", id: "Sep – Des 2025" },
    category: { en: "Internship", id: "Magang" },
    title: { en: "Intern — PT Vale Indonesia", id: "Magang — PT Vale Indonesia" },
    description: {
      en: "Talent, Performance & Culture. Built the BAJA Scholars system and a Power BI dashboard.",
      id: "Talent, Performance & Culture. Membangun sistem BAJA Scholars dan dashboard Power BI.",
    },
  },
  {
    year: "2024",
    period: { en: "Dec 2024 – early Feb 2025", id: "Des 2024 – awal Feb 2025" },
    category: { en: "Internship", id: "Magang" },
    title: {
      en: "Intern — PT PLN (Persero) UID Sulselrabar",
      id: "Magang — PT PLN (Persero) UID Sulselrabar",
    },
    description: {
      en: "Rural Electrification Division. Built the internship administration system.",
      id: "Divisi Listrik Perdesaan. Membangun sistem administrasi magang.",
    },
  },
];

// ─── About: education & internships ───────────────────────────────────────────

export const education: EducationItem[] = [
  {
    kind: "education",
    title: { en: "S.Kom, Computer Engineering", id: "S.Kom, Teknik Komputer" },
    place: "Universitas Negeri Makassar",
    period: "2026", // TODO: ask owner — year of entry
    badge: { en: "GPA 3.80 — Cum Laude", id: "IPK 3,80 — Cum Laude" },
  },
  {
    kind: "pln",
    title: {
      en: "Intern — Internship Administration System",
      id: "Magang — Sistem Administrasi Magang",
    },
    place: "PT PLN (Persero) UID Sulselrabar",
    detail: { en: "Rural Electrification Division", id: "Divisi Listrik Perdesaan" },
    period: { en: "Dec 2024 – early Feb 2025", id: "Des 2024 – awal Feb 2025" },
  },
  {
    kind: "vale",
    title: {
      en: "Intern — Talent, Performance & Culture",
      id: "Magang — Talent, Performance & Culture",
    },
    place: "PT Vale Indonesia",
    detail: {
      en: "BAJA Scholars system · Power BI dashboard",
      id: "Sistem BAJA Scholars · Dashboard Power BI",
    },
    period: { en: "Sep – Dec 2025", id: "Sep – Des 2025" },
    badge: { en: "Certified", id: "Bersertifikat" },
  },
];

// ─── About: certifications & publications ─────────────────────────────────────

export const certifications: Certification[] = [
  {
    name: "Program Analyst",
    issuer: "BNSP",
    validity: { en: "Valid until 2028", id: "Berlaku hingga 2028" },
    badge: { en: "Certified", id: "Tersertifikasi" },
  },
];

// Both SINTA 2. Only ONE is first-author.
export const publications: Publication[] = [
  {
    slug: "hotspot-clustering",
    venue: { en: "JUTIF 7(5) · First author", id: "JUTIF 7(5) · Penulis pertama" },
    year: "2026",
  },
  {
    slug: "papaya-nutrition-classification",
    venue: {
      en: "JITK 11(2) · Co-author (3rd of 8)",
      id: "JITK 11(2) · Penulis pendamping (ke-3 dari 8)",
    },
    year: "2025",
  },
];

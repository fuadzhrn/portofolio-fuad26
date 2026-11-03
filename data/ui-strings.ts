import type { Localized } from "@/lib/i18n";

// Interface labels (not project content). Render with t() from lib/i18n.

export const ui = {
  // ── Shared ──────────────────────────────────────────────────────────────────
  allProjects: { en: "All Projects", id: "Semua Proyek" },
  live: { en: "Live", id: "Live" },
  github: { en: "GitHub", id: "GitHub" },

  // ── /projects ───────────────────────────────────────────────────────────────
  filterAll: { en: "All", id: "Semua" },
  projectsTag: { en: "02 — projects", id: "02 — proyek" },
  allWork: { en: "All Work", id: "Semua Karya" },
  projectsHeadingLine1: {
    en: "From websites to research —",
    id: "Dari website hingga riset —",
  },
  projectsHeadingLine2: {
    en: "everything I have built.",
    id: "ini semua yang pernah saya bangun.",
  },
  projectsIntro: {
    en: "A collection of websites, academic work, research and professional experience that reflects my journey as a developer.",
    id: "Kumpulan proyek website, karya akademik, riset, dan pengalaman profesional yang mencerminkan perjalanan saya sebagai developer.",
  },
  readJournal: { en: "Read Journal", id: "Baca Jurnal" },
  details: { en: "Details", id: "Detail" },
  emptyCategory: {
    en: "No projects in this category.",
    id: "Tidak ada proyek di kategori ini.",
  },

  // ── /projects/[slug] ────────────────────────────────────────────────────────
  overview: { en: "Overview", id: "Ringkasan" },
  process: { en: "Process", id: "Proses Pengerjaan" },
  challenges: { en: "Challenges & Solutions", id: "Tantangan & Solusi" },
  problem: { en: "Problem:", id: "Masalah:" },
  solution: { en: "Solution:", id: "Solusi:" },
  results: { en: "Results", id: "Hasil" },
  projectInfo: { en: "Project Info", id: "Info Proyek" },
  year: { en: "Year", id: "Tahun" },
  category: { en: "Category", id: "Kategori" },
  organization: { en: "Organization", id: "Organisasi" },
  techStack: { en: "Tech Stack", id: "Tech Stack" },
  liveDemo: { en: "Live Demo", id: "Live Demo" },
  viewDoi: { en: "View DOI", id: "Lihat DOI" },
  previous: { en: "Previous", id: "Sebelumnya" },
  next: { en: "Next", id: "Berikutnya" },
  backToProjects: { en: "Back to projects", id: "Kembali ke proyek" },
  visitSite: { en: "Visit site", id: "Kunjungi situs" },
  period: { en: "Period", id: "Periode" },
  role: { en: "Role", id: "Peran" },
  links: { en: "Links", id: "Tautan" },
  metrics: { en: "Metrics", id: "Metrik" },
  howItWorks: { en: "How It Works", id: "Cara Kerja" },
  screenshots: { en: "Screenshots", id: "Tangkapan Layar" },
  demoVideo: { en: "Demo Video", id: "Video Demo" },
  screenshotAlt: { en: "screenshot", id: "tangkapan layar" },
  openImage: { en: "Open image", id: "Buka gambar" },
  closeImage: { en: "Close", id: "Tutup" },
  previousImage: { en: "Previous image", id: "Gambar sebelumnya" },
  nextImage: { en: "Next image", id: "Gambar berikutnya" },

  // ── Home: projects teaser ───────────────────────────────────────────────────
  featuredWork: { en: "Featured Work", id: "Karya Terbaik" },
  selectedProjects: { en: "Selected projects", id: "Proyek pilihan" },
  viewDetails: { en: "View Details", id: "Lihat Detail" },
  viewAllProjects: { en: "View All Projects", id: "Lihat Semua Proyek" },

  // ── Home: hero ──────────────────────────────────────────────────────────────
  hiIm: { en: "Hi, I'm", id: "Halo, saya" },
  viewProjects: { en: "View Projects", id: "Lihat Proyek" },
  contactMe: { en: "Contact Me", id: "Hubungi Saya" },

  // ── Home: about teaser ──────────────────────────────────────────────────────
  aboutMe: { en: "About Me", id: "Tentang Saya" },
  aboutTeaserHeading: { en: "A little about me", id: "Sedikit tentang saya" },
  openToWork: { en: "Open to Work", id: "Terbuka untuk Bekerja" },
  journey: { en: "Journey", id: "Perjalanan" },

  // ── Home: what I bring ──────────────────────────────────────────────────────
  whyMe: { en: "Why Me?", id: "Kenapa Saya?" },
  whatIBring: { en: "What I bring", id: "Nilai yang saya bawa" },

  // ── Home: skills ────────────────────────────────────────────────────────────
  skillsHeading: { en: "Skills & technologies", id: "Keahlian & teknologi" },
  skillsIntro: {
    en: "Skills I use and skills I'm learning.",
    id: "Skill yang saya kuasai dan sedang dipelajari.",
  },
  learning: { en: "= learning", id: "= sedang dipelajari" },
  languagesFrameworks: { en: "Languages & Frameworks", id: "Bahasa & Framework" },
  toolsPlatform: { en: "Tools & Platform", id: "Tools & Platform" },

  // ── Home: contact ───────────────────────────────────────────────────────────
  contact: { en: "Contact", id: "Kontak" },
  contactHeading: { en: "Let's work together", id: "Mari berkolaborasi" },
  contactIntro: {
    en: "Have a project or a role in mind? I'm always open to a conversation.",
    id: "Punya proyek atau lowongan yang cocok? Saya selalu terbuka untuk diskusi.",
  },
  // TODO: ask owner — confirm the "1 to 2 days" reply time.
  ctaCardTitle: { en: "Let's collaborate", id: "Mari berkolaborasi" },
  ctaCardBody: {
    en: "Have a project or a role in mind? Email me directly or message me on LinkedIn. I usually reply within 1 to 2 days.",
    id: "Punya proyek atau lowongan yang cocok? Kirim email langsung atau hubungi saya lewat LinkedIn. Biasanya saya membalas dalam 1–2 hari.",
  },
  emailMe: { en: "Email me", id: "Kirim email" },
  copyEmail: { en: "Copy email", id: "Salin email" },
  copied: { en: "Copied", id: "Tersalin" },
  contactInfo: { en: "Contact Info", id: "Info Kontak" },
  email: { en: "Email", id: "Email" },
  location: { en: "Location", id: "Lokasi" },
  linkedin: { en: "LinkedIn", id: "LinkedIn" },
  availabilityBefore: { en: "Currently", id: "Saat ini" },
  availabilityHighlight: { en: "open to work", id: "terbuka" },
  availabilityAfter: {
    en: "for freelance projects and full-time roles — Makassar, Jakarta, Surabaya or remote.",
    id: "untuk proyek freelance dan posisi full-time — Makassar, Jakarta, Surabaya, atau remote.",
  },

  // ── /about ──────────────────────────────────────────────────────────────────
  bioTag: { en: "01 — bio", id: "01 — bio" },
  bioTitle: { en: "More than just writing code.", id: "Lebih dari sekadar menulis kode." },
  downloadCv: { en: "Download CV", id: "Unduh CV" },
  timelineTag: { en: "02 — journey", id: "02 — perjalanan" },
  timelineEyebrow: { en: "Timeline", id: "Timeline" },
  timelineTitle: { en: "The journey that shaped me.", id: "Perjalanan yang membentuk saya." },
  educationTag: { en: "03 — education", id: "03 — pendidikan" },
  educationEyebrow: { en: "Education & Internships", id: "Pendidikan & Magang" },
  educationTitle: { en: "Where I studied and worked.", id: "Tempat saya belajar dan bekerja." },
  certsTag: { en: "04 — certifications", id: "04 — sertifikasi" },
  certsEyebrow: { en: "Certifications & Publications", id: "Sertifikasi & Publikasi" },
  certsTitle: {
    en: "Certified skills, published research.",
    id: "Kompetensi tersertifikasi, riset yang terbit.",
  },
  sinta2: { en: "SINTA 2", id: "SINTA 2" },
  ctaHeading: { en: "Interested in working together?", id: "Tertarik bekerja sama?" },
  ctaBody: {
    en: "I'm open to freelance projects and full-time roles — in Makassar, Jakarta, Surabaya or remote.",
    id: "Saya terbuka untuk proyek freelance dan posisi full-time — di Makassar, Jakarta, Surabaya, atau remote.",
  },

  // ── Sidebar ─────────────────────────────────────────────────────────────────
  navHome: { en: "Home", id: "Beranda" },
  navAbout: { en: "About", id: "Tentang" },
  navSkills: { en: "Skills", id: "Keahlian" },
  navProjects: { en: "Projects", id: "Proyek" },
  navContact: { en: "Contact", id: "Kontak" },
  menu: { en: "Menu", id: "Menu" },
  sidebarRole: { en: "Web Developer", id: "Web Developer" },
  sidebarOpenToWork: { en: "Open to work", id: "Terbuka untuk kerja" },
  rightsReserved: { en: "All rights reserved.", id: "Hak cipta dilindungi." },

  // ── Language toggle ─────────────────────────────────────────────────────────
  language: { en: "Language", id: "Bahasa" },
  switchToEnglish: { en: "Switch to English", id: "Ganti ke bahasa Inggris" },
  switchToIndonesian: { en: "Switch to Indonesian", id: "Ganti ke bahasa Indonesia" },

  // ── GitHub contributions ────────────────────────────────────────────────────
  githubContributions: { en: "GitHub Contributions", id: "Kontribusi GitHub" },
  contributions: { en: "contributions", id: "kontribusi" },
  contributionsLastYear: {
    en: "contributions in the last year",
    id: "kontribusi dalam setahun terakhir",
  },
  githubUnavailable: {
    en: "GitHub activity is unavailable right now.",
    id: "Aktivitas GitHub sedang tidak tersedia.",
  },
  viewOnGithub: { en: "View profile on GitHub", id: "Lihat profil di GitHub" },
  less: { en: "Less", id: "Kurang" },
  more: { en: "More", id: "Banyak" },
} satisfies Record<string, Localized>;

// Label lists (same { en, id } idea, but arrays).
export const uiLists = {
  months: {
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    id: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"],
  },
  // Sunday first, only every other row is labelled (as on GitHub).
  weekdays: {
    en: ["Sun", "", "Tue", "", "Thu", "", "Sat"],
    id: ["Min", "", "Sel", "", "Kam", "", "Sab"],
  },
  // BCP 47 locale for dates and numbers.
  locale: { en: ["en-US"], id: ["id-ID"] },
} satisfies Record<string, { en: string[]; id: string[] }>;

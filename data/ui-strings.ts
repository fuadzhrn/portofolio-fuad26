import type { Localized } from "@/lib/i18n";

// Interface labels (not project content). Render with t() from lib/i18n.

export const ui = {
  // ── Shared ──────────────────────────────────────────────────────────────────
  allProjects: { en: "All Projects", id: "Semua Proyek" },
  live: { en: "Live", id: "Live" },
  github: { en: "GitHub", id: "GitHub" },

  // ── /projects ───────────────────────────────────────────────────────────────
  filterAll: { en: "All", id: "Semua" },
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
  formName: { en: "Name", id: "Nama" },
  formNamePlaceholder: { en: "Your name", id: "Nama kamu" },
  formEmail: { en: "Email", id: "Email" },
  formEmailPlaceholder: { en: "you@email.com", id: "email@kamu.com" },
  formMessage: { en: "Message", id: "Pesan" },
  formMessagePlaceholder: {
    en: "Tell me about your project or role...",
    id: "Ceritakan tentang proyek atau kebutuhanmu...",
  },
  formSending: { en: "Opening email...", id: "Membuka email..." },
  formSent: { en: "Email opened ✓", id: "Email dibuka ✓" },
  formSend: { en: "Send Message", id: "Kirim Pesan" },
  mailSubjectFrom: { en: "Message from", id: "Pesan dari" },
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
} satisfies Record<string, Localized>;

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
} satisfies Record<string, Localized>;

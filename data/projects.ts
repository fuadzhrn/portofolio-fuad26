import type { Localized } from "@/lib/i18n";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ProjectCategory =
  | "websites"
  | "systems"
  | "ai-data"
  | "design-docs"
  | "research";

export type ProjectStatus = "live" | "completed" | "published";

export type Project = {
  slug: string;
  title: Localized;
  subtitle: Localized;
  // Primary category (used for the badge). `alsoIn` adds extra filter tabs.
  category: ProjectCategory;
  alsoIn?: ProjectCategory[];
  description: Localized;
  tech: string[];
  featured: boolean;
  // /images/projects/<slug>/<name>.webp — first image is the card thumbnail.
  images: string[];
  poster?: string;
  demoVideo?: string;
  year?: string;
  period?: Localized;
  role?: Localized;
  status: ProjectStatus;
  organization?: string;
  liveUrl?: string;
  githubUrl?: string;
  doiUrl?: string;
  journalName?: string;
  paperTitle?: string;
  // Extra badge in the detail hero (e.g. "Personal practice project").
  label?: Localized;
  note?: Localized;
  // Caption shown right under the project images (privacy / accuracy notes).
  imageNote?: Localized;
  overview?: Localized;
  process?: { phase: Localized; description: Localized }[];
  challenges?: { problem: Localized; solution: Localized }[];
  results?: { label: Localized; value: Localized | string }[];
};

// ─── Shared text ──────────────────────────────────────────────────────────────

const freelanceOverview: Localized = {
  en: "Freelance client project built with Laravel. I handled it solo from end to end: client acquisition, requirements, UI and admin CMS build, deployment with technical SEO, revisions and handover. The design follows the client's own brand.",
  id: "Proyek klien freelance yang dibangun dengan Laravel. Saya kerjakan sendiri dari awal sampai akhir: mendapatkan klien, menggali kebutuhan, membangun UI dan CMS admin, deploy beserta SEO teknis, revisi, hingga serah terima. Desainnya mengikuti brand milik klien.",
};

const freelanceRole: Localized = {
  en: "Solo full-stack developer",
  id: "Full-stack developer (solo)",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

export const projects: Project[] = [

  // ── Websites ────────────────────────────────────────────────────────────────

  {
    slug: "luxandgo",
    title: { en: "LUX&GO", id: "LUX&GO" },
    subtitle: {
      en: "Premium Mobility Membership Platform",
      id: "Platform Membership Mobilitas Premium",
    },
    category: "websites",
    status: "live",
    year: "2026",
    period: { en: "Sep 2026", id: "Sep 2026" },
    role: freelanceRole,
    featured: true,
    images: [
      "/images/projects/luxandgo/desktop.webp",
      "/images/projects/luxandgo/mobile.webp",
    ],
    tech: ["Laravel", "SQLite", "JavaScript"],
    liveUrl: "https://luxandgo.co.id",
    description: {
      en: "Real client website for a premium mobility membership: bilingual site (ID/EN), admin CMS and SEO, built solo end to end.",
      id: "Website klien sungguhan untuk membership mobilitas premium: situs dua bahasa (ID/EN), CMS admin, dan SEO, dikerjakan sendiri dari awal sampai akhir.",
    },
    overview: {
      en: "LUX&GO is a premium mobility membership platform and a live client project. As the solo full-stack developer, I built the bilingual website (Indonesian and English), an admin CMS so the client can manage content, and the SEO setup.",
      id: "LUX&GO adalah platform membership mobilitas premium dan proyek klien yang sudah live. Sebagai full-stack developer tunggal, saya membangun website dua bahasa (Indonesia dan Inggris), CMS admin agar klien bisa mengelola konten sendiri, serta pengaturan SEO.",
    },
  },

  {
    slug: "kalya-rentcar",
    title: { en: "Kalya Rentcar", id: "Kalya Rentcar" },
    subtitle: { en: "Car Rental Website", id: "Website Rental Mobil" },
    category: "websites",
    status: "live",
    year: "2026",
    period: { en: "Feb 2026", id: "Feb 2026" },
    role: freelanceRole,
    featured: false,
    images: ["/images/projects/kalya-rentcar/hero.webp"],
    tech: ["Laravel"],
    liveUrl: "https://kalyarentcar.com",
    description: {
      en: "Car rental website for a freelance client, with an admin CMS and technical SEO, delivered solo from first contact to handover.",
      id: "Website rental mobil untuk klien freelance, lengkap dengan CMS admin dan SEO teknis, dikerjakan sendiri dari kontak pertama hingga serah terima.",
    },
    overview: freelanceOverview,
  },

  {
    slug: "otobiz",
    title: { en: "OTOBIZ", id: "OTOBIZ" },
    subtitle: {
      en: "Vehicle Partnership Program",
      id: "Program Kemitraan Kendaraan",
    },
    category: "websites",
    status: "live",
    year: "2026",
    period: { en: "Apr 2026", id: "Apr 2026" },
    role: freelanceRole,
    featured: false,
    images: ["/images/projects/otobiz/hero.webp"],
    tech: ["Laravel"],
    liveUrl: "https://otobiz.co.id",
    description: {
      en: "Website for a vehicle partnership program, with an admin CMS and technical SEO, delivered solo from first contact to handover.",
      id: "Website program kemitraan kendaraan, lengkap dengan CMS admin dan SEO teknis, dikerjakan sendiri dari kontak pertama hingga serah terima.",
    },
    overview: freelanceOverview,
  },

  {
    slug: "biotra",
    title: { en: "BIOTRA", id: "BIOTRA" },
    subtitle: {
      en: "Villa & Apartment Partnership",
      id: "Kemitraan Villa & Apartemen",
    },
    category: "websites",
    status: "live",
    year: "2026",
    period: { en: "Jun 2026", id: "Jun 2026" },
    role: freelanceRole,
    featured: false,
    images: ["/images/projects/biotra/hero.webp"],
    tech: ["Laravel"],
    liveUrl: "https://biotra.id",
    description: {
      en: "Website for a villa and apartment partnership, with an admin CMS and technical SEO, delivered solo from first contact to handover.",
      id: "Website kemitraan villa dan apartemen, lengkap dengan CMS admin dan SEO teknis, dikerjakan sendiri dari kontak pertama hingga serah terima.",
    },
    overview: freelanceOverview,
  },

  {
    slug: "carasset",
    title: { en: "CarAsset", id: "CarAsset" },
    subtitle: {
      en: "Productive Vehicle Asset Platform",
      id: "Platform Aset Kendaraan Produktif",
    },
    category: "websites",
    status: "live",
    year: "2026",
    period: { en: "Jul 2026", id: "Jul 2026" },
    role: freelanceRole,
    featured: false,
    images: ["/images/projects/carasset/hero.webp"],
    tech: ["Laravel"],
    liveUrl: "https://carassetofficial.com",
    description: {
      en: "Website for a productive vehicle asset platform, with an admin CMS and technical SEO, delivered solo from first contact to handover.",
      id: "Website platform aset kendaraan produktif, lengkap dengan CMS admin dan SEO teknis, dikerjakan sendiri dari kontak pertama hingga serah terima.",
    },
    overview: freelanceOverview,
  },

  // ── Systems & Apps ──────────────────────────────────────────────────────────

  {
    slug: "multi-branch-pos",
    title: { en: "Multi-Branch POS System", id: "Sistem POS Multi-Cabang" },
    subtitle: {
      en: "Point of Sale for Agricultural Retail",
      id: "Point of Sale untuk Ritel Pertanian",
    },
    category: "systems",
    status: "completed",
    year: "2026",
    // TODO: ask owner — period
    featured: true,
    images: [
      "/images/projects/multi-branch-pos/dashboard.webp",
      "/images/projects/multi-branch-pos/checkout.webp",
      "/images/projects/multi-branch-pos/stock-transfer.webp",
    ],
    poster: "/images/projects/multi-branch-pos/pos-poster.jpg",
    demoVideo: "/videos/pos-checkout-demo.mp4",
    tech: ["Laravel 13", "PHP 8.3", "MySQL 8.4", "Blade", "Vanilla JS"],
    description: {
      en: "Personal project: a POS for agricultural retail with multi-branch stock, transfers, expenses, profit reports and role-based dashboards.",
      id: "Proyek pribadi: sistem POS untuk ritel pertanian dengan stok multi-cabang, transfer stok, pengeluaran, laporan laba, dan dashboard per peran.",
    },
    overview: {
      en: "A point-of-sale system for an agricultural retail use case, with three roles (Owner, Admin, Cashier). It covers multi-branch stock, stock transfers between branches, expenses, profit reports and dashboards.",
      id: "Sistem point of sale untuk kasus ritel pertanian dengan tiga peran (Owner, Admin, Kasir). Fiturnya mencakup stok multi-cabang, transfer stok antarcabang, pencatatan pengeluaran, laporan laba, dan dashboard.",
    },
    challenges: [
      {
        problem: {
          en: "Sales and stock must stay consistent when several cashiers sell at once",
          id: "Penjualan dan stok harus tetap konsisten saat beberapa kasir bertransaksi bersamaan",
        },
        solution: {
          en: "Database transactions with row locking.",
          id: "Transaksi database dengan row locking.",
        },
      },
      {
        problem: {
          en: "A retried checkout must not create a duplicate sale",
          id: "Checkout yang diulang tidak boleh menghasilkan penjualan ganda",
        },
        solution: {
          en: "An idempotent checkout token.",
          id: "Token checkout yang idempoten.",
        },
      },
      {
        problem: {
          en: "Cost per item differs between branches",
          id: "Harga pokok barang berbeda di tiap cabang",
        },
        solution: {
          en: "Weighted average cost, calculated per branch.",
          id: "Weighted average cost yang dihitung per cabang.",
        },
      },
      {
        problem: {
          en: "Later edits must not change past history",
          id: "Perubahan data di kemudian hari tidak boleh mengubah riwayat",
        },
        solution: {
          en: "An audit log and data snapshots.",
          id: "Audit log dan snapshot data.",
        },
      },
    ],
    // TODO: ask owner — LinkedIn link to the checkout demo video
  },

  {
    slug: "pln-internship-system",
    title: {
      en: "PLN Internship Administration System",
      id: "Sistem Administrasi Magang PLN",
    },
    subtitle: {
      en: "PLN UID Sulselrabar · Rural Electrification Division",
      id: "PLN UID Sulselrabar · Divisi Listrik Perdesaan",
    },
    category: "systems",
    status: "live",
    year: "2024–2025",
    period: {
      en: "Dec 2024 to early Feb 2025",
      id: "Des 2024 hingga awal Feb 2025",
    },
    role: {
      en: "Intern · Primary developer in a 3-person intern team",
      id: "Mahasiswa magang · Developer utama dalam tim magang 3 orang",
    },
    organization: "PLN UID Sulselrabar",
    featured: false,
    images: ["/images/projects/pln-internship-system/dashboard.webp"],
    tech: ["PHP", "JavaScript", "Bootstrap"],
    description: {
      en: "Internship administration system that digitized response-letter and certificate workflows. Still in use today.",
      id: "Sistem administrasi magang yang mendigitalkan alur surat balasan dan sertifikat. Masih dipakai hingga sekarang.",
    },
    overview: {
      en: "Built during my internship at PLN UID Sulselrabar. I was the primary developer in a 3-person intern team and handled the UI design, coding and deployment myself. The system digitized the response-letter and certificate workflows and is still in use today.",
      id: "Dibangun selama magang di PLN UID Sulselrabar. Saya menjadi developer utama dalam tim magang 3 orang dan menangani sendiri desain UI, coding, dan deployment. Sistem ini mendigitalkan alur surat balasan dan sertifikat, dan masih dipakai hingga sekarang.",
    },
    results: [
      { label: { en: "Interns managed", id: "Mahasiswa magang dikelola" }, value: "189" },
      { label: { en: "Response letters", id: "Surat balasan" }, value: "168" },
      { label: { en: "Certificates", id: "Sertifikat" }, value: "74" },
    ],
    note: {
      en: "168 response letters and 74 certificates issued. Figures as of September 2026.",
      id: "168 surat balasan dan 74 sertifikat diterbitkan. Data per September 2026.",
    },
  },

  {
    slug: "vale-baja-scholars",
    title: { en: "BAJA Scholars", id: "BAJA Scholars" },
    subtitle: {
      en: "Employee Children Scholarship System · PT Vale Indonesia",
      id: "Sistem Beasiswa Anak Karyawan · PT Vale Indonesia",
    },
    category: "systems",
    status: "completed",
    year: "2025",
    period: { en: "Sep to Dec 2025", id: "Sep hingga Des 2025" },
    role: {
      en: "Intern, Talent, Performance & Culture · Built solo",
      id: "Mahasiswa magang, Talent, Performance & Culture · Dikerjakan sendiri",
    },
    organization: "PT Vale Indonesia",
    featured: true,
    images: [
      "/images/projects/vale-baja-scholars/gpa-check.webp",
      "/images/projects/vale-baja-scholars/scholarship-select.webp",
      "/images/projects/vale-baja-scholars/applications.webp",
    ],
    tech: ["Laravel", "MySQL", "Bootstrap", "Python", "FastAPI", "YOLO", "OCR"],
    description: {
      en: "Scholarship system with an AI GPA check: YOLO finds the GPA on an uploaded transcript, OCR reads it, and rules decide eligibility.",
      id: "Sistem beasiswa dengan cek IPK berbasis AI: YOLO menemukan IPK di transkrip yang diunggah, OCR membacanya, lalu aturan menentukan kelayakan.",
    },
    overview: {
      en: "A scholarship system for children of PT Vale Indonesia employees, built solo from UI design to deployment during my internship. A Laravel web app works with a Python FastAPI service that runs YOLO and OCR to check transcripts automatically.",
      id: "Sistem beasiswa untuk anak karyawan PT Vale Indonesia yang saya bangun sendiri, dari desain UI hingga deployment, selama magang. Aplikasi web Laravel terhubung dengan layanan Python FastAPI yang menjalankan YOLO dan OCR untuk memeriksa transkrip secara otomatis.",
    },
    process: [
      {
        phase: { en: "Upload", id: "Unggah" },
        description: {
          en: "The applicant uploads their transcript.",
          id: "Pendaftar mengunggah transkrip nilai.",
        },
      },
      {
        phase: { en: "Detect", id: "Deteksi" },
        description: {
          en: "YOLO locates the GPA region on the transcript.",
          id: "YOLO menemukan area IPK pada transkrip.",
        },
      },
      {
        phase: { en: "Read", id: "Baca" },
        description: {
          en: "OCR reads the GPA value.",
          id: "OCR membaca nilai IPK.",
        },
      },
      {
        phase: { en: "Decide", id: "Putuskan" },
        description: {
          en: "A rule checks GPA ≥ 3.20. Results with confidence of 50% or more are decided automatically; lower ones go to manual review.",
          id: "Aturan memeriksa IPK ≥ 3,20. Hasil dengan tingkat kepercayaan 50% ke atas diputuskan otomatis; di bawah itu masuk ke review manual.",
        },
      },
    ],
    results: [
      { label: { en: "Minimum GPA", id: "IPK minimum" }, value: { en: "3.20", id: "3,20" } },
      { label: { en: "Auto-decision confidence", id: "Kepercayaan keputusan otomatis" }, value: "≥ 50%" },
    ],
  },

  // ── AI & Data ───────────────────────────────────────────────────────────────

  {
    slug: "activity-monitoring-cv",
    title: {
      en: "Real-Time Activity Monitoring",
      id: "Monitoring Aktivitas Real-Time",
    },
    subtitle: { en: "Computer Vision", id: "Computer Vision" },
    category: "ai-data",
    status: "completed",
    year: "2025",
    // TODO: ask owner — period
    role: {
      en: "Team of 2 · Face recognition pipeline and activity model training",
      id: "Tim 2 orang · Pipeline face recognition dan training model aktivitas",
    },
    featured: false,
    images: ["/images/projects/activity-monitoring-cv/detection.webp"],
    tech: ["YOLOv8", "OpenCV", "Python", "DeepSORT"],
    description: {
      en: "Recognizes who is on camera, tracks them, and classifies their activity: Working, Mobile Phone Use, Sleeping or No Activity.",
      id: "Mengenali siapa yang ada di kamera, melacaknya, lalu mengklasifikasikan aktivitasnya: Working, Mobile Phone Use, Sleeping, atau No Activity.",
    },
    overview: {
      en: "A real-time monitoring system built by a team of two. Face recognition identifies names, DeepSORT keeps tracking IDs, and YOLOv8 (m/s) classifies four activities. My part was the face recognition pipeline and training the activity model.",
      id: "Sistem monitoring real-time yang dibangun oleh tim dua orang. Face recognition mengenali nama, DeepSORT menjaga ID pelacakan, dan YOLOv8 (m/s) mengklasifikasikan empat aktivitas. Bagian saya adalah pipeline face recognition dan training model aktivitas.",
    },
    results: [
      { label: { en: "mAP@50", id: "mAP@50" }, value: { en: "95.7%", id: "95,7%" } },
      { label: { en: "Precision", id: "Presisi" }, value: { en: "93.8%", id: "93,8%" } },
      { label: { en: "Recall", id: "Recall" }, value: { en: "91.9%", id: "91,9%" } },
      { label: { en: "mAP@50-95", id: "mAP@50-95" }, value: { en: "77.3%", id: "77,3%" } },
      { label: { en: "Dataset images", id: "Gambar dataset" }, value: { en: "7,373", id: "7.373" } },
      { label: { en: "Classes", id: "Kelas" }, value: "4" },
    ],
  },

  {
    slug: "hotspot-clustering",
    title: {
      en: "Spatio-Temporal Hotspot Clustering",
      id: "Clustering Spatio-Temporal Hotspot",
    },
    subtitle: {
      en: "SINTA 2 · JUTIF 2026 · First author",
      id: "SINTA 2 · JUTIF 2026 · Penulis pertama",
    },
    category: "research",
    alsoIn: ["ai-data"],
    status: "published",
    year: "2026",
    role: { en: "First author", id: "Penulis pertama" },
    featured: false,
    images: ["/images/projects/hotspot-clustering/cluster-map.webp"],
    tech: ["HDBSCAN", "Haversine", "Grid search", "NASA FIRMS"],
    doiUrl: "https://doi.org/10.52436/1.jutif.2026.7.5.5765",
    journalName: "JUTIF, Vol. 7 No. 5, 2026",
    paperTitle:
      "Spatio-Temporal Clustering of Land Fire Hotspots Using HDBSCAN with Haversine Distance and Temporal Proximity for Pattern Analysis in Sulawesi",
    description: {
      en: "Clustering one year of NASA FIRMS fire hotspots in Sulawesi (2023) with HDBSCAN, Haversine distance and temporal proximity.",
      id: "Clustering titik panas kebakaran lahan di Sulawesi selama satu tahun (2023) dari data NASA FIRMS dengan HDBSCAN, jarak Haversine, dan kedekatan waktu.",
    },
    overview: {
      en: "Land fire hotspots from NASA FIRMS covering one year of Sulawesi data (2023) were clustered with HDBSCAN using Haversine distance and temporal proximity. Parameters were tuned with grid search and evaluated with Silhouette, DBCV and noise coverage. Published in JUTIF (SINTA 2) in 2026, with me as first author.",
      id: "Titik panas kebakaran lahan dari NASA FIRMS untuk data Sulawesi selama satu tahun (2023) dikelompokkan dengan HDBSCAN menggunakan jarak Haversine dan kedekatan waktu. Parameter dicari dengan grid search dan dievaluasi dengan Silhouette, DBCV, serta noise coverage. Terbit di JUTIF (SINTA 2) tahun 2026, dengan saya sebagai penulis pertama.",
    },
  },

  {
    slug: "shopping-trend-recommender",
    title: {
      en: "Shopping Trend Analysis & Recommender",
      id: "Analisis Tren Belanja & Rekomendasi",
    },
    subtitle: { en: "Text Mining", id: "Text Mining" },
    category: "ai-data",
    status: "completed",
    year: "2025",
    period: { en: "Academic project", id: "Proyek akademik" },
    featured: false,
    images: ["/images/projects/shopping-trend-recommender/wordcloud.webp"],
    tech: ["Python", "Web scraping", "TF-IDF", "Cosine similarity"],
    description: {
      en: "1,087 TikTok posts scraped, cleaned and mined with TF-IDF and cosine similarity to find trending products and price-sensitive demand.",
      id: "1.087 postingan TikTok di-scrape, dibersihkan, lalu diolah dengan TF-IDF dan cosine similarity untuk menemukan produk yang sedang tren dan permintaan yang sensitif harga.",
    },
    results: [
      { label: { en: "TikTok posts", id: "Postingan TikTok" }, value: { en: "1,087", id: "1.087" } },
    ],
  },

  {
    slug: "viral-trend-classification",
    title: {
      en: "Viral Trend Classification",
      id: "Klasifikasi Tren Viral",
    },
    subtitle: { en: "Machine Learning", id: "Machine Learning" },
    category: "ai-data",
    status: "completed",
    year: "2025",
    period: { en: "Academic project", id: "Proyek akademik" },
    featured: false,
    images: [], // TODO: no image yet
    tech: ["Python", "scikit-learn", "TF-IDF", "LDA", "SVM", "MLP"],
    description: {
      en: "1,000 TikTok posts manually annotated for virality, using TF-IDF and LDA topic features to compare SVM and MLP models.",
      id: "1.000 postingan TikTok dianotasi manual berdasarkan kriteria viral, lalu fitur TF-IDF dan topik LDA dipakai untuk membandingkan model SVM dan MLP.",
    },
    overview: {
      en: "1,000 TikTok posts were manually annotated against virality criteria. Features combine TF-IDF with LDA topics, and SVM and MLP models were compared on precision and recall.",
      id: "Sebanyak 1.000 postingan TikTok dianotasi manual berdasarkan kriteria viral. Fiturnya menggabungkan TF-IDF dengan topik LDA, lalu model SVM dan MLP dibandingkan dari sisi precision dan recall.",
    },
    results: [
      { label: { en: "Annotated posts", id: "Postingan dianotasi" }, value: { en: "1,000", id: "1.000" } },
    ],
  },

  {
    slug: "powerbi-dashboard",
    title: {
      en: "Internship Monitoring Dashboard",
      id: "Dashboard Monitoring Magang",
    },
    subtitle: {
      en: "Power BI · Built at PT Vale Indonesia",
      id: "Power BI · Dibuat di PT Vale Indonesia",
    },
    category: "ai-data",
    status: "completed",
    year: "2025",
    period: { en: "Sep to Dec 2025", id: "Sep hingga Des 2025" },
    organization: "PT Vale Indonesia",
    featured: false,
    images: [
      "/images/projects/powerbi-dashboard/dashboard.webp",
      "/images/projects/powerbi-dashboard/star-schema.webp",
    ],
    tech: ["Power BI", "DAX", "Power Query", "SQL", "Excel"],
    description: {
      en: "Power BI dashboard for monitoring interns, with 5 KPI cards and a 6-table star schema. Shown with synthetic data.",
      id: "Dashboard Power BI untuk memantau mahasiswa magang, dengan 5 kartu KPI dan star schema 6 tabel. Ditampilkan dengan data sintetis.",
    },
    overview: {
      en: "An internship monitoring dashboard built during my internship at PT Vale Indonesia. It uses a star-schema model with 6 tables and 5 KPI cards, prepared with Excel, SQL, Power Query and DAX.",
      id: "Dashboard monitoring magang yang dibuat selama magang di PT Vale Indonesia. Dashboard ini memakai model star schema dengan 6 tabel dan 5 kartu KPI, disiapkan dengan Excel, SQL, Power Query, dan DAX.",
    },
    imageNote: {
      en: "Synthetic data. Vale data is confidential.",
      id: "Data sintetis. Data Vale bersifat rahasia.",
    },
    results: [
      { label: { en: "Interns", id: "Mahasiswa magang" }, value: { en: "1,008", id: "1.008" } },
      { label: { en: "Periods", id: "Periode" }, value: "6" },
      { label: { en: "Divisions", id: "Divisi" }, value: "12" },
      { label: { en: "Monthly evaluations", id: "Evaluasi bulanan" }, value: { en: "3,581", id: "3.581" } },
      { label: { en: "KPI cards", id: "Kartu KPI" }, value: "5" },
      { label: { en: "Star-schema tables", id: "Tabel star schema" }, value: "6" },
    ],
  },

  // ── Design & Docs ───────────────────────────────────────────────────────────

  {
    slug: "figma-ui-design",
    title: { en: "Product & UI Design", id: "Desain Produk & UI" },
    subtitle: {
      en: "Langkasa & KuliahKu · Personal practice",
      id: "Langkasa & KuliahKu · Latihan pribadi",
    },
    category: "design-docs",
    status: "completed",
    year: "2026",
    label: { en: "Personal practice project", id: "Proyek latihan pribadi" },
    featured: false,
    images: [
      "/images/projects/figma-ui-design/langkasa-home.webp",
      "/images/projects/figma-ui-design/langkasa-search.webp",
      "/images/projects/figma-ui-design/langkasa-checkout.webp",
      "/images/projects/figma-ui-design/kuliahku-register.webp",
      "/images/projects/figma-ui-design/kuliahku-dashboard.webp",
    ],
    tech: ["Figma"],
    description: {
      en: "Personal UI design practice in Figma (not client work): Langkasa (home, search results, checkout) and KuliahKu (register, dashboard).",
      id: "Latihan desain UI pribadi di Figma (bukan proyek klien): Langkasa (beranda, hasil pencarian, checkout) dan KuliahKu (registrasi, dashboard).",
    },
  },

  {
    slug: "system-design-docs",
    title: {
      en: "System Design & Documentation",
      id: "Desain Sistem & Dokumentasi",
    },
    subtitle: {
      en: "Sitemap & Activity Diagram",
      id: "Sitemap & Activity Diagram",
    },
    category: "design-docs",
    status: "completed",
    year: "2026",
    period: { en: "Academic project", id: "Proyek akademik" },
    featured: false,
    images: [
      "/images/projects/system-design-docs/sitemap.webp",
      "/images/projects/system-design-docs/activity-diagram.webp",
      "/images/projects/system-design-docs/activity-detail.webp",
    ],
    tech: ["Sitemap", "Activity diagram"],
    description: {
      en: "Sitemap of a multi-branch store system (12 modules, 3 roles) and an item-return activity diagram with 4 swimlanes.",
      id: "Sitemap sistem toko multi-cabang (12 modul, 3 peran) dan activity diagram pengembalian barang dengan 4 swimlane.",
    },
    overview: {
      en: "Two documentation pieces: a sitemap of the multi-branch store system covering 12 modules and 3 roles, and an activity diagram for item returns (academic project) with 4 swimlanes and a decision branch for damaged or lost items.",
      id: "Dua dokumen sistem: sitemap sistem toko multi-cabang yang mencakup 12 modul dan 3 peran, serta activity diagram pengembalian barang (proyek akademik) dengan 4 swimlane dan percabangan keputusan untuk barang rusak atau hilang.",
    },
  },

  // ── Research ────────────────────────────────────────────────────────────────

  {
    slug: "papaya-nutrition-classification",
    title: {
      en: "Papaya Nutrition Classification",
      id: "Klasifikasi Nutrisi Pepaya",
    },
    subtitle: {
      en: "SINTA 2 · JITK 2025 · Co-author",
      id: "SINTA 2 · JITK 2025 · Penulis pendamping",
    },
    category: "research",
    status: "published",
    year: "2025",
    role: {
      en: "Co-author (3rd of 8) · Dataset and analysis",
      id: "Penulis pendamping (ke-3 dari 8) · Dataset dan analisis",
    },
    featured: false,
    images: [], // TODO: no image yet
    tech: ["Digital image", "Artificial Neural Network"],
    doiUrl: "https://doi.org/10.33480/jitk.v11i2.7070",
    journalName: "JITK, Vol. 11 No. 2, 2025",
    paperTitle:
      "Classification of Papaya Nutrition Based on Maturity with Digital Image and Artificial Neural Network",
    description: {
      en: "Classifying papaya nutrition by maturity using digital images and an artificial neural network. I contributed the dataset and analysis.",
      id: "Klasifikasi nutrisi pepaya berdasarkan tingkat kematangan menggunakan citra digital dan jaringan saraf tiruan. Saya berkontribusi pada dataset dan analisis.",
    },
  },
];

// ─── Helper Functions ──────────────────────────────────────────────────────────

export const getFeaturedProjects = (): Project[] =>
  projects.filter((p) => p.featured).slice(0, 3);

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const inCategory = (project: Project, category: ProjectCategory): boolean =>
  project.category === category || (project.alsoIn?.includes(category) ?? false);

export const getProjectsByCategory = (category: ProjectCategory): Project[] =>
  projects.filter((p) => inCategory(p, category));

export const getAllSlugs = (): string[] => projects.map((p) => p.slug);

// ─── Display Helpers ──────────────────────────────────────────────────────────

export const categoryLabels: Record<ProjectCategory, Localized> = {
  websites: { en: "Websites", id: "Website" },
  systems: { en: "Systems & Apps", id: "Sistem & Aplikasi" },
  "ai-data": { en: "AI & Data", id: "AI & Data" },
  "design-docs": { en: "Design & Docs", id: "Desain & Dokumentasi" },
  research: { en: "Research", id: "Riset & Jurnal" },
};

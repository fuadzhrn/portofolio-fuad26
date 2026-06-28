// ─── Types ────────────────────────────────────────────────────────────────────

export type ProjectCategory = "website" | "kuliah" | "riset" | "magang";

export type ProjectStatus = "live" | "completed" | "published";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  description: string;
  tech: string[];
  featured: boolean;
  thumbnail: string;
  year: string;
  status: ProjectStatus;
  liveUrl?: string;
  githubUrl?: string;
  doiUrl?: string;
  certificateUrl?: string;
  journalName?: string;
  company?: string;
  overview?: string;
  process?: { phase: string; description: string }[];
  challenges?: { problem: string; solution: string }[];
  results?: { label: string; value: string }[];
  screenshots?: string[];
  testimonial?: {
    quote: string;
    name: string;
    position: string;
  };
};

// ─── Data ─────────────────────────────────────────────────────────────────────

export const projects: Project[] = [

  // ── Website ─────────────────────────────────────────────────────────────────

  {
    slug: "pt-maju-bersama",
    title: "PT Maju Bersama",
    subtitle: "Company Profile Website",
    category: "website",
    status: "live",
    year: "2024",
    featured: true,
    thumbnail: "/images/projects/pt-maju-bersama.jpg",
    tech: ["Next.js", "Tailwind CSS", "Laravel", "MySQL", "Framer Motion", "Figma"],
    liveUrl: "https://example.com", // TODO: ganti dengan URL live
    description:
      "Website corporate modern dengan CMS custom agar klien bisa update konten mandiri dan animasi scroll yang memperkuat brand identity perusahaan.",
    overview:
      "PT Maju Bersama belum memiliki kehadiran digital yang mencerminkan skala bisnis mereka. Website lama dibuat dengan template generik, sulit diupdate, dan tidak mobile-friendly. Solusinya adalah membangun company profile full-stack dengan CMS internal yang intuitif.",
    process: [
      {
        phase: "Discovery & Brief",
        description:
          "Diskusi mendalam dengan stakeholder tentang kebutuhan bisnis, riset kompetitor, dan penentuan struktur halaman yang optimal.",
      },
      {
        phase: "Desain UI di Figma",
        description:
          "Proses dari wireframe → hi-fi mockup → presentasi klien → revisi → approval final sebelum masuk development.",
      },
      {
        phase: "Development",
        description:
          "Frontend Next.js + Tailwind CSS, backend CMS Laravel dengan admin panel, animasi halaman menggunakan Framer Motion.",
      },
      {
        phase: "Testing & Launch",
        description:
          "User acceptance testing, perbaikan bug, deploy ke VPS, konfigurasi domain dan SSL certificate.",
      },
    ],
    challenges: [
      {
        problem: "Klien ingin update konten sendiri tanpa paham coding",
        solution:
          "Membangun admin panel CMS custom Laravel yang sederhana dan intuitif — cukup dengan form input biasa.",
      },
      {
        problem: "Animasi scroll berat di perangkat low-end",
        solution:
          "Optimasi menggunakan lazy loading dan IntersectionObserver sebagai alternatif ringan untuk perangkat dengan spec rendah.",
      },
    ],
    results: [
      { label: "Selesai dari brief", value: "3 Minggu" },
      { label: "Skor PageSpeed", value: "98/100" },
      { label: "Revisi desain", value: "2×" },
      { label: "Tingkat kepuasan", value: "100%" },
    ],
    screenshots: [
      "/images/projects/pt-maju-bersama-1.jpg",
      "/images/projects/pt-maju-bersama-2.jpg",
    ],
    testimonial: {
      quote:
        "Hasil kerja sangat memuaskan. Website perusahaan kami jadi jauh lebih profesional dan mudah diupdate oleh tim internal.",
      name: "Ahmad Ridwan",
      position: "Direktur · PT Maju Bersama",
    },
  },

  {
    slug: "toko-batik-nusantara",
    title: "Toko Batik Nusantara",
    subtitle: "E-Commerce Platform",
    category: "website",
    status: "live",
    year: "2023",
    featured: false,
    thumbnail: "/images/projects/toko-batik-nusantara.jpg",
    tech: ["React", "Laravel", "MySQL", "Midtrans"],
    liveUrl: "https://example.com", // TODO: ganti dengan URL live
    description:
      "Platform penjualan online dengan sistem order, keranjang belanja, dan payment gateway Midtrans terintegrasi.",
    overview:
      "Platform e-commerce full-stack untuk UMKM batik lokal. Mencakup katalog produk dinamis, keranjang belanja, checkout multi-payment via Midtrans, sistem manajemen order, dan dashboard penjual.",
    challenges: [
      {
        problem: "Integrasi payment gateway dengan banyak metode pembayaran",
        solution:
          "Menggunakan Midtrans Snap untuk pengalaman pembayaran seamless dalam satu modal — transfer bank, e-wallet, dan QRIS.",
      },
      {
        problem: "Performa halaman produk lambat saat katalog besar",
        solution:
          "Implementasi pagination + infinite scroll dan caching response API di sisi frontend.",
      },
    ],
    results: [
      { label: "Transaksi/Bulan", value: "150+" },
      { label: "Produk Terdaftar", value: "200+" },
      { label: "Metode Pembayaran", value: "8+" },
      { label: "Uptime", value: "99.9%" },
    ],
    screenshots: [
      "/images/projects/toko-batik-1.jpg",
      "/images/projects/toko-batik-2.jpg",
    ],
    testimonial: {
      quote:
        "Platform e-commerce yang dibangun Fuad benar-benar mengubah bisnis kami. Penjualan online meningkat signifikan sejak launch.",
      name: "Sari Nurhayati",
      position: "Owner · Toko Batik Nusantara",
    },
  },

  {
    slug: "klinik-sehat-bersama",
    title: "Klinik Sehat Bersama",
    subtitle: "Landing Page & Booking Online",
    category: "website",
    status: "live",
    year: "2023",
    featured: false,
    thumbnail: "/images/projects/klinik-sehat-bersama.jpg",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    description:
      "Landing page klinik dengan sistem booking appointment online terintegrasi WhatsApp agar pasien mudah mendaftar dari mana saja.",
    overview:
      "Landing page statis informatif dengan form pendaftaran online yang diteruskan ke WhatsApp admin klinik dan disimpan ke database. Dioptimasi untuk pengguna mobile dan semua jenis browser.",
    results: [
      { label: "Pasien Online/Bulan", value: "500+" },
      { label: "Konversi Form", value: "28%" },
      { label: "Load Time", value: "< 1.2s" },
    ],
    screenshots: ["/images/projects/klinik-sehat-1.jpg"],
    testimonial: {
      quote:
        "Landing page yang dibuat rapi, informatif, dan mudah digunakan pasien. Pendaftaran online sekarang jauh lebih terorganisir.",
      name: "dr. Rina Kusuma",
      position: "Pemilik · Klinik Sehat Bersama",
    },
  },

  // ── Projek Kuliah ────────────────────────────────────────────────────────────

  {
    slug: "computer-vision-deteksi-objek",
    title: "Deteksi Objek Real-time",
    subtitle: "Computer Vision",
    category: "kuliah",
    status: "completed",
    year: "2023",
    featured: true,
    thumbnail: "/images/projects/computer-vision.jpg",
    tech: ["Python", "OpenCV", "YOLO", "TensorFlow"],
    githubUrl: "https://github.com/fuadzahranfirman", // TODO: ganti dengan repo spesifik
    description:
      "Implementasi deteksi objek real-time menggunakan deep learning untuk klasifikasi gambar secara otomatis dari stream video.",
    overview:
      "Proyek akhir mata kuliah Computer Vision yang mengimplementasikan algoritma YOLO untuk mendeteksi dan mengklasifikasikan objek secara real-time menggunakan kamera. Dataset dikumpulkan dan dianotasi secara manual.",
    process: [
      {
        phase: "Dataset",
        description:
          "Pengumpulan dan anotasi 2.000+ gambar dari berbagai kondisi pencahayaan menggunakan Roboflow.",
      },
      {
        phase: "Training",
        description:
          "Fine-tuning model YOLO selama 100 epoch di Google Colab dengan GPU T4.",
      },
      {
        phase: "Inference",
        description:
          "Integrasi model dengan OpenCV untuk stream video real-time dari webcam.",
      },
      {
        phase: "Evaluasi",
        description:
          "Pengujian performa pada berbagai kondisi pencahayaan, sudut kamera, dan jarak objek.",
      },
    ],
    challenges: [
      {
        problem: "FPS drop saat mendeteksi banyak objek sekaligus",
        solution:
          "Optimasi menggunakan model versi nano + frame skip strategy untuk menjaga 30 FPS.",
      },
    ],
    results: [
      { label: "mAP@0.5", value: "94.2%" },
      { label: "Real-time FPS", value: "30+" },
      { label: "Kelas Objek", value: "80 Kelas" },
    ],
    screenshots: ["/images/projects/cv-1.jpg"],
  },

  {
    slug: "nlp-analisis-sentimen",
    title: "Analisis Sentimen Ulasan Produk",
    subtitle: "Natural Language Processing",
    category: "kuliah",
    status: "completed",
    year: "2023",
    featured: false,
    thumbnail: "/images/projects/nlp-sentimen.jpg",
    tech: ["Python", "NLTK", "Scikit-learn", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/fuadzahranfirman", // TODO: ganti dengan repo spesifik
    description:
      "Sistem analisis sentimen ulasan produk berbahasa Indonesia menggunakan Natural Language Processing dan machine learning.",
    overview:
      "Model klasifikasi sentimen positif/negatif/netral untuk ulasan produk e-commerce berbahasa Indonesia. Menggunakan SVM dan Naive Bayes dengan preprocessing teks yang disesuaikan untuk bahasa Indonesia (stopwords, stemming).",
    results: [
      { label: "Akurasi SVM", value: "92.8%" },
      { label: "Dataset", value: "10.000+ Ulasan" },
      { label: "F1 Score", value: "0.91" },
    ],
    screenshots: [],
  },

  {
    slug: "big-data-pipeline-analytics",
    title: "Pipeline Analytics Big Data",
    subtitle: "Big Data Engineering",
    category: "kuliah",
    status: "completed",
    year: "2023",
    featured: false,
    thumbnail: "/images/projects/bigdata.jpg",
    tech: ["Hadoop", "Apache Spark", "Python", "Tableau"],
    description:
      "Pipeline pengolahan data besar dengan visualisasi dashboard interaktif untuk analisis pola data penjualan e-commerce.",
    overview:
      "Membangun pipeline pemrosesan data besar menggunakan ekosistem Hadoop dan Spark untuk mengolah dataset transaksi e-commerce berukuran besar, dengan output berupa dashboard Tableau interaktif.",
    results: [
      { label: "Volume Data", value: "10 GB+" },
      { label: "Efisiensi Waktu", value: "4× Lebih Cepat" },
      { label: "Sumber Data", value: "3 Pipeline" },
    ],
    screenshots: [],
  },

  {
    slug: "data-mining-clustering",
    title: "Customer Segmentation",
    subtitle: "Data Mining",
    category: "kuliah",
    status: "completed",
    year: "2022",
    featured: false,
    thumbnail: "/images/projects/datamining.jpg",
    tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/fuadzahranfirman", // TODO: ganti dengan repo spesifik
    description:
      "Penerapan algoritma K-Means clustering untuk segmentasi data pelanggan dan analisis pola pembelian retail.",
    overview:
      "Analisis clustering pada dataset retail untuk mengidentifikasi segmen pelanggan berdasarkan pola pembelian (RFM analysis). Hasil segmentasi digunakan untuk rekomendasi strategi pemasaran berbasis data.",
    results: [
      { label: "Silhouette Score", value: "0.73" },
      { label: "Segmen Pelanggan", value: "5 Cluster" },
    ],
    screenshots: [],
  },

  // ── Riset & Jurnal ───────────────────────────────────────────────────────────

  {
    // TODO: ganti slug jika ingin URL berbeda
    slug: "jurnal-sinta-2-pertama",
    // TODO: ganti dengan judul lengkap jurnal asli
    title: "Optimasi Deteksi Penyakit Tanaman dengan MobileNetV3",
    // TODO: ganti dengan subtitle/nama jurnal singkat
    subtitle: "Jurnal Sinta 2 · JITCS",
    category: "riset",
    status: "published",
    year: "2023",
    featured: true,
    thumbnail: "/images/projects/jurnal-1.jpg",
    tech: ["Python", "TensorFlow", "CNN", "Transfer Learning", "Deep Learning"],
    // TODO: ganti dengan DOI asli
    doiUrl: "https://doi.org/isi-dengan-doi-asli-jurnal-1",
    // TODO: ganti dengan nama lengkap jurnal
    journalName: "Journal of Information Technology and Computer Science (JITCS)",
    description:
      // TODO: ganti dengan abstract singkat 2 kalimat jurnal asli
      "Penelitian optimasi model deep learning untuk deteksi 8 jenis penyakit tanaman menggunakan MobileNetV3 dengan transfer learning.",
    overview:
      // TODO: ganti dengan deskripsi lengkap penelitian
      "Penelitian ini mengusulkan pendekatan baru menggunakan MobileNetV3-Small dengan fine-tuning pada dataset custom untuk mendeteksi 8 jenis penyakit tanaman padi dan jagung. Dataset terdiri dari 12.000 gambar yang dikumpulkan dari lapangan.",
    results: [
      { label: "Akurasi Model", value: "96.5%" },
      { label: "Sinta Index", value: "Sinta 2" },
      { label: "Dataset", value: "12.000 Gambar" },
      { label: "Kelas Penyakit", value: "8 Kelas" },
    ],
    screenshots: [],
  },

  {
    // TODO: ganti slug jika ingin URL berbeda
    slug: "jurnal-sinta-2-kedua",
    // TODO: ganti dengan judul lengkap jurnal asli
    title: "Klasifikasi Motif Batik Nusantara dengan ResNet50",
    // TODO: ganti dengan subtitle/nama jurnal singkat
    subtitle: "Jurnal Sinta 2 · IJCCS",
    category: "riset",
    status: "published",
    year: "2024",
    featured: false,
    thumbnail: "/images/projects/jurnal-2.jpg",
    tech: ["Python", "PyTorch", "ResNet50", "Data Augmentation", "Machine Learning"],
    // TODO: ganti dengan DOI asli
    doiUrl: "https://doi.org/isi-dengan-doi-asli-jurnal-2",
    // TODO: ganti dengan nama lengkap jurnal
    journalName: "Indonesian Journal of Computing and Cybernetics Systems (IJCCS)",
    description:
      // TODO: ganti dengan abstract singkat 2 kalimat jurnal asli
      "Penelitian klasifikasi 14 motif batik Nusantara menggunakan ResNet50 dengan data augmentation pada dataset 5.000 gambar.",
    overview:
      // TODO: ganti dengan deskripsi lengkap penelitian
      "Mengembangkan sistem klasifikasi otomatis untuk 14 motif batik Nusantara menggunakan arsitektur ResNet50 yang dilatih dengan teknik data augmentation ekstensif untuk mengatasi keterbatasan dataset.",
    results: [
      { label: "Akurasi Model", value: "97.2%" },
      { label: "Sinta Index", value: "Sinta 2" },
      { label: "Dataset", value: "5.000 Gambar" },
      { label: "Kelas Motif", value: "14 Kelas" },
    ],
    screenshots: [],
  },

  // ── Magang ───────────────────────────────────────────────────────────────────

  {
    slug: "magang-web-developer",
    // TODO: ganti dengan nama perusahaan asli
    title: "Magang Web Developer",
    // TODO: ganti dengan posisi / divisi asli
    subtitle: "Web Developer Intern",
    category: "magang",
    status: "completed",
    year: "2023",
    featured: true,
    thumbnail: "/images/projects/magang.jpg",
    tech: ["Laravel", "React", "MySQL"],
    // TODO: uncomment dan isi jika ada sertifikat digital
    // certificateUrl: "/images/certificate/sertifikat-magang.jpg",
    // TODO: ganti dengan nama perusahaan asli
    company: "Nama Perusahaan",
    description:
      // TODO: ganti dengan deskripsi singkat pengalaman magang
      "Pengalaman magang 3 bulan sebagai Web Developer — membangun dan maintain aplikasi web production dalam lingkungan tim profesional.",
    overview:
      // TODO: ganti dengan deskripsi lengkap pengalaman magang
      "Program magang 3 bulan di divisi Software Engineering. Mengerjakan pengembangan fitur dashboard analytics, integrasi REST API, dan optimasi performa backend dalam tim dengan metodologi Agile/Scrum.",
    process: [
      // TODO: tambah/edit sesuai pengalaman magang asli
      {
        phase: "Onboarding",
        description: "Pengenalan codebase, setup environment, dan pemahaman alur kerja tim.",
      },
      {
        phase: "Development",
        description: "Pengembangan fitur-fitur aplikasi web production secara mandiri maupun kolaboratif.",
      },
      {
        phase: "Code Review",
        description: "Proses review kode bersama senior developer dan iterasi perbaikan.",
      },
    ],
    results: [
      { label: "Durasi Magang", value: "3 Bulan" },
      // TODO: tambah hasil spesifik sesuai pengalaman asli
      { label: "Status", value: "Bersertifikat" },
    ],
    screenshots: [],
  },
];

// ─── Helper Functions ──────────────────────────────────────────────────────────

export const getFeaturedProjects = (): Project[] =>
  projects.filter((p) => p.featured).slice(0, 3);

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getProjectsByCategory = (category: ProjectCategory): Project[] =>
  projects.filter((p) => p.category === category);

export const getAllSlugs = (): string[] => projects.map((p) => p.slug);

// ─── Display Helpers ──────────────────────────────────────────────────────────

export const categoryLabels: Record<ProjectCategory, string> = {
  website: "Website",
  kuliah: "Projek Kuliah",
  riset: "Riset & Jurnal",
  magang: "Magang",
};

export const categoryColors: Record<ProjectCategory, string> = {
  website: "text-ink-2 bg-void-surface border-void-edge-hi",
  kuliah: "text-ink-2 bg-void-surface border-void-edge-hi",
  riset: "text-gold bg-void-surface border-void-edge-hi",
  magang: "text-ink-2 bg-void-surface border-void-edge-hi",
};

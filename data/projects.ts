export type ProjectCategory = "website" | "kuliah" | "riset" | "magang";

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
  liveUrl?: string;
  githubUrl?: string;
  doiUrl?: string;
  journalName?: string;
  company?: string;
  overview?: string;
  process?: { phase: string; description: string }[];
  challenges?: { problem: string; solution: string }[];
  results?: { label: string; value: string }[];
};

export const projects: Project[] = [
  // ─── Website ───────────────────────────────────────────────────────────────
  {
    slug: "pt-maju-bersama",
    title: "PT Maju Bersama",
    subtitle: "Company Profile Website",
    category: "website",
    description:
      "Website company profile modern dengan animasi halus, CMS internal, dan performa tinggi untuk PT Maju Bersama.",
    tech: ["Next.js", "Tailwind CSS", "Laravel", "Framer Motion"],
    featured: true,
    thumbnail: "/projects/pt-maju-bersama.jpg",
    liveUrl: "https://example.com",
    year: "2024",
    overview:
      "Website company profile full-stack menggunakan Next.js sebagai frontend dan Laravel sebagai backend API. Client membutuhkan halaman dinamis yang bisa diupdate tanpa menyentuh kode.",
    process: [
      { phase: "Discovery", description: "Wawancara klien, riset kompetitor, dan wireframe awal." },
      { phase: "Design", description: "Desain UI di Figma dengan komponen yang konsisten dan brandable." },
      { phase: "Development", description: "Pengembangan frontend Next.js + backend Laravel REST API." },
      { phase: "Deployment", description: "Deploy ke VPS dengan CI/CD pipeline sederhana." },
    ],
    challenges: [
      {
        problem: "Klien butuh bisa update konten sendiri tanpa developer",
        solution: "Membangun admin panel ringan dengan Laravel Filament",
      },
      {
        problem: "Performa loading lambat di jaringan 3G",
        solution: "Implementasi ISR + image optimization dengan next/image",
      },
    ],
    results: [
      { label: "Peningkatan Traffic", value: "+340%" },
      { label: "Load Time", value: "< 1.8s" },
      { label: "Lighthouse Score", value: "96/100" },
    ],
  },
  {
    slug: "toko-batik-nusantara",
    title: "Toko Batik Nusantara",
    subtitle: "E-Commerce Platform",
    category: "website",
    description:
      "Platform e-commerce lengkap untuk toko batik dengan integrasi pembayaran Midtrans, manajemen produk, dan order tracking.",
    tech: ["React", "Laravel", "Midtrans", "MySQL"],
    featured: false,
    thumbnail: "/projects/toko-batik.jpg",
    liveUrl: "https://example.com",
    year: "2023",
    overview:
      "Aplikasi e-commerce full-stack untuk UMKM batik lokal. Mencakup fitur katalog produk, keranjang belanja, checkout multi-payment, dan dashboard penjual.",
    challenges: [
      {
        problem: "Integrasi payment gateway yang kompleks dengan banyak metode pembayaran",
        solution: "Menggunakan Midtrans Snap untuk pengalaman pembayaran yang seamless dalam satu modal",
      },
    ],
    results: [
      { label: "Transaksi/Bulan", value: "150+" },
      { label: "Produk Terdaftar", value: "200+" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    slug: "klinik-sehat-bersama",
    title: "Klinik Sehat Bersama",
    subtitle: "Landing Page",
    category: "website",
    description:
      "Landing page informatif untuk klinik kesehatan dengan sistem pendaftaran online dan profil dokter.",
    tech: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    featured: false,
    thumbnail: "/projects/klinik-sehat.jpg",
    year: "2023",
    overview:
      "Landing page statis dengan form pendaftaran online yang terhubung ke database MySQL dan notifikasi email ke admin klinik.",
    results: [
      { label: "Pasien Terdaftar Online", value: "500+" },
      { label: "Konversi Form", value: "28%" },
    ],
  },

  // ─── Projek Kuliah ─────────────────────────────────────────────────────────
  {
    slug: "computer-vision-deteksi-objek",
    title: "Deteksi Objek Real-time",
    subtitle: "Computer Vision",
    category: "kuliah",
    description:
      "Sistem deteksi objek real-time menggunakan YOLOv8 untuk identifikasi dan klasifikasi 80 kelas objek dalam video stream.",
    tech: ["Python", "OpenCV", "YOLOv8", "NumPy"],
    featured: true,
    thumbnail: "/projects/cv-deteksi.jpg",
    githubUrl: "https://github.com/fuadzahranfirman",
    year: "2023",
    overview:
      "Proyek akhir mata kuliah Pengolahan Citra Digital. Mengimplementasikan YOLOv8 pre-trained dengan fine-tuning pada dataset custom untuk deteksi objek real-time melalui webcam.",
    process: [
      { phase: "Dataset", description: "Pengumpulan dan anotasi 2.000 gambar menggunakan Roboflow." },
      { phase: "Training", description: "Fine-tuning YOLOv8n selama 100 epoch di Google Colab T4." },
      { phase: "Inference", description: "Integrasi dengan OpenCV untuk stream video real-time." },
      { phase: "Evaluasi", description: "Pengujian performa pada berbagai kondisi pencahayaan dan sudut." },
    ],
    challenges: [
      {
        problem: "FPS drop signifikan saat mendeteksi banyak objek sekaligus",
        solution: "Optimasi menggunakan model YOLOv8n (nano) + frame skip strategy",
      },
    ],
    results: [
      { label: "mAP@0.5", value: "94.2%" },
      { label: "Real-time FPS", value: "30+" },
      { label: "Kelas Objek", value: "80 Kelas" },
    ],
  },
  {
    slug: "nlp-analisis-sentimen",
    title: "Analisis Sentimen Ulasan",
    subtitle: "Natural Language Processing",
    category: "kuliah",
    description:
      "Model klasifikasi sentimen positif/negatif untuk ulasan produk e-commerce berbahasa Indonesia menggunakan SVM dan Naive Bayes.",
    tech: ["Python", "NLTK", "Scikit-learn", "Pandas"],
    featured: false,
    thumbnail: "/projects/nlp-sentimen.jpg",
    githubUrl: "https://github.com/fuadzahranfirman",
    year: "2023",
    results: [
      { label: "Akurasi SVM", value: "92.8%" },
      { label: "Dataset", value: "10.000+ Ulasan" },
      { label: "F1 Score", value: "0.91" },
    ],
  },
  {
    slug: "big-data-pipeline-analytics",
    title: "Pipeline Analytics Big Data",
    subtitle: "Big Data Engineering",
    category: "kuliah",
    description:
      "Pipeline pemrosesan data besar menggunakan Hadoop dan Spark untuk analisis penjualan e-commerce skala besar.",
    tech: ["Hadoop", "Apache Spark", "Python", "HDFS"],
    featured: false,
    thumbnail: "/projects/bigdata-pipeline.jpg",
    year: "2024",
    results: [
      { label: "Volume Data", value: "10 GB+" },
      { label: "Efisiensi Waktu", value: "4× Lebih Cepat" },
    ],
  },
  {
    slug: "data-mining-clustering",
    title: "Clustering Pola Pembelian",
    subtitle: "Data Mining",
    category: "kuliah",
    description:
      "Analisis clustering K-Means untuk segmentasi pelanggan berdasarkan pola pembelian pada dataset retail.",
    tech: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
    featured: false,
    thumbnail: "/projects/datamining-cluster.jpg",
    githubUrl: "https://github.com/fuadzahranfirman",
    year: "2024",
    results: [
      { label: "Silhouette Score", value: "0.73" },
      { label: "Segmen", value: "5 Cluster" },
    ],
  },

  // ─── Riset & Jurnal ────────────────────────────────────────────────────────
  {
    slug: "jurnal-deteksi-penyakit-tanaman",
    title: "Optimasi Deteksi Penyakit Tanaman",
    subtitle: "Jurnal Sinta 2",
    category: "riset",
    description:
      "Penelitian optimasi model deep learning untuk deteksi penyakit tanaman menggunakan MobileNetV3 dengan transfer learning.",
    tech: ["Python", "TensorFlow", "CNN", "Transfer Learning"],
    featured: true,
    thumbnail: "/projects/jurnal-1.jpg",
    doiUrl: "https://doi.org/placeholder",
    journalName: "Journal of Information Technology and Computer Science (JITCS)",
    year: "2023",
    overview:
      "Penelitian ini mengusulkan pendekatan baru menggunakan MobileNetV3-Small dengan fine-tuning untuk deteksi 8 jenis penyakit tanaman padi dan jagung. Dataset terdiri dari 12.000 gambar dari lapangan.",
    results: [
      { label: "Akurasi", value: "96.5%" },
      { label: "Sinta Index", value: "Sinta 2" },
      { label: "Sitasi", value: "12+" },
      { label: "Dataset", value: "12.000 Gambar" },
    ],
  },
  {
    slug: "jurnal-klasifikasi-batik-cnn",
    title: "Klasifikasi Motif Batik Nusantara",
    subtitle: "Jurnal Sinta 2",
    category: "riset",
    description:
      "Penelitian klasifikasi 14 motif batik Nusantara menggunakan ResNet50 dengan dataset 5.000 gambar.",
    tech: ["Python", "PyTorch", "ResNet50", "Data Augmentation"],
    featured: false,
    thumbnail: "/projects/jurnal-2.jpg",
    doiUrl: "https://doi.org/placeholder",
    journalName: "Indonesian Journal of Computing and Cybernetics Systems (IJCCS)",
    year: "2024",
    results: [
      { label: "Akurasi", value: "97.2%" },
      { label: "Sinta Index", value: "Sinta 2" },
      { label: "Dataset", value: "5.000 Gambar" },
      { label: "Kelas Motif", value: "14 Kelas" },
    ],
  },

  // ─── Magang ────────────────────────────────────────────────────────────────
  {
    slug: "magang-pt-teknologi-digital",
    title: "PT Teknologi Digital Indonesia",
    subtitle: "Web Developer Intern",
    category: "magang",
    description:
      "Magang 3 bulan sebagai Web Developer. Terlibat pengembangan dashboard analytics, integrasi REST API, dan optimasi performa backend.",
    tech: ["React", "Node.js", "PostgreSQL", "REST API"],
    featured: false,
    thumbnail: "/projects/magang.jpg",
    company: "PT Teknologi Digital Indonesia",
    year: "2023",
    overview:
      "Program magang selama 3 bulan di divisi Software Engineering. Mengerjakan 5 modul fitur dashboard analytics dan berkolaborasi dengan tim senior menggunakan metodologi Agile/Scrum.",
    results: [
      { label: "Durasi", value: "3 Bulan" },
      { label: "Modul Dibangun", value: "5 Modul" },
      { label: "Peningkatan API Speed", value: "+40%" },
    ],
  },
];

export const getFeaturedProjects = (): Project[] =>
  projects.filter((p) => p.featured).slice(0, 3);

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getProjectsByCategory = (category: ProjectCategory): Project[] =>
  projects.filter((p) => p.category === category);

export const getAllSlugs = (): string[] => projects.map((p) => p.slug);

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

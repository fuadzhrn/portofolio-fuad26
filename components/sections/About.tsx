"use client";

import { motion } from "framer-motion";
import { IconMapPin, IconBriefcase, IconMail } from "@tabler/icons-react";
import { fadeUp, stagger } from "@/lib/motion";

const timeline = [
  {
    year: "2020",
    title: "Mulai S1 Teknik Komputer",
    desc: "Masuk jurusan Teknik Komputer. Mulai belajar pemrograman dan pengembangan web secara serius.",
    active: false,
  },
  {
    year: "2022",
    title: "Terlibat Riset Pertama",
    desc: "Bergabung dengan kelompok riset kampus. Mulai mengeksplorasi machine learning dan computer vision.",
    active: false,
  },
  {
    year: "2023",
    title: "Magang Web Developer",
    desc: "Magang 3 bulan di PT Teknologi Digital Indonesia. Membangun 5 modul dashboard analytics production.",
    active: false,
  },
  {
    year: "2023",
    title: "Jurnal Sinta 2 Pertama",
    desc: "Penelitian tentang deteksi penyakit tanaman berhasil dipublikasikan di JITCS (Sinta 2).",
    active: false,
  },
  {
    year: "2024",
    title: "Lulus S1 & Jurnal Kedua",
    desc: "Fresh graduate Teknik Komputer. Jurnal kedua tentang klasifikasi motif batik dipublikasikan di IJCCS.",
    active: true,
  },
];

export default function About() {
  return (
    <section id="about" className="w-full border-b border-[#1a1a18] px-5 py-10 md:px-10 md:py-12 lg:px-16 lg:py-16">
      <div>
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mb-8 lg:mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="mb-2 font-jakarta text-xs font-medium uppercase tracking-[0.2em] text-ink-4"
          >
            About Me
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-geist text-3xl font-bold tracking-tight text-ink lg:text-4xl"
          >
            Sedikit tentang saya
          </motion.h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-[160px_1fr] md:gap-6 lg:grid-cols-[200px_1fr] lg:gap-9">
          {/* Left: Avatar + Open to Work */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="flex flex-col items-center gap-4 md:items-start"
          >
            {/* Avatar placeholder */}
            <motion.div
              variants={fadeUp}
              className="relative h-[120px] w-[120px] overflow-hidden rounded-2xl border border-void-edge bg-void-raised md:h-[160px] md:w-[160px] lg:h-[200px] lg:w-[200px]"
            >
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-geist text-5xl font-bold text-ink-5">
                  MFZ
                </span>
              </div>
              {/* decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-void-base/50 to-transparent" />
            </motion.div>

            {/* Open to work card */}
            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-void-edge bg-void-card p-4"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                </span>
                <span className="font-jakarta text-xs font-semibold text-gold">
                  Open to Work
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-ink-4">
                  <IconMapPin size={13} strokeWidth={1.75} />
                  <span className="font-jakarta text-xs">Makassar, Sulawesi Selatan</span>
                </div>
                <div className="flex items-center gap-2 text-ink-4">
                  <IconBriefcase size={13} strokeWidth={1.75} />
                  <span className="font-jakarta text-xs">Remote / On-site</span>
                </div>
                <div className="flex items-center gap-2 text-ink-4">
                  <IconMail size={13} strokeWidth={1.75} />
                  <span className="font-jakarta text-xs">fuadzahran64@gmail.com</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Bio + Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="flex flex-col gap-8"
          >
            {/* Bio */}
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <p className="font-jakarta text-base leading-relaxed text-ink-3">
                Saya adalah <span className="text-ink">Muh Fuad Zahran Firman</span>,
                seorang Web Developer fresh graduate dari jurusan Teknik Komputer
                yang berbasis di Makassar, Sulawesi Selatan.
              </p>
              <p className="font-jakarta text-base leading-relaxed text-ink-3">
                Selain membangun produk web end-to-end untuk klien, saya juga
                aktif di dunia riset akademik — dengan 2 publikasi di jurnal
                bereputasi Sinta 2 di bidang computer vision dan deep learning.
              </p>
              <p className="font-jakarta text-base leading-relaxed text-ink-3">
                Saya percaya bahwa kode yang baik bukan hanya yang bekerja,
                tapi yang mudah dipahami, di-maintain, dan memberikan dampak
                nyata bagi penggunanya.
              </p>
            </motion.div>

            {/* Timeline */}
            <motion.div variants={fadeUp} className="flex flex-col">
              <p className="mb-4 font-jakarta text-xs font-medium uppercase tracking-[0.15em] text-ink-5">
                Perjalanan
              </p>
              <div className="relative flex flex-col gap-0">
                {/* vertical line */}
                <div className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px bg-void-edge" />

                {timeline.map((item, i) => (
                  <div key={i} className="relative flex gap-5 pb-6 last:pb-0">
                    {/* dot */}
                    <div className="relative z-10 mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          item.active
                            ? "bg-gold"
                            : "bg-void-edge-hi"
                        }`}
                      />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-baseline gap-2">
                        <span className="font-geist text-xs font-medium text-ink-4">
                          {item.year}
                        </span>
                        <span className="font-jakarta text-sm font-semibold text-ink">
                          {item.title}
                        </span>
                      </div>
                      <p className="font-jakarta text-sm leading-relaxed text-ink-4">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

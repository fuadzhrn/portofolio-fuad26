"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  IconDownload,
  IconSchool,
  IconBolt,
  IconBuilding,
  IconRosette,
  IconFileText,
} from "@tabler/icons-react";

// ─── Motion Variants ──────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader({
  tag,
  eyebrow,
  title,
}: {
  tag: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut" as const }}
      className="mb-10"
    >
      <p className="mb-1 font-mono text-xs uppercase tracking-[0.18em] text-ink-5">
        {tag}
      </p>
      <p className="mb-2 font-jakarta text-xs font-medium uppercase tracking-[0.2em] text-ink-4">
        {eyebrow}
      </p>
      <h2 className="font-geist text-3xl font-bold tracking-tight text-ink lg:text-4xl">
        {title}
      </h2>
    </motion.div>
  );
}

// ─── Badges ───────────────────────────────────────────────────────────────────

function GoldBadge({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center rounded font-jakarta text-xs"
      style={{
        padding: "3px 10px",
        background: "rgba(201,169,110,0.08)",
        color: "#C9A96E",
        border: "0.5px solid rgba(201,169,110,0.2)",
      }}
    >
      {label}
    </span>
  );
}

function PlainBadge({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center rounded font-jakarta text-xs text-ink-5"
      style={{
        padding: "3px 10px",
        background: "#1A1A18",
        border: "0.5px solid #1E1E1C",
      }}
    >
      {label}
    </span>
  );
}

// ─── Avatar Photo ─────────────────────────────────────────────────────────────

function AvatarPhoto() {
  const [error, setError] = useState(false);

  return (
    <div
      className="relative mx-auto h-[220px] w-[180px] overflow-hidden rounded-2xl md:mx-0"
      style={{ border: "0.5px solid #1E1E1C", background: "#1A1A18" }}
    >
      {!error ? (
        <Image
          src="/images/avatar.jpg"
          alt="Muh Fuad Zahran Firman"
          fill
          className="object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <div className="flex h-full items-center justify-center">
          <span className="font-geist text-3xl font-bold text-ink-5">MFZ</span>
        </div>
      )}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const TIMELINE = [
  {
    year: "2020",
    category: "Pendidikan",
    title: "Masuk S1 Teknik Komputer",
    description:
      "Mulai menempuh pendidikan di Universitas Negeri Makassar jurusan Teknik Komputer. Mulai belajar pemrograman dan pengembangan web secara serius.",
    badge: null as string | null,
    isGold: false,
    isActive: false,
  },
  {
    year: "2022",
    category: "Riset",
    title: "Terlibat Riset Pertama",
    description:
      "Bergabung dengan kelompok riset kampus. Mulai mengeksplorasi machine learning, computer vision, dan pengolahan citra digital.",
    badge: null as string | null,
    isGold: false,
    isActive: false,
  },
  {
    year: "2023",
    category: "Profesional",
    title: "Magang — PT PLN (Persero) UIDs Sulselrabar",
    description:
      "Magang 2 bulan di divisi Lisdes (Listrik Desa). Terlibat langsung dalam proyek digitalisasi data kelistrikan desa di wilayah Sulawesi Selatan, Tenggara, dan Barat.",
    badge: "Bersertifikat" as string | null,
    isGold: false,
    isActive: false,
  },
  {
    year: "2023",
    category: "Publikasi",
    title: "Jurnal Sinta 2 Pertama — PCD",
    description:
      "Paper pertama berhasil dipublikasikan di jurnal terakreditasi Sinta 2 bidang Pengolahan Citra Digital.",
    badge: "Sinta 2 — Published" as string | null,
    isGold: true,
    isActive: false,
  },
  {
    year: "2024",
    category: "Profesional",
    title: "Magang — PT Vale Indonesia Tbk",
    description:
      "Magang 2 bulan di divisi Talent, Performance & Culture. Terlibat dalam proyek pengembangan sistem HR dan analitik performa karyawan berbasis data.",
    badge: "Bersertifikat" as string | null,
    isGold: false,
    isActive: false,
  },
  {
    year: "2024",
    category: "Publikasi",
    title: "Jurnal Sinta 2 Kedua — Data Mining",
    description:
      "Paper kedua dipublikasikan di jurnal terakreditasi Sinta 2 bidang Data Mining.",
    badge: "Sinta 2 — Published" as string | null,
    isGold: true,
    isActive: false,
  },
  {
    year: "2024",
    category: "Milestone",
    title: "Fresh Graduate Cumlaude ✦",
    description:
      "Lulus S1 Teknik Komputer dengan IPK 3.80 predikat Cumlaude, 2 jurnal Sinta 2, 2 pengalaman magang di perusahaan nasional, dan beberapa proyek freelance. Siap untuk peluang lebih besar.",
    badge: "Sekarang" as string | null,
    isGold: true,
    isActive: true,
  },
];

const EDUCATION = [
  {
    Icon: IconSchool,
    degree: "S1 Teknik Komputer",
    school: "Universitas Negeri Makassar",
    detail: null as string | null,
    year: "2020 — 2024",
    badge: "IPK 3.80 — Cumlaude",
  },
  {
    Icon: IconBolt,
    degree: "Magang Web Developer",
    school: "PT PLN (Persero) UIDs Sulselrabar",
    detail: "Divisi Lisdes (Listrik Desa)" as string | null,
    year: "2023 · 2 Bulan",
    badge: "Bersertifikat",
  },
  {
    Icon: IconBuilding,
    degree: "Magang — Talent & Culture",
    school: "PT Vale Indonesia Tbk",
    detail: "Divisi Talent, Performance & Culture" as string | null,
    year: "Sep — Des 2024 · 2 Bulan",
    badge: "Bersertifikat",
  },
];

const CERTS = [
  {
    Icon: IconBolt,
    name: "Sertifikat Magang",
    issuer: "PT PLN (Persero) UIDs Sulselrabar",
    year: "2023",
    published: false,
  },
  {
    Icon: IconBuilding,
    name: "Sertifikat Magang",
    issuer: "PT Vale Indonesia Tbk",
    year: "2024",
    published: false,
  },
  {
    Icon: IconRosette,
    name: "Sertifikat Kompetensi",
    issuer: "Analisis Program Berbasis Nasional",
    year: "2024",
    published: false,
  },
  {
    Icon: IconFileText,
    name: "Jurnal Sinta 2 — PCD",
    issuer: "Nama Jurnal (TODO: isi nanti)", // TODO: isi dengan nama jurnal asli
    year: "2024",
    published: true,
  },
  {
    Icon: IconFileText,
    name: "Jurnal Sinta 2 — Data Mining",
    issuer: "Nama Jurnal (TODO: isi nanti)", // TODO: isi dengan nama jurnal asli
    year: "2024",
    published: true,
  },
];

// ─── Section Wrapper ──────────────────────────────────────────────────────────

function Section({
  children,
  border = true,
}: {
  children: React.ReactNode;
  border?: boolean;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
      className={`px-5 py-10 md:px-10 md:py-12 lg:px-16 lg:py-14 ${
        border ? "border-b border-void-raised" : ""
      }`}
    >
      {children}
    </motion.section>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function AboutContent() {
  return (
    <div className="w-full">

      {/* ════════════════════════════════════════════
          SECTION 01 — BIO
      ════════════════════════════════════════════ */}
      <Section>
        <SectionHeader
          tag="01 — bio"
          eyebrow="Tentang Saya"
          title="Lebih dari sekadar menulis kode."
        />

        <div className="grid gap-8 md:grid-cols-[180px_1fr] md:gap-10 lg:gap-14">
          {/* Avatar */}
          <AvatarPhoto />

          {/* Bio text + tags + button */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <p className="font-jakarta text-base leading-relaxed text-ink-3">
                Halo! Saya{" "}
                <span className="font-medium text-ink">Muh Fuad Zahran Firman</span>
                , seorang Web Developer fresh graduate dari Teknik Komputer{" "}
                <span className="font-medium text-ink">Universitas Negeri Makassar</span>{" "}
                dengan IPK 3.80 predikat Cumlaude.
              </p>
              <p className="font-jakarta text-base leading-relaxed text-ink-3">
                Selain membangun produk web end-to-end untuk klien, saya juga aktif di dunia
                riset akademik — dengan 2 publikasi di jurnal bereputasi Sinta 2 di bidang
                Pengolahan Citra Digital dan Data Mining.
              </p>
              <p className="font-jakarta text-base leading-relaxed text-ink-3">
                Saya percaya bahwa kode yang baik bukan hanya yang bekerja, tapi yang mudah
                dipahami, di-maintain, dan memberikan dampak nyata bagi penggunanya.
              </p>
            </div>

            {/* Availability tags */}
            <div className="flex flex-wrap gap-2">
              <span
                className="inline-flex items-center rounded-full font-jakarta text-sm"
                style={{
                  padding: "5px 14px",
                  background: "rgba(201,169,110,0.08)",
                  color: "#C9A96E",
                  border: "0.5px solid rgba(201,169,110,0.22)",
                }}
              >
                Freelance Project
              </span>
              {["Full-time Remote", "Kolaborasi"].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center rounded-full font-jakarta text-sm text-ink-4"
                  style={{
                    padding: "5px 14px",
                    border: "0.5px solid #2A2A28",
                  }}
                >
                  {label}
                </span>
              ))}
            </div>

            {/* Download CV */}
            <div>
              <a
                href="/cv/cv-fuad-zahran.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 font-jakarta text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ background: "#E8E8E4", color: "#111110" }}
              >
                <IconDownload size={16} strokeWidth={2} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════
          SECTION 02 — TIMELINE
      ════════════════════════════════════════════ */}
      <Section>
        <SectionHeader
          tag="02 — perjalanan"
          eyebrow="Timeline"
          title="Perjalanan yang membentuk saya."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="flex flex-col"
        >
          {TIMELINE.map((item, i) => {
            const isLast = i === TIMELINE.length - 1;
            return (
              <motion.div
                key={`${item.year}-${i}`}
                variants={fadeUp}
                className="flex gap-5"
              >
                {/* Year */}
                <div className="w-12 shrink-0 pt-0.5 text-right">
                  <span className="font-mono text-xs text-ink-5">
                    {item.year}
                  </span>
                </div>

                {/* Dot + line */}
                <div className="flex w-3 shrink-0 flex-col items-center">
                  <div
                    className="relative z-10 mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{
                      background: item.isActive ? "#C9A96E" : "#222220",
                      border: `1px solid ${item.isActive ? "#C9A96E" : "#2A2A28"}`,
                      boxShadow: item.isActive ? "0 0 8px rgba(201,169,110,0.4)" : "none",
                    }}
                  />
                  {!isLast && (
                    <div
                      className="mt-1.5 w-px flex-1"
                      style={{ background: "#1E1E1C", minHeight: 20 }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 ${isLast ? "pb-2" : "pb-8"}`}>
                  <p className="mb-1 font-jakarta text-xs font-medium uppercase tracking-[0.12em] text-ink-5">
                    {item.category}
                  </p>
                  <h3
                    className="mb-2 font-geist text-sm font-semibold"
                    style={{ color: item.isActive ? "#C9A96E" : undefined }}
                  >
                    {!item.isActive && (
                      <span className="text-ink-3">{item.title}</span>
                    )}
                    {item.isActive && item.title}
                  </h3>
                  <p
                    className="font-jakarta text-sm leading-relaxed text-ink-4"
                    style={{ marginBottom: item.badge ? 10 : 0 }}
                  >
                    {item.description}
                  </p>
                  {item.badge &&
                    (item.isGold ? (
                      <GoldBadge label={item.badge} />
                    ) : (
                      <PlainBadge label={item.badge} />
                    ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      {/* ════════════════════════════════════════════
          SECTION 03 — PENDIDIKAN
      ════════════════════════════════════════════ */}
      <Section>
        <SectionHeader
          tag="03 — pendidikan"
          eyebrow="Pendidikan"
          title="Latar belakang akademik saya."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={cardStagger}
          className="grid gap-3 md:grid-cols-2 lg:grid-cols-3"
        >
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex gap-4 rounded-xl p-5"
              style={{ background: "#161614", border: "0.5px solid #1E1E1C" }}
            >
              {/* Icon box */}
              <div
                className="flex shrink-0 items-center justify-center rounded-lg"
                style={{
                  width: 42,
                  height: 42,
                  minWidth: 42,
                  background: "#1A1A18",
                  border: "0.5px solid #222220",
                }}
              >
                <edu.Icon size={20} strokeWidth={1.75} className="text-ink-4" />
              </div>

              {/* Text */}
              <div className="flex min-w-0 flex-col gap-1">
                <h3 className="font-geist text-sm font-medium text-ink-3">
                  {edu.degree}
                </h3>
                <p className="font-jakarta text-sm text-ink-4">{edu.school}</p>
                {edu.detail && (
                  <p className="font-jakarta text-xs text-ink-5">{edu.detail}</p>
                )}
                <p className="font-mono text-xs text-ink-5">{edu.year}</p>
                <div className="mt-1">
                  <GoldBadge label={edu.badge} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ════════════════════════════════════════════
          SECTION 04 — SERTIFIKASI
      ════════════════════════════════════════════ */}
      <Section>
        <SectionHeader
          tag="04 — sertifikasi"
          eyebrow="Sertifikasi & Publikasi"
          title="Kompetensi yang tersertifikasi."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={cardStagger}
          className="grid gap-3 md:grid-cols-2 lg:grid-cols-3"
        >
          {CERTS.map((cert, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-xl p-5"
              style={{ background: "#161614", border: "0.5px solid #1E1E1C" }}
            >
              {/* Icon box */}
              <div
                className="mb-3 flex items-center justify-center rounded-lg"
                style={{
                  width: 38,
                  height: 38,
                  background: "#1A1A18",
                  border: "0.5px solid #222220",
                }}
              >
                <cert.Icon size={18} strokeWidth={1.75} className="text-ink-4" />
              </div>

              <h3 className="mb-1 font-geist text-sm font-medium text-ink-3">
                {cert.name}
              </h3>
              <p className="mb-1 font-jakarta text-xs text-ink-4">{cert.issuer}</p>
              <p
                className="font-mono text-xs text-ink-5"
                style={{ marginBottom: cert.published ? 10 : 0 }}
              >
                {cert.year}
              </p>
              {cert.published && <GoldBadge label="Published" />}
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ════════════════════════════════════════════
          SECTION 05 — CTA
      ════════════════════════════════════════════ */}
      <Section border={false}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="rounded-xl p-8 md:p-10"
          style={{ background: "#161614", border: "0.5px solid #222220" }}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Left */}
            <div>
              <h2 className="mb-2 font-geist text-2xl font-semibold text-ink lg:text-3xl">
                Tertarik bekerja sama?
              </h2>
              <p className="font-jakarta text-base leading-relaxed text-ink-4 md:max-w-sm">
                Saya terbuka untuk peluang freelance, full-time remote, maupun
                kolaborasi proyek menarik.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2 md:flex-row md:shrink-0">
              <Link
                href="/#contact"
                className="flex items-center justify-center rounded-lg px-5 py-2.5 font-jakarta text-sm font-semibold transition-opacity hover:opacity-80 md:inline-flex"
                style={{ background: "#E8E8E4", color: "#111110" }}
              >
                Hubungi Saya →
              </Link>
              <Link
                href="/projects"
                className="flex items-center justify-center rounded-lg px-5 py-2.5 font-jakarta text-sm font-medium text-ink-4 transition-colors hover:text-ink-3 md:inline-flex"
                style={{ border: "0.5px solid #2A2A28" }}
              >
                Lihat Proyek
              </Link>
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}

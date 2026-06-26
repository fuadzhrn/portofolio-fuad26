"use client";

import { motion } from "framer-motion";
import { IconStarFilled, IconStar, IconSparkles } from "@tabler/icons-react";
import { fadeUp, stagger } from "@/lib/motion";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  rating: number; // e.g. 5 or 4.5
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ahmad Ridwan",
    role: "Direktur",
    company: "PT Maju Bersama",
    rating: 5,
    quote:
      "Fuad memberikan hasil yang jauh melampaui ekspektasi kami. Website baru kami mendapat respons sangat positif dari klien dan mitra bisnis. Profesional, tepat waktu, dan komunikatif.",
  },
  {
    name: "Sari Nurhayati",
    role: "Owner",
    company: "Toko Batik Nusantara",
    rating: 5,
    quote:
      "Platform e-commerce yang dibangun Fuad benar-benar mengubah bisnis kami. Penjualan online meningkat signifikan sejak launch. Sangat direkomendasikan untuk UMKM yang ingin go digital.",
  },
  {
    name: "dr. Rina Kusuma",
    role: "Pemilik",
    company: "Klinik Sehat Bersama",
    rating: 4.5,
    quote:
      "Landing page yang dibuat rapi, informatif, dan mudah digunakan oleh pasien dari berbagai kalangan. Pendaftaran online sekarang jauh lebih terorganisir dari sebelumnya.",
  },
];

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <IconStarFilled key={`f${i}`} size={12} className="text-gold" />
      ))}
      {half && (
        <div className="relative">
          <IconStar size={12} className="text-void-edge-hi" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
            <IconStarFilled size={12} className="text-gold" />
          </div>
        </div>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <IconStar key={`e${i}`} size={12} className="text-void-edge-hi" />
      ))}
    </div>
  );
}

export default function Testimonial() {
  return (
    <section className="w-full border-b border-[#1a1a18] px-5 py-10 md:px-10 md:py-12 lg:px-16 lg:py-16">
      <div>
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mb-12"
        >
          <motion.p
            variants={fadeUp}
            className="mb-2 font-jakarta text-xs font-medium uppercase tracking-[0.2em] text-ink-4"
          >
            Testimoni
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-geist text-3xl font-bold tracking-tight text-ink lg:text-4xl"
          >
            Kata mereka tentang saya
          </motion.h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid gap-4 md:grid-cols-2"
        >
          {/* Testimonial cards */}
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="flex flex-col gap-4 rounded-xl border border-void-edge bg-void-card p-6"
            >
              {/* Quote mark */}
              <span className="font-geist text-4xl font-bold leading-none text-gold">
                &ldquo;
              </span>

              {/* Quote */}
              <p className="font-jakarta text-sm leading-relaxed text-ink-3">
                {t.quote}
              </p>

              {/* Author */}
              <div className="mt-auto flex items-center gap-3 border-t border-void-edge pt-4">
                {/* Avatar placeholder */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-void-surface">
                  <span className="font-geist text-xs font-bold text-ink-4">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-0.5">
                  <span className="font-jakarta text-sm font-semibold text-ink">
                    {t.name}
                  </span>
                  <span className="font-jakarta text-xs text-ink-4">
                    {t.role}, {t.company}
                  </span>
                </div>
                <Stars rating={t.rating} />
              </div>
            </motion.div>
          ))}

          {/* Empty "next" slot */}
          <motion.div
            variants={fadeUp}
            className="hidden md:flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-void-edge bg-void-base p-8 text-center"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-void-card text-ink-5">
              <IconSparkles size={20} strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-geist text-sm font-semibold text-ink-4">
                Proyek berikutnya?
              </p>
              <p className="mt-1 font-jakarta text-xs leading-relaxed text-ink-5">
                Tempat ini bisa milik kamu.
                <br />
                Mari kita kerjakan sesuatu bersama.
              </p>
            </div>
            <a
              href="/#contact"
              className="inline-flex items-center gap-1.5 rounded-xl border border-void-edge px-4 py-2 font-jakarta text-xs font-medium text-ink-4 transition-colors hover:bg-void-card hover:text-ink-2"
            >
              Hubungi Saya
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

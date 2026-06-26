"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconArrowRight, IconMessage } from "@tabler/icons-react";
import { heroContainer, fadeUp } from "@/lib/motion";

const stats = [
  { value: "9+", label: "Proyek" },
  { value: "2×", label: "Jurnal Sinta 2" },
  { value: "3+", label: "Klien" },
  { value: "1+", label: "Tahun" },
];

export default function Hero() {
  return (
    <section className="flex min-h-screen w-full items-center border-b border-[#1a1a18] px-16 pb-16 pt-20">
      <div className="w-full">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-7"
        >
          {/* Available badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-void-edge bg-void-card px-3.5 py-1.5 text-xs font-medium text-ink-3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              Available for work
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={fadeUp} className="flex flex-col gap-1">
            <p className="font-jakarta text-base font-medium text-ink-4">
              Hi, I&apos;m
            </p>
            <h1 className="font-geist text-5xl font-bold leading-[1.1] tracking-tight text-ink md:text-6xl">
              Muh Fuad Zahran
              <br />
              <span className="text-ink-2">Firman</span>
            </h1>
          </motion.div>

          {/* Role badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {["Web Developer", "Fresh Graduate Teknik Komputer"].map((role) => (
              <span
                key={role}
                className="rounded-lg border border-void-edge bg-void-card px-3 py-1 font-jakarta text-sm font-medium text-ink-3"
              >
                {role}
              </span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="max-w-lg font-jakarta text-base leading-relaxed text-ink-3"
          >
            Saya membangun website dan aplikasi web yang cepat, modern, dan
            berdampak — mulai dari desain hingga deployment. Berbasis di
            Makassar, terbuka untuk kolaborasi remote maupun lokal.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-2.5 font-jakarta text-sm font-semibold text-void-base transition-opacity duration-150 hover:opacity-85"
            >
              Lihat Proyek
              <IconArrowRight size={15} strokeWidth={2.5} />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-void-edge px-5 py-2.5 font-jakarta text-sm font-semibold text-ink-2 transition-colors duration-150 hover:bg-void-raised hover:text-ink"
            >
              <IconMessage size={15} strokeWidth={1.75} />
              Hubungi Saya
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-2 flex flex-wrap items-center gap-0"
          >
            {stats.map((stat, i) => (
              <Fragment key={stat.label}>
                {i > 0 && (
                  <div className="mx-6 h-7 w-px bg-void-edge" />
                )}
                <div className="flex flex-col gap-0.5">
                  <span className="font-geist text-2xl font-bold leading-none text-ink">
                    {stat.value}
                  </span>
                  <span className="font-jakarta text-xs text-ink-4">
                    {stat.label}
                  </span>
                </div>
              </Fragment>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

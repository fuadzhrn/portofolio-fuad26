"use client";

import { motion } from "framer-motion";
import {
  IconPuzzle,
  IconStack2,
  IconFlask,
  IconBolt,
} from "@tabler/icons-react";
import { fadeUp, stagger } from "@/lib/motion";

const values = [
  {
    icon: IconPuzzle,
    title: "Problem Solver",
    desc: "Saya tidak hanya menulis kode — saya memahami masalah bisnis terlebih dahulu dan mencari solusi yang tepat sasaran.",
  },
  {
    icon: IconStack2,
    title: "End-to-End",
    desc: "Dari wireframe di Figma hingga deployment di server, semua fase pengembangan saya tangani dengan standar yang konsisten.",
  },
  {
    icon: IconFlask,
    title: "Research-Backed",
    desc: "Setiap keputusan teknis saya dukung dengan riset dan best practice terkini — bukan sekadar ikut tren.",
  },
  {
    icon: IconBolt,
    title: "Fast & Communicative",
    desc: "Responsif, update berkala, dan selalu on-time. Saya percaya komunikasi yang baik adalah setengah dari keberhasilan proyek.",
  },
];

export default function Value() {
  return (
    <section className="w-full border-b border-[#1a1a18] px-16 py-16">
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
            Kenapa Saya?
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-geist text-3xl font-bold tracking-tight text-ink lg:text-4xl"
          >
            Nilai yang saya bawa
          </motion.h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-4 sm:grid-cols-2"
        >
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                variants={fadeUp}
                className="group flex flex-col gap-4 rounded-xl border border-void-edge bg-void-card p-6 transition-colors duration-200 hover:border-void-edge-hi hover:bg-void-raised"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-void-surface text-ink-3 transition-colors group-hover:text-ink-2">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-geist text-base font-semibold text-ink">
                    {v.title}
                  </h3>
                  <p className="font-jakarta text-sm leading-relaxed text-ink-4">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

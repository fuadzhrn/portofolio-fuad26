"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import {
  IconMail,
  IconBrandWhatsapp,
  IconMapPin,
  IconBrandGithub,
  IconSend,
} from "@tabler/icons-react";

const contactInfo = [
  {
    icon: IconMail,
    label: "Email",
    value: "fuadzahran64@gmail.com",
    href: "mailto:fuadzahran64@gmail.com",
  },
  {
    icon: IconBrandWhatsapp,
    label: "WhatsApp",
    value: "+62 8xx-xxxx-xxxx",
    href: "https://wa.me/628xxxxxxxxxx",
  },
  {
    icon: IconMapPin,
    label: "Lokasi",
    value: "Makassar, Sulawesi Selatan",
    href: null,
  },
  {
    icon: IconBrandGithub,
    label: "GitHub",
    value: "@fuadzahranfirman",
    href: "https://github.com/fuadzahranfirman",
  },
];

type FormState = "idle" | "sending" | "sent";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    const subject = encodeURIComponent(`Pesan dari ${form.name}`);
    const body = encodeURIComponent(
      `Nama: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    setTimeout(() => {
      window.location.href = `mailto:fuadzahran64@gmail.com?subject=${subject}&body=${body}`;
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 400);
  };

  return (
    <section id="contact" className="w-full border-b border-[#1a1a18] px-5 py-10 md:px-10 md:py-12 lg:px-16 lg:py-16">
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
            Kontak
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-geist text-3xl font-bold tracking-tight text-ink lg:text-4xl"
          >
            Mari berkolaborasi
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 max-w-md font-jakarta text-sm leading-relaxed text-ink-4"
          >
            Punya proyek atau ide menarik? Saya selalu terbuka untuk diskusi.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-[1fr_320px] lg:gap-14">
          {/* Form */}
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            onSubmit={handleSubmit}
            className="order-2 flex flex-col gap-4 md:order-1"
          >
            <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="font-jakarta text-xs font-medium text-ink-4">
                  Nama
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nama kamu"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl border border-void-edge bg-void-card px-4 py-2.5 font-jakarta text-sm text-ink placeholder:text-ink-5 outline-none transition-colors focus:border-void-edge-hi"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-jakarta text-xs font-medium text-ink-4">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="email@kamu.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-xl border border-void-edge bg-void-card px-4 py-2.5 font-jakarta text-sm text-ink placeholder:text-ink-5 outline-none transition-colors focus:border-void-edge-hi"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
              <label className="font-jakarta text-xs font-medium text-ink-4">
                Pesan
              </label>
              <textarea
                required
                rows={5}
                placeholder="Ceritakan tentang proyek atau kebutuhanmu..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="resize-none rounded-xl border border-void-edge bg-void-card px-4 py-3 font-jakarta text-sm text-ink placeholder:text-ink-5 outline-none transition-colors focus:border-void-edge-hi"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-2.5 font-jakarta text-sm font-semibold text-void-base transition-opacity hover:opacity-85 disabled:opacity-50"
              >
                <IconSend size={15} strokeWidth={2} />
                {status === "sending"
                  ? "Membuka email..."
                  : status === "sent"
                    ? "Email dibuka ✓"
                    : "Kirim Pesan"}
              </button>
            </motion.div>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="order-1 flex flex-col gap-3 md:order-2"
          >
            <motion.p
              variants={fadeUp}
              className="mb-1 font-jakarta text-xs font-medium uppercase tracking-[0.15em] text-ink-5"
            >
              Info Kontak
            </motion.p>
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const content = (
                <div className="flex items-center gap-3 rounded-xl border border-void-edge bg-void-card px-4 py-3.5 transition-colors hover:border-void-edge-hi hover:bg-void-raised">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-void-surface text-ink-4">
                    <Icon size={15} strokeWidth={1.75} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-jakarta text-[10px] text-ink-5">
                      {info.label}
                    </span>
                    <span className="font-jakarta text-sm font-medium text-ink-2">
                      {info.value}
                    </span>
                  </div>
                </div>
              );

              return (
                <motion.div key={info.label} variants={fadeUp}>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}

            {/* Availability note */}
            <motion.div
              variants={fadeUp}
              className="mt-2 flex items-start gap-2 rounded-xl border border-void-edge bg-void-card px-4 py-3.5"
            >
              <span className="relative mt-1 flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              <p className="font-jakarta text-xs leading-relaxed text-ink-4">
                Saat ini{" "}
                <span className="font-semibold text-gold">tersedia</span> untuk
                proyek freelance, magang, atau posisi full-time. Biasanya
                membalas dalam 24 jam.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

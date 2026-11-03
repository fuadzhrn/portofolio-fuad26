"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconMapPin, IconBriefcase, IconMail } from "@tabler/icons-react";
import { fadeUp, stagger } from "@/lib/motion";
import { useT } from "@/components/LangProvider";
import { ui } from "@/data/ui-strings";
import { profile, bio, timeline } from "@/data/profile";

export default function About() {
  const t = useT();
  const [photoError, setPhotoError] = useState(false);
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
            {t(ui.aboutMe)}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-geist text-3xl font-bold tracking-tight text-ink lg:text-4xl"
          >
            {t(ui.aboutTeaserHeading)}
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
            {/* Avatar */}
            <motion.div
              variants={fadeUp}
              className="relative h-[120px] w-[120px] overflow-hidden rounded-2xl border border-void-edge bg-void-raised md:h-[160px] md:w-[160px] lg:h-[200px] lg:w-[200px]"
            >
              {!photoError ? (
                <Image
                  src="/images/avatar.jpg"
                  alt={profile.name}
                  fill
                  sizes="(min-width: 1024px) 200px, (min-width: 768px) 160px, 120px"
                  className="object-cover object-top"
                  onError={() => setPhotoError(true)}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="font-geist text-5xl font-bold text-ink-5">
                    MFZ
                  </span>
                </div>
              )}
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
                  {t(ui.openToWork)}
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-ink-4">
                  <IconMapPin size={13} strokeWidth={1.75} />
                  <span className="font-jakarta text-xs">{t(profile.location)}</span>
                </div>
                <div className="flex items-center gap-2 text-ink-4">
                  <IconBriefcase size={13} strokeWidth={1.75} />
                  <span className="font-jakarta text-xs">{t(profile.openTo)}</span>
                </div>
                <div className="flex items-center gap-2 text-ink-4">
                  <IconMail size={13} strokeWidth={1.75} />
                  <span className="font-jakarta text-xs">{profile.email}</span>
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
              {bio.map((paragraph, i) => (
                <p key={i} className="font-jakarta text-base leading-relaxed text-ink-3">
                  {paragraph.map((seg, j) =>
                    seg.strong ? (
                      <span key={j} className="text-ink">{t(seg.text)}</span>
                    ) : (
                      t(seg.text)
                    )
                  )}
                </p>
              ))}
            </motion.div>

            {/* Timeline */}
            <motion.div variants={fadeUp} className="flex flex-col">
              <p className="mb-4 font-jakarta text-xs font-medium uppercase tracking-[0.15em] text-ink-5">
                {t(ui.journey)}
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
                          {t(item.title)}
                        </span>
                      </div>
                      <p className="font-jakarta text-sm leading-relaxed text-ink-4">
                        {t(item.description)}
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

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
import { useT } from "@/components/LangProvider";
import type { Localized } from "@/lib/i18n";
import { ui } from "@/data/ui-strings";
import {
  profile,
  bio,
  availabilityTags,
  timeline,
  education,
  certifications,
  publications,
  type EducationItem,
} from "@/data/profile";
import { getProjectBySlug } from "@/data/projects";

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
          alt={profile.name}
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

const EDUCATION_ICONS: Record<EducationItem["kind"], React.ElementType> = {
  education: IconSchool,
  pln: IconBolt,
  vale: IconBuilding,
};

type CertCard = {
  Icon: React.ElementType;
  name: Localized | string;
  issuer: Localized | string;
  year: Localized | string;
  badge: Localized | string;
  href?: string;
};

// Certifications first, then the two SINTA 2 publications (title + DOI from projects).
const CERTS: CertCard[] = [
  ...certifications.map((c) => ({
    Icon: IconRosette,
    name: c.name,
    issuer: c.issuer,
    year: c.validity,
    badge: c.badge,
  })),
  ...publications.map((pub) => {
    const project = getProjectBySlug(pub.slug);
    return {
      Icon: IconFileText,
      name: project?.paperTitle ?? project?.title ?? pub.slug,
      issuer: pub.venue,
      year: pub.year,
      badge: ui.sinta2,
      href: project?.doiUrl,
    };
  }),
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
  const t = useT();
  return (
    <div className="w-full">

      {/* ════════════════════════════════════════════
          SECTION 01 — BIO
      ════════════════════════════════════════════ */}
      <Section>
        <SectionHeader
          tag={t(ui.bioTag)}
          eyebrow={t(ui.aboutMe)}
          title={t(ui.bioTitle)}
        />

        <div className="grid gap-8 md:grid-cols-[180px_1fr] md:gap-10 lg:gap-14">
          {/* Avatar */}
          <AvatarPhoto />

          {/* Bio text + tags + button */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              {bio.map((paragraph, i) => (
                <p key={i} className="font-jakarta text-base leading-relaxed text-ink-3">
                  {paragraph.map((seg, j) =>
                    seg.strong ? (
                      <span key={j} className="font-medium text-ink">{t(seg.text)}</span>
                    ) : (
                      t(seg.text)
                    )
                  )}
                </p>
              ))}
            </div>

            {/* Availability tags */}
            <div className="flex flex-wrap gap-2">
              {availabilityTags.map((tag) =>
                tag.gold ? (
                  <span
                    key={tag.label.en}
                    className="inline-flex items-center rounded-full font-jakarta text-sm"
                    style={{
                      padding: "5px 14px",
                      background: "rgba(201,169,110,0.08)",
                      color: "#C9A96E",
                      border: "0.5px solid rgba(201,169,110,0.22)",
                    }}
                  >
                    {t(tag.label)}
                  </span>
                ) : (
                  <span
                    key={tag.label.en}
                    className="inline-flex items-center rounded-full font-jakarta text-sm text-ink-4"
                    style={{
                      padding: "5px 14px",
                      border: "0.5px solid #2A2A28",
                    }}
                  >
                    {t(tag.label)}
                  </span>
                )
              )}
            </div>

            {/* Download CV — hidden until the file exists (see profile.cvUrl) */}
            {profile.cvUrl && (
            <div>
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 font-jakarta text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ background: "#E8E8E4", color: "#111110" }}
              >
                <IconDownload size={16} strokeWidth={2} />
                {t(ui.downloadCv)}
              </a>
            </div>
            )}
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════
          SECTION 02 — TIMELINE
      ════════════════════════════════════════════ */}
      <Section>
        <SectionHeader
          tag={t(ui.timelineTag)}
          eyebrow={t(ui.timelineEyebrow)}
          title={t(ui.timelineTitle)}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="flex flex-col"
        >
          {timeline.map((item, i) => {
            const isLast = i === timeline.length - 1;
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
                      background: item.active ? "#C9A96E" : "#222220",
                      border: `1px solid ${item.active ? "#C9A96E" : "#2A2A28"}`,
                      boxShadow: item.active ? "0 0 8px rgba(201,169,110,0.4)" : "none",
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
                    {t(item.category)} · {t(item.period)}
                  </p>
                  <h3
                    className="mb-2 font-geist text-sm font-semibold"
                    style={{ color: item.active ? "#C9A96E" : undefined }}
                  >
                    {!item.active && (
                      <span className="text-ink-3">{t(item.title)}</span>
                    )}
                    {item.active && t(item.title)}
                  </h3>
                  <p
                    className="font-jakarta text-sm leading-relaxed text-ink-4"
                    style={{ marginBottom: item.badge ? 10 : 0 }}
                  >
                    {t(item.description)}
                  </p>
                  {item.badge &&
                    (item.gold ? (
                      <GoldBadge label={t(item.badge)} />
                    ) : (
                      <PlainBadge label={t(item.badge)} />
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
          tag={t(ui.educationTag)}
          eyebrow={t(ui.educationEyebrow)}
          title={t(ui.educationTitle)}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={cardStagger}
          className="grid gap-3 md:grid-cols-2 lg:grid-cols-3"
        >
          {education.map((edu, i) => {
            const EduIcon = EDUCATION_ICONS[edu.kind];
            return (
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
                <EduIcon size={20} strokeWidth={1.75} className="text-ink-4" />
              </div>

              {/* Text */}
              <div className="flex min-w-0 flex-col gap-1">
                <h3 className="font-geist text-sm font-medium text-ink-3">
                  {t(edu.title)}
                </h3>
                <p className="font-jakarta text-sm text-ink-4">{edu.place}</p>
                {edu.detail && (
                  <p className="font-jakarta text-xs text-ink-5">{t(edu.detail)}</p>
                )}
                <p className="font-mono text-xs text-ink-5">{t(edu.period)}</p>
                {edu.badge && (
                  <div className="mt-1">
                    <GoldBadge label={t(edu.badge)} />
                  </div>
                )}
              </div>
            </motion.div>
            );
          })}
        </motion.div>
      </Section>

      {/* ════════════════════════════════════════════
          SECTION 04 — SERTIFIKASI
      ════════════════════════════════════════════ */}
      <Section>
        <SectionHeader
          tag={t(ui.certsTag)}
          eyebrow={t(ui.certsEyebrow)}
          title={t(ui.certsTitle)}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={cardStagger}
          className="grid gap-3 md:grid-cols-2 lg:grid-cols-3"
        >
          {CERTS.map((cert, i) => {
            const body = (
            <>
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
                {t(cert.name)}
              </h3>
              <p className="mb-1 font-jakarta text-xs text-ink-4">{t(cert.issuer)}</p>
              <p
                className="font-mono text-xs text-ink-5"
                style={{ marginBottom: 10 }}
              >
                {t(cert.year)}
              </p>
              <GoldBadge label={t(cert.badge)} />
            </>
            );
            return (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-xl p-5"
              style={{ background: "#161614", border: "0.5px solid #1E1E1C" }}
            >
              {cert.href ? (
                <a href={cert.href} target="_blank" rel="noopener noreferrer" className="block">
                  {body}
                </a>
              ) : (
                body
              )}
            </motion.div>
            );
          })}
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
                {t(ui.ctaHeading)}
              </h2>
              <p className="font-jakarta text-base leading-relaxed text-ink-4 md:max-w-sm">
                {t(ui.ctaBody)}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2 md:flex-row md:shrink-0">
              <Link
                href="/#contact"
                className="flex items-center justify-center rounded-lg px-5 py-2.5 font-jakarta text-sm font-semibold transition-opacity hover:opacity-80 md:inline-flex"
                style={{ background: "#E8E8E4", color: "#111110" }}
              >
                {t(ui.contactMe)} →
              </Link>
              <Link
                href="/projects"
                className="flex items-center justify-center rounded-lg px-5 py-2.5 font-jakarta text-sm font-medium text-ink-4 transition-colors hover:text-ink-3 md:inline-flex"
                style={{ border: "0.5px solid #2A2A28" }}
              >
                {t(ui.viewProjects)}
              </Link>
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}

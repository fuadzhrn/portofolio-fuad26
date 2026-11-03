"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import {
  IconMail,
  IconMapPin,
  IconBrandGithub,
  IconBrandLinkedin,
  IconDownload,
} from "@tabler/icons-react";
import { useT } from "@/components/LangProvider";
import CopyEmailButton from "@/components/CopyEmailButton";
import { ui } from "@/data/ui-strings";
import { profile } from "@/data/profile";

// No phone / WhatsApp: the repo is public.
const MAILTO = `mailto:${profile.email}?subject=Project%20inquiry`;

// Same button styles as the Hero CTAs.
const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-5 py-2.5 font-jakarta text-sm font-semibold text-void-base transition-opacity duration-150 hover:opacity-85";
const ghostButton =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-void-edge px-5 py-2.5 font-jakarta text-sm font-semibold text-ink-2 transition-colors duration-150 hover:bg-void-raised hover:text-ink";

const contactInfo = [
  {
    icon: IconMail,
    label: ui.email,
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: IconMapPin,
    label: ui.location,
    value: profile.location,
    href: null,
  },
  {
    icon: IconBrandGithub,
    label: ui.github,
    value: `@${profile.github.handle}`,
    href: profile.github.url,
  },
  {
    icon: IconBrandLinkedin,
    label: ui.linkedin,
    value: profile.linkedin.handle,
    href: profile.linkedin.url,
  },
];

export default function Contact() {
  const t = useT();

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
            {t(ui.contact)}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-geist text-3xl font-bold tracking-tight text-ink lg:text-4xl"
          >
            {t(ui.contactHeading)}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 max-w-md font-jakarta text-sm leading-relaxed text-ink-4"
          >
            {t(ui.contactIntro)}
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-[1fr_320px] lg:gap-14">
          {/* Call to action (above the info panel on mobile) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-4 rounded-xl border border-void-edge bg-void-card p-6"
            >
              <h3 className="font-geist text-base font-semibold text-ink">
                {t(ui.ctaCardTitle)}
              </h3>
              <p className="font-jakarta text-sm leading-relaxed text-ink-4">
                {t(ui.ctaCardBody)}
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={MAILTO} className={primaryButton}>
                  <IconMail size={15} strokeWidth={2} />
                  {t(ui.emailMe)}
                </a>
                <a
                  href={profile.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ghostButton}
                >
                  <IconBrandLinkedin size={15} strokeWidth={1.75} />
                  {t(ui.linkedin)}
                </a>
                {/* TODO: add CV file — public/cv/cv-fuad-zahran.pdf, then set profile.cvUrl */}
                {profile.cvUrl && (
                  <a href={profile.cvUrl} download className={ghostButton}>
                    <IconDownload size={15} strokeWidth={1.75} />
                    {t(ui.downloadCv)}
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="flex flex-col gap-3"
          >
            <motion.p
              variants={fadeUp}
              className="mb-1 font-jakarta text-xs font-medium uppercase tracking-[0.15em] text-ink-5"
            >
              {t(ui.contactInfo)}
            </motion.p>
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const content = (
                <div className="flex items-center gap-3 rounded-xl border border-void-edge bg-void-card px-4 py-3.5 transition-colors hover:border-void-edge-hi hover:bg-void-raised">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-void-surface text-ink-4">
                    <Icon size={15} strokeWidth={1.75} />
                  </div>
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <span className="font-jakarta text-[10px] text-ink-5">
                      {t(info.label)}
                    </span>
                    <span className="font-jakarta text-sm font-medium text-ink-2">
                      {info.label === ui.email ? (
                        // Let a long address wrap after "@" instead of overflowing the card.
                        <>
                          {profile.email.split("@")[0]}@<wbr />
                          {profile.email.split("@")[1]}
                        </>
                      ) : (
                        t(info.value)
                      )}
                    </span>
                  </div>
                </div>
              );

              if (info.label === ui.email) {
                return (
                  <motion.div key={info.label.en} variants={fadeUp} className="flex items-stretch gap-2">
                    <a href={info.href ?? undefined} className="min-w-0 flex-1">
                      {content}
                    </a>
                    <CopyEmailButton email={profile.email} />
                  </motion.div>
                );
              }

              return (
                <motion.div key={info.label.en} variants={fadeUp}>
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
                {t(ui.availabilityBefore)}{" "}
                <span className="font-semibold text-gold">{t(ui.availabilityHighlight)}</span>{" "}
                {t(ui.availabilityAfter)}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

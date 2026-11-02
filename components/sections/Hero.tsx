"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconArrowRight, IconMessage } from "@tabler/icons-react";
import { heroContainer, fadeUp } from "@/lib/motion";
import { t } from "@/lib/i18n";
import { ui } from "@/data/ui-strings";
import { profile, heroIntro, stats } from "@/data/profile";

export default function Hero() {
  return (
    <section className="w-full border-b border-[#1a1a18] px-5 py-10 md:px-10 md:py-12 lg:px-16 lg:py-16">
      <div>
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 md:gap-7"
        >
          {/* Available badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-void-edge bg-void-card px-3.5 py-1.5 text-xs font-medium text-ink-3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              {t(profile.availability)}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={fadeUp} className="flex flex-col gap-1">
            <p className="font-jakarta text-base font-medium text-ink-4">
              {t(ui.hiIm)}
            </p>
            <h1 className="font-geist text-4xl font-semibold leading-[1.1] tracking-tight text-ink md:text-5xl md:font-bold lg:text-6xl">
              {profile.name}
            </h1>
          </motion.div>

          {/* Role badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {profile.roleBadges.map((role) => (
              <span
                key={role.en}
                className="rounded-lg border border-void-edge bg-void-card px-3 py-1 font-jakarta text-sm font-medium text-ink-3"
              >
                {t(role)}
              </span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="max-w-2xl font-jakarta text-[13px] leading-relaxed text-ink-3 md:text-base"
          >
            {t(heroIntro)}
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center">
            <Link
              href="/projects"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-5 py-2.5 font-jakarta text-sm font-semibold text-void-base transition-opacity duration-150 hover:opacity-85 md:inline-flex md:w-auto"
            >
              {t(ui.viewProjects)}
              <IconArrowRight size={15} strokeWidth={2.5} />
            </Link>
            <Link
              href="/#contact"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-void-edge px-5 py-2.5 font-jakarta text-sm font-semibold text-ink-2 transition-colors duration-150 hover:bg-void-raised hover:text-ink md:inline-flex md:w-auto"
            >
              <IconMessage size={15} strokeWidth={1.75} />
              {t(ui.contactMe)}
            </Link>
          </motion.div>

          {/* Stats — mobile: 2×2 grid */}
          <motion.div variants={fadeUp} className="mt-1 grid grid-cols-2 gap-4 md:hidden">
            {stats.map((stat) => (
              <div key={stat.label.en} className="flex flex-col gap-0.5">
                <span className="font-geist text-xl font-bold leading-none text-ink">
                  {t(stat.value)}
                </span>
                <span className="font-jakarta text-xs text-ink-4">{t(stat.label)}</span>
              </div>
            ))}
          </motion.div>

          {/* Stats — tablet/desktop: flex row with dividers */}
          <motion.div variants={fadeUp} className="mt-1 hidden items-center md:flex">
            {stats.map((stat, i) => (
              <Fragment key={stat.label.en}>
                {i > 0 && <div className="mx-5 h-7 w-px bg-void-edge lg:mx-6" />}
                <div className="flex flex-col gap-0.5">
                  <span className="font-geist text-2xl font-bold leading-none text-ink">
                    {t(stat.value)}
                  </span>
                  <span className="font-jakarta text-xs text-ink-4">{t(stat.label)}</span>
                </div>
              </Fragment>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

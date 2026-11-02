"use client";

import { motion } from "framer-motion";
import {
  IconCode,
  IconBrain,
  IconFaceId,
  IconChartBar,
} from "@tabler/icons-react";
import { fadeUp, stagger } from "@/lib/motion";
import { useT } from "@/components/LangProvider";
import { ui } from "@/data/ui-strings";
import { pillars } from "@/data/profile";

// One icon per pillar, in the same order as `pillars` in data/profile.ts.
const PILLAR_ICONS = [IconCode, IconBrain, IconFaceId, IconChartBar];

const values = pillars.map((p, i) => ({ ...p, icon: PILLAR_ICONS[i] }));

export default function Value() {
  const t = useT();
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
            {t(ui.whyMe)}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-geist text-3xl font-bold tracking-tight text-ink lg:text-4xl"
          >
            {t(ui.whatIBring)}
          </motion.h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-4 md:grid-cols-2"
        >
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title.en}
                variants={fadeUp}
                className="group flex flex-col gap-4 rounded-xl border border-void-edge bg-void-card p-6 transition-colors duration-200 hover:border-void-edge-hi hover:bg-void-raised"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-void-surface text-ink-3 transition-colors group-hover:text-ink-2">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-geist text-base font-semibold text-ink">
                    {t(v.title)}
                  </h3>
                  <p className="font-jakarta text-sm leading-relaxed text-ink-4">
                    {t(v.description)}
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

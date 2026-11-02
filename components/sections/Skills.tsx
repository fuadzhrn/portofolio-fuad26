"use client";

import { motion } from "framer-motion";
import {
  IconLock,
  IconScanEye,
  IconDatabase,
  IconCode,
  IconTable,
  IconChartBar,
  IconBracketsAngle,
  IconCloud,
} from "@tabler/icons-react";
import { fadeUp, stagger } from "@/lib/motion";
import { useT } from "@/components/LangProvider";
import { ui } from "@/data/ui-strings";
import { skills, skillGroups, LOCKED_COLOR, type Skill, type LineIcon } from "@/data/skills";
import GithubGraph from "@/components/sections/GithubGraph";
import type { ContributionData } from "@/lib/github";

const ICON_SIZE = 26;

// Thin Tabler-style line icons for skills without a Simple Icons logo.
const LINE_ICONS: Record<LineIcon, React.ElementType> = {
  yolo: IconScanEye,
  sql: IconDatabase,
  api: IconCode,
  excel: IconTable,
  powerbi: IconChartBar,
  vscode: IconBracketsAngle,
  aws: IconCloud,
};

function SkillIcon({ skill, color }: { skill: Skill; color: string }) {
  if (skill.icon.kind === "line") {
    const Icon = LINE_ICONS[skill.icon.name];
    return <Icon size={ICON_SIZE} strokeWidth={1.5} style={{ color }} aria-hidden />;
  }
  return (
    <svg
      width={ICON_SIZE}
      height={ICON_SIZE}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ color }}
      aria-hidden
    >
      <path d={skill.icon.path} />
    </svg>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`group relative flex flex-col items-center justify-center gap-1.5 rounded-xl border p-2 transition-all duration-150 md:gap-2.5 md:p-4 ${
        skill.locked
          ? "border-void-edge bg-void-card opacity-50 hover:opacity-70"
          : "border-void-edge bg-void-card hover:border-void-edge-hi hover:bg-void-raised"
      }`}
    >
      {skill.locked && (
        <div className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-void-surface">
          <IconLock size={9} strokeWidth={2} className="text-ink-5" />
        </div>
      )}

      <SkillIcon skill={skill} color={skill.locked ? LOCKED_COLOR : skill.color} />

      <span
        className={`text-center font-jakarta text-[9px] leading-tight md:text-[10.5px] ${
          skill.locked ? "text-ink-5" : "text-ink-4"
        }`}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}

type Props = { contributions: ContributionData | null };

export default function Skills({ contributions }: Props) {
  const t = useT();
  return (
    <section id="skills" className="w-full border-b border-[#1a1a18] px-5 py-10 md:px-10 md:py-12 lg:px-16 lg:py-16">
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
            {t(ui.techStack)}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-geist text-3xl font-bold tracking-tight text-ink lg:text-4xl"
          >
            {t(ui.skillsHeading)}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 font-jakarta text-sm leading-relaxed text-ink-4"
          >
            {t(ui.skillsIntro)}{" "}
            <span className="inline-flex items-center gap-1 text-ink-5">
              <IconLock size={11} strokeWidth={2} />
              <span>{t(ui.learning)}</span>
            </span>
          </motion.p>
        </motion.div>

        {/* Skill groups: Languages & Frameworks, Tools & Platform */}
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className={i < skillGroups.length - 1 ? "mb-10" : undefined}
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 font-jakarta text-xs font-medium uppercase tracking-[0.15em] text-ink-5"
            >
              {t(group.label)}
            </motion.p>
            <motion.div
              variants={stagger}
              className="grid grid-cols-4 gap-2 md:grid-cols-6 md:gap-3 lg:grid-cols-9 xl:grid-cols-10"
            >
              {skills
                .filter((skill) => skill.group === group.id)
                .map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
            </motion.div>
          </motion.div>
        ))}

        {/* GitHub Graph */}
        <div className="mt-8 overflow-x-auto pb-1">
          <GithubGraph data={contributions} />
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { IconLock } from "@tabler/icons-react";
import { fadeUp, stagger } from "@/lib/motion";
import GithubGraph from "@/components/sections/GithubGraph";
import type { ContributionData } from "@/lib/github";

type Skill = {
  name: string;
  abbr: string;
  learning?: boolean;
};

const frontendBackend: Skill[] = [
  { name: "HTML5", abbr: "HTML" },
  { name: "CSS3", abbr: "CSS" },
  { name: "JavaScript", abbr: "JS" },
  { name: "React.js", abbr: "⚛" },
  { name: "Tailwind CSS", abbr: "TW" },
  { name: "PHP", abbr: "PHP" },
  { name: "Laravel", abbr: "L" },
  { name: "MySQL", abbr: "SQL" },
  { name: "Node.js", abbr: "Node" },
  { name: "Python", abbr: "Py", learning: true },
  { name: "Next.js", abbr: "N", learning: true },
  { name: "Vue.js", abbr: "Vue", learning: true },
  { name: "TypeScript", abbr: "TS", learning: true },
];

const tools: Skill[] = [
  { name: "Figma", abbr: "Fig" },
  { name: "GitHub", abbr: "GH" },
  { name: "VS Code", abbr: "VS" },
  { name: "AWS", abbr: "AWS", learning: true },
  { name: "Docker", abbr: "🐳", learning: true },
];

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`group relative flex flex-col items-center justify-center gap-2 rounded-xl border p-4 transition-colors duration-150 ${
        skill.learning
          ? "border-void-edge bg-void-card opacity-60 hover:opacity-80"
          : "border-void-edge bg-void-card hover:border-void-edge-hi hover:bg-void-raised"
      }`}
    >
      {/* Lock badge for learning skills */}
      {skill.learning && (
        <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-void-surface">
          <IconLock size={10} strokeWidth={2} className="text-ink-5" />
        </div>
      )}

      {/* Abbreviation */}
      <span
        className={`font-geist text-sm font-bold ${
          skill.learning ? "text-ink-5" : "text-ink-3"
        }`}
      >
        {skill.abbr}
      </span>

      {/* Full name */}
      <span
        className={`text-center font-jakarta text-[11px] leading-tight ${
          skill.learning ? "text-ink-5" : "text-ink-4"
        }`}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}

type Props = { contributions: ContributionData | null };

export default function Skills({ contributions }: Props) {
  return (
    <section id="skills" className="w-full border-b border-[#1a1a18] px-16 py-16">
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
            Tech Stack
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-geist text-3xl font-bold tracking-tight text-ink lg:text-4xl"
          >
            Keahlian & teknologi
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 max-w-md font-jakarta text-sm leading-relaxed text-ink-4"
          >
            Skill yang saya kuasai dan sedang dipelajari.{" "}
            <span className="inline-flex items-center gap-1 text-ink-5">
              <IconLock size={11} strokeWidth={2} />
              <span>= sedang dipelajari</span>
            </span>
          </motion.p>
        </motion.div>

        {/* Frontend & Backend */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 font-jakarta text-xs font-medium uppercase tracking-[0.15em] text-ink-5"
          >
            Languages & Frameworks
          </motion.p>
          <motion.div
            variants={stagger}
            className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7"
          >
            {frontendBackend.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </motion.div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mt-10"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 font-jakarta text-xs font-medium uppercase tracking-[0.15em] text-ink-5"
          >
            Tools & Platform
          </motion.p>
          <motion.div
            variants={stagger}
            className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7"
          >
            {tools.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </motion.div>
        </motion.div>

        {/* GitHub Graph */}
        <GithubGraph data={contributions} />
      </div>
    </section>
  );
}

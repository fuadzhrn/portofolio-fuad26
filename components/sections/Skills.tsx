"use client";

import { motion } from "framer-motion";
import { IconLock, IconBrandAws, IconBrandVscode } from "@tabler/icons-react";
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss,
  SiPhp, SiLaravel, SiMysql, SiNodedotjs, SiPython,
  SiNextdotjs, SiVuedotjs, SiTypescript,
  SiFigma, SiGithub, SiDocker,
} from "react-icons/si";
import { fadeUp, stagger } from "@/lib/motion";
import GithubGraph from "@/components/sections/GithubGraph";
import type { ContributionData } from "@/lib/github";

type Skill = {
  name: string;
  icon: React.ElementType;
  color: string;
  tabler?: boolean;
  learning?: boolean;
};

const frontendBackend: Skill[] = [
  { name: "HTML5",        icon: SiHtml5,       color: "#E34F26" },
  { name: "CSS3",         icon: SiCss,         color: "#1572B6" },
  { name: "JavaScript",   icon: SiJavascript,  color: "#F7DF1E" },
  { name: "React.js",     icon: SiReact,       color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PHP",          icon: SiPhp,         color: "#777BB4" },
  { name: "Laravel",      icon: SiLaravel,     color: "#FF2D20" },
  { name: "MySQL",        icon: SiMysql,       color: "#4479A1" },
  { name: "Node.js",      icon: SiNodedotjs,   color: "#339933" },
  { name: "Python",       icon: SiPython,      color: "#3776AB", learning: true },
  { name: "Next.js",      icon: SiNextdotjs,   color: "#A0A09A", learning: true },
  { name: "Vue.js",       icon: SiVuedotjs,    color: "#4FC08D", learning: true },
  { name: "TypeScript",   icon: SiTypescript,  color: "#3178C6", learning: true },
];

const tools: Skill[] = [
  { name: "Figma",   icon: SiFigma,        color: "#F24E1E" },
  { name: "GitHub",  icon: SiGithub,       color: "#A0A09A" },
  { name: "VS Code", icon: IconBrandVscode, color: "#007ACC", tabler: true },
  { name: "AWS",     icon: IconBrandAws,   color: "#FF9900", tabler: true, learning: true },
  { name: "Docker",  icon: SiDocker,       color: "#2496ED", learning: true },
];

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      variants={fadeUp}
      className={`group relative flex flex-col items-center justify-center gap-1.5 rounded-xl border p-2 transition-all duration-150 md:gap-2.5 md:p-4 ${
        skill.learning
          ? "border-void-edge bg-void-card opacity-50 hover:opacity-70"
          : "border-void-edge bg-void-card hover:border-void-edge-hi hover:bg-void-raised"
      }`}
    >
      {skill.learning && (
        <div className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-void-surface">
          <IconLock size={9} strokeWidth={2} className="text-ink-5" />
        </div>
      )}

      <Icon
        size={26}
        strokeWidth={skill.tabler ? 1.5 : undefined}
        style={{ color: skill.learning ? "#3a3a38" : skill.color }}
      />

      <span
        className={`text-center font-jakarta text-[9px] leading-tight md:text-[10.5px] ${
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
            className="mt-3 font-jakarta text-sm leading-relaxed text-ink-4"
          >
            Skill yang saya kuasai dan sedang dipelajari.{" "}
            <span className="inline-flex items-center gap-1 text-ink-5">
              <IconLock size={11} strokeWidth={2} />
              <span>= sedang dipelajari</span>
            </span>
          </motion.p>
        </motion.div>

        {/* Languages & Frameworks */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mb-10"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 font-jakarta text-xs font-medium uppercase tracking-[0.15em] text-ink-5"
          >
            Languages & Frameworks
          </motion.p>
          <motion.div
            variants={stagger}
            className="grid grid-cols-4 gap-2 md:grid-cols-6 md:gap-3 lg:grid-cols-9 xl:grid-cols-10"
          >
            {frontendBackend.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </motion.div>
        </motion.div>

        {/* Tools & Platform */}
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
            Tools & Platform
          </motion.p>
          <motion.div
            variants={stagger}
            className="grid grid-cols-4 gap-2 md:grid-cols-6 md:gap-3 lg:grid-cols-9 xl:grid-cols-10"
          >
            {tools.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </motion.div>
        </motion.div>

        {/* GitHub Graph */}
        <div className="mt-8 overflow-x-auto pb-1">
          <GithubGraph data={contributions} />
        </div>
      </div>
    </section>
  );
}

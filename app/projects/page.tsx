"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  IconArrowRight,
  IconExternalLink,
  IconBrandGithub,
  IconFileText,
} from "@tabler/icons-react";
import {
  projects,
  categoryLabels,
  type Project,
  type ProjectCategory,
} from "@/data/projects";

const tabs = [
  { id: "all" as const, label: "Semua" },
  { id: "website" as const, label: "Website" },
  { id: "kuliah" as const, label: "Projek Kuliah" },
  { id: "riset" as const, label: "Riset & Jurnal" },
  { id: "magang" as const, label: "Magang" },
] satisfies { id: "all" | ProjectCategory; label: string }[];

const categoryGradients: Record<string, string> = {
  website: "from-[#1a1a18] to-[#201e14]",
  kuliah: "from-[#141820] to-[#181c22]",
  riset: "from-[#1a1814] to-[#201c10]",
  magang: "from-[#181a1a] to-[#1c2020]",
};

function ProjectCard({ project }: { project: Project }) {
  const gradient = categoryGradients[project.category] ?? categoryGradients.website;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-xl border border-void-edge bg-void-card transition-colors hover:border-void-edge-hi"
    >
      {/* Thumbnail */}
      <div
        className={`relative h-40 bg-gradient-to-br ${gradient} flex items-center justify-center`}
      >
        <span className="font-geist text-4xl font-bold text-void-edge-hi select-none">
          {project.title.charAt(0)}
        </span>
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="rounded-md border border-void-edge-hi bg-void-surface/80 px-2 py-0.5 font-jakarta text-[10px] font-medium text-ink-3 backdrop-blur-sm">
            {categoryLabels[project.category]}
          </span>
          {project.category === "riset" && (
            <span className="rounded-md border border-void-edge-hi bg-void-surface/80 px-2 py-0.5 font-jakarta text-[10px] font-semibold text-gold backdrop-blur-sm">
              Sinta 2
            </span>
          )}
        </div>
        <span className="absolute right-3 top-3 font-jakarta text-[10px] text-ink-5">
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-geist text-sm font-semibold text-ink">{project.title}</h3>
          <p className="font-jakarta text-xs text-ink-4">{project.subtitle}</p>
        </div>

        {project.category === "riset" && project.journalName && (
          <p className="font-jakarta text-[11px] italic text-ink-5 leading-snug">
            {project.journalName}
          </p>
        )}

        <p className="font-jakarta text-xs leading-relaxed text-ink-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md border border-void-edge bg-void-surface px-1.5 py-0.5 font-jakarta text-[10px] font-medium text-ink-4"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded-md border border-void-edge bg-void-surface px-1.5 py-0.5 font-jakarta text-[10px] text-ink-5">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-auto flex items-center justify-between border-t border-void-edge pt-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 font-jakarta text-xs font-medium text-ink-3 transition-colors hover:text-ink"
          >
            Detail <IconArrowRight size={11} strokeWidth={2.5} />
          </Link>
          <div className="flex items-center gap-2">
            {project.doiUrl && (
              <a href={project.doiUrl} target="_blank" rel="noopener noreferrer" title="DOI" className="text-ink-5 hover:text-ink-3">
                <IconFileText size={14} strokeWidth={1.75} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="Live" className="text-ink-5 hover:text-ink-3">
                <IconExternalLink size={14} strokeWidth={1.75} />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub" className="text-ink-5 hover:text-ink-3">
                <IconBrandGithub size={14} strokeWidth={1.75} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsPage() {
  const [active, setActive] = useState<"all" | ProjectCategory>("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="w-full px-16 py-16">
      <div>
        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 font-jakarta text-xs font-medium uppercase tracking-[0.2em] text-ink-4">
            Portfolio
          </p>
          <h1 className="font-geist text-4xl font-bold tracking-tight text-ink lg:text-5xl">
            Semua proyek
          </h1>
          <p className="mt-3 font-jakarta text-sm text-ink-4">
            {projects.length} proyek dari berbagai bidang dan teknologi.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`rounded-xl border px-4 py-2 font-jakarta text-xs font-medium transition-colors ${
                active === tab.id
                  ? "border-void-edge-hi bg-void-surface text-ink"
                  : "border-void-edge bg-void-card text-ink-4 hover:border-void-edge-hi hover:text-ink-2"
              }`}
            >
              {tab.label}
              <span className="ml-1.5 text-ink-5">
                {tab.id === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === tab.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

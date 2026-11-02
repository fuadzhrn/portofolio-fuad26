"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  IconBuildingSkyscraper,
  IconCode,
  IconFileText,
  IconBrain,
  IconLayout,
  IconInbox,
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react";
import {
  projects,
  categoryLabels,
  inCategory,
  type Project,
  type ProjectCategory,
} from "@/data/projects";
import { t, type Localized } from "@/lib/i18n";
import { ui } from "@/data/ui-strings";

// ─── Types ──────────────────────────────────────────────────────────────────────

type FilterId = "all" | ProjectCategory;

// ─── Config ─────────────────────────────────────────────────────────────────────

const TABS: { id: FilterId; label: Localized }[] = [
  { id: "all", label: ui.filterAll },
  { id: "websites", label: categoryLabels.websites },
  { id: "systems", label: categoryLabels.systems },
  { id: "ai-data", label: categoryLabels["ai-data"] },
  { id: "design-docs", label: categoryLabels["design-docs"] },
  { id: "research", label: categoryLabels.research },
];

const CATEGORY_ICONS: Record<ProjectCategory, React.ElementType> = {
  websites: IconBuildingSkyscraper,
  systems: IconCode,
  "ai-data": IconBrain,
  "design-docs": IconLayout,
  research: IconFileText,
};

const CATEGORY_LABELS: Record<ProjectCategory, Localized> = {
  websites: { en: "Website", id: "Website" },
  systems: { en: "System", id: "Sistem" },
  "ai-data": { en: "AI & Data", id: "AI & Data" },
  "design-docs": { en: "Design & Docs", id: "Desain & Dokumentasi" },
  research: { en: "SINTA 2", id: "SINTA 2" },
};

function getCount(id: FilterId): number {
  if (id === "all") return projects.length;
  return projects.filter((p) => inCategory(p, id)).length;
}

// ─── CategoryBadge ──────────────────────────────────────────────────────────────

function CategoryBadge({ category }: { category: ProjectCategory }) {
  const isRiset = category === "research";
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full font-jakarta text-xs ${
        isRiset ? "text-gold" : "text-ink-4"
      }`}
      style={{
        padding: "3px 10px",
        background: isRiset ? "rgba(201,169,110,0.08)" : "rgba(160,160,154,0.06)",
        border: `0.5px solid ${isRiset ? "rgba(201,169,110,0.22)" : "#2A2A28"}`,
      }}
    >
      {t(CATEGORY_LABELS[category])}
    </span>
  );
}

// ─── ProjectThumbnail ────────────────────────────────────────────────────────────

function ProjectThumbnail({
  project,
  featured,
}: {
  project: Project;
  featured: boolean;
}) {
  const [imgError, setImgError] = useState(false);
  const Icon = CATEGORY_ICONS[project.category];
  const thumbnail = project.images[0];
  const showIcon = imgError || !thumbnail;

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden bg-[#1A1A18] ${
        featured
          ? "h-40 w-full border-b-[0.5px] border-[#1E1E1C] md:h-auto md:w-[200px] md:border-b-0 md:border-r-[0.5px] md:border-r-[#1E1E1C]"
          : "h-[120px] w-full border-b-[0.5px] border-[#1E1E1C]"
      }`}
    >
      {showIcon ? (
        <Icon size={28} strokeWidth={1.5} style={{ color: "#252523" }} />
      ) : (
        <Image
          src={thumbnail}
          alt={t(project.title)}
          fill
          className="object-cover"
          onError={() => setImgError(true)}
        />
      )}
    </div>
  );
}

// ─── ProjectCard ─────────────────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  const maxTech = project.featured ? 6 : 4;
  const extraTech = project.tech.length - maxTech;

  const handleCardClick = () => router.push(`/projects/${project.slug}`);
  const openExternal = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6, scale: 0.98 }}
      transition={{ duration: 0.25, delay: Math.min(index * 0.05, 0.3), ease: "easeOut" }}
      layout
      className={project.featured ? "col-span-1 md:col-span-2" : "col-span-1"}
      onClick={handleCardClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#161614",
        border: `0.5px solid ${hovered ? "#2A2A28" : "#1E1E1C"}`,
        borderRadius: 12,
        overflow: "hidden",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "border-color 0.2s, transform 0.2s",
        cursor: "pointer",
      }}
    >
      {/* Inner layout: column (all) → row on md only for featured */}
      <div
        className={`flex h-full ${project.featured ? "flex-col md:flex-row" : "flex-col"}`}
      >
        {/* Thumbnail */}
        <ProjectThumbnail project={project} featured={project.featured} />

        {/* Body */}
        <div className="flex flex-1 flex-col p-4">
          {/* Badge */}
          <CategoryBadge category={project.category} />

          {/* Title */}
          <h3 className="mb-1 mt-2 font-geist text-sm font-medium text-ink-3">
            {t(project.title)}
          </h3>

          {/* Subtitle */}
          <p className="mb-1 font-jakarta text-xs leading-relaxed text-ink-4">
            {t(project.subtitle)}
          </p>

          {/* Description */}
          <p className="mb-3 line-clamp-2 font-jakarta text-xs leading-relaxed text-ink-5">
            {t(project.description)}
          </p>

          {/* Tech tags */}
          <div className="mb-3 flex flex-wrap gap-1">
            {project.tech.slice(0, maxTech).map((t) => (
              <span
                key={t}
                className="rounded font-jakarta text-xs text-ink-5"
                style={{
                  padding: "2px 7px",
                  background: "#1A1A18",
                  border: "0.5px solid #1E1E1C",
                }}
              >
                {t}
              </span>
            ))}
            {extraTech > 0 && (
              <span className="self-center font-jakarta text-xs text-ink-5">
                +{extraTech}
              </span>
            )}
          </div>

          {/* Footer */}
          <div
            className="mt-auto flex items-center justify-between pt-2.5"
            style={{ borderTop: "0.5px solid #1A1A18" }}
          >
            {/* External links */}
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <button
                  onClick={(e) => openExternal(e, project.liveUrl!)}
                  className="flex items-center gap-1 font-jakarta text-xs text-ink-5 transition-colors duration-150 hover:text-ink-4"
                >
                  <IconExternalLink size={11} strokeWidth={2} />
                  {t(ui.live)}
                </button>
              )}
              {project.githubUrl && (
                <button
                  onClick={(e) => openExternal(e, project.githubUrl!)}
                  className="flex items-center gap-1 font-jakarta text-xs text-ink-5 transition-colors duration-150 hover:text-ink-4"
                >
                  <IconBrandGithub size={11} strokeWidth={1.75} />
                  {t(ui.github)}
                </button>
              )}
              {project.doiUrl && (
                <button
                  onClick={(e) => openExternal(e, project.doiUrl!)}
                  className="font-jakarta text-xs text-ink-5 transition-colors duration-150 hover:text-ink-4"
                >
                  {t(ui.readJournal)} ↗
                </button>
              )}
              {!project.liveUrl && !project.githubUrl && !project.doiUrl && (
                <span className="font-jakarta text-xs text-ink-5">{t(ui.details)} →</span>
              )}
            </div>

            {/* Year */}
            <span className="font-mono text-xs text-ink-5">{project.year}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Empty State ─────────────────────────────────────────────────────────────────

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24">
      <IconInbox size={32} strokeWidth={1.5} style={{ color: "#2A2A28" }} />
      <p className="font-jakarta" style={{ fontSize: 13, color: "#333330" }}>
        {t(ui.emptyCategory)}
      </p>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  const [active, setActive] = useState<FilterId>("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => inCategory(p, active));

  return (
    <div className="w-full">
      {/* ── Header ───────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="border-b border-[#1A1A18] px-5 py-10 md:px-10 md:py-12 lg:px-16 lg:py-14"
      >
        {/* Sec tag */}
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-5">
          02 — projects
        </p>

        {/* Eyebrow */}
        <p className="mb-2 font-jakarta text-xs font-medium uppercase tracking-[0.12em] text-ink-4">
          {t(ui.allWork)}
        </p>

        {/* Title */}
        <h1 className="mb-4 font-geist text-3xl font-bold tracking-tight text-ink lg:text-4xl">
          {t(ui.projectsHeadingLine1)}
          <br />
          {t(ui.projectsHeadingLine2)}
        </h1>

        {/* Description */}
        <p className="font-jakarta text-base leading-relaxed text-ink-4 md:max-w-xl">
          {t(ui.projectsIntro)}
        </p>
      </motion.div>

      {/* ── Projects ─────────────────────────────────────────────────────────── */}
      <div className="px-5 py-10 md:px-10 md:py-12 lg:px-16 lg:py-12">
        {/* Filter tabs */}
        <div className="mb-8 overflow-x-auto pb-0.5">
          <div className="flex gap-1.5">
            {TABS.map((tab) => {
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full font-jakarta text-sm transition-colors duration-150 ${
                    isActive ? "text-ink-3" : "text-ink-5"
                  }`}
                  style={{
                    padding: "6px 16px",
                    border: `0.5px solid ${isActive ? "#383836" : "#222220"}`,
                    background: isActive ? "#1E1E1C" : "transparent",
                    cursor: "pointer",
                  }}
                >
                  {t(tab.label)}
                  <span
                    className="font-mono text-xs"
                    style={{
                      padding: "1px 6px",
                      borderRadius: 99,
                      background: isActive ? "#2A2A28" : "#1A1A18",
                      color: isActive ? "#888884" : "#555550",
                    }}
                  >
                    {getCount(tab.id)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 gap-[10px] md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}

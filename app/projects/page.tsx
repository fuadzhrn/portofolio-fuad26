"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  IconBuildingSkyscraper,
  IconCode,
  IconFileText,
  IconBuilding,
  IconInbox,
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react";
import {
  projects,
  type Project,
  type ProjectCategory,
} from "@/data/projects";

// ─── Types ──────────────────────────────────────────────────────────────────────

type FilterId = "semua" | ProjectCategory;

// ─── Config ─────────────────────────────────────────────────────────────────────

const TABS: { id: FilterId; label: string }[] = [
  { id: "semua", label: "Semua" },
  { id: "website", label: "Website" },
  { id: "kuliah", label: "Projek Kuliah" },
  { id: "riset", label: "Riset & Jurnal" },
  { id: "magang", label: "Magang" },
];

const CATEGORY_ICONS: Record<ProjectCategory, React.ElementType> = {
  website: IconBuildingSkyscraper,
  kuliah: IconCode,
  riset: IconFileText,
  magang: IconBuilding,
};

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  website: "Website",
  kuliah: "Projek Kuliah",
  riset: "Sinta 2",
  magang: "Magang",
};

function getCount(id: FilterId): number {
  if (id === "semua") return projects.length;
  return projects.filter((p) => p.category === id).length;
}

// ─── CategoryBadge ──────────────────────────────────────────────────────────────

function CategoryBadge({ category }: { category: ProjectCategory }) {
  const isRiset = category === "riset";
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
      {CATEGORY_LABELS[category]}
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
  const showIcon = imgError || !project.thumbnail;

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
          src={project.thumbnail}
          alt={project.title}
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
            {project.title}
          </h3>

          {/* Subtitle */}
          <p className="mb-1 font-jakarta text-xs leading-relaxed text-ink-4">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="mb-3 line-clamp-2 font-jakarta text-xs leading-relaxed text-ink-5">
            {project.description}
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
                  Live
                </button>
              )}
              {project.githubUrl && (
                <button
                  onClick={(e) => openExternal(e, project.githubUrl!)}
                  className="flex items-center gap-1 font-jakarta text-xs text-ink-5 transition-colors duration-150 hover:text-ink-4"
                >
                  <IconBrandGithub size={11} strokeWidth={1.75} />
                  GitHub
                </button>
              )}
              {project.doiUrl && (
                <button
                  onClick={(e) => openExternal(e, project.doiUrl!)}
                  className="font-jakarta text-xs text-ink-5 transition-colors duration-150 hover:text-ink-4"
                >
                  Baca Jurnal ↗
                </button>
              )}
              {project.certificateUrl && (
                <button
                  onClick={(e) => openExternal(e, project.certificateUrl!)}
                  className="font-jakarta text-xs text-ink-5 transition-colors duration-150 hover:text-ink-4"
                >
                  Lihat Sertifikat
                </button>
              )}
              {!project.liveUrl && !project.githubUrl && !project.doiUrl && !project.certificateUrl && (
                <span className="font-jakarta text-xs text-ink-5">Detail →</span>
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
        Tidak ada proyek di kategori ini.
      </p>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  const [active, setActive] = useState<FilterId>("semua");

  const filtered =
    active === "semua"
      ? projects
      : projects.filter((p) => p.category === active);

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
          Semua Karya
        </p>

        {/* Title */}
        <h1 className="mb-4 font-geist text-3xl font-bold tracking-tight text-ink lg:text-4xl">
          Dari website hingga riset —
          <br />
          ini semua yang pernah saya bangun.
        </h1>

        {/* Description */}
        <p className="font-jakarta text-base leading-relaxed text-ink-4 md:max-w-xl">
          Kumpulan proyek website, karya akademik, riset, dan pengalaman profesional
          yang mencerminkan perjalanan saya sebagai developer.
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
                  {tab.label}
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

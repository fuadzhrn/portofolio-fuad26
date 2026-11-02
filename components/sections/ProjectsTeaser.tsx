"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, stagger } from "@/lib/motion";
import { IconArrowRight, IconExternalLink, IconBrandGithub } from "@tabler/icons-react";
import type { Project } from "@/data/projects";
import { categoryLabels, getThumbnail } from "@/data/projects";
import { useT } from "@/components/LangProvider";
import { ui } from "@/data/ui-strings";

// Gradient backgrounds per category (behind the thumbnail, or alone when there is none)
const categoryGradients: Record<string, string> = {
  websites: "from-[#1a1a18] via-[#1e1c14] to-[#222018]",
  systems: "from-[#181a1a] via-[#1a1c1c] to-[#1c1e1e]",
  "ai-data": "from-[#141820] via-[#161a1e] to-[#181c20]",
  "design-docs": "from-[#1a1a18] via-[#1e1c14] to-[#222018]",
  research: "from-[#1a1814] via-[#1e1a10] to-[#201c10]",
};

function ProjectCard({ project, wide = false }: { project: Project; wide?: boolean }) {
  const t = useT();
  const [imgError, setImgError] = useState(false);
  const gradient = categoryGradients[project.category] ?? categoryGradients.websites;
  const thumb = getThumbnail(project);
  const thumbnail = imgError ? undefined : thumb.src;

  return (
    <motion.article
      variants={fadeUp}
      className="group flex flex-col overflow-hidden rounded-xl border border-void-edge bg-void-card transition-colors duration-200 hover:border-void-edge-hi"
    >
      {/* Thumbnail */}
      <div
        className={`relative w-full bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden ${
          wide ? "aspect-[16/7]" : "aspect-[16/10]"
        }`}
      >
        {thumbnail ? (
          <>
            <Image
              src={thumbnail}
              alt={t(project.title)}
              fill
              sizes={
                wide
                  ? "(min-width: 1024px) calc(100vw - 220px), (min-width: 768px) calc(100vw - 72px), 100vw"
                  : "(min-width: 1024px) calc((100vw - 220px) / 2), (min-width: 768px) calc((100vw - 72px) / 2), 100vw"
              }
              className="object-cover"
              style={{ objectPosition: thumb.position }}
              onError={() => setImgError(true)}
            />
            {/* thin gradient into the card colour (#161614): no hard edge above the text */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-void-card to-transparent" />
          </>
        ) : (
          /* decorative corner initials */
          <span className="font-geist text-5xl font-bold text-void-edge-hi select-none">
            {t(project.title).charAt(0)}
          </span>
        )}
        {/* Category badge */}
        <div className="absolute left-3 top-3">
          <span className="rounded-md border border-void-edge-hi bg-void-base/80 px-2 py-0.5 font-jakarta text-[10px] font-medium text-ink-3 backdrop-blur-sm">
            {t(categoryLabels[project.category])}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-col gap-0.5">
          <h3 className="font-geist text-base font-semibold text-ink">
            {t(project.title)}
          </h3>
          <p className="font-jakarta text-xs text-ink-4">{t(project.subtitle)}</p>
        </div>

        <p className="font-jakarta text-sm leading-relaxed text-ink-4 line-clamp-2">
          {t(project.description)}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md border border-void-edge bg-void-surface px-2 py-0.5 font-jakarta text-[10px] font-medium text-ink-4"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded-md border border-void-edge bg-void-surface px-2 py-0.5 font-jakarta text-[10px] font-medium text-ink-5">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Footer actions */}
        <div className="mt-auto flex items-center justify-between pt-1">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 font-jakarta text-xs font-medium text-ink-3 transition-colors hover:text-ink"
          >
            {t(ui.viewDetails)}
            <IconArrowRight size={12} strokeWidth={2.5} />
          </Link>
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-5 transition-colors hover:text-ink-3"
              >
                <IconExternalLink size={15} strokeWidth={1.75} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-5 transition-colors hover:text-ink-3"
              >
                <IconBrandGithub size={15} strokeWidth={1.75} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

type Props = { projects: Project[] };

export default function ProjectsTeaser({ projects }: Props) {
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
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="mb-2 font-jakarta text-xs font-medium uppercase tracking-[0.2em] text-ink-4"
            >
              {t(ui.featuredWork)}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-geist text-3xl font-bold tracking-tight text-ink lg:text-4xl"
            >
              {t(ui.selectedProjects)}
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <Link
              href="/projects"
              className="hidden items-center gap-1.5 font-jakarta text-sm font-medium text-ink-3 transition-colors hover:text-ink sm:inline-flex"
            >
              {t(ui.allProjects)}
              <IconArrowRight size={14} strokeWidth={2} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid gap-5 md:grid-cols-2"
        >
          {projects.map((project, i) => (
            <div key={project.slug} className={i === 0 ? "md:col-span-2" : ""}>
              <ProjectCard project={project} wide={i === 0} />
            </div>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex justify-center sm:hidden"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-void-edge px-5 py-2.5 font-jakarta text-sm font-medium text-ink-2 transition-colors hover:bg-void-raised hover:text-ink"
          >
            {t(ui.viewAllProjects)}
            <IconArrowRight size={14} strokeWidth={2} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

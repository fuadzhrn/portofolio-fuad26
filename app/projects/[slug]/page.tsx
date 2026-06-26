import { notFound } from "next/navigation";
import Link from "next/link";
import {
  IconArrowLeft,
  IconArrowRight,
  IconExternalLink,
  IconBrandGithub,
  IconFileText,
  IconCalendar,
  IconTag,
} from "@tabler/icons-react";
import {
  getProjectBySlug,
  getAllSlugs,
  categoryLabels,
} from "@/data/projects";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// Gradient per category
const categoryGradients: Record<string, string> = {
  website: "from-[#1a1a18] to-[#201e14]",
  kuliah: "from-[#141820] to-[#181c22]",
  riset: "from-[#1a1814] to-[#201c10]",
  magang: "from-[#181a1a] to-[#1c2020]",
};

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 rounded-xl border border-void-edge bg-void-card p-4">
      <span className="font-geist text-xl font-bold text-ink">{value}</span>
      <span className="font-jakarta text-xs text-ink-4">{label}</span>
    </div>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  // Previous / next navigation
  const allSlugs = getAllSlugs();
  const currentIndex = allSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;
  const prevProject = prevSlug ? getProjectBySlug(prevSlug) : null;
  const nextProject = nextSlug ? getProjectBySlug(nextSlug) : null;

  const gradient = categoryGradients[project.category] ?? categoryGradients.website;

  return (
    <div className="w-full">
      {/* Back button */}
      <div className="border-b border-void-edge px-5 py-4 md:px-10 lg:px-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 font-jakarta text-xs font-medium text-ink-4 transition-colors hover:text-ink"
        >
          <IconArrowLeft size={13} strokeWidth={2} />
          Semua Proyek
        </Link>
      </div>

      {/* Hero */}
      <div className={`h-52 w-full bg-gradient-to-br ${gradient} flex items-center justify-center lg:h-64`}>
        <span className="font-geist text-8xl font-bold text-void-edge-hi select-none">
          {project.title.charAt(0)}
        </span>
      </div>

      <div className="px-5 py-6 md:px-10 md:py-8 lg:px-16 lg:py-10">
        <div className="grid gap-8 md:grid-cols-[1fr_220px] md:gap-10 lg:grid-cols-[1fr_280px] lg:gap-14">
          {/* ─── Left: Main content ─── */}
          <div className="order-2 flex flex-col gap-10 md:order-1">
            {/* Title block */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md border border-void-edge-hi bg-void-surface px-2.5 py-1 font-jakarta text-xs font-medium text-ink-3">
                  {categoryLabels[project.category]}
                </span>
                {project.category === "riset" && (
                  <span className="rounded-md border border-void-edge-hi bg-void-surface px-2.5 py-1 font-jakarta text-xs font-semibold text-gold">
                    Sinta 2
                  </span>
                )}
              </div>
              <h1 className="font-geist text-3xl font-bold tracking-tight text-ink lg:text-4xl">
                {project.title}
              </h1>
              <p className="font-jakarta text-base text-ink-3">{project.subtitle}</p>
              {project.journalName && (
                <p className="font-jakarta text-sm italic text-ink-4">
                  {project.journalName}
                </p>
              )}
              <p className="font-jakarta text-sm leading-relaxed text-ink-3">
                {project.description}
              </p>
            </div>

            {/* Overview */}
            {project.overview && (
              <div className="flex flex-col gap-3">
                <h2 className="font-geist text-base font-semibold text-ink">
                  Overview
                </h2>
                <p className="font-jakarta text-sm leading-relaxed text-ink-3">
                  {project.overview}
                </p>
              </div>
            )}

            {/* Process timeline */}
            {project.process && project.process.length > 0 && (
              <div className="flex flex-col gap-4">
                <h2 className="font-geist text-base font-semibold text-ink">
                  Proses Pengerjaan
                </h2>
                <div className="relative flex flex-col gap-0">
                  <div className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px bg-void-edge" />
                  {project.process.map((step, i) => (
                    <div key={i} className="relative flex gap-5 pb-5 last:pb-0">
                      <div className="relative z-10 mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-void-edge-hi" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-geist text-xs font-semibold text-ink-2">
                          {String(i + 1).padStart(2, "0")} — {step.phase}
                        </span>
                        <p className="font-jakarta text-sm leading-relaxed text-ink-4">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges & Solutions */}
            {project.challenges && project.challenges.length > 0 && (
              <div className="flex flex-col gap-4">
                <h2 className="font-geist text-base font-semibold text-ink">
                  Tantangan & Solusi
                </h2>
                <div className="flex flex-col gap-3">
                  {project.challenges.map((c, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-void-edge bg-void-card p-4"
                    >
                      <p className="mb-1.5 font-jakarta text-xs font-medium text-ink-4">
                        <span className="mr-1.5 text-ink-5">Masalah:</span>
                        {c.problem}
                      </p>
                      <p className="font-jakarta text-xs text-ink-3">
                        <span className="mr-1.5 font-medium text-ink-3">Solusi:</span>
                        {c.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            {project.results && project.results.length > 0 && (
              <div className="flex flex-col gap-4">
                <h2 className="font-geist text-base font-semibold text-ink">
                  Hasil
                </h2>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {project.results.map((r) => (
                    <StatCard key={r.label} label={r.label} value={r.value} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ─── Right: Sticky info panel ─── */}
          <aside className="order-1 flex flex-col gap-4 md:order-2 md:sticky md:top-6 md:self-start">
            <div className="rounded-xl border border-void-edge bg-void-card p-5">
              <p className="mb-4 font-jakarta text-xs font-medium uppercase tracking-[0.15em] text-ink-5">
                Info Proyek
              </p>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  <IconCalendar size={14} strokeWidth={1.75} className="text-ink-5 shrink-0" />
                  <div>
                    <p className="font-jakarta text-[10px] text-ink-5">Tahun</p>
                    <p className="font-jakarta text-sm font-medium text-ink-2">
                      {project.year}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <IconTag size={14} strokeWidth={1.75} className="text-ink-5 shrink-0" />
                  <div>
                    <p className="font-jakarta text-[10px] text-ink-5">Kategori</p>
                    <p className="font-jakarta text-sm font-medium text-ink-2">
                      {categoryLabels[project.category]}
                    </p>
                  </div>
                </div>
                {project.company && (
                  <div className="flex items-center gap-2.5">
                    <IconTag size={14} strokeWidth={1.75} className="text-ink-5 shrink-0" />
                    <div>
                      <p className="font-jakarta text-[10px] text-ink-5">Perusahaan</p>
                      <p className="font-jakarta text-sm font-medium text-ink-2">
                        {project.company}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Tech stack */}
            <div className="rounded-xl border border-void-edge bg-void-card p-5">
              <p className="mb-3 font-jakarta text-xs font-medium uppercase tracking-[0.15em] text-ink-5">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-void-edge bg-void-surface px-2.5 py-1 font-jakarta text-xs font-medium text-ink-3"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.liveUrl || project.githubUrl || project.doiUrl) && (
              <div className="flex flex-col gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-ink px-4 py-2.5 font-jakarta text-sm font-semibold text-void-base transition-opacity hover:opacity-85"
                  >
                    <IconExternalLink size={14} strokeWidth={2} />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-void-edge px-4 py-2.5 font-jakarta text-sm font-medium text-ink-2 transition-colors hover:bg-void-raised hover:text-ink"
                  >
                    <IconBrandGithub size={14} strokeWidth={1.75} />
                    GitHub
                  </a>
                )}
                {project.doiUrl && (
                  <a
                    href={project.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-void-edge px-4 py-2.5 font-jakarta text-sm font-medium text-ink-2 transition-colors hover:bg-void-raised hover:text-ink"
                  >
                    <IconFileText size={14} strokeWidth={1.75} />
                    Lihat DOI
                  </a>
                )}
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* ─── Prev / Next navigation ─── */}
      <div className="border-t border-void-edge">
        <div className="grid grid-cols-2 px-5 md:px-10 lg:px-16">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="flex flex-col gap-1 border-r border-void-edge py-6 pr-6 transition-colors hover:bg-void-card"
            >
              <span className="flex items-center gap-1 font-jakarta text-xs text-ink-5">
                <IconArrowLeft size={11} strokeWidth={2} />
                Sebelumnya
              </span>
              <span className="font-geist text-sm font-semibold text-ink-2">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="flex flex-col items-end gap-1 py-6 pl-6 transition-colors hover:bg-void-card"
            >
              <span className="flex items-center gap-1 font-jakarta text-xs text-ink-5">
                Berikutnya
                <IconArrowRight size={11} strokeWidth={2} />
              </span>
              <span className="font-geist text-sm font-semibold text-ink-2">
                {nextProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

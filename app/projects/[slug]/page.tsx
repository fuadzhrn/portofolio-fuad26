import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  IconArrowLeft,
  IconArrowRight,
  IconExternalLink,
  IconBrandGithub,
  IconFileText,
  IconCalendar,
  IconUser,
  IconBuilding,
} from "@tabler/icons-react";
import {
  projects,
  getProjectBySlug,
  getAllSlugs,
  categoryLabels,
  inCategory,
  type Project,
} from "@/data/projects";
import { t as translate, type Lang, type Localized } from "@/lib/i18n";
import { getLang } from "@/lib/i18n.server";
import { ui } from "@/data/ui-strings";
import { CATEGORY_ICONS } from "@/components/projects/category-icons";
import ProjectGallery from "@/components/projects/ProjectGallery";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const title = translate(project.title);
  const description = translate(project.description);
  const image = project.images[0];

  // Relative image URL is resolved by metadataBase in app/layout.tsx.
  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title, description, images: image ? [image] : undefined },
  };
}

// ─── Styles (same as the Hero buttons and existing chips/badges) ─────────────

const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-5 py-2.5 font-jakarta text-sm font-semibold text-void-base transition-opacity duration-150 hover:opacity-85";
const ghostButton =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-void-edge px-5 py-2.5 font-jakarta text-sm font-semibold text-ink-2 transition-colors duration-150 hover:bg-void-raised hover:text-ink";
const badge =
  "rounded-md border border-void-edge-hi bg-void-surface px-2.5 py-1 font-jakarta text-xs font-medium text-ink-3";
const sectionTitle = "font-geist text-base font-semibold text-ink";

// ─── Helpers ──────────────────────────────────────────────────────────────────

// Period from data; adds the year only when the period has none (e.g. "Academic project").
function periodText(project: Project, lang: Lang): string | null {
  const t = (field: Localized | string) => translate(field, lang);
  const period = project.period ? t(project.period) : null;
  if (!period) return project.year ?? null;
  if (!project.year || /\d{4}/.test(period)) return period;
  return `${period} · ${project.year}`;
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 rounded-xl border border-void-edge bg-void-card p-4">
      <span className="font-geist text-xl font-bold text-ink">{value}</span>
      <span className="font-jakarta text-xs text-ink-4">{label}</span>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <Icon size={14} strokeWidth={1.75} className="mt-0.5 shrink-0 text-ink-5" />
      <div>
        <p className="font-jakarta text-xs text-ink-5">{label}</p>
        <p className="font-jakarta text-sm font-medium text-ink-2">{value}</p>
      </div>
    </div>
  );
}

function ProjectLinks({
  project,
  lang,
  block = false,
}: {
  project: Project;
  lang: Lang;
  block?: boolean;
}) {
  const t = (field: Localized | string) => translate(field, lang);
  const width = block ? " w-full" : "";
  return (
    <>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={primaryButton + width}
        >
          <IconExternalLink size={15} strokeWidth={2} />
          {t(ui.visitSite)}
        </a>
      )}
      {project.doiUrl && (
        <a
          href={project.doiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={primaryButton + width}
        >
          <IconFileText size={15} strokeWidth={2} />
          {t(ui.readJournal)}
        </a>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={ghostButton + width}
        >
          <IconBrandGithub size={15} strokeWidth={1.75} />
          {t(ui.github)}
        </a>
      )}
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const lang = await getLang();
  const t = (field: Localized | string) => translate(field, lang);

  // Previous / next, wrapping around the data order
  const index = projects.findIndex((p) => p.slug === slug);
  const prevProject = projects[(index - 1 + projects.length) % projects.length];
  const nextProject = projects[(index + 1) % projects.length];

  const title = t(project.title);
  const period = periodText(project, lang);
  const mainImage = project.images[0];
  const PlaceholderIcon = CATEGORY_ICONS[project.category];
  const hasLinks = Boolean(project.liveUrl || project.doiUrl || project.githubUrl);

  return (
    <div className="w-full">
      {/* Back button */}
      <div className="border-b border-void-edge px-5 py-4 md:px-10 lg:px-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 font-jakarta text-xs font-medium text-ink-4 transition-colors hover:text-ink"
        >
          <IconArrowLeft size={13} strokeWidth={2} />
          {t(ui.backToProjects)}
        </Link>
      </div>

      {/* ─── Hero ─── */}
      <div className="border-b border-[#1A1A18] px-5 py-10 md:px-10 md:py-12 lg:px-16 lg:py-14">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className={badge}>{t(categoryLabels[project.category])}</span>
            {inCategory(project, "research") && (
              <span className={`${badge} font-semibold text-gold`}>{t(ui.sinta2)}</span>
            )}
            {project.organization && <span className={badge}>{project.organization}</span>}
            {project.label && <span className={badge}>{t(project.label)}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-geist text-3xl font-bold tracking-tight text-ink lg:text-4xl">
              {title}
            </h1>
            <p className="font-jakarta text-base text-ink-3">{t(project.subtitle)}</p>
            {project.paperTitle && (
              <p className="font-jakarta text-sm italic text-ink-4 md:max-w-2xl">
                “{project.paperTitle}”
                {project.journalName && <> — {project.journalName}</>}
              </p>
            )}
          </div>

          {period && (
            <p className="flex items-center gap-1.5 font-mono text-xs text-ink-5">
              <IconCalendar size={13} strokeWidth={1.75} />
              {period}
            </p>
          )}

          <p className="font-jakarta text-sm leading-relaxed text-ink-3 md:max-w-2xl md:text-base">
            {t(project.description)}
          </p>

          {hasLinks && (
            <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center">
              <ProjectLinks project={project} lang={lang} />
            </div>
          )}
        </div>
      </div>

      {/* ─── Main image ─── */}
      <div className="px-5 pt-6 md:px-10 md:pt-8 lg:px-16 lg:pt-10">
        <div
          className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-xl"
          style={{ background: "#1A1A18", border: "0.5px solid #1E1E1C" }}
        >
          {mainImage ? (
            <Image
              src={mainImage}
              alt={title}
              fill
              preload
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="object-contain"
            />
          ) : (
            <PlaceholderIcon size={28} strokeWidth={1.5} style={{ color: "#252523" }} />
          )}
        </div>
        {project.imageNote && (
          <p className="mt-2 font-jakarta text-xs text-ink-4">{t(project.imageNote)}</p>
        )}
      </div>

      <div className="px-5 py-6 md:px-10 md:py-8 lg:px-16 lg:py-10">
        <div className="grid gap-8 md:grid-cols-[1fr_220px] md:gap-10 lg:grid-cols-[1fr_280px] lg:gap-14">
          {/* ─── Left: Main content ─── */}
          <div className="order-2 flex min-w-0 flex-col gap-10 md:order-1">
            {project.overview && (
              <section className="flex flex-col gap-3">
                <h2 className={sectionTitle}>{t(ui.overview)}</h2>
                <p className="font-jakarta text-sm leading-relaxed text-ink-3">
                  {t(project.overview)}
                </p>
              </section>
            )}

            {project.process && project.process.length > 0 && (
              <section className="flex flex-col gap-4">
                <h2 className={sectionTitle}>{t(ui.howItWorks)}</h2>
                <div className="relative flex flex-col gap-0">
                  <div className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px bg-void-edge" />
                  {project.process.map((step, i) => (
                    <div key={i} className="relative flex gap-5 pb-5 last:pb-0">
                      <div className="relative z-10 mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-void-edge-hi" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-geist text-xs font-semibold text-ink-2">
                          {String(i + 1).padStart(2, "0")} — {t(step.phase)}
                        </span>
                        <p className="font-jakarta text-sm leading-relaxed text-ink-4">
                          {t(step.description)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.challenges && project.challenges.length > 0 && (
              <section className="flex flex-col gap-4">
                <h2 className={sectionTitle}>{t(ui.challenges)}</h2>
                <div className="flex flex-col gap-3">
                  {project.challenges.map((c, i) => (
                    <div key={i} className="rounded-xl border border-void-edge bg-void-card p-4">
                      <p className="mb-1.5 font-jakarta text-sm font-medium text-ink-4">
                        <span className="mr-1.5 text-ink-5">{t(ui.problem)}</span>
                        {t(c.problem)}
                      </p>
                      <p className="font-jakarta text-sm text-ink-3">
                        <span className="mr-1.5 font-medium text-ink-3">{t(ui.solution)}</span>
                        {t(c.solution)}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.results && project.results.length > 0 && (
              <section className="flex flex-col gap-4">
                <h2 className={sectionTitle}>{t(ui.metrics)}</h2>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {project.results.map((r) => (
                    <StatCard key={t(r.label)} label={t(r.label)} value={t(r.value)} />
                  ))}
                </div>
                {project.note && (
                  <p className="font-jakarta text-xs text-ink-5">{t(project.note)}</p>
                )}
              </section>
            )}

            {project.demoVideo && (
              <section className="flex flex-col gap-4">
                <h2 className={sectionTitle}>{t(ui.demoVideo)}</h2>
                <div className="rounded-xl border border-void-edge bg-void-card p-4">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={project.poster}
                    src={project.demoVideo}
                    className="mx-auto block w-full max-w-[320px] rounded-lg"
                  />
                </div>
              </section>
            )}

            {project.images.length > 1 && (
              <section className="flex flex-col gap-4">
                <h2 className={sectionTitle}>{t(ui.screenshots)}</h2>
                <ProjectGallery images={project.images} title={title} />
                {project.imageNote && (
                  <p className="font-jakarta text-xs text-ink-4">{t(project.imageNote)}</p>
                )}
              </section>
            )}
          </div>

          {/* ─── Right: Info panel (sticky on desktop, plain block on mobile) ─── */}
          <aside className="order-1 flex flex-col gap-4 md:order-2 md:sticky md:top-8 md:self-start">
            <div className="rounded-xl border border-void-edge bg-void-card p-5">
              <p className="mb-4 font-jakarta text-xs font-medium uppercase tracking-[0.15em] text-ink-5">
                {t(ui.projectInfo)}
              </p>
              <div className="flex flex-col gap-3">
                {period && <InfoRow icon={IconCalendar} label={t(ui.period)} value={period} />}
                {project.role && (
                  <InfoRow icon={IconUser} label={t(ui.role)} value={t(project.role)} />
                )}
                {project.organization && (
                  <InfoRow
                    icon={IconBuilding}
                    label={t(ui.organization)}
                    value={project.organization}
                  />
                )}
              </div>
            </div>

            <div className="rounded-xl border border-void-edge bg-void-card p-5">
              <p className="mb-3 font-jakarta text-xs font-medium uppercase tracking-[0.15em] text-ink-5">
                {t(ui.techStack)}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-void-edge bg-void-surface px-2.5 py-1 font-jakarta text-xs font-medium text-ink-3"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {hasLinks && (
              <div className="flex flex-col gap-2">
                <p className="font-jakarta text-xs font-medium uppercase tracking-[0.15em] text-ink-5">
                  {t(ui.links)}
                </p>
                <ProjectLinks project={project} lang={lang} block />
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* ─── Prev / Next navigation (wraps around) ─── */}
      <div className="border-t border-void-edge">
        <div className="grid grid-cols-2 px-5 md:px-10 lg:px-16">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="flex flex-col gap-1 border-r border-void-edge py-6 pr-6 transition-colors hover:bg-void-card"
          >
            <span className="flex items-center gap-1 font-jakarta text-xs text-ink-5">
              <IconArrowLeft size={11} strokeWidth={2} />
              {t(ui.previous)}
            </span>
            <span className="font-geist text-sm font-semibold text-ink-2">
              {t(prevProject.title)}
            </span>
          </Link>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="flex flex-col items-end gap-1 py-6 pl-6 text-right transition-colors hover:bg-void-card"
          >
            <span className="flex items-center gap-1 font-jakarta text-xs text-ink-5">
              {t(ui.next)}
              <IconArrowRight size={11} strokeWidth={2} />
            </span>
            <span className="font-geist text-sm font-semibold text-ink-2">
              {t(nextProject.title)}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

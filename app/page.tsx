import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Value from "@/components/sections/Value";
import Skills from "@/components/sections/Skills";
import ProjectsTeaser from "@/components/sections/ProjectsTeaser";
// Testimonials stay hidden until real ones exist (CLAUDE.md).
// import Testimonial from "@/components/sections/Testimonial";
import Contact from "@/components/sections/Contact";
import { fetchContributions } from "@/lib/github";
import { getFeaturedProjects } from "@/data/projects";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";
import { t } from "@/lib/i18n";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: { absolute: `${SITE_NAME} — ${t(profile.role)}` },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default async function Home() {
  const [contributions] = await Promise.all([
    fetchContributions().catch(() => null),
  ]);
  const featuredProjects = getFeaturedProjects();

  return (
    <div>
      <Hero />
      <About />
      <Value />
      <Skills contributions={contributions} />
      <ProjectsTeaser projects={featuredProjects} />
      {/* <Testimonial /> */}
      <Contact />
    </div>
  );
}

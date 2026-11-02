import type { Metadata } from "next";
import ProjectsContent from "./content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Client websites, systems, AI & data work, design docs and SINTA 2 research by Muh Fuad Zahran Firman.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}

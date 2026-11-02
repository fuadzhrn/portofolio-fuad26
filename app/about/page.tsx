import type { Metadata } from "next";
import AboutContent from "./content";
import { t } from "@/lib/i18n";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `About — ${profile.shortName}`,
  description: t({
    en: "About Muh Fuad Zahran Firman — Web Developer & System Analyst. Computer Engineering graduate of Universitas Negeri Makassar (GPA 3.80, Cum Laude), 2 SINTA 2 journals, internships at PT PLN and PT Vale Indonesia.",
    id: "Tentang Muh Fuad Zahran Firman — Web Developer & System Analyst. Lulusan Teknik Komputer Universitas Negeri Makassar (IPK 3,80, Cum Laude), 2 jurnal SINTA 2, magang di PT PLN dan PT Vale Indonesia.",
  }),
};

export default function AboutPage() {
  return <AboutContent />;
}

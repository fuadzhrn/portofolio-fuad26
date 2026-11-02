import type { Metadata } from "next";
import AboutContent from "./content";

// SEO metadata is in English (main language).
export const metadata: Metadata = {
  title: "About",
  description:
    "About Muh Fuad Zahran Firman — Web Developer & System Analyst. Computer Engineering graduate of Universitas Negeri Makassar (GPA 3.80, Cum Laude), 2 SINTA 2 journals, internships at PT PLN and PT Vale Indonesia.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}

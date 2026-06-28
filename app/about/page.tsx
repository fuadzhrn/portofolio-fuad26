import type { Metadata } from "next";
import AboutContent from "./content";

export const metadata: Metadata = {
  title: "About — M. Fuad Zahran",
  description:
    "Tentang Muh Fuad Zahran Firman — Web Developer fresh graduate Cumlaude Universitas Negeri Makassar dengan IPK 3.80, 2 jurnal Sinta 2, dan pengalaman magang di PT PLN dan PT Vale Indonesia.",
};

export default function AboutPage() {
  return <AboutContent />;
}

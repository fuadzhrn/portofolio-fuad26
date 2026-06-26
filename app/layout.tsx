import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Muh Fuad Zahran Firman — Web Developer",
  description:
    "Portfolio pribadi Muh Fuad Zahran Firman. Web Developer & Fresh Graduate Teknik Komputer dari Makassar, Sulawesi Selatan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geist.variable} ${jakarta.variable}`}>
      <body className="bg-void-base text-ink font-jakarta antialiased overflow-hidden">
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto pb-16 lg:pb-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import LanguageToggle from "@/components/LanguageToggle";
import { LangProvider } from "@/components/LangProvider";
import { getLang } from "@/lib/i18n.server";
import { t } from "@/lib/i18n";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";
import { profile } from "@/data/profile";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const defaultTitle = `${SITE_NAME} — ${t(profile.role)}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    url: "/",
    locale: "en_US",
    alternateLocale: ["id_ID"],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE_DESCRIPTION,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: t(profile.role),
  url: SITE_URL,
  email: `mailto:${profile.email}`,
  sameAs: [profile.github.url, profile.linkedin.url],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universitas Negeri Makassar",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await getLang();

  return (
    <html lang={lang} className={`${geist.variable} ${jakarta.variable}`}>
      <body className="bg-void-base text-ink font-jakarta antialiased overflow-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <LangProvider lang={lang}>
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto pb-16 md:pb-0">
              {children}
              {/* Mobile only: language toggle at the end of the page content */}
              <div className="flex justify-center pb-6 pt-2 md:hidden">
                <LanguageToggle />
              </div>
            </main>
          </div>
        </LangProvider>
      </body>
    </html>
  );
}

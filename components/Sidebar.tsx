"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  IconHome,
  IconUser,
  IconCode,
  IconBriefcase,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";
import LanguageToggle from "@/components/LanguageToggle";
import { useT } from "@/components/LangProvider";
import { ui } from "@/data/ui-strings";
import { profile } from "@/data/profile";

const NAV_ITEMS = [
  { href: "/", icon: IconHome, label: ui.navHome },
  { href: "/about", icon: IconUser, label: ui.navAbout },
  { href: "/#skills", icon: IconCode, label: ui.navSkills },
  { href: "/projects", icon: IconBriefcase, label: ui.navProjects },
  { href: "/#contact", icon: IconMail, label: ui.navContact },
];

const SOCIAL_ITEMS = [
  { href: profile.github.url, icon: IconBrandGithub, label: "GitHub" },
  { href: profile.linkedin.url, icon: IconBrandLinkedin, label: "LinkedIn" },
  { href: "#", icon: IconBrandInstagram, label: "Instagram" }, // TODO: ask owner — Instagram URL
];

function Avatar() {
  const [error, setError] = useState(false);

  return (
    <div
      className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#222220] h-10 w-10 lg:h-[72px] lg:w-[72px]"
      style={{ border: "0.5px solid #2A2A28" }}
    >
      {!error ? (
        <Image
          src="/images/avatar.jpg"
          alt={profile.name}
          fill
          sizes="(min-width: 1024px) 72px, 40px"
          className="rounded-full object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <span className="font-geist text-xs font-semibold text-[#888884] lg:text-[22px]">
          MF
        </span>
      )}
    </div>
  );
}

export default function Sidebar() {
  const t = useT();
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      {/* ── Sidebar: tablet (72px) + desktop (220px) ── */}
      <aside
        className="hidden md:flex h-full shrink-0 flex-col w-[72px] lg:w-[220px] px-3 py-5 lg:px-5 lg:py-7"
        style={{ background: "#161614", borderRight: "1px solid #222220" }}
      >
        {/* Profile */}
        <div
          className="mb-5 flex flex-col items-center pb-5 lg:mb-6 lg:pb-6"
          style={{ borderBottom: "0.5px solid #1E1E1C" }}
        >
          <Avatar />

          {/* Name / role / badge — desktop only */}
          <div className="hidden lg:flex lg:flex-col lg:items-center">
            <span
              className="mt-3 text-center font-geist leading-none"
              style={{ fontSize: 13, fontWeight: 500, color: "#C8C8C2" }}
            >
              {profile.shortName}
            </span>

            <span
              className="mb-3 mt-1 text-center"
              style={{ fontSize: 11, color: "#3A3A38" }}
            >
              {t(ui.sidebarRole)}
            </span>

            <span
              className="inline-flex items-center gap-[5px] rounded-full"
              style={{
                background: "rgba(201,169,110,0.08)",
                border: "0.5px solid rgba(201,169,110,0.22)",
                color: "#C9A96E",
                fontSize: 10,
                padding: "3px 10px",
              }}
            >
              <span
                className="shrink-0 rounded-full bg-[#C9A96E]"
                style={{ width: 5, height: 5, boxShadow: "0 0 5px #C9A96E99" }}
              />
              {t(ui.sidebarOpenToWork)}
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col">
          <p
            className="mb-1.5 hidden uppercase lg:block"
            style={{ fontSize: 9, letterSpacing: "0.12em", color: "#2A2A28", paddingLeft: 10 }}
          >
            {t(ui.menu)}
          </p>

          <div className="flex flex-col gap-px">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link key={item.href} href={item.href}>
                  <div
                    className={`flex cursor-pointer items-center justify-center gap-[10px] rounded-[8px] transition-colors duration-150 lg:justify-start ${
                      active ? "bg-[#1E1E1C]" : "hover:bg-[#1E1E1C]"
                    }`}
                    style={{ padding: "9px 10px" }}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.75}
                      style={{ color: active ? "#A0A09A" : "#383836", flexShrink: 0 }}
                    />
                    <span
                      className="hidden lg:inline"
                      style={{ fontSize: 12.5, color: active ? "#888884" : "#333330" }}
                    >
                      {t(item.label)}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom */}
        <div className="mt-auto pt-4 lg:pt-5" style={{ borderTop: "0.5px solid #1E1E1C" }}>
          <div className="flex justify-center gap-1.5 lg:justify-start">
            {SOCIAL_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex items-center justify-center rounded-[6px] bg-[#1A1A18] transition-colors hover:bg-[#222220]"
                  style={{ width: 28, height: 28, border: "0.5px solid #222220", flexShrink: 0 }}
                >
                  <Icon size={12} strokeWidth={1.75} style={{ color: "#383836" }} />
                </a>
              );
            })}
          </div>

          {/* Language toggle (stacked on the 72px tablet sidebar) */}
          <div className="mt-3 flex justify-center lg:justify-start">
            <LanguageToggle compact />
          </div>

          <p
            className="mt-2 hidden leading-[1.5] lg:block"
            style={{ fontSize: 9, color: "#252523" }}
          >
            © 2024 {profile.shortName}.
            <br />
            {t(ui.rightsReserved)}
          </p>
        </div>
      </aside>

      {/* ── Mobile Bottom Nav (below md only) ── */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 flex h-[60px] items-center justify-around md:hidden"
        style={{ background: "#161614", borderTop: "0.5px solid #222220" }}
      >
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link key={item.href} href={item.href}>
              <div className="flex flex-col items-center gap-0.5">
                <Icon
                  size={20}
                  strokeWidth={1.75}
                  style={{ color: active ? "#A0A09A" : "#383836" }}
                />
                <span style={{ fontSize: 9, color: active ? "#A0A09A" : "#383836" }}>
                  {t(item.label)}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>
    </>
  );
}

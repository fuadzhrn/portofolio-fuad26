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

const NAV_ITEMS = [
  { href: "/", icon: IconHome, label: "Home" },
  { href: "/#about", icon: IconUser, label: "About" },
  { href: "/#skills", icon: IconCode, label: "Skills" },
  { href: "/projects", icon: IconBriefcase, label: "Projects" },
  { href: "/#contact", icon: IconMail, label: "Contact" },
];

const SOCIAL_ITEMS = [
  { href: "https://github.com/fuadzahranfirman", icon: IconBrandGithub, label: "GitHub" },
  { href: "#", icon: IconBrandLinkedin, label: "LinkedIn" },
  { href: "#", icon: IconBrandInstagram, label: "Instagram" },
];

function Avatar() {
  const [error, setError] = useState(false);

  return (
    <div
      className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#222220]"
      style={{ width: 72, height: 72, border: "0.5px solid #2A2A28" }}
    >
      {!error ? (
        <Image
          src="/images/avatar.jpg"
          alt="M. Fuad Zahran"
          fill
          className="object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <span className="font-geist text-[22px] font-semibold text-[#888884]">
          MF
        </span>
      )}
    </div>
  );
}

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      {/* ── Desktop Sidebar ── */}
      <aside
        className="hidden h-full w-[220px] shrink-0 flex-col lg:flex"
        style={{
          background: "#161614",
          borderRight: "1px solid #222220",
          padding: "28px 20px",
        }}
      >
        {/* Profile */}
        <div
          className="mb-6 flex flex-col items-center pb-6"
          style={{ borderBottom: "0.5px solid #1E1E1C" }}
        >
          <Avatar />

          <span
            className="mt-3 text-center font-geist leading-none"
            style={{ fontSize: 13, fontWeight: 500, color: "#C8C8C2" }}
          >
            M. Fuad Zahran
          </span>

          <span
            className="mb-3 mt-1 text-center"
            style={{ fontSize: 11, color: "#3A3A38" }}
          >
            Web Developer
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
            Open to work
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col">
          <p
            className="mb-1.5 uppercase"
            style={{
              fontSize: 9,
              letterSpacing: "0.12em",
              color: "#2A2A28",
              paddingLeft: 10,
            }}
          >
            Menu
          </p>

          <div className="flex flex-col gap-px">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link key={item.href} href={item.href}>
                  <div
                    className={`flex cursor-pointer items-center gap-[10px] rounded-[8px] transition-colors duration-150 ${
                      active ? "bg-[#1E1E1C]" : "hover:bg-[#1E1E1C]"
                    }`}
                    style={{ padding: "9px 10px" }}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.75}
                      style={{ color: active ? "#A0A09A" : "#383836", flexShrink: 0 }}
                    />
                    <span style={{ fontSize: 12.5, color: active ? "#888884" : "#333330" }}>
                      {item.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom */}
        <div
          className="mt-auto pt-5"
          style={{ borderTop: "0.5px solid #1E1E1C" }}
        >
          <div className="flex gap-1.5">
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
                  style={{
                    width: 30,
                    height: 30,
                    border: "0.5px solid #222220",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={13} strokeWidth={1.75} style={{ color: "#383836" }} />
                </a>
              );
            })}
          </div>

          <p
            className="mt-2 leading-[1.5]"
            style={{ fontSize: 9, color: "#252523" }}
          >
            © 2024 M. Fuad Zahran.
            <br />
            All rights reserved.
          </p>
        </div>
      </aside>

      {/* ── Mobile Bottom Nav ── */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 flex h-16 items-center justify-around border-t border-void-edge bg-void-card lg:hidden">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={`relative flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-150 ${
                  active ? "bg-void-surface text-ink" : "text-ink-4"
                }`}
              >
                <Icon size={20} strokeWidth={1.75} />
                {active && (
                  <span className="absolute -bottom-2.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold" />
                )}
              </div>
            </Link>
          );
        })}
      </nav>
    </>
  );
}

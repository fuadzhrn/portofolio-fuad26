"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { ContributionData, ContributionDay } from "@/lib/github";
import { profile } from "@/data/profile";
import { ui, uiLists } from "@/data/ui-strings";
import { useLang, useT } from "@/components/LangProvider";

// Gold-tinted level palette matching Void Neutral design system
const LEVEL_COLORS: Record<0 | 1 | 2 | 3 | 4, string> = {
  0: "#161b22",   // empty
  1: "#0e4429",   // low
  2: "#006d32",   // mid-low
  3: "#26a641",   // mid-high
  4: "#39d353",   // full
};

function Cell({ day, size = 11 }: { day: ContributionDay; size?: number }) {
  const [tooltip, setTooltip] = useState(false);
  const lang = useLang();
  const t = useT();

  const formattedDate = new Date(day.date).toLocaleDateString(uiLists.locale[lang][0], {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      className="relative"
      onMouseEnter={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
    >
      <div
        className="rounded-[2px] transition-opacity hover:opacity-80"
        style={{
          width: size,
          height: size,
          backgroundColor: LEVEL_COLORS[day.level],
        }}
      />
      {tooltip && (
        <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-void-edge-hi bg-void-surface px-2.5 py-1.5 text-[11px] font-medium text-ink shadow-xl">
          <span className="text-ink-3">{formattedDate}</span>
          {" — "}
          <span className="text-ink">
            {day.count} {t(ui.contributions)}
          </span>
        </div>
      )}
    </div>
  );
}

type Props = { data: ContributionData | null };

export default function GithubGraph({ data }: Props) {
  const lang = useLang();
  const t = useT();

  // No token or the API failed: neutral empty state, never fake data.
  if (!data) {
    return (
      <div className="mt-10 rounded-xl border border-void-edge bg-void-card p-6">
        <p className="font-jakarta text-sm text-ink-4">
          {t(ui.githubUnavailable)}{" "}
          <a
            href={profile.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-3 transition-colors hover:text-ink-2"
          >
            {t(ui.viewOnGithub)} ↗
          </a>
        </p>
      </div>
    );
  }

  const MONTH_LABELS = uiLists.months[lang];
  const DAY_LABELS = uiLists.weekdays[lang];

  // Derive month label positions from week data
  const monthPositions: { label: string; col: number }[] = [];
  data.weeks.forEach((week, i) => {
    const firstDay = week[0];
    if (!firstDay) return;
    const month = new Date(firstDay.date).getMonth();
    const prevWeek = data.weeks[i - 1];
    const prevMonth = prevWeek ? new Date(prevWeek[0]?.date ?? "").getMonth() : -1;
    if (month !== prevMonth) {
      monthPositions.push({ label: MONTH_LABELS[month], col: i });
    }
  });

  const CELL = 11;
  const GAP = 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mt-10 rounded-xl border border-void-edge bg-void-card p-5 lg:p-6"
    >
      <div className="mb-4 flex items-center justify-between">
        <p className="font-jakarta text-sm font-medium text-ink-2">
          {t(ui.githubContributions)}
        </p>
        <a
          href={profile.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-jakarta text-xs text-ink-4 transition-colors hover:text-ink-2"
        >
          @{profile.github.handle}
        </a>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-flex min-w-max flex-col gap-1">
          {/* Month labels */}
          <div className="relative mb-1 ml-8 flex" style={{ gap: GAP }}>
            {data.weeks.map((_, i) => {
              const pos = monthPositions.find((m) => m.col === i);
              return (
                <div
                  key={i}
                  className="flex-shrink-0"
                  style={{ width: CELL }}
                >
                  {pos && (
                    <span className="font-jakarta text-[9px] text-ink-5">
                      {pos.label}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Graph rows */}
          <div className="flex gap-1">
            {/* Day labels */}
            <div className="flex flex-col justify-between" style={{ gap: GAP, paddingTop: 1 }}>
              {DAY_LABELS.map((label, i) => (
                <div
                  key={i}
                  className="flex items-center justify-end"
                  style={{ height: CELL }}
                >
                  <span className="mr-1.5 font-jakarta text-[9px] text-ink-5">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Week columns */}
            <div className="flex" style={{ gap: GAP }}>
              {data.weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col" style={{ gap: GAP }}>
                  {Array.from({ length: 7 }).map((_, di) => {
                    const day = week[di];
                    return day ? (
                      <Cell key={di} day={day} size={CELL} />
                    ) : (
                      <div
                        key={di}
                        style={{ width: CELL, height: CELL }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        <p className="font-jakarta text-xs text-ink-4">
          <span className="text-ink-2">
            {data.totalContributions.toLocaleString(uiLists.locale[lang][0])}
          </span>{" "}
          {t(ui.contributionsLastYear)}
        </p>
        {/* Legend */}
        <div className="flex items-center gap-1.5">
          <span className="font-jakarta text-[10px] text-ink-5">{t(ui.less)}</span>
          {([0, 1, 2, 3, 4] as const).map((level) => (
            <div
              key={level}
              className="rounded-[2px]"
              style={{
                width: CELL,
                height: CELL,
                backgroundColor: LEVEL_COLORS[level],
              }}
            />
          ))}
          <span className="font-jakarta text-[10px] text-ink-5">{t(ui.more)}</span>
        </div>
      </div>
    </motion.div>
  );
}

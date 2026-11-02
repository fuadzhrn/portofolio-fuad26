import {
  siHtml5,
  siCss3,
  siJavascript,
  siPhp,
  siLaravel,
  siMysql,
  siPython,
  siFastapi,
  siOpencv,
  siNextdotjs,
  siVuedotjs,
  siTypescript,
  siGit,
  siGithub,
  siFigma,
  siDocker,
  type SimpleIcon,
} from "simple-icons";
import type { Localized } from "@/lib/i18n";
import { ui } from "@/data/ui-strings";

// ─── Types ────────────────────────────────────────────────────────────────────

export type SkillGroup = "languages" | "tools";

// Thin line icons (Tabler style) for skills that have no Simple Icons logo.
export type LineIcon = "yolo" | "sql" | "api" | "excel" | "powerbi" | "vscode" | "aws";

export type SkillIcon =
  | { kind: "brand"; path: string } // Simple Icons path, viewBox 0 0 24 24, fill
  | { kind: "line"; name: LineIcon }; // stroke 1.5, 24x24

export type Skill = {
  name: string;
  icon: SkillIcon;
  color: string;
  locked: boolean; // still learning
  group: SkillGroup;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

// Brand colour from Simple Icons; near-black logos use the primary text colour
// so they stay visible on the dark card.
const LIGHT_ON_DARK = "#E8E8E4";

function brand(
  icon: SimpleIcon,
  group: SkillGroup,
  opts: { name?: string; locked?: boolean; light?: boolean } = {}
): Skill {
  return {
    name: opts.name ?? icon.title,
    icon: { kind: "brand", path: icon.path },
    color: opts.light ? LIGHT_ON_DARK : `#${icon.hex}`,
    locked: opts.locked ?? false,
    group,
  };
}

function line(
  name: string,
  icon: LineIcon,
  color: string,
  group: SkillGroup,
  locked = false
): Skill {
  return { name, icon: { kind: "line", name: icon }, color, locked, group };
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const skills: Skill[] = [
  // Languages & Frameworks
  brand(siHtml5, "languages"),
  brand(siCss3, "languages"),
  brand(siJavascript, "languages"),
  brand(siPhp, "languages"),
  brand(siLaravel, "languages"),
  brand(siMysql, "languages"),
  brand(siPython, "languages"),
  brand(siFastapi, "languages"),
  line("YOLOv8", "yolo", "#C9A96E", "languages"),
  brand(siOpencv, "languages"),
  line("SQL", "sql", "#C8C8C2", "languages"),
  line("REST API", "api", "#C8C8C2", "languages"),
  brand(siNextdotjs, "languages", { locked: true, light: true }),
  brand(siVuedotjs, "languages", { locked: true }),
  brand(siTypescript, "languages", { locked: true }),

  // Tools & Platform
  line("Excel", "excel", "#1D6F42", "tools"),
  line("Power BI", "powerbi", "#F2C811", "tools"),
  brand(siFigma, "tools"),
  brand(siGit, "tools"),
  brand(siGithub, "tools", { light: true }),
  line("VS Code", "vscode", "#2F80ED", "tools"),
  line("AWS", "aws", "#FF9900", "tools", true),
  brand(siDocker, "tools", { locked: true }),
];

export const skillGroups: { id: SkillGroup; label: Localized }[] = [
  { id: "languages", label: ui.languagesFrameworks },
  { id: "tools", label: ui.toolsPlatform },
];

export const LOCKED_COLOR = "#3A3A38";

import { profile } from "@/data/profile";

// TODO: ask owner — production domain. Set NEXT_PUBLIC_SITE_URL in .env.local / hosting env.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(
  /\/$/,
  ""
);

export const SITE_NAME = profile.name;

export const SITE_DESCRIPTION =
  "Web Developer & System Analyst from Makassar, Indonesia — Laravel websites, AI integration (YOLO + OCR), computer vision and data analytics. Open to work in 2026.";

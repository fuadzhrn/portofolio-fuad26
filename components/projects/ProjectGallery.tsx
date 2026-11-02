"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IconX, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useT } from "@/components/LangProvider";
import { ui } from "@/data/ui-strings";

type Props = {
  // All project images. The grid shows images[1..]; the lightbox cycles through all.
  images: string[];
  title: string;
};

const navButton =
  "flex h-10 w-10 items-center justify-center rounded-full text-ink-3 transition-colors hover:text-ink";
const navButtonStyle = { background: "#161614", border: "0.5px solid #2A2A28" };

export default function ProjectGallery({ images, title }: Props) {
  const t = useT();
  const [open, setOpen] = useState<number | null>(null);
  const count = images.length;

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(
    () => setOpen((i) => (i === null ? i : (i - 1 + count) % count)),
    [count]
  );
  const next = useCallback(
    () => setOpen((i) => (i === null ? i : (i + 1) % count)),
    [count]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);

  const thumbs = images.slice(1);
  if (thumbs.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-2 gap-[10px] md:grid-cols-3">
        {thumbs.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpen(i + 1)}
            aria-label={`${t(ui.openImage)}: ${title} ${i + 2}`}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-xl transition-colors duration-200 hover:border-[#2A2A28]"
            style={{ background: "#1A1A18", border: "0.5px solid #1E1E1C", cursor: "zoom-in" }}
          >
            <Image
              src={src}
              alt={`${title} — ${t(ui.screenshotAlt)} ${i + 2}`}
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-contain"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ background: "rgba(17,17,16,0.94)" }}
          >
            <motion.div
              key={open}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-[75vh] w-[88vw] md:w-[78vw]"
            >
              <Image
                src={images[open]}
                alt={`${title} — ${t(ui.screenshotAlt)} ${open + 1}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              aria-label={t(ui.closeImage)}
              className={`absolute right-4 top-4 ${navButton}`}
              style={navButtonStyle}
            >
              <IconX size={18} strokeWidth={1.75} />
            </button>

            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  aria-label={t(ui.previousImage)}
                  className={`absolute left-3 top-1/2 -translate-y-1/2 md:left-6 ${navButton}`}
                  style={navButtonStyle}
                >
                  <IconChevronLeft size={18} strokeWidth={1.75} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  aria-label={t(ui.nextImage)}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 md:right-6 ${navButton}`}
                  style={navButtonStyle}
                >
                  <IconChevronRight size={18} strokeWidth={1.75} />
                </button>
                <span className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-xs text-ink-4">
                  {open + 1} / {count}
                </span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

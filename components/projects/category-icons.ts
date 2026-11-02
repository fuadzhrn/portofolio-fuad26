import {
  IconBuildingSkyscraper,
  IconCode,
  IconFileText,
  IconBrain,
  IconLayout,
} from "@tabler/icons-react";
import type { ProjectCategory } from "@/data/projects";

// Placeholder icon per category, shown when a project has no image.
export const CATEGORY_ICONS: Record<ProjectCategory, React.ElementType> = {
  websites: IconBuildingSkyscraper,
  systems: IconCode,
  "ai-data": IconBrain,
  "design-docs": IconLayout,
  research: IconFileText,
};

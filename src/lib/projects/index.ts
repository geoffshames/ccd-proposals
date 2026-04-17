import { littleTokyoReborn } from "./little-tokyo-reborn";
import { ykNiece } from "./yk-niece";
import { suicideboys } from "./suicideboys";
import { monstaX } from "./monsta-x";
import { trim } from "./trim";
import { alexWarren } from "./alex-warren";
import { nadhifBasalamah } from "./nadhif-basalamah";
import type { ProjectData } from "../project-context";

export const PROJECTS: Record<string, ProjectData> = {
  "little-tokyo-reborn": littleTokyoReborn,
  "yk-niece": ykNiece,
  "suicideboys": suicideboys,
  "monsta-x": monstaX,
  "trim": trim,
  "alex-warren": alexWarren,
  "nadhif-basalamah": nadhifBasalamah,
};

export function getProject(slug: string): ProjectData | undefined {
  return PROJECTS[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(PROJECTS);
}

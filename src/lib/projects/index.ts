import { littleTokyoReborn } from "./little-tokyo-reborn";
import { ykNiece } from "./yk-niece";
import { suicideboys } from "./suicideboys";
import { monstaX } from "./monsta-x";
import { breakingBenjamin } from "./breaking-benjamin";
import { trim } from "./trim";
import { alexWarren } from "./alex-warren";
import { nadhifBasalamah } from "./nadhif-basalamah";
import { destinConrad } from "./destin-conrad";
import { forrestFrank } from "./forrest-frank";
import { wonder } from "./wonder";
import { chadCisneros } from "./chad-cisneros";
import { lngshot } from "./lngshot";
import { keyveatz } from "./keyveatz";
import { firstAvenue } from "./first-avenue";
import { keyveatzKorean } from "./keyveatz-korean";
import { ndaTest } from "./nda-test";
import { paxahau } from "./paxahau";
import { resoundPresents } from "./resound-presents";
import { theDuckClub } from "./the-duck-club";
import { fearlessRecords } from "./fearless-records";
import { bogeyBoys } from "./bogey-boys";
import type { ProjectData } from "../project-context";

export const PROJECTS: Record<string, ProjectData> = {
  "little-tokyo-reborn": littleTokyoReborn,
  "yk-niece": ykNiece,
  "suicideboys": suicideboys,
  "monsta-x": monstaX,
  "breaking-benjamin": breakingBenjamin,
  "trim": trim,
  "alex-warren": alexWarren,
  "nadhif-basalamah": nadhifBasalamah,
  "destin-conrad": destinConrad,
  "forrest-frank": forrestFrank,
  "wonder": wonder,
  "chad-cisneros": chadCisneros,
  "lngshot": lngshot,
  "keyveatz": keyveatz,
  "keyveatz-korean": keyveatzKorean,
  "first-avenue": firstAvenue,
  "nda-test": ndaTest,
  "the-duck-club": theDuckClub,
  "paxahau": paxahau,
  "resound-presents": resoundPresents,
  "fearless-records": fearlessRecords,
  "bogey-boys": bogeyBoys,
};

export function getProject(slug: string): ProjectData | undefined {
  return PROJECTS[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(PROJECTS);
}

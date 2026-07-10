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
import { underratedPresents } from "./underrated-presents";
import { theDuckClub } from "./the-duck-club";
import { fearlessRecords } from "./fearless-records";
import { bogeyBoys } from "./bogey-boys";
import { fendiRodeo } from "./fendi-rodeo";
import { yoQuieroBailar } from "./yo-quiero-bailar";
import { emmitFenn } from "./emmit-fenn";
import { miguelDamned } from "./miguel-damned";
import { mackKeaneBloodshot } from "./mack-keane-bloodshot";
import { docRaven } from "./doc-raven";
import { armenta } from "./armenta";
import { armentaEs } from "./armenta-es";
import { sublime } from "./sublime";
import { hermes } from "./hermes";
import { polkadotfx } from "./polkadotfx";
import { sunChaser } from "./sun-chaser";
import type { ProjectData } from "../project-context";

export const PROJECTS: Record<string, ProjectData> = {
  "sun-chaser": sunChaser,
  "polkadotfx": polkadotfx,
  "hermes": hermes,
  "sublime": sublime,
  "armenta": armenta,
  "armenta-es": armentaEs,
  "doc-raven": docRaven,
  "mack-keane-bloodshot": mackKeaneBloodshot,
  "miguel-damned": miguelDamned,
  "emmit-fenn": emmitFenn,
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
  "underrated-presents": underratedPresents,
  "fearless-records": fearlessRecords,
  "bogey-boys": bogeyBoys,
  "fendi-rodeo": fendiRodeo,
  "yo-quiero-bailar": yoQuieroBailar,
};

export function getProject(slug: string): ProjectData | undefined {
  return PROJECTS[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(PROJECTS);
}

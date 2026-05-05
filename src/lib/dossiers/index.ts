import { fearlessRecords } from "./fearless-records";
import { haveYouEverSeenTheRain } from "./have-you-ever-seen-the-rain";
import type { DossierData } from "../dossier-context";

export const DOSSIERS: Record<string, DossierData> = {
  "fearless-records": fearlessRecords,
  "have-you-ever-seen-the-rain": haveYouEverSeenTheRain,
};

export function getDossier(slug: string): DossierData | undefined {
  return DOSSIERS[slug];
}

export function getAllDossierSlugs(): string[] {
  return Object.keys(DOSSIERS);
}

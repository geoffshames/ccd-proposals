import { fearlessRecords } from "./fearless-records";
import type { DossierData } from "../dossier-context";

export const DOSSIERS: Record<string, DossierData> = {
  "fearless-records": fearlessRecords,
};

export function getDossier(slug: string): DossierData | undefined {
  return DOSSIERS[slug];
}

export function getAllDossierSlugs(): string[] {
  return Object.keys(DOSSIERS);
}

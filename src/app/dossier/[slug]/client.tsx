"use client";

import type { DossierData } from "@/lib/dossier-context";
import { DossierProvider } from "@/lib/dossier-context";
import { Cover } from "@/components/dossier/Cover";
import { Brief } from "@/components/dossier/Brief";
import { CatalogMap } from "@/components/dossier/CatalogMap";
import { StateOfPlay } from "@/components/dossier/StateOfPlay";
import { Findings } from "@/components/dossier/Findings";
import { Thesis } from "@/components/dossier/Thesis";
import { Plan } from "@/components/dossier/Plan";
import { PhysicalDrops } from "@/components/dossier/PhysicalDrops";
import { Experiential } from "@/components/dossier/Experiential";
import { EngagementEngine } from "@/components/dossier/EngagementEngine";
import { ComparablePlays } from "@/components/dossier/ComparablePlays";
import { MathSection } from "@/components/dossier/MathSection";
import { PilotMemo } from "@/components/dossier/PilotMemo";
import { SignOff } from "@/components/dossier/SignOff";

export function DossierClient({ data }: { data: DossierData }) {
  return (
    <DossierProvider data={data}>
      <main className="min-h-screen bg-bg text-white antialiased">
        <Cover />
        <Brief />
        <CatalogMap />
        <StateOfPlay />
        <Findings />
        <Thesis />
        <Plan />
        <PhysicalDrops />
        <Experiential />
        <EngagementEngine />
        <ComparablePlays />
        <MathSection />
        <PilotMemo />
        <SignOff />
      </main>
    </DossierProvider>
  );
}

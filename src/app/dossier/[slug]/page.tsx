import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDossier, getAllDossierSlugs } from "@/lib/dossiers";
import { DossierClient } from "./client";
import { isNdaSignedForSlug } from "@/lib/nda/verify";
import { NdaGate } from "@/components/nda/NdaGate";

export async function generateStaticParams() {
  return getAllDossierSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dossier = getDossier(slug);
  if (!dossier) return { title: "Dossier Not Found" };

  if (dossier.requireNda) {
    return {
      title: `${dossier.subject.name} — Catalog Reactivation Dossier`,
      description: "Confidential. Mutual NDA required.",
      robots: { index: false, follow: false },
    };
  }
  return {
    title: `${dossier.subject.name} — Catalog Reactivation Dossier`,
    description: dossier.brief.headline,
  };
}

export default async function DossierPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dossier = getDossier(slug);
  if (!dossier) notFound();

  if (dossier.requireNda) {
    const check = await isNdaSignedForSlug(`dossier-${slug}`);
    if (!check.signed) {
      const today = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      return (
        <NdaGate
          slug={`dossier-${slug}`}
          proposalTitle={`${dossier.subject.name} × Crowd Control Digital`}
          clientLegalName={dossier.clientLegalName ?? dossier.subject.name}
          companyDefinitionTerm="Client"
          effectiveDate={today}
          accentColor="#FD3737"
        />
      );
    }
  }

  return <DossierClient data={dossier} />;
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, getAllSlugs } from "@/lib/projects";
import { getPlan, getAllPlanSlugs } from "@/lib/plans";
import { ProposalClient } from "./client";
import { PlanClient } from "@/components/plan/PlanClient";
import { isNdaSignedForSlug } from "@/lib/nda/verify";
import { NdaGate } from "@/components/nda/NdaGate";

export async function generateStaticParams() {
  // Both plan slugs and project slugs share the [slug] route.
  const planSlugs = getAllPlanSlugs();
  const projectSlugs = getAllSlugs();
  const all = Array.from(new Set([...planSlugs, ...projectSlugs]));
  return all.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // Plan-format metadata (Kakao-style strategy plans).
  const plan = getPlan(slug);
  if (plan) {
    const title = `${plan.cover.title} - ${plan.cover.label}`;
    const description = plan.cover.subtitle;
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "website",
        url: `https://proposal.crowdcontroldigital.com/${slug}`,
        siteName: "Crowd Control Digital",
      },
      twitter: { card: "summary_large_image", title, description },
    };
  }

  // Proposal-format metadata (existing).
  const project = getProject(slug);
  if (!project) return { title: "Not Found" };

  if (project.requireNda) {
    return {
      title: `${project.client.name} - Confidential Proposal`,
      description: "This proposal is confidential. Please sign the mutual NDA to view.",
      robots: { index: false, follow: false },
    };
  }

  const title = `${project.client.name} - ${project.project.name}`;
  const description = project.project.tagline;
  const ogImage = project.images.ogImage
    ? `https://proposal.crowdcontroldigital.com${project.images.ogImage}`
    : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://proposal.crowdcontroldigital.com/${slug}`,
      siteName: "Crowd Control Digital Proposals",
      ...(ogImage && {
        images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage && { images: [ogImage] }),
    },
  };
}

export default async function ProposalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Plan format (Kakao-style strategy plans) takes precedence.
  const plan = getPlan(slug);
  if (plan) {
    return <PlanClient plan={plan} />;
  }

  // Proposal format (existing).
  const project = getProject(slug);
  if (!project) notFound();

  if (project.requireNda) {
    const check = await isNdaSignedForSlug(slug);
    if (!check.signed) {
      const today = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      return (
        <NdaGate
          slug={slug}
          proposalTitle={`${project.client.name} × ${project.studio.name}`}
          clientLegalName={project.clientLegalName ?? project.client.name}
          companyDefinitionTerm="Client"
          effectiveDate={today}
          accentColor={project.accentColor}
        />
      );
    }
  }

  return <ProposalClient project={project} />;
}

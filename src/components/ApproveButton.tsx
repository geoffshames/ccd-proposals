"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useProject } from "@/lib/project-context";

type Props = {
  approveLabel?: string;
  sentLabel?: string;
  caption?: string;
};

/**
 * Used when project.quote.paymentLink === "#approve".
 * Renders an "Approve" CTA that POSTs to /api/approve, which emails Geoff
 * with proposal slug + visitor metadata. No Stripe, no signature, no PDF.
 */
export function ApproveButton({
  approveLabel = "Approve",
  sentLabel = "Sent. Our team will be in touch.",
  caption = "APPROVALS NOTIFY CROWD CONTROL DIGITAL",
}: Props) {
  const PROJECT = useProject();
  const pathname = usePathname();
  const slug = (pathname || "").split("/").filter(Boolean).pop() || "";
  const [state, setState] = useState<"idle" | "loading" | "sent" | "error">("idle");

  async function onApprove() {
    if (state !== "idle") return;
    setState("loading");
    try {
      const res = await fetch("/api/approve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          clientName: PROJECT.client.name,
          projectName: PROJECT.project.name,
          tier: "",
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setState("sent");
    } catch {
      setState("error");
    }
  }

  const isDone = state === "sent";
  const isErr = state === "error";

  return (
    <>
      <motion.button
        onClick={onApprove}
        disabled={state === "loading" || isDone}
        whileHover={state === "idle" ? { scale: 1.02 } : undefined}
        whileTap={state === "idle" ? { scale: 0.98 } : undefined}
        className={`block w-full text-center font-semibold text-[14px] py-4 rounded-none tracking-[-0.01em] transition-colors ${
          isDone
            ? "bg-white/[0.08] text-text-primary cursor-default"
            : isErr
            ? "bg-white/[0.08] text-text-primary"
            : "bg-accent text-white"
        }`}
      >
        {state === "loading"
          ? "Sending..."
          : isDone
          ? sentLabel
          : isErr
          ? "Couldn't send. Try again."
          : approveLabel}
      </motion.button>
      <p className="text-[10px] text-text-muted/40 text-center mt-4 font-mono tracking-[0.1em]">
        {caption}
      </p>
    </>
  );
}

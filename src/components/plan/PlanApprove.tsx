"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { usePlan } from "@/lib/plan-context";

export function PlanApprove() {
  const PLAN = usePlan();
  const cta = PLAN.approveCta;
  const pathname = usePathname();
  const slug = (pathname || "").split("/").filter(Boolean).pop() || "";
  const [state, setState] = useState<"idle" | "loading" | "sent" | "error">("idle");

  if (!cta) return null;

  async function onApprove() {
    if (state !== "idle") return;
    setState("loading");
    try {
      const res = await fetch("/api/approve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          clientName: PLAN.cover.title,
          projectName: `${PLAN.cover.label} - ${PLAN.cover.subtitle}`,
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setState("sent");
    } catch {
      setState("error");
    }
  }

  const done = state === "sent";
  const err = state === "error";

  return (
    <section id="approve" className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <motion.button
          onClick={onApprove}
          disabled={state === "loading" || done}
          whileHover={state === "idle" ? { scale: 1.02 } : undefined}
          whileTap={state === "idle" ? { scale: 0.98 } : undefined}
          className={`inline-block px-16 py-5 text-[14px] font-semibold tracking-[0.05em] transition-colors ${
            done
              ? "bg-white/[0.08] text-text-primary cursor-default"
              : err
              ? "bg-white/[0.08] text-text-primary"
              : "bg-accent text-white"
          }`}
        >
          {state === "loading"
            ? "Sending..."
            : done
            ? cta.sentLabel
            : err
            ? "Couldn't send. Try again."
            : cta.label}
        </motion.button>
        <p className="text-[11px] text-text-muted/60 mt-6 font-mono tracking-[0.15em] uppercase">
          {cta.caption}
        </p>
      </div>
    </section>
  );
}

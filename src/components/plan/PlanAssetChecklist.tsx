"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PlanSectionHeader } from "./PlanSectionHeader";
import type {
  AssetChecklistSection,
  AssetChecklistGroup,
  AssetChecklistItem,
} from "@/lib/plan-context";

// Shared checklist state (same Supabase table + anon key as PlanDeliverables),
// so the client team and Crowd Control see one source of truth, not per-browser.
const SB_URL = "https://hcyjlwbmrqcgbbizirzl.supabase.co";
const SB_KEY = "sb_publishable_E1PXDuHKsBxmfbGfeYjbAw_63kK0p1y";
const SB_TABLE = "proposal_checklist_state";
const POLL_MS = 12000;

async function fetchSharedState(storageKey: string): Promise<Record<string, boolean> | null> {
  try {
    const res = await fetch(
      `${SB_URL}/rest/v1/${SB_TABLE}?storage_key=eq.${encodeURIComponent(storageKey)}&select=item_id,checked`,
      { headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` } }
    );
    if (!res.ok) return null;
    const rows: { item_id: string; checked: boolean }[] = await res.json();
    const map: Record<string, boolean> = {};
    for (const r of rows) map[r.item_id] = r.checked;
    return map;
  } catch {
    return null;
  }
}

async function pushSharedState(storageKey: string, itemId: string, checked: boolean) {
  try {
    await fetch(`${SB_URL}/rest/v1/${SB_TABLE}?on_conflict=storage_key,item_id`, {
      method: "POST",
      headers: {
        apikey: SB_KEY,
        Authorization: `Bearer ${SB_KEY}`,
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates",
      },
      body: JSON.stringify({
        storage_key: storageKey,
        item_id: itemId,
        checked,
        updated_at: new Date().toISOString(),
      }),
    });
  } catch {}
}

const STATUS_META: Record<string, { label: string; className: string }> = {
  have: { label: "Have", className: "border-accent/50 text-accent bg-accent/[0.08]" },
  "in-progress": { label: "In progress", className: "border-text-muted/40 text-text-primary/80" },
  needed: { label: "Needed", className: "border-text-muted/25 text-text-muted/70" },
};

function OwnerChip({ owner }: { owner?: string }) {
  if (!owner) return null;
  return (
    <span className="px-2 py-0.5 border border-text-muted/25 text-[9.5px] font-mono tracking-[0.1em] uppercase text-text-muted/80">
      {owner}
    </span>
  );
}

function ItemRow({
  item,
  checked,
  onToggle,
}: {
  item: AssetChecklistItem;
  checked: boolean;
  onToggle: () => void;
}) {
  const st = item.status ? STATUS_META[item.status] : undefined;
  return (
    <div
      className={`flex items-start gap-3.5 py-3.5 border-b border-text-muted/10 last:border-b-0 transition-colors ${
        checked ? "opacity-60" : ""
      }`}
    >
      <button
        onClick={onToggle}
        aria-label={`Toggle ${item.label}`}
        className={`mt-0.5 w-5 h-5 flex-shrink-0 border flex items-center justify-center transition-colors cursor-pointer ${
          checked
            ? "border-accent bg-accent text-black"
            : "border-text-muted/40 hover:border-accent/70"
        }`}
      >
        {checked && <span className="text-[11px] font-bold leading-none">✓</span>}
      </button>

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
          <span
            className={`text-[14.5px] md:text-[15px] font-semibold leading-snug ${
              checked ? "text-text-primary/70 line-through decoration-text-muted/40" : "text-text-primary"
            }`}
            style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
          >
            {item.label}
          </span>
          {st && (
            <span className={`px-2 py-0.5 border text-[9px] font-mono tracking-[0.14em] uppercase ${st.className}`}>
              {st.label}
            </span>
          )}
        </div>

        {(item.formats?.length || item.owner) && (
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            {item.formats?.map((f, i) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-accent/[0.06] border border-accent/20 text-[9.5px] font-mono tracking-[0.05em] text-accent/90"
              >
                {f}
              </span>
            ))}
            <OwnerChip owner={item.owner} />
          </div>
        )}

        {item.note && (
          <p className="mt-1.5 text-[12.5px] text-text-primary/65 leading-relaxed max-w-2xl">
            {item.note}
          </p>
        )}
      </div>
    </div>
  );
}

function GroupCard({
  group,
  checked,
  toggle,
  idx,
}: {
  group: AssetChecklistGroup;
  checked: Record<string, boolean>;
  toggle: (id: string) => void;
  idx: number;
}) {
  const isNext = group.status === "next";
  const isDone = group.status === "done";
  const done = group.items.filter((it) => checked[it.id]).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: idx * 0.04 }}
      className={`border bg-bg-card ${isNext ? "border-accent/55" : "border-text-muted/15"}`}
    >
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3 pb-4 mb-4 border-b border-text-muted/12">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h3
                className="text-[19px] md:text-[23px] font-bold text-text-primary leading-tight"
                style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
              >
                {group.heading}
              </h3>
              {isNext && (
                <span className="px-2 py-0.5 bg-accent text-black text-[9.5px] font-mono tracking-[0.18em] uppercase">
                  Next up
                </span>
              )}
              {isDone && (
                <span className="px-2 py-0.5 border border-text-muted/35 text-text-muted/80 text-[9.5px] font-mono tracking-[0.18em] uppercase">
                  Shipped
                </span>
              )}
            </div>
            {group.description && (
              <p className="mt-2 text-[13px] text-text-primary/70 leading-relaxed max-w-3xl">
                {group.description}
              </p>
            )}
          </div>
          <div className="flex flex-col items-start md:items-end gap-1.5 flex-shrink-0">
            {group.release && (
              <div className="md:text-right">
                <div className="text-[9px] font-mono tracking-[0.2em] uppercase text-text-muted/55">Release</div>
                <div
                  className="text-[14px] md:text-[16px] font-bold text-accent leading-tight tabular-nums"
                  style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
                >
                  {group.release}
                </div>
              </div>
            )}
            {group.format && (
              <span className="px-2 py-0.5 border border-text-muted/25 text-[9.5px] font-mono tracking-[0.1em] uppercase text-text-muted/80">
                {group.format}
              </span>
            )}
            <span className="text-[10px] font-mono tracking-[0.12em] uppercase text-text-muted/60 tabular-nums">
              {done} / {group.items.length} done
            </span>
          </div>
        </div>

        <div>
          {group.items.map((item) => (
            <ItemRow
              key={item.id}
              item={item}
              checked={!!checked[item.id]}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function PlanAssetChecklist({ section }: { section: AssetChecklistSection }) {
  const storageKey = section.storageKey || "ccd-asset-checklist";
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    let cancelled = false;
    const sync = async () => {
      const remote = await fetchSharedState(storageKey);
      if (remote && !cancelled) setChecked(remote);
    };
    sync();
    const t = setInterval(sync, POLL_MS);
    return () => {
      cancelled = true;
      clearInterval(t);
    };
  }, [storageKey]);

  const allItems = section.groups.flatMap((g) => g.items);
  const total = allItems.length;
  const done = allItems.filter((it) => checked[it.id]).length;

  const toggle = (id: string) => {
    const next = !checked[id];
    setChecked((c) => ({ ...c, [id]: next }));
    pushSharedState(storageKey, id, next);
  };

  return (
    <section id={`section-${section.number}`} className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader number={section.number} title={section.title} intro={section.intro} />

        {section.standardNote && (
          <div className="mb-8 border border-text-muted/15 bg-bg-card p-5 md:p-6">
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-2.5">
              The standard set, every release
            </div>
            <p className="text-[13.5px] text-text-primary/80 leading-relaxed">{section.standardNote}</p>
          </div>
        )}

        <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <div className="flex items-center gap-4 flex-1 min-w-[220px]">
            <div className="text-[12px] font-mono tracking-[0.2em] uppercase text-text-muted/80 whitespace-nowrap">
              {done} / {total} done
            </div>
            <div className="flex-1 h-[3px] bg-text-muted/15">
              <div
                className="h-full bg-accent transition-all duration-500"
                style={{ width: total ? `${(done / total) * 100}%` : "0%" }}
              />
            </div>
          </div>
          {section.ownerLegend && section.ownerLegend.length > 0 && (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {section.ownerLegend.map((o, i) => (
                <span key={i} className="text-[10px] font-mono tracking-[0.08em] uppercase text-text-muted/70">
                  <span className="text-accent/80">{o.owner}</span> {o.label}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6">
          {section.groups.map((group, gi) => (
            <GroupCard key={gi} group={group} checked={checked} toggle={toggle} idx={gi} />
          ))}
        </div>

        {section.footnote && (
          <p className="mt-12 text-[12.5px] font-mono text-text-muted/70 leading-relaxed border-l-2 border-accent/40 pl-4">
            {section.footnote}
          </p>
        )}
      </div>
    </section>
  );
}

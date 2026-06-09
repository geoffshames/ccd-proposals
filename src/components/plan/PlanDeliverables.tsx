"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PlanSectionHeader } from "./PlanSectionHeader";
import type {
  DeliverablesSection,
  DeliverableItem,
  DeliverableExample,
} from "@/lib/plan-context";

function EmbedCard({ ex }: { ex: DeliverableExample }) {
  const [loaded, setLoaded] = useState(false);
  const isTikTok = ex.platform === "tiktok";
  const isShort = ex.platform === "youtube-short";
  const src = isTikTok
    ? `https://www.tiktok.com/embed/v2/${ex.id}`
    : `https://www.youtube.com/embed/${ex.id}`;

  // TikTok's v2 embed has a hard ~325px min-width and adds its own chrome
  // (author bar + caption), so it gets a fixed-height frame at native width.
  // YouTube embeds scale freely, so they keep pure aspect-ratio boxes.
  const cardWidth = isTikTok ? "w-[325px]" : isShort ? "w-[230px]" : "w-[300px]";
  const frameClass = isTikTok
    ? "h-[575px] relative"
    : isShort
      ? "aspect-[9/16] relative"
      : "aspect-video relative";

  return (
    <div
      className={`flex-shrink-0 border border-text-muted/15 bg-bg-card overflow-hidden ${cardWidth}`}
    >
      <div className={frameClass}>
        {loaded ? (
          <iframe
            src={src}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            scrolling="no"
          />
        ) : (
          <button
            onClick={() => setLoaded(true)}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3 bg-black/40 hover:bg-black/25 transition-colors group cursor-pointer"
            aria-label={`Load example: ${ex.artist}`}
          >
            <span className="w-12 h-12 rounded-full border border-accent/60 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
              <span className="ml-1 text-accent text-[16px]">▶</span>
            </span>
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-text-muted/80 px-4 text-center">
              {ex.platform === "tiktok" ? "Load TikTok" : "Load Video"}
            </span>
          </button>
        )}
      </div>
      <div className="p-4">
        <div className="text-[12px] font-bold text-text-primary leading-snug"
             style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}>
          {ex.artist}
        </div>
        <div className="mt-1 text-[11px] font-mono tracking-[0.05em] text-text-muted/70 uppercase">
          {ex.label}
        </div>
        {ex.takeaway && (
          <p className="mt-2 text-[12px] text-text-primary/75 leading-relaxed">
            {ex.takeaway}
          </p>
        )}
      </div>
    </div>
  );
}

function ItemCard({
  item,
  checked,
  onToggle,
  idx,
}: {
  item: DeliverableItem;
  checked: boolean;
  onToggle: () => void;
  idx: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: idx * 0.03 }}
      className={`border bg-bg-card transition-colors ${
        checked ? "border-accent/50" : "border-text-muted/15"
      }`}
    >
      <div className="p-6 md:p-8">
        <div className="flex items-start gap-4">
          <button
            onClick={onToggle}
            aria-label={`Toggle ${item.title}`}
            className={`mt-1 w-6 h-6 flex-shrink-0 border flex items-center justify-center transition-colors cursor-pointer ${
              checked
                ? "border-accent bg-accent text-black"
                : "border-text-muted/40 hover:border-accent/70"
            }`}
          >
            {checked && <span className="text-[13px] font-bold leading-none">✓</span>}
          </button>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <h4
                className="text-[18px] md:text-[21px] font-bold text-text-primary leading-tight"
                style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
              >
                {item.title}
              </h4>
              {item.priority && (
                <span className="px-2 py-1 border border-accent/40 text-accent text-[10px] font-mono tracking-[0.18em] uppercase">
                  {item.priority}
                </span>
              )}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {item.formats.map((f, i) => (
                <span key={i} className="px-2.5 py-1 bg-accent/[0.07] border border-accent/25 text-[10.5px] font-mono tracking-[0.06em] text-accent">
                  {f}
                </span>
              ))}
              {item.duration && (
                <span className="px-2.5 py-1 border border-text-muted/25 text-[10.5px] font-mono tracking-[0.06em] text-text-muted/85">
                  {item.duration}
                </span>
              )}
              {item.variants && (
                <span className="px-2.5 py-1 border border-text-muted/25 text-[10.5px] font-mono tracking-[0.06em] text-text-muted/85">
                  {item.variants}
                </span>
              )}
            </div>

            <div className="mt-2 text-[11px] font-mono tracking-[0.1em] uppercase text-text-muted/60">
              {item.platforms.join(" / ")}
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-2">
                  Hook
                </div>
                <p className="text-[14px] text-text-primary/85 leading-relaxed">{item.hook}</p>
              </div>
              <div>
                <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-2">
                  CTA
                </div>
                <p className="text-[14px] text-text-primary/85 leading-relaxed">{item.cta}</p>
              </div>
            </div>

            {item.notes && item.notes.length > 0 && (
              <ul className="mt-4 space-y-1.5">
                {item.notes.map((n, i) => (
                  <li key={i} className="flex gap-3 text-[13px] text-text-primary/75 leading-relaxed">
                    <span className="text-accent/60 flex-shrink-0">▸</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {item.examples && item.examples.length > 0 && (
          <div className="mt-6 md:pl-10">
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-3">
              Reference Examples
            </div>
            <div className="flex gap-4 overflow-x-auto pb-3 -mx-1 px-1">
              {item.examples.map((ex, i) => (
                <EmbedCard key={i} ex={ex} />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Shared checklist state: every viewer of the page reads and writes the same
// rows in Supabase (anon key + RLS scoped to this table), so the client team
// and CCD see one source of truth instead of per-browser localStorage.
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

export function PlanDeliverables({ section }: { section: DeliverablesSection }) {
  const storageKey = section.storageKey || "ccd-deliverables";
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  // Initial load + poll so concurrent viewers converge without a refresh.
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

  return (
    <section
      id={`section-${section.number}`}
      className="px-6 md:px-12 lg:px-24 py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader
          number={section.number}
          title={section.title}
          intro={section.intro}
        />

        <div className="mb-10 flex items-center gap-5">
          <div className="text-[12px] font-mono tracking-[0.2em] uppercase text-text-muted/80">
            {done} / {total} approved
          </div>
          <div className="flex-1 h-[3px] bg-text-muted/15">
            <div
              className="h-full bg-accent transition-all duration-500"
              style={{ width: total ? `${(done / total) * 100}%` : "0%" }}
            />
          </div>
        </div>

        <div className="space-y-16">
          {section.groups.map((group, gi) => (
            <div key={gi}>
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-accent">
                  {String.fromCharCode(65 + gi)}
                </span>
                <h3
                  className="text-[22px] md:text-[26px] font-bold text-text-primary leading-tight"
                  style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
                >
                  {group.heading}
                </h3>
              </div>
              {group.description && (
                <p className="mb-6 text-[14px] md:text-[15px] text-text-primary/75 leading-relaxed max-w-3xl">
                  {group.description}
                </p>
              )}
              <div className="space-y-5">
                {group.items.map((item, ii) => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    idx={ii}
                    checked={!!checked[item.id]}
                    onToggle={() => {
                      const next = !checked[item.id];
                      setChecked((c) => ({ ...c, [item.id]: next }));
                      pushSharedState(storageKey, item.id, next);
                    }}
                  />
                ))}
              </div>
            </div>
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

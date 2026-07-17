"use client";
import { useEffect, useRef } from "react";

/**
 * UberRouteCanvas — lightweight pseudo-3D hero scene.
 * An abstract route line draws from Los Angeles toward a Rose Bowl-inspired
 * circular destination marker, through an atmospheric cloud field.
 * Pointer-reactive parallax depth. No map. No WebGL. No blocking work.
 * Honors prefers-reduced-motion by rendering a single static frame.
 */
export function UberRouteCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0, t = 0;

    // Deterministic pseudo-random for stable cloud field
    const rand = (seed: number) => {
      let s = seed;
      return () => {
        s = (s * 16807) % 2147483647;
        return (s - 1) / 2147483646;
      };
    };
    const r = rand(88);
    const clouds = Array.from({ length: 26 }, () => ({
      x: r(), y: r() * 0.7, rad: 60 + r() * 220, a: 0.02 + r() * 0.05, sp: 0.00005 + r() * 0.00012,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: PointerEvent) => {
      pointer.current = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight };
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    // Route path: bezier from lower-left (LA) to upper-right bowl marker (Pasadena)
    const routePoint = (u: number, W: number, H: number) => {
      const p0 = { x: W * 0.06, y: H * 0.88 };
      const p1 = { x: W * 0.34, y: H * 0.42 };
      const p2 = { x: W * 0.62, y: H * 0.78 };
      const p3 = { x: W * 0.82, y: H * 0.34 };
      const x = (1-u)**3*p0.x + 3*(1-u)**2*u*p1.x + 3*(1-u)*u*u*p2.x + u**3*p3.x;
      const y = (1-u)**3*p0.y + 3*(1-u)**2*u*p1.y + 3*(1-u)*u*u*p2.y + u**3*p3.y;
      return { x, y };
    };

    const draw = () => {
      t += 1;
      const px = (pointer.current.x - 0.5) * 18;
      const py = (pointer.current.y - 0.5) * 12;
      ctx.clearRect(0, 0, w, h);

      // Atmospheric cloud field
      for (const c of clouds) {
        const cx = c.x * w + Math.sin(t * c.sp * 60 + c.rad) * 24 + px * (c.a * 300);
        const cy = c.y * h + py * (c.a * 200);
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, c.rad);
        g.addColorStop(0, `rgba(255,255,255,${c.a})`);
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(cx, cy, c.rad, 0, Math.PI * 2); ctx.fill();
      }

      // Rose Bowl-inspired circular geometry at destination
      const dest = routePoint(1, w, h);
      const dx = dest.x + px * 0.6, dy = dest.y + py * 0.6;
      ctx.save();
      ctx.strokeStyle = "rgba(245,245,245,0.16)";
      ctx.lineWidth = 1;
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.ellipse(dx, dy, 46 * i, 20 * i, -0.32, 0, Math.PI * 2);
        ctx.stroke();
      }
      // Destination pulse
      const pulse = reduced ? 0.5 : (Math.sin(t * 0.03) + 1) / 2;
      ctx.strokeStyle = `rgba(253,55,55,${0.5 + pulse * 0.5})`;
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(dx, dy, 7 + pulse * 3, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = "#FD3737";
      ctx.beginPath(); ctx.arc(dx, dy, 3.5, 0, Math.PI * 2); ctx.fill();
      ctx.restore();

      // Route line (progressive draw-in on load)
      const progress = reduced ? 1 : Math.min(1, t / 140);
      const steps = 160;
      const upto = Math.floor(steps * progress);
      // Ghost full path
      ctx.save();
      ctx.strokeStyle = "rgba(245,245,245,0.07)";
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 6]);
      ctx.beginPath();
      for (let i = 0; i <= steps; i++) {
        const p = routePoint(i / steps, w, h);
        i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();
      ctx.restore();

      // Active red route
      ctx.save();
      ctx.strokeStyle = "#FD3737";
      ctx.lineWidth = 2.25;
      ctx.shadowColor = "rgba(253,55,55,0.65)";
      ctx.shadowBlur = 14;
      ctx.beginPath();
      for (let i = 0; i <= upto; i++) {
        const p = routePoint(i / steps, w, h);
        const ox = px * 0.35 * (i / steps), oy = py * 0.35 * (i / steps);
        i === 0 ? ctx.moveTo(p.x + ox, p.y + oy) : ctx.lineTo(p.x + ox, p.y + oy);
      }
      ctx.stroke();
      ctx.restore();

      // Moving vehicle dot
      if (progress >= 1 && !reduced) {
        const u = ((t * 0.0016) % 1);
        const p = routePoint(u, w, h);
        ctx.save();
        ctx.shadowColor = "rgba(253,55,55,0.9)";
        ctx.shadowBlur = 18;
        ctx.fillStyle = "#fff";
        ctx.beginPath(); ctx.arc(p.x, p.y, 3.4, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      }

      // Origin marker (LA)
      const org = routePoint(0, w, h);
      ctx.fillStyle = "rgba(245,245,245,0.85)";
      ctx.beginPath(); ctx.arc(org.x, org.y, 3, 0, Math.PI * 2); ctx.fill();

      if (!reduced) raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
    />
  );
}

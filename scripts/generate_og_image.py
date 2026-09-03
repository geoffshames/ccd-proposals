#!/usr/bin/env python3
"""
Generate a high-impact 1200x630 OpenGraph share image for a Kakao Proposal.

Layout: bold N27 artist title on the left over a left-to-right black scrim, the
hero/group photo desaturated + darkened on the right, the CCD wordmark bottom-
left, a partnership line bottom-right, an accent top stripe + rule.

Run from inside the ccd-proposals repo (so public/brand/ and public/images/ are
relative), or pass absolute paths.

Example:
  python3 generate_og_image.py \
    --slug 82major --title "82MAJOR" --eyebrow "U.S. GROWTH STRATEGY" \
    --sub1 "Long-term U.S. expansion" --sub2 "framework through 1H 2027" \
    --partner "KAKAO ENTERTAINMENT  ×  CROWD CONTROL DIGITAL" \
    --hero public/images/82major/82major-group.jpg

Writes public/images/<slug>/og-image.png. Requires Pillow
(pip install pillow --break-system-packages).
"""
import argparse
import os
from PIL import Image, ImageDraw, ImageFont, ImageEnhance


def hex_to_rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def draw_tracked(draw, xy, text, font, fill, tracking):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + tracking


def tracked_width(draw, text, font, tracking):
    return sum(draw.textlength(ch, font=font) + tracking for ch in text) - tracking


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--slug", required=True)
    ap.add_argument("--title", required=True, help="Artist, rendered massive")
    ap.add_argument("--eyebrow", default="U.S. GROWTH STRATEGY")
    ap.add_argument("--sub1", default="Long-term U.S. expansion")
    ap.add_argument("--sub2", default="framework through 1H 2027")
    ap.add_argument("--partner", default="CROWD CONTROL DIGITAL")
    ap.add_argument("--hero", required=True, help="Path to hero/group photo")
    ap.add_argument("--accent", default="#FD3737")
    ap.add_argument("--brand-dir", default="public/brand")
    ap.add_argument("--out", default=None, help="Defaults to public/images/<slug>/og-image.png")
    args = ap.parse_args()

    W, H = 1200, 630
    ACCENT = hex_to_rgb(args.accent)
    BG = (8, 8, 8)
    MARGIN = 70

    font_path = os.path.join(args.brand_dir, "N27-Bold.otf")
    logo_path = os.path.join(args.brand_dir, "CC-LOGO-2024-WHITE.png")

    canvas = Image.new("RGB", (W, H), BG)

    # Hero photo: right-anchored, cover-cropped, desaturated + darkened
    grp = Image.open(args.hero).convert("RGB")
    target_w, target_h = int(W * 0.62), H
    scale = max(target_w / grp.width, target_h / grp.height)
    grp = grp.resize((int(grp.width * scale), int(grp.height * scale)), Image.LANCZOS)
    left = (grp.width - target_w) // 2
    top = (grp.height - target_h) // 2
    grp = grp.crop((left, top, left + target_w, top + target_h))
    grp = ImageEnhance.Color(grp).enhance(0.12)
    grp = ImageEnhance.Brightness(grp).enhance(0.55)
    canvas.paste(grp, (W - target_w, 0))

    # Left-to-right scrim so the title area stays solid black
    grad = Image.new("L", (W, 1), 0)
    for x in range(W):
        t = max(0.0, min(1.0, (x - W * 0.40) / (W * 0.45)))
        grad.putpixel((x, 0), int(255 * (1 - t)))
    grad = grad.resize((W, H))
    canvas = Image.composite(Image.new("RGB", (W, H), BG), canvas, grad)

    # Bottom vignette for wordmark/meta legibility
    vgrad = Image.new("L", (1, H), 0)
    for y in range(H):
        t = max(0.0, min(1.0, (y - H * 0.62) / (H * 0.38)))
        vgrad.putpixel((0, y), int(200 * t))
    vgrad = vgrad.resize((W, H))
    canvas = Image.composite(Image.new("RGB", (W, H), BG), canvas, vgrad)

    draw = ImageDraw.Draw(canvas)
    draw.rectangle([0, 0, W, 6], fill=ACCENT)

    def f(sz):
        return ImageFont.truetype(font_path, sz)

    # Eyebrow (tracked, accent)
    draw_tracked(draw, (MARGIN, 52), args.eyebrow, f(24), ACCENT, 6)

    # Massive title
    ty = 150
    # Auto-fit the title so long artist names do not overflow the canvas.
    # The original hard-coded 150px, which clips any name wider than the frame.
    title_size = 150
    max_title_w = W - MARGIN - 24
    while title_size > 48:
        tf = f(title_size)
        if draw.textlength(args.title, font=tf) <= max_title_w:
            break
        title_size -= 2
    tf = f(title_size)
    ty += int((150 - title_size) * 0.55)
    draw.text((MARGIN - 6, ty), args.title, font=tf, fill=(255, 255, 255))

    # Accent rule + subtitle
    rule_y = ty + 165
    draw.rectangle([MARGIN, rule_y, MARGIN + 90, rule_y + 5], fill=ACCENT)
    draw.text((MARGIN, rule_y + 28), args.sub1, font=f(40), fill=(235, 235, 235))
    draw.text((MARGIN, rule_y + 78), args.sub2, font=f(40), fill=(235, 235, 235))

    # CCD wordmark bottom-left
    logo = Image.open(logo_path).convert("RGBA")
    logo_w = 300
    logo_h = int(logo.height * (logo_w / logo.width))
    logo = logo.resize((logo_w, logo_h), Image.LANCZOS)
    alpha = logo.split()[3].point(lambda a: int(a * 0.92))
    logo.putalpha(alpha)
    canvas.paste(logo, (MARGIN, H - logo_h - 56), logo)

    # Partnership line bottom-right
    meta_font = f(20)
    pw = tracked_width(draw, args.partner, meta_font, 2)
    draw_tracked(draw, (W - MARGIN - pw, H - 78), args.partner, meta_font, (175, 175, 175), 2)

    out = args.out or f"public/images/{args.slug}/og-image.png"
    os.makedirs(os.path.dirname(out), exist_ok=True)
    canvas.save(out, "PNG", optimize=True)
    print(f"Saved {out} ({W}x{H})")


if __name__ == "__main__":
    main()

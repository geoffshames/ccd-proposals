/**
 * Generate the executed NDA as a PDF using pdf-lib.
 *
 * pdf-lib is a pure-JS, runs-on-the-edge library — no native deps, no
 * headless browser. It can't reflow long text on its own, so we lay out
 * the document manually with a simple word-wrap helper. The visual is
 * intentionally formal: black text on white, single column, no graphics.
 *
 * The returned Buffer is what we hand to Supabase Storage and Resend.
 */
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { AGREEMENT_VERSION, RECITALS, SECTIONS, WITNESS, type NdaTokens } from "./agreement";

export type SignedNdaInput = {
  slug: string;
  fullName: string;
  company: string;
  email: string;
  signedAt: Date;
  ipAddress: string | null;
  userAgent: string | null;
  effectiveDate: string;
  companyDefinitionTerm: string;
};

const PAGE_W = 612;          // US Letter
const PAGE_H = 792;
const MARGIN = 56;            // ~0.78"
const CONTENT_W = PAGE_W - MARGIN * 2;
const LINE_GAP = 4;

export async function generateExecutedNdaPdf(input: SignedNdaInput): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const tokens: NdaTokens = {
    date: input.effectiveDate,
    companyName: input.company,
    companyDefinitionTerm: input.companyDefinitionTerm,
  };

  const fontRegular = await doc.embedFont(StandardFonts.TimesRoman);
  const fontBold = await doc.embedFont(StandardFonts.TimesRomanBold);
  const fontItalic = await doc.embedFont(StandardFonts.TimesRomanItalic);
  const fontMono = await doc.embedFont(StandardFonts.Courier);

  let page = doc.addPage([PAGE_W, PAGE_H]);
  let y = PAGE_H - MARGIN;

  function ensureSpace(needed: number) {
    if (y - needed < MARGIN + 24) {
      page = doc.addPage([PAGE_W, PAGE_H]);
      y = PAGE_H - MARGIN;
    }
  }

  function drawLine(text: string, font = fontRegular, size = 10.5, color = rgb(0, 0, 0)) {
    ensureSpace(size + LINE_GAP);
    page.drawText(text, { x: MARGIN, y: y - size, size, font, color });
    y -= size + LINE_GAP;
  }

  function wrap(text: string, font: typeof fontRegular, size: number, maxWidth = CONTENT_W): string[] {
    const words = text.split(/\s+/);
    const lines: string[] = [];
    let line = "";
    for (const w of words) {
      const test = line ? `${line} ${w}` : w;
      if (font.widthOfTextAtSize(test, size) > maxWidth) {
        if (line) lines.push(line);
        line = w;
      } else {
        line = test;
      }
    }
    if (line) lines.push(line);
    return lines;
  }

  function drawParagraph(
    text: string,
    opts: { font?: typeof fontRegular; size?: number; indent?: number; topGap?: number } = {}
  ) {
    const font = opts.font ?? fontRegular;
    const size = opts.size ?? 10.5;
    const indent = opts.indent ?? 0;
    if (opts.topGap) y -= opts.topGap;
    const maxW = CONTENT_W - indent;
    const lines = wrap(text, font, size, maxW);
    for (const line of lines) {
      ensureSpace(size + LINE_GAP);
      page.drawText(line, { x: MARGIN + indent, y: y - size, size, font, color: rgb(0, 0, 0) });
      y -= size + LINE_GAP;
    }
  }

  // === Title ===
  drawParagraph("NON-DISCLOSURE AND CONFIDENTIALITY AGREEMENT", {
    font: fontBold,
    size: 14,
    topGap: 0,
  });
  y -= 8;

  // === Recitals ===
  drawParagraph(RECITALS(tokens), { topGap: 4 });

  // === Numbered sections ===
  for (const sec of SECTIONS(tokens)) {
    y -= 6;
    drawParagraph(`${sec.n}. ${sec.body}`, { font: fontRegular, size: 10.5 });
    if (sec.sub) {
      for (const s of sec.sub) {
        drawParagraph(`${s.label} ${s.body}`, { indent: 18, topGap: 2 });
      }
    }
  }

  // === Witness clause ===
  y -= 14;
  drawParagraph(WITNESS, { font: fontItalic, size: 10.5 });

  // === Signature blocks ===
  y -= 22;
  ensureSpace(150);

  // Client block
  page.drawText(`${input.companyDefinitionTerm.toUpperCase()}`, {
    x: MARGIN,
    y: y - 11,
    size: 11,
    font: fontBold,
  });
  y -= 22;
  page.drawText(`By: ${input.fullName}`, { x: MARGIN, y: y - 11, size: 11, font: fontItalic });
  y -= 18;
  page.drawText(`Name: ${input.fullName}`, { x: MARGIN, y: y - 11, size: 10.5, font: fontRegular });
  y -= 14;
  page.drawText("Authorized Signatory", { x: MARGIN, y: y - 11, size: 10, font: fontRegular });
  y -= 14;
  page.drawText(input.company, { x: MARGIN, y: y - 11, size: 10.5, font: fontRegular });

  // CCD block
  y -= 30;
  page.drawText("CROWD CONTROL", { x: MARGIN, y: y - 11, size: 11, font: fontBold });
  y -= 22;
  page.drawText("By: Geoff Shames", { x: MARGIN, y: y - 11, size: 11, font: fontItalic });
  y -= 18;
  page.drawText("Name: Geoff Shames", { x: MARGIN, y: y - 11, size: 10.5, font: fontRegular });
  y -= 14;
  page.drawText("Authorized Signatory", { x: MARGIN, y: y - 11, size: 10, font: fontRegular });
  y -= 14;
  page.drawText("Crowd Control Digital, LLC", { x: MARGIN, y: y - 11, size: 10.5, font: fontRegular });

  // === Audit footer (always last page) ===
  y -= 32;
  ensureSpace(80);
  page.drawLine({
    start: { x: MARGIN, y: y },
    end: { x: PAGE_W - MARGIN, y: y },
    thickness: 0.5,
    color: rgb(0.6, 0.6, 0.6),
  });
  y -= 14;
  page.drawText("ELECTRONIC SIGNATURE AUDIT TRAIL", {
    x: MARGIN,
    y: y - 9,
    size: 9,
    font: fontMono,
    color: rgb(0.4, 0.4, 0.4),
  });
  y -= 16;
  const auditLines = [
    `Signed by: ${input.fullName} <${input.email}>`,
    `On behalf of: ${input.company}`,
    `Signed at: ${input.signedAt.toISOString()}`,
    `IP address: ${input.ipAddress ?? "unknown"}`,
    `User agent: ${(input.userAgent ?? "unknown").slice(0, 110)}`,
    `Proposal: ${input.slug}`,
    `Agreement version: ${AGREEMENT_VERSION}`,
  ];
  for (const line of auditLines) {
    page.drawText(line, {
      x: MARGIN,
      y: y - 9,
      size: 8.5,
      font: fontMono,
      color: rgb(0.35, 0.35, 0.35),
    });
    y -= 12;
  }

  return await doc.save();
}

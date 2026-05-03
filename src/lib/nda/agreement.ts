/**
 * The full text of the CCD Mutual NDA, as drafted by the user's lawyer.
 *
 * Two important points:
 *
 * 1. The lawyer's template is the source of truth for everything except the
 *    e-signature clause and a small handful of explicit substitutions:
 *      - [DATE]            -> the signing date
 *      - [COMPANY]         -> the signing client's legal/operating name
 *      - [COMPANY DEFINITION TERM] -> a short reference label, e.g. "Client"
 *
 * 2. Per the user's instruction, the e-signature is defined in §9 as: the
 *    signer's typed Full Name and Email entered into the gate form. That
 *    sentence is appended to §9 of the lawyer's draft so the agreement
 *    explicitly contemplates the click-to-sign flow used here.
 *
 * Bumping AGREEMENT_VERSION invalidates older signatures (they remain on
 * record but new visits must re-sign). Bump only on substantive changes.
 */

export const AGREEMENT_VERSION = "ccd-mutual-2026-05";

export type NdaTokens = {
  date: string;                  // human-friendly, e.g. "May 3, 2026"
  companyName: string;           // [COMPANY]
  companyDefinitionTerm: string; // [COMPANY DEFINITION TERM] — usually "Client"
};

export const RECITALS = (t: NdaTokens) => `This agreement (this "Agreement") is hereby made and entered into as of ${t.date} (the "Effective Date") by and between ${t.companyName}, together with its affiliates, directors, officers, employees, consultants, lenders and legal counsel (collectively, the "${t.companyDefinitionTerm}") and Crowd Control Digital, LLC and its Representatives (the "Crowd Control"), with respect to the parties' obligations of non-disclosure of Confidential Information (as hereinafter defined) as may be shared for the purpose of determining possible further relations between the parties (the "Purpose"). In consideration of the promises contained in this Agreement and for other good and valuable consideration, the parties hereto hereby agree as follows:`;

/** Numbered sections — verbatim from the lawyer's template. */
export const SECTIONS = (t: NdaTokens): { n: number; body: string; sub?: { label: string; body: string }[] }[] => [
  {
    n: 1,
    body: "For purposes of this Agreement:",
    sub: [
      {
        label: "(a)",
        body: '(i) "Representatives" of a party means the directors, officers, employees, consultants, members and agents of that party and employees of an Affiliate of that party (as well as, for the avoidance of doubt, all persons or entities controlled or owned by such party); and (ii) "Affiliate" of a party means any firm, corporation, partnership, association, trust or other corporate entity that controls, is controlled by, or is under common control with, the respective party.',
      },
      {
        label: "(b)",
        body: '"Confidential Information" means any data or information, tangible or intangible, that is of value to the disclosing party and is not generally known in the industry or to competitors of the disclosing party. For the avoidance of doubt, reference to the disclosing party without further qualification means either party hereto that disclosed Confidential Information to the other party ("Disclosing Party"), and reference to the receiving party without further qualification means either party hereto that received Confidential Information from the Disclosing Party ("Receiving Party"). Confidential Information shall include, but not be limited to: (i) tangible information, marked by the Disclosing Party with the word "Confidential" or like designation; (ii) information disclosed orally or visually and identified by the Disclosing Party as confidential when disclosed, or confirmed by the Disclosing Party in a written notice following disclosure; and (iii) all other information that, notwithstanding the absence of markings or designations, would be understood by the parties, exercising reasonable business judgment, to be confidential. For the avoidance of doubt, Confidential Information includes, but is not limited to: (A) technical, financial, creative and business information and models, information relevant to the current or proposed marketing, creative or business plans of the Disclosing Party, reports, budgets and strategies, market projections, analyses, working papers, comparisons, studies, emails, or other documents which contain such information; (B) customer/client lists and records, cost estimates, cost and pricing practices, personnel records, trade secrets, minutes, data, code, designs, artwork, drawings, specifications, techniques, test results, engineering reports, creative materials or research; (C) information disclosed either directly, in oral or tangible form (including electronic form), or indirectly, by permitting the Receiving Party to observe various operations or processes conducted by the Disclosing Party; (D) any information of the Disclosing Party’s Representatives or Affiliates; (E) any works of authorship or expression, whether or not copyrightable, including, without limitation, any idea, concept, story, manuscript, synopsis, character, setting, drawing, animation, and illustration; (F) any material prepared, developed, conceived or delivered by the Disclosing Party to the Receiving Party as part of or in connection with this Agreement; and (G) and any and all material or documents prepared by the Receiving Party that is based upon or contains any information disclosed by the Disclosing Party to the Receiving Party.',
      },
      {
        label: "(c)",
        body: "Confidential Information does not include information that: (i) is or becomes available in the public domain through no act of the Receiving Party; (ii) is disclosed to the Receiving Party on a non-confidential basis by a third party who is not bound by any confidentiality obligation to the Disclosing Party; (iii) was already known by the Receiving Party without any obligation of confidence prior to disclosure; or (iv) was developed independently by the Receiving Party without reliance on the disclosed Confidential Information; provided, however, that such independent development can be independently substantiated.",
      },
      {
        label: "(d)",
        body: 'Without limiting the generality hereof, the Receiving Party hereby acknowledges and agrees that the Receiving Party shall not, at any time: (a) provide, directly or indirectly, Confidential Information concerning the Disclosing Party or the Receiving Party’s engagement with the Disclosing Party, to any reporter, writer, investigator or the like; (b) grant any interview or contribute to any book, program, article or other form of report, communication or publication, concerning Confidential Information; (c) confirm or deny any rumor, claim, allegation, statement, event, or other matter or information of any kind regarding or involving Confidential Information; and (d) post, transmit or otherwise circulate via any electronic means including, but not limited to, on or by means of any so-called "social networking" or other websites (or via any other channels) any information concerning Confidential Information. The Parties further agrees that neither Party shall at any time, except as set forth in and subject to this Agreement, take any action, make, or cause to be made, any derogatory, negative, harmful or disparaging statements, verbally, electronically, in writing or in any other form about the other Party.',
      },
    ],
  },
  {
    n: 2,
    body: "The Receiving Party hereby acknowledges and agrees to hold the Disclosing Party’s Confidential Information in strictest confidence and, unless specifically authorized in writing by the Disclosing Party, the Receiving Party shall: (i) use Confidential Information solely for the Purpose; (ii) take all reasonable precautions, and in any event not less than those precautions used to protect its own Confidential Information, to keep the Confidential Information in the strictest confidence and to protect it from disclosure; (iii) restrict disclosure of the Confidential Information of the other party to those of its Representatives who (A) need to know such information for the fulfillment of the Purpose, and (B) are informed by such party of the confidential nature of such information; (iv) cause such Representatives to comply with this Agreement; (v) not reproduce, copy, transfer or disclose in whole or in part any Confidential Information except as may be necessary for the internal use of the Receiving Party in the course of the Purpose; (vi) not reproduce, copy, transfer or disclose in whole or in part any Confidential Information to any third party without the Disclosing Party’s prior written permission and without such third party having a contractual obligation consistent with this Agreement; and (vii) at the request of the Disclosing Party, promptly delete, destroy or return to the Disclosing Party any and all tangible material containing any Confidential Information, including all copies made, whether such material was made or compiled by the Receiving Party or furnished by the Disclosing Party.",
  },
  {
    n: 3,
    body: "The Receiving Party shall be responsible for any breach of this Agreement by its Representatives or Affiliates (including its Representatives or Affiliates who, subsequent to the first date of disclosure of Confidential Information, become former Representatives or Affiliates) and shall take all reasonably necessary measures to restrain its Representatives or Affiliates (and former Representatives or Affiliates) from unauthorized disclosure or use of Confidential Information.",
  },
  {
    n: 4,
    body: "If the Receiving Party is required or compelled to disclose any Confidential Information of the Disclosing Party pursuant to law or judicial order, the Receiving Party shall, provided there is no prohibition by a court or other lawful authority from doing so, promptly notify the Disclosing Party in writing, and cooperate with the Disclosing Party in taking legally available steps to limit the disclosure and to maintain confidentiality by the court or administrative body.",
  },
  {
    n: 5,
    body: "Nothing in this Agreement shall be construed as: (a) requiring a party to disclose to the other party, or to accept from the other party, any particular information; (b) granting any rights, under trademark, tradename, patent, registered design, copyright, design right, intellectual property right, or any similar right belonging to either party; or (c) either party making any representation or warranty as to the accuracy or completeness of any Confidential Information disclosed hereunder and the Disclosing Party shall not be liable for any errors or omissions in the Confidential Information or for the utilization and results of the Confidential Information.",
  },
  {
    n: 6,
    body: "Nothing in this Agreement nor the acts of the parties hereto shall be construed, implied or deemed to create an agency, partnership or joint venture relationship, or any transaction whatsoever, between them. This Agreement is not intended to, and does not, obligate either party to enter into any further agreements or to proceed with any other transaction. This Agreement may not be assigned in whole or in part by either party without the prior written consent of the other party, except that either party may assign this Agreement in whole or in part to an Affiliate. The obligations of confidentiality set forth in this Agreement are in addition to, and not in substitution for, any and all other obligations and duties of confidentiality which either party may from time to time owe to the other of them whether at law, in equity, under statute, under contract or otherwise.",
  },
  {
    n: 7,
    body: "The Receiving Party hereby expressly agrees that irreparable harm may be suffered by the Disclosing Party, its Representatives and Affiliates if any of the provisions of this Agreement are not performed in accordance with their specific terms or are otherwise breached. Accordingly, the Disclosing Party, its Representatives and Affiliates shall be entitled to equitable relief by way of specific performance, injunction or otherwise if the Receiving Party or any of its Representatives or Affiliates breaches or threatens to breach any of the provisions of this Agreement, in addition to any other remedy to which the Disclosing Party, its Representatives or Affiliates may be entitled at law or in equity. Such equitable relief may be sought in any court of competent jurisdiction.",
  },
  {
    n: 8,
    body: "This Agreement shall be governed by the laws in force in the State of California and the parties submit to the non-exclusive jurisdiction of the Courts in the State of California. Any notice required to be given hereunder shall be in writing and shall be sent by mail, delivered personally or sent by confirmed facsimile transmission to the addresses set out in the signature portion of this Agreement, or such other address as the parties may from time to time advise each other in writing. This Agreement is the entire agreement between the parties concerning the matters referred to herein. Any amendments to this Agreement must be in writing and signed by each party. The failure of a party to enforce at any time or for any period any of the provisions hereof shall not constitute a waiver of such provisions or the right of that party to enforce each and every provision. A waiver of a failure to comply hereunder shall be affected only in writing, signed by the waiving party and shall not constitute a waiver of any other failures to comply hereunder. In case any one or more of the provisions contained in this Agreement shall, for any reason, be held to be invalid, illegal, or unenforceable in any respect, such invalidity, illegality, or unenforceability shall not affect any other provision of this Agreement, but this Agreement shall be construed as if such invalid, illegal, or unenforceable provision had never been contained herein.",
  },
  {
    n: 9,
    body: "Each party represents and warrants to the other that it has all requisite power and authority to enter into this Agreement and to perform its obligations and that this Agreement has been duly authorized, executed and delivered by it and constitutes a valid and binding obligation, enforceable against it in accordance with its terms. This Agreement shall inure to the benefit of and be binding on the parties hereto, their successors and permitted assigns. This Agreement may be executed in counterparts, each of which shall be deemed an original and all of which together shall constitute one and the same instrument, and may be delivered by electronic form (email). The parties expressly agree that this Agreement may be executed by electronic signature, and that, for purposes of the " + t.companyDefinitionTerm + "’s execution hereof, the typed Full Name and Email Address entered into the digital signature form on Crowd Control Digital, LLC’s proposal portal shall together constitute the " + t.companyDefinitionTerm + "’s legally binding electronic signature, with the same force and effect as a handwritten signature under applicable U.S. federal and California state electronic signature law (including the E-SIGN Act and California Uniform Electronic Transactions Act). Submission of the form, with the legally-binding acknowledgement checkbox affirmatively checked, constitutes the " + t.companyDefinitionTerm + "’s intent to be bound by this Agreement.",
  },
];

export const WITNESS = "IN WITNESS WHEREOF, the parties have executed this Agreement by duly signing below.";

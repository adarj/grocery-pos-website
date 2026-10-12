# M2.4.1 — First Educational Resource Implementation

## Authority, status and baseline — October 12, 2026 (UTC)

**IMPLEMENTATION CANDIDATE READY FOR INDEPENDENT REVIEW.**
**M2.4 FIRST BOUNDED APPLICATION IMPLEMENTATION: HUMAN AUTHORIZED; CANDIDATE UNDER REVIEW.**
The maintainer explicitly authorized:

> I explicitly authorize the first bounded M2.4 application implementation slice described above, including its necessary local code and test changes, while retaining separate independent audit, technical qualification, production publication, and deployment gates.

This later instruction permits only the local slice below and its necessary
implementation-time automated validation. It supersedes the earlier
NO IMPLEMENTATION YET entry recommendation for this bounded scope. It does not
formally accept M2.4, open M2.5/M2.6, or authorize a full human qualification campaign.

**EXACT R1 CONTENT DISCLOSURE: HUMAN APPROVED.**
**PRODUCTION PUBLICATION: NOT AUTHORIZED.**
**DEPLOYMENT: NOT AUTHORIZED.**
**M2 OVERALL: IN PROGRESS, NOT FORMALLY ACCEPTED.**
**M2.5–M2.6: NOT AUTHORIZED.**

Read-only initial inspection found clean `main`, empty index, no untracked paths,
HEAD/main/origin/main `3854375bf2e7ccd2149ce3e316d7343108291649`, ahead/behind 0/0.
Subject: `docs(web): record M2.4 editorial and presentation approvals`; parent:
`22dd719d16d17faa9e5db8cd1e71f81ff5eec638`. Read-only GitHub metadata reports a
verified signature, reason valid, and
[exact-SHA run 38314035517](https://github.com/adarj/grocery-pos-website/actions/runs/38314035517)
SUCCESS, push to main, attempt 1. That run qualifies the integrated
[D1–D6 decision record](m2-4-human-decisions.md), not this implementation.
Historical pending statements in that record and the
[entry packet](m2-4-entry-readiness-disclosure-decision.md) remain unchanged.

## Implemented local surface and exact content

One new route: `/en/resources/evaluating-grocery-pos-systems`, within the existing
validated `/[lang]` architecture. English remains the sole public language.
Development pseudo rendering is controlled qualification only; production pseudo,
unsupported identifiers, a Resources index and unexpected extra segments return 404.
The bare-root redirect and query preservation remain unchanged.

The unchanged [R1 source and extraction contract](../product/m2-2-exact-content-disclosure-review.md#exact-editorial-candidate-and-identity)
remain authoritative: **M22-C12-A01-R1**, exactly **7,840 UTF-8 bytes**, original LF,
SHA-256 `1b17142f74d05747dd4ed130dac29c638df20faeb846190e4dcabd5356663c05`.
The digest was reproduced before implementation and is retained for final review.
It identifies the approved editorial source block, not serialized HTML.

[Typed editorial content](../../src/application/GroceryPosEvaluation.res) contains
only the approved paragraphs, headings, five evaluation questions and six citation
labels/destinations. It performs no I/O or runtime Markdown parsing. The
[server view](../../src/ui/EducationalResource.res) projects one focusable main,
one article, the exact title as H1, seven logical H2 sections, native paragraphs,
one list and six source anchors. Source/scope qualifications remain in sequence;
no publication date, byline, review badge or commercial CTA is added.

D6's semantic projection excludes administrative proposed-field labels, extraction
markers, digest and decision material. Markdown's editorial line wrapping becomes
ordinary paragraph whitespace; substantive wording, punctuation, ordering and
citations are preserved. The October 11 source-check note is historical source
provenance, not an invented publication date. No internal Markdown document or
qualification evidence is imported into application code.

[Messages](../../src/i18n/Messages.res) owns typed article title/metadata keys;
the bounded application catalog owns the typed editorial body. Development
expansion derives from these English values without a parallel translation catalog;
body technical identifiers and citation URLs remain unchanged. No language,
market, currency or jurisdiction is added.

The exact four homepage sections and existing metadata remain unchanged, with
one D6-approved addition: a new paragraph immediately after the fourth section's
About this website paragraph, linking natively with the full article title.
No Resources index, menu, breadcrumbs, footer expansion, search or other CTA exists.

## Server-first identity and metadata decision

The installed Next 16.3.8 layout/page, server/client and metadata guides were
consulted before editing. Shared layouts persist across navigation and cannot
reliably infer an active descendant from their children.

The [language layout](../../app/[lang]/layout.tsx) retains the single HTML/body,
validated language/direction, public static parameters, CSS import and nonpublic
robots policy. Each [home page](../../app/[lang]/page.tsx) or
[article entrypoint](../../app/[lang]/resources/evaluating-grocery-pos-systems/page.tsx)
composes the same [ReScript shell](../../src/ui/EngineeringShell.res) with a closed
`Home | Resource` identity value. Home alone marks its named Grocery POS home link
`aria-current="page"`; the article retains an ordinary return-home link.
Each page owns its own generated metadata through ReScript-owned values.

No global client pathname provider, `usePathname`, request-header inference,
middleware pathname injection, duplicated document layout or parallel router is
needed. Layout slots or a broader route framework add no benefit for two pages.
Native links work independently of framework hydration; no Next Link migration
or new authored client island is introduced.

**Next routes. ReScript models. React presents. APIs connect.**
[ADR 0006](../adr/0006-css-and-design-system-foundation.md) remains unchanged.
Three bounded article CSS rules reuse the existing prose measure and spacing
properties for column width and list rhythm. Existing tokens, homepage styling,
link/focus behavior and logical layout remain governing. No new token registry,
CSS Module, library, dependency, font, image, animation or provider is required.
shadcn/ui, Sass and Rive remain deferred.

## Changed-file inventory

All changes remain unstaged. Sixteen existing tracked paths change; five new
paths are untracked. No accepted source, ADR, dependency/configuration, workflow,
private qualification evidence or operational-platform file is edited.

| Path | Responsibility |
| --- | --- |
| [Language layout](../../app/[lang]/layout.tsx) | Retain shared document/robots policy; move shell and page metadata to page composition |
| [Home entrypoint](../../app/[lang]/page.tsx) | Explicit home identity and unchanged homepage metadata |
| [Article entrypoint](../../app/[lang]/resources/evaluating-grocery-pos-systems/page.tsx) — new | Validated server-rendered article and distinct exact metadata |
| [Global CSS](../../app/globals.css) | Three local reading/list rules using existing tokens |
| [Editorial application model](../../src/application/GroceryPosEvaluation.res) — new | Typed exact content, resolved qualification text and stable language-relative path |
| [Article view](../../src/ui/EducationalResource.res) — new | Semantic, server-rendered article projection |
| [Shell](../../src/ui/EngineeringShell.res) | Typed explicit page identity; optional home-current attribute |
| [Homepage](../../src/ui/Homepage.res) | Single approved contextual link paragraph |
| [Messages](../../src/i18n/Messages.res), [interface](../../src/i18n/Messages.resi) | Typed article title/metadata and generated framework export |
| [Homepage oracle](../../tests/e2e/approved-homepage.ts) | Preserve existing oracle; add only D6-approved link label/destination |
| [Framework regression](../../tests/e2e/framework-smoke.spec.ts) | Exact old copy plus one new paragraph/link; update counts narrowly |
| [Article regressions](../../tests/e2e/educational-resource.spec.ts) — new | Independent static R1 oracle, exact projection, route/history, output, axe and reflow |
| [Shell regressions](../../tests/e2e/shell.spec.ts) | Traverse and measure the real new contextual link before the retained CSS probe |
| [Security responses](../../tests/e2e/security-headers.spec.ts) | Include article and nonexistent/pseudo routes without relaxing policy |
| [i18n unit cases](../../tests/unit/InternationalizationTest.res) | Distinct metadata, language-relative path, expanded human text and stable machine facts |
| [AGENTS](../../AGENTS.md), [root README](../../README.md), [documentation map](../README.md), [M2 plan](milestone-2-plan.md) | Current authority and candidate/evidence status; retain historical chronology |
| This new implementation record | Actual scope/evidence, runtime limits and remaining gates |

Generated ReScript/GenType, Next and test artifacts remain ignored and were
produced only by existing tools; compiler outputs were not hand-edited.
The future signed checkout must satisfy CI's source-cleanliness gate; this
intentionally uncommitted candidate is not a clean signed checkout.

## Automated implementation validation

Environment: existing Fedora/Linux ARM64 repository Nix environment, pinned Node
24.21.0, pnpm 12.9.0, ReScript 12.3.1, Next 16.3.8 and Playwright 1.64.0.
No dependency or browser installation and no environment substitution occurred.

| Command / check | Actual result |
| --- | --- |
| Changed-file ReScript formatting and `just rescript` | PASS; initial JSX/checked-index compiler errors were corrected within scope |
| `nix develop --command just check` | PASS: zero-warning lint, repository format check, 19/19 unit tests, 7/7 supervisor regressions, canonical typecheck, production build, Chromium 18/18 |
| Production build | Both `/en` and the article are prerendered static HTML; no added production pseudo route |
| `nix develop --command just test-e2e --project=firefox --project=webkit` | Firefox 18/18 PASS; WebKit 18 runner failures before test execution because `browserType.launch` reports missing host dependencies; aggregate exits nonzero |
| Final `just test-e2e --project=chromium --project=firefox` | PASS: 36/36, 18 per engine, one worker, zero configured retries; includes strengthened complete-output and history-metadata assertions |
| Controlled `just dev` plus in-memory Chromium check | PASS for home/article `/en-XA`: expanded headings, exact language/robots, correct identity, unchanged source URLs, widths 320/375/768/1024/1440; no page errors; supervisor stopped afterward |
| Canonical typecheck after development | PASS; regenerated production route declarations and checked types after stopping development |
| Exact editorial oracle | Independent test-only expectations verify all 21 paragraphs, seven H2 headings/section text, five list items, exact title/metadata and six citation labels/URLs; no application content import in the oracle |
| Documentation / protection checks | PASS: 57 Markdown documents, 769 local links, 255 heading references, no broken target/anchor; UTF-8/LF/final-newline/whitespace/table checks and `git diff --check` pass; 85 other tracked files byte-identical to the initial baseline |

Both passing engines exercise direct routes, home-to-article and article-to-home,
back/forward and new-tab behavior with JS enabled/disabled; exact metadata and
language; one document/shell/main; native skip focus and current-page identity;
invalid languages, ancestor/extra-path 404s; security responses and public output.
The unchanged original homepage paragraphs remain an independent exact oracle.

Local WebKit is **UNVERIFIED**, not application PASS. Existing ARM64 native-runtime
limitations remain distinct from the required supported Ubuntu x86_64 CI matrix.
No packages, fake ABI mappings, configured retries, exclusions or weaker assertions
were used. Supported-host WebKit execution remains a real future gate.

### M241-T01 — Isolated invalid-route timing observation

A strengthened targeted Chromium/Firefox run passed 15/16 scenarios but one
Chromium invalid-route test exceeded the unchanged 30-second timeout. Its trace
showed all requested paths returning the correct 404 with no article leakage;
`/es/resources/evaluating-grocery-pos-systems` waited about 29.8 seconds for the
response, carrying `x-nextjs-cache: STALE`. The cause is **not established**;
this is not classified as the known WebKit host-dependency failure.

With application source, assertions, timeout and zero-retry configuration unchanged,
the isolated reproduction passed in 319 ms and the subsequent complete two-engine
run passed 36/36. These are explicit diagnostic/final runs, not hidden retries or
proof that the original delay never occurred. Retain the observation for the
independent reviewer and supported-host CI; investigate a recurrence before
progression rather than raising timeouts or relaxing invalid-route checks.
Temporary Playwright reports are overwritten by subsequent runs; this record
retains the inspected timing/status facts without claiming a permanent trace archive.

## Security, accessibility and remaining qualification

Home and article HTML/RSC/fetched-script checks exclude retained fictional
qualification samples and internal decision identifiers/labels. Runtime request
inspection observes only loopback application resources and no API or external
runtime request. Citations are outgoing native navigation, not permission to
execute third-party scripts. Production client-reference manifests contain only
framework modules, with no authored app/src client reference. Security policy,
CSP origins and inline allowances are unchanged; no privilege boundary or API is
introduced. An additional read-only scan of 29 emitted HTML/RSC/static-JavaScript
files found no searched withheld/internal markers. Negative scans retain their
bounded search/inventory scope; they do not establish universal secret detection.

| M2.3 case | Implementation-time evidence and still-required observations |
| --- | --- |
| A01 structure | Exact DOM/metadata and zero automated axe A/AA violations in Chromium/Firefox; human semantic/reading review remains |
| A02 responsive | Five listed widths and bounded article measure pass; physical-device/visual observation remains |
| A03 zoom | 320 CSS-px reflow is supplementary; actual native 400% browser zoom NOT PERFORMED |
| A04 enlargement | Controlled 200% root-font stress passes; actual human text-enlargement setting NOT PERFORMED |
| A05 spacing | Spacing-only and combined enlargement/narrow override stress passes; human reading/visual observation remains |
| A06 keyboard | Native order, reverse traversal, visible focus, skip, home/child/history/new-tab navigation pass; human traversal remains |
| A07 screen reader | Actual AT/OS sessions NOT PERFORMED; prior homepage observations do not qualify this article |
| A08 contrast/targets | Whole-page axe and real homepage link/focus contrast, actual article link focus checks pass; manual touch/target/visual evidence remains; inline citations retain applicable target exceptions |
| A09 forced colors | Media emulation is supplementary only; genuine Windows forced-colors remains UNVERIFIED |
| A10 reduced motion | No animation/transition and media stress pass; no new motion feature or real OS observation is claimed |
| A11 pseudo/long text | Controlled actual development home/article expansion, unchanged URLs/identifiers and production exclusion pass; no public pseudo discovery |
| A12 new client interaction | NOT APPLICABLE: no authored client island; retained Counter SSR still proves no live interaction |

WCAG 2.2 AA remains a target, not conformance certification. The full
[M2.3 qualification plan](../design/m2-3-information-architecture-experience-qualification.md#future-accessibility-qualification-matrix)
and [manual evidence contract](m1-5-1-qualification-baseline.md#common-manual-evidence-record)
remain binding. No new human/OS/AT session, physical touch proof or complete M2.5
qualification was performed. No controlled baseline/candidate performance campaign,
field Core Web Vitals, real-user INP or deployment-edge evidence is claimed.
Production build and resource inspection are implementation checks, not release proof.

## Retained findings and final gates

M21-01, M21-02, M21-03 and M21-04 remain **OPEN — NOTE**. R1-specific ownership
and audience decisions advance M21-02 without resolving broader market/contact/
evaluation/operational ownership. The text resource supplies no commercial product
maturity, compatibility or certification evidence, styling migration need or future
asset rights. M22-ACC-N01 remains the historical retrospective M2.2 audit NOTE.
R24-N01 remains the independent inventory-provenance NOTE; current file comparison
cannot recover an independently missing historical generated/private inventory.

Accepted [M0](milestone-0-qualification.md) and
[M1 limitations](milestone-1-acceptance.md#accepted-qualification-limitations) remain:
genuine Windows forced-colors, incomplete original manual/build provenance,
scoped human observations, original evidence loss and separately reviewed replacements,
laboratory-only performance, bounded CSP tradeoffs and future feature triggers.
Retain ESLint 9.39.5 review no later than **January 8, 2027**. Unknown product
maturity remains UNVERIFIED/UNRESOLVED; C03 and all broader unapproved claims,
page families and languages remain withheld. No new product or market promise arises.

Required next gates: separate independent read-only implementation audit, maintainer
manual review, human-signed integration/push and new exact-SHA CI. Formal qualification
requires separately scoped authority and applicable actual human/OS/AT and supported
browser evidence. Final source/fact/rights review, specialized review where needed,
production publication and hosting/deployment approval remain separate.
Before any later push, assess hosting auto-deployment behavior under separate human
control; neither this local build nor GitHub CI authorizes public hosting.

STOP for substantive R1 changes, lost/revoked authority, broader route/language
scope, new client/runtime/dependency needs, unsafe public output, relaxed security,
material source/rights changes or required implementation failures beyond this
bounded scope. Report the smallest decision needed; do not silently broaden work.

Final branch/HEAD/main/origin/main remain at the starting baseline, ahead/behind
0/0; the index is empty and repository configuration matches its initial hash.
All 21 changed paths are authorized: 16 tracked modifications and five untracked
files. Accepted documents and the R1 source remain byte-identical to HEAD.

No staging, commit, push, PR, branch/ref/configuration change, publication or
deployment occurred. Candidate source changes remain unstaged/uncommitted.
Suggested future human-controlled subject: `feat(web): implement first educational resource`.

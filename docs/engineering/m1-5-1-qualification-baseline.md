# M1.5.1 qualification baseline and adversarial review

**Current outcome:** M1.5.1 is formally accepted October 9, 2026 (UTC); see the
[dated formal acceptance](#formal-m151-acceptance--october-9-2026-utc).
The original assessment and implementation-time pending status below are preserved
as historical evidence and superseded by that later outcome.

## Authorization and accepted baseline

**M1.5 — Final Qualification: AUTHORIZED October 9, 2026 (UTC).**
Immediate execution is limited to **M1.5.1 — Qualification Baseline & Adversarial
Review**. This assessment is prepared for independent audit and human review;
M1.5.1 is not formally accepted. M1.5 and M1 remain incomplete.

Starting branch: `docs/m1-5-1-qualification-baseline`. HEAD, main and origin/main
are `bd865a81740c3d890c80989123ce72c07b3fdcc9`, with 0/0 ahead/behind
relationships, empty staging, no tracked modifications and no nonignored untracked
files. The baseline is the merged formal M1.4 acceptance record, not a new runtime
implementation. [Formal M1.4 acceptance](milestone-1-plan.md#formal-m14-acceptance--october-9-2026-utc)
records the signed scope closeout and the human's October 9 decision.

[Main run 37880289907](https://github.com/adarj/grocery-pos-website/actions/runs/37880289907)
and [job 113658190486](https://github.com/adarj/grocery-pos-website/actions/runs/37880289907/job/113658190486)
were inspected through read-only GitHub job/step/log retrieval. Checkout names the
exact baseline SHA; the quality and source-cleanliness steps completed successfully.
This is existing exact-commit evidence, not execution by M1.5.1 and not CI for
the uncommitted documentation candidate.

## Scope and operating boundaries

This checkpoint inspects source, accepted decisions, existing logs and existing
artifacts, and defines future qualification procedures. No build, browser process,
installation, test suite, performance experiment or actual-device check is executed.
No corrective implementation is authorized here.

**Next routes. ReScript models. React presents. APIs connect.**
This is the informational website, not the operational POS Platform. M1.4 remains
formally accepted and complete; M1.4.3 remains reviewed and deferred without
implementation authorization. M1.5.2 and M1.5.3 require separate execution
authorization. Production deployment/public release remain unauthorized.

The accepted [ADRs](../adr/README.md), [source layout](../architecture/source-layout.md),
[claims policy](../product/public-capability-claims.md), [security baseline](security-baseline.md)
and [testing strategy](testing-strategy.md) remain governing. No new architectural
specification, content register, runtime harness or dependency is introduced.

## Evidence classification and provenance

Classifications apply to a specified property and environment, not to an entire
product or page without qualification.

| Classification | Meaning |
| --- | --- |
| VERIFIED — CURRENT | Direct source inspection or executed evidence applies to the accepted implementation and stated scope; source inspection is explicitly identified |
| VERIFIED — HISTORICAL | Valid result for an earlier surface/environment; no automatic transfer to current behavior |
| PARTIALLY VERIFIED | Useful evidence exists, but provenance, environment or necessary behavior remains incomplete |
| UNVERIFIED | No adequate direct evidence for the requirement |
| NOT APPLICABLE | Absent from the current surface, with a stated reason |
| DEFECT CONFIRMED | Source or actual observations establish a concrete failure; no such defect was substantiated in this review |

The following sources are joined to the verification inventory by evidence ID.
The human maintainer is the responsible reviewer/approval authority throughout;
no specialist, device operator or delegated content owner has been assigned.
Future execution roles/environments must be confirmed before M1.5.2.

| ID | Exact provenance and method | Environment and evidentiary scope |
| --- | --- | --- |
| E01 | Current tracked source/tests/configuration at `bd865a81740c3d890c80989123ce72c07b3fdcc9`; direct reads, reference analysis and comparison to `017fa33125310fb2d6bbc3bcd517ce9af738254d` | Source and test definitions, not new runtime observations. Application, CSS, test and configuration paths are unchanged since the accepted homepage implementation |
| E02 | Run 37880289907 / job 113658190486, exact checkout and completed steps/log inspected | Ubuntu 24.04.5 x86_64; Nix Node 24.21.0, pnpm 12.9.0, just 1.51.0; Next 16.3.8, Playwright 1.64.0. Production build and 17/17 unit/fixture, 7/7 supervisor, 10/10 per browser, 30/30 aggregate, one worker, zero retries; lint/format/typecheck/source cleanliness pass |
| E03 | Accepted M1.4.2 implementation `017fa33125310fb2d6bbc3bcd517ce9af738254d`, [run 37848845430](https://github.com/adarj/grocery-pos-website/actions/runs/37848845430); acceptance record `60d3a18789ef74bba3b010e16306f3c49c50f535`, [run 37850439012](https://github.com/adarj/grocery-pos-website/actions/runs/37850439012) | Both exact checkouts, successful quality/cleanliness steps, 17/17, 7/7 and 30/30 independently inspected in existing remote logs. [Canonical record](m1-4-2-homepage-qualification.md#formal-m142-acceptance--october-8-2026-utc) owns human observations and original conditional audit |
| E04 | M1.4.1 implementation `cf6ce944ce081366a6470f91500c116d11dff9de`, [run 37836356422](https://github.com/adarj/grocery-pos-website/actions/runs/37836356422); acceptance `abdef6e3b19151b2da96765dea6b9c6bd90d69f2`, [run 37837928358](https://github.com/adarj/grocery-pos-website/actions/runs/37837928358) | Exact checkouts, successful quality/cleanliness steps, 15/15, 7/7 and 30/30 inspected. Browser results concern the former proof page; the [content register](../product/m1-4-1-content-readiness.md) establishes planning/approval provenance, not commercial release |
| E05 | M1.4 no-expansion closeout `8729179ee18b0d154d8fa63b144d1d98212f8f39`, [run 37877425523](https://github.com/adarj/grocery-pos-website/actions/runs/37877425523); subsequent formal acceptance baseline E02 | Closeout exact checkout, successful quality/cleanliness steps, 17/17, 7/7 and 30/30 inspected. The [dated formal outcome](milestone-1-plan.md#formal-m14-acceptance--october-9-2026-utc) preserves October 8 scope decisions and October 9 overall acceptance |
| E06 | M1.3 tokens `61784aec86d53f35aa839c9ef7fce780d3cd4805` / run 37791509300; no-extraction `e14416956296233844b833526ccc32d21b86f47e` / run 37797004595; qualification `b3175b473710279152e78598019812ff43e15a08` / run 37804897764; closeout `ad69f632129231bb2604a3a71678ac959900046c` / [run 37827607606](https://github.com/adarj/grocery-pos-website/actions/runs/37827607606) | Earlier checkpoint evidence is retained in the [token](m1-3-1-token-qualification.md), [primitives](m1-3-2-primitives-qualification.md) and [qualification/acceptance](m1-3-3-design-system-qualification.md) records. Closeout remote log independently inspected: exact checkout, 15/15, 7/7, 30/30 and cleanliness. Historical Counter/proof results are not current homepage interaction evidence |
| E07 | Existing local `.next` manifests/static JS/HTML/RSC inspected without regeneration; 24 public JS/HTML/RSC files, three client-reference manifests; initial generated/build/report inventory: 561 files | No qualification needles found; eight framework client-module entries and zero application-source client entries; prerender routes `/en` and framework error pages, no pseudo page; no static source maps found. Local output lacks an independently attested exact source SHA/build environment, so this is partial artifact evidence |
| E08 | Maintainer-reported M1.4.2 manual PASS observations, October 8, in E03; five earlier M1.3 observations/approved deferrals in E06 | Homepage copy/hierarchy, narrow layout, Tab/Shift+Tab, skip/focus, native 400% zoom/reflow and absence of misleading availability presentation reported PASS. Browser/OS/version/configuration not supplied; not independently reproduced and no screen reader/device/OS contrast result |
| E09 | Independent arithmetic from the five opaque CSS hex values, using sRGB linearization and relative luminance | Seven ratios reproduced in memory. Checks arithmetic/source values; actual computed-state execution is E02, not a fresh browser measurement |
| E10 | M1.1 scope/design approval and original shell evidence in [M1 plan](milestone-1-plan.md#m11-approval-and-qualification-record) and [M1.2 record](m1-2-shell-qualification.md) | Historical specifications, engineering-preview visual/interaction qualification and acceptance. Superseding M1.4 outcomes govern the current homepage |

All listed milestone commits are ancestors of the current baseline. Implementation
and administrative acceptance commits are distinct. Dated historical pending or
unauthorized statements in earlier records are interpreted with their later
acceptance sections and the canonical M1 plan; they do not revoke this checkpoint's
authorization. M1.3.4 and M1.4.2 historical CONDITIONAL PASS decisions are preserved,
including resolved findings and explicit human tradeoff decisions.

## Current verification inventory

Each row identifies the method as well as its scope. “Current” browser results
mean the existing accepted E02 run, never a new M1.5.1 test. Next actions refer to
future authorization, not work performed here.

| ID / requirement | Evidence, method and classification | Limitations / residual risk | Next action |
| --- | --- | --- | --- |
| Q01 — Routing/framework ownership | E01, page/layout and language adapter source; VERIFIED — CURRENT | Thin seams and validated params observed; source alone would not prove HTTP behavior | Retain; review any future route change |
| Q02 — Static rendering / JS-disabled content | E02 build `/en` and `framework-smoke.spec.ts:7`; VERIFIED — CURRENT | Four approved sections and metadata without JS on loopback production server; deployment delivery untested | Repeat on exact M1.5.2 build |
| Q03 — 307 / invalid and pseudo production routes | E01/E02, `framework-smoke.spec.ts:74,89`; VERIFIED — CURRENT | Sampled identifiers/preferences, not every arbitrary input or hosting edge | Preserve root-only proxy; review method policy before a write endpoint |
| Q04 — Exact approved copy/metadata/structure | E01 comparison with scoped approval; E02 JS-disabled/enabled assertions; VERIFIED — CURRENT | Demonstrates the exact content subset, not truth of every claim category or public release | Reconfirm exact payload; withhold all other assertions |
| Q05 — Public HTML/RSC/loaded-script exclusion | E02, `framework-smoke.spec.ts:47`; VERIFIED — CURRENT for tested outputs | Eight qualification needles and loaded scripts; not exhaustive arbitrary-secret detection or every unrequested artifact | Fresh full public-output/import review in M1.5.2 |
| Q06 — Complete build graph/artifact exclusion | E01 graph + E07; PARTIALLY VERIFIED | Existing output scan excludes needles and application client references, but exact build provenance is incomplete | Record exact SHA/build and audit manifests, all public chunks/maps/discovery outputs |
| Q07 — No authored homepage client interaction | E01 page → Homepage / layout → shell/messages source; VERIFIED — CURRENT | Framework scripts still run when JS enabled; no claim of zero JavaScript or measured execution savings | Confirm on fresh artifacts; retain future client gate |
| Q08 — Capability withholding / typed maturity | E02 six publication tests, nine i18n tests and proof SSR test; VERIFIED — CURRENT | Fictional policy fixtures are isolated; not a production claim ledger or product availability proof | Preserve fixtures; actual disclosure remains an independent human decision |
| Q09 — 43-token reference integrity | E01 stylesheet declaration/reference graph; VERIFIED — CURRENT, source inspection | Five palette/13 semantic/9 typography/7 spacing/2 layout/7 geometry; no missing, cyclic or unreferenced definitions. Some effects belong to retained/synthetic rules, not visible homepage widgets | Qualify new consumers instead of expanding taxonomy |
| Q10 — Text/control/focus contrast | E02 `shell.spec.ts:42` + E09; VERIFIED — CURRENT for 24 tested contexts | Opaque sRGB only; synthetic controls are styling evidence, not real homepage functions; no new numeric attachment retrieval | Retain; measure actual new surfaces/states if introduced |
| Q11 — Responsive/enlarged/spaced text | E02 `shell.spec.ts:166`; PARTIALLY VERIFIED for complete visual usability | Five widths and overflow/focus assertions; no exhaustive paragraph clipping/overlap inspection or native zoom | Detailed visual/text/zoom review in M1.5.2 |
| Q12 — Native keyboard/skip/focus | E02 `accessibility.spec.ts:18` plus JS-disabled smoke; VERIFIED — CURRENT for asserted targets | Real skip/identity/main, named focus and reverse traversal; no screen-reader or physical keyboard/device matrix | Confirm manually with environment recorded |
| Q13 — Automated accessibility | E02 `accessibility.spec.ts:4`; VERIFIED — CURRENT for configured axe scan | Complete page, five WCAG tags, no exclusions; only violations asserted empty, incomplete/manual results not cleared; no conformance claim | Review available incomplete results and actual AT observations |
| Q14 — Forced colors / reduced motion | E02 `shell.spec.ts:197`; VERIFIED — CURRENT for browser emulation | Active media asserted, real focus/system colors plus synthetic boundary; not OS/device verification. No animation exists | D13-03 actual OS review; no artificial animation |
| Q15 — Development pseudo rendered layout | E03 local Chromium/Firefox development probe + E01 catalog/registry, PARTIALLY VERIFIED | Existing probe is reported historical evidence without a retained raw log in this review; source unchanged, but fresh development runtime not exercised here | Reproduce expanded homepage/metadata/widths and record environment in M1.5.2 |
| Q16 — Homepage human keyboard/zoom/visual observations | E08; PARTIALLY VERIFIED | Actual maintainer PASS report applies to unchanged authored page; environment/configuration unavailable | Record fresh detailed observations; preserve earlier results |
| Q17 — D13-01 screen reader | E06/E08 contain no actual AT result; UNVERIFIED | Names/order/reading/skip perception not established by DOM/axe | Execute D13-01 protocol after authorization |
| Q18 — D13-02 physical touch/device | No physical-device evidence; UNVERIFIED | Desktop widths/emulation do not establish target usability/device rendering | Execute D13-02 protocol after authorization |
| Q19 — D13-03 actual OS high contrast | E02 is emulation only; UNVERIFIED | Genuine OS/browser theme response remains unknown | Execute D13-03 protocol after authorization |
| Q20 — Security headers / diagnostics | E01/E02 `security-headers.spec.ts:3` and shared diagnostics; VERIFIED — CURRENT for asserted responses | Page/redirect/404 on HTTP loopback; accepted inline CSP allowances, no penetration/security certification | Retain response policy; inspect fresh public output |
| Q21 — Performance metrics / transfer / main thread | No adequate measurements; UNVERIFIED | Static output/no authored island do not establish FCP/LCP/CLS/bytes/cost | Execute defined protocol, not an invented score |
| Q22 — Dependency/install/build discipline | E01 package/lockfile/workflow + E02 frozen install/quality; VERIFIED — CURRENT for those gates | Not an advisory audit or proof of vulnerability absence; host/browser scope limited | Review authoritative advisories when needed; preserve ESLint deadline |
| Q23 — Live Counter hydration/activation | E03 accepted retirement; NOT APPLICABLE to current homepage | Retained Counter SSR proves initial markup only; historical browser behavior is E06 | Restore applicable production-browser tests before next real client island |
| Q24 — Counter screen-reader status announcement | Counter absent from public composition; NOT APPLICABLE | Historical D13-01 item is retained historically, not a current homepage test | Add actual status/AT checks if a real status-changing component appears |
| Q25 — Real translations/RTL / accounts/commerce | Absent, not authorized; NOT APPLICABLE to current surface | Logical CSS is not general RTL qualification; no protected-data caching/security proof | Separate future scopes and evidence |
| Q26 — Production HTTPS/HSTS/edge/release | No production-origin evidence; UNVERIFIED, separately gated | Local static server is not deployment certification | Separate deployment authorization and edge/release qualification |

## Architecture and source-boundary assessment

Source locations below refer to E01 at the exact baseline.

- `app/[lang]/page.tsx:1–7` validates language and renders ReScript Homepage.
  `layout.tsx:8–25` owns static params, validated metadata and HTML lang/direction.
  `src/adapters/next/language.ts:5–8` permits pseudo only in development and calls
  Next notFound for unresolved identifiers. `proxy.ts:4–15` owns only the existing
  query-preserving 307; no parallel router or dynamic data requirement appears.
- `src/ui/Homepage.res:1–23` owns one main landmark, four native sections, one H1
  and three H2s. `EngineeringShell.res:1–24` owns skip/identity/header composition.
  No footer, menu, form, API, provider or browser state is required.
- `src/i18n/Language.res` and `Messages.res/.resi` own typed language/message
  contracts and exhaustive English/pseudo resolution. Next-specific ownership
  remains thin. The installed Next 16.3.8 static-params and Server/Client Component
  documentation was consulted; no framework code is changed.
- Capability domain/application interfaces retain separate maturity and disclosure
  decisions. Proof data and Counter are reachable from retained fixture tests,
  not the real route composition. No privileged provider adapter exists to
  validate; the future authority boundary is not claimed implemented.
- E07 supports, but does not newly attest, zero application-source client references.
  Next's own framework scripts/client modules are present. JS-disabled reading
  is demonstrated by E02; JS-enabled framework execution costs remain unmeasured.

The accepted M1.3.2 no-extraction decision remains justified: CSS already shares
container/rhythm/focus rules; single shell/identity/intro composition does not
justify variant factories or wrapper components. Root tokens resolve without
fallbacks/cycles; presentation selectors use semantic colors, never raw palette
labels. Some retained button/footer/proof rules have no current homepage consumer.
This is a bounded retained foundation, not evidence of extra public UI.

Typography remains system sans, 1rem/1.6 body, 1.25rem identity, 1.5rem H2 and fluid
`clamp(1.75rem, 1.25rem + 2vw, 2.75rem)` H1. Prose is 68ch, container 60rem,
gutters fluid 1–2rem; logical properties and wrapping remain. No present cascade
failure or costly abstraction was substantiated. Before new nested sections,
control variants or real content, review global heading/paragraph/button defaults
and actual consumer semantics; their existence is not approval to add components.

## Content and disclosure exposure assessment

Direct comparison of `Messages.res:38–47` with the
[exact post-acceptance approval](../product/m1-4-1-content-readiness.md#post-acceptance-homepage-approval-2026-10-08-utc)
confirms all four paragraphs, section headings, Introduction label and exact title/
description. E02 tests order, one H1, three H2s, four sections, five paragraphs
(including the label), eligible links and exact metadata. There is no canonical
origin, metadataBase, public hreflang, sitemap, company structured data, social
image or unsupported CTA.

Only the exact bounded C01/C02/C04/C05 wording is approved. M1.4.1's original
withholding and subsequent narrowly approved subset remain distinct. Unknown
maturity is unresolved; other substantive assertions and P02–P08 remain withheld.
No POS platform tests are rerun or commercial availability inferred.

The route imports Homepage, shell and semantic catalog, not ArchitectureProof,
CapabilityProofData, Counter or internal planning documents. The catalog retains
legacy fixture messages on the server; their mere source presence is not exposure.
E02 directly requests HTML and an RSC response and checks every loaded external
script body for the eight defined qualification strings, including fictional IDs.
E07 separately searches 24 existing public JS/HTML/RSC files without those hits.
Neither is a general secret scanner. E07 found no static source-map files, but
fresh exact-build manifest/map/discovery inspection remains Q06. Source maps and
diagnostic output must not be assumed safe solely from invisible UI.
No leakage was substantiated within the inspected scope. CSS hiding and noindex
are not withholding mechanisms.

## Security and deployment assessment

`next.config.ts` and `security-headers.spec.ts` retain nosniff, restrictive referrer
policy, DENY/framing protections, disabled camera/microphone/geolocation and the
accepted production CSP. E02 asserts the policy on 200, 307 and 404 responses and
rejects production eval/WebSocket allowances. Diagnostics reject console/page
errors and CSP violations on instrumented JS-enabled pages.

Script/style `'unsafe-inline'` remain the qualified static-compatible allowance;
they do not prevent every inline injection. No untrusted submission, raw HTML,
third-party runtime script, remote font, public environment configuration,
credential-bearing adapter, form action or API is present in the inspected authored
surface. This is source inspection, not exhaustive secret scanning or security
certification. Revisit CSP and data/cache authority before sensitive/rich content,
accounts, commerce, uploads or significant third-party JavaScript.

Package versions/lockfile, SHA-pinned workflow actions, frozen installation and
source-cleanliness gates are verified; they do not establish the absence of known
advisories. ESLint remains exactly 9.39.5 under the approved bounded exception,
including review on targeted lint-stack changes and no later than January 8, 2027.
No update/scanner/tooling implementation is authorized by this assessment.

Current data is approved public informational text; no customer-specific cache
operation exists. Root 307 is method-preserving; decide GET/HEAD policy before
introducing a root write endpoint. Vercel remains the strategic hosting target,
not a configured or qualified origin. Canonical domain, HTTPS/HSTS, production
redirect/cache behavior, monitoring and release approval remain separate
[deployment prerequisites](milestone-1-plan.md#hosting-and-deployment-boundary).

## Accessibility gap analysis

The contrast method correctly linearizes sRGB channels at 0.04045, uses
0.2126/0.7152/0.0722 luminance weights and computes
`(lighter + 0.05) / (darker + 0.05)`. Reversing foreground/background does not change
the ratio. Independent E09 arithmetic confirms:

| Pair | Ratio |
| --- | ---: |
| Ink / paper | 13.86:1 |
| Ink / white | 14.79:1 |
| Evergreen / paper | 5.79:1 |
| Evergreen / white | 6.18:1 |
| White / evergreen | 6.18:1 |
| White / ink | 14.79:1 |
| Ink / sage | 12.03:1 |

E02's 24 state/context results comprise six page/header/intro/identity text
measurements, six synthetic action text/boundary measurements, six generic-link
surface/state measurements, skip text and five focus pairings. They are not 24
distinct colors. Identity/links/actions assert active state before sampling;
named skip/identity/synthetic button/main focus is asserted before measurement.
The 3px outline's 4px offset leaves page/header background adjacent to the ring;
button fill is not its neighboring surface. Skip also compares sage fill.
Normal text uses 4.5:1; essential focus/control boundaries use 3:1.
Sage dividers are decorative, not controls. The parser accepts computed opaque
sRGB only and rejects transparency/other spaces; no alpha/wide-gamut claim is made.
All prose inherits the inspected text color; the measured first main paragraph is
the Introduction label, not independent measurement of each substantive paragraph.

Five-width tests use 320, 375, 768, 1024 and 1440 CSS px at 900px height, document
overflow and heading/identity assertions. A 320px case combines 200% root font with
WCAG text-spacing overrides (1.5 line height, .12em letter, .16em word and 2em
paragraph spacing) and checks navigation/main focus. These do not inspect every
line for clipping, prove unobscured focus everywhere, or reproduce native 400%
browser zoom. E08 preserves actual human-reported native zoom, but lacks environment
metadata. M1.3's earlier manual checks and parity probe remain historical; A13-03's
unnamed fourth focus snapshot is not retroactively strengthened.

Axe uses five WCAG A/AA tags with no exclusions; successful CI establishes no
reported tagged violations, not resolution of incomplete rules or full WCAG
conformance. Media tests assert active forced-colors/reduced-motion emulation,
real focus and synthetic ButtonText boundary. No animation exists.
No real screen reader, touch device or OS contrast observation has been supplied.

D13-01, D13-02 and D13-03 remain **DEFERRED, UNVERIFIED — M1.5**. The following
protocols are proposed M1.5.2 work, not performed work. An unavailable environment
stays UNVERIFIED and requires an explicit maintainer disposition; it is not
automatically deferred again.

## Common manual evidence record

For each procedure record exact tested commit/build provenance, date/reviewer,
page URL and mode, OS/version, browser/version, device model/CPU architecture,
viewport/orientation/DPR, browser native zoom and font settings, input method,
JavaScript state and relevant assistive technology/theme versions. Do not substitute
repository tool versions for actual browser/device versions.

Use one row per action: expected result, actual observation, PASS/FAIL/UNVERIFIED,
defect/reference, limitations and optional screenshot/recording location.
Record settings changes and restore them afterward. Evidence collection location
must be agreed; no repository artifact or permanent harness is created by M1.5.1.
A complete check passes only after actual observations cover its stated scope.
A FAIL requires correction review; unavailable evidence cannot become PASS.

Use a production build of the exact accepted qualification SHA in an authorized,
supported environment. Do not deploy to obtain evidence. Record any remote/device
access arrangement and its network limits before use. A maintainer must select
available representative environments rather than claiming universal support.

## D13-01 — Actual screen-reader protocol

Status: **DEFERRED, UNVERIFIED — M1.5**. Plan a real desktop AT/browser combination,
for example NVDA with Firefox on Windows or VoiceOver with Safari on macOS; these
are proposed choices, not performed tests. Record exact OS, browser, AT versions
and browse/focus mode, keyboard/rotor commands and input method actually used.
A second combination can resolve a discovered compatibility risk; it is not
fabricated coverage.

| Action | Expected observation / evidence to record |
| --- | --- |
| Open `/en`; inspect title and document language, then read from the start | Exact approved title, English language selection, identity/skip content and natural reading without duplicate hidden fixture text |
| Navigate landmarks with the AT's actual commands | Banner then one main; no fabricated footer/navigation/unnamed extra regions; record announced names/order |
| Navigate headings / heading list | One H1 “Grocery POS”, then H2 “What has been developed”, “Local-first by design”, “About this website” in order; “Introduction” is a readable label, not an extra H1 |
| Read the complete four sections continuously | All exact paragraphs and qualifications, coherent section boundaries and reading order, no omitted/duplicate/unexpected content |
| Review links and then Tab/Shift+Tab using the recorded AT mode | “Skip to main content” and “Grocery POS home”; identity leads to `/en` and current-page state is understandable; no unavailable controls |
| From a fresh page, Tab to skip and activate Enter; inspect focus and resume reading | Destination is `main#main-content`; focus/reading position moves meaningfully into content, without trapping or unexpected announcement |
| Traverse forward/reverse and activate identity | Logical order and native home navigation; record actual AT behavior instead of inferring it from DOM focus |
| Repeat essential reading/skip navigation with JS disabled if the browser permits | Approved content and native navigation remain usable; record how JS was disabled and any AT/browser limitation |

Counter status announcements are **NOT APPLICABLE**: no Counter exists on the
homepage. The historical D13-01 Counter requirement remains historical, and the
future real-client-island gate remains binding. DOM/axe/name assertions partially
support this procedure but are not AT observations. Record any unavailable subtest
as UNVERIFIED with the precise reason and maintainer decision required.

## D13-02 — Physical touch/device protocol

Status: **DEFERRED, UNVERIFIED — M1.5**. Select an actual touch-capable phone/tablet,
record model, OS/browser versions, physical screen and CSS viewport, orientation,
zoom/font/display scale and input method. Playwright device descriptors or responsive
DevTools are not physical-device evidence.

1. Open exact-build `/en` in portrait at the device's real narrow viewport.
   Read/scroll all four paragraphs; record legibility, wrapping, section order,
   full content availability and absence of unintended horizontal scrolling/clipping.
2. Rotate to landscape where supported and repeat. Record browser chrome and any
   device/browser orientation limitation rather than assuming a tested width.
3. Deliberately tap the identity link from normal reading positions. Record target
   usability, accurate home navigation and accidental neighboring activation.
   Only the existing identity link is a normal visible touch destination; do not
   invent buttons or require the keyboard-only skip link to be continuously visible.
4. Check scrolling/focus/selection interactions and return to portrait; record
   unexpected jumps, obscured content or unusable controls. Use external keyboard
   or device accessibility navigation only if actually available, with its input
   method recorded separately.
5. Review target size/spacing against applicable WCAG 2.2 target-size rules and
   exceptions using actual observed geometry; minimum block size alone does not
   prove target compliance in every configuration.

Expected result: all content remains readable and reachable, the identity target
is usable and accurately activates, and nearby-target interference is absent.
Device observations remain separate from the automated five-width tests.
If hardware/access is unavailable, leave D13-02 UNVERIFIED and identify who can
supply it; no new deferral or device PASS is inferred.

## D13-03 — Genuine OS high-contrast protocol

Status: **DEFERRED, UNVERIFIED — M1.5**. Prefer a genuine Windows contrast theme
with an actual supporting browser; record OS/browser versions, theme name/custom
colors and activation method. DevTools/Playwright forced-colors emulation is not
this procedure. Another OS accessibility contrast setting must be described on
its own terms, not automatically treated as equivalent to Windows forced colors.

1. Activate the OS theme, open exact-build `/en` and record the browser's response;
   optionally observe `matchMedia("(forced-colors: active)")` and computed colors.
   A media result supplements, rather than substitutes for, the actual OS setting.
2. Read every heading/paragraph and identify the home link without relying on
   color alone. Record foreground/background legibility and underline/current cue.
3. Keyboard Tab to the skip link, then identity; activate skip into main and traverse
   back. Record visible, unobscured focus on each named target, native operation,
   text visibility and any theme-specific failure.
4. Inspect meaningful boundaries for existing interactive elements. Decorative
   dividers may change/disappear without loss of information; a synthetic button
   in an automated test is not a real control requiring device acceptance here.
5. Restore the theme and record the result for the exact combination.

Expected result: readable content, identifiable links/current state, meaningful
focus and native navigation under the real theme. A missing compatible OS/theme
leaves D13-03 UNVERIFIED; do not promote emulation to PASS.

## Other M1.5.2 accessibility review

Repeat keyboard-only Tab/Shift+Tab and skip/identity Enter with JS enabled and
disabled; name the actual focus target and check overlap/clipping throughout
the page. Inspect all paragraphs, not just the first measured element.
Record native 400% browser zoom using actual browser controls, starting viewport,
resulting `innerWidth`, zoom level and observations; a 320px simulated viewport
is only a proxy. Check 200% text enlargement, the stated text-spacing overrides,
five CSS widths, reading order and no information/control loss. Record methods
and settings separately.

Review actual content's qualifiers, native semantics, visible current underline,
link names and focus; review axe incomplete/manual items when obtainable.
RTL/real second-language qualification is NOT APPLICABLE to this English-only
surface. Pseudo expansion does not establish real translation or RTL support.
Any demonstrated present defect requires a correction decision, regardless of
earlier human acceptance or deferral. No checklist completion implies certification.

## Performance measurement protocol — proposed, not executed

No timing, transfer, execution, Lighthouse or field-CWV result is available here.
The protocol below requires separate M1.5.2 authorization and an actual browser
runtime. It adds no benchmark dependency, telemetry or permanent test infrastructure.

### Environment and repeatability

- Record exact commit, clean source status, build commands/mode, artifact identity
  and build log; use the repository Nix/frozen dependency workflow and production
  `/en`. Run canonical qualification only after authorization. Record actual Node,
  pnpm, Next, React, Playwright/browser versions, host OS/CPU architecture, CPU,
  cores, memory, power state and significant background load.
- Select a fixed viewport/DPR/zoom and explicitly recorded network/CPU conditions.
  Use a named DevTools profile or exact configured values and throttling method;
  if throttling is unavailable, record unthrottled conditions and the limitation.
  Do not invent equivalent “slow device” coverage from a desktop multiplier.
- Use at least five navigation observations for each selected cold/warm condition.
  Cold: new context/profile and explicitly empty/disabled HTTP cache; document
  whether DNS/TLS/OS caches are retained. Warm: same context with cache enabled
  after one priming load. Keep warm transfer accounting distinct from cold.
- Capture raw results, median and range, including outliers and errors. Keep
  visibility, timing window and interaction schedule consistent. Use an agreed
  evidence location outside the source tree; no repository files are generated
  by this checkpoint.
- Loopback production-server measurements omit real transport, CDN, edge caching,
  geography and deployed-origin effects. They are laboratory results, not field
  metrics or deployment qualification.

### Measurements and interpretation

| Measurement | Proposed collection method | Limits / build-only alternative |
| --- | --- | --- |
| FCP | Browser paint entries / DevTools trace for each navigation | Requires rendering runtime; a build duration or HTML existence is not FCP |
| LCP | Buffered largest-contentful-paint entries, visible page, consistent 10-second observation window without interaction; record last candidate/time and element | Requires browser; note lifecycle/window and delayed content limitations, not a field percentile |
| CLS | Layout-shift entries excluding recent-input shifts; maximum session window with under-1-second gaps and at most 5-second duration | Requires browser; do not simply sum every shift across the session |
| HTML/CSS/JS transferred bytes and total | Navigation/resource timing plus DevTools Network/HAR, grouped by actual response/MIME/initiator; record encoded, decoded and transferred quantities separately | Zero transfer may mean cache or timing restrictions, not an empty resource. Include headers consistently; record inaccessible cross-origin timing |
| Requests / origins | Network log including failures, redirects, cache hits and initiators; specify counting convention | Record every contacted origin and purpose, separating optional build tooling from page requests |
| Main-thread/browser execution | DevTools Performance trace: parsing/compile/scripting/layout/paint and long tasks; consistent window and profiling settings | Requires runtime; long-task observations alone are not all CPU work, and instrumentation has overhead |
| Authored client versus framework scripts | Fresh client-reference manifests/import graph correlated with network initiators and trace | Zero authored application islands does not mean zero framework JavaScript or zero execution cost |
| Static rendering / unnecessary resources | Fresh prerender/route manifests and output/import inspection; correlate downloaded resources with actual page use | Build-only inspection can show emitted files, graph and on-disk sizes, not actual wire bytes or paint timings |

On-disk or optional compressed-size calculations are estimates, not measured
transfers. Cache/resource timing gaps must be recorded, not filled with invented
bytes. Record all raw observations and exact collection settings so another
reviewer can repeat the protocol. No verified INP field value exists: this page
has no authored client interaction, and laboratory navigation/link traces are not
real-user interaction distributions. Do not claim field LCP/CLS either.

Identify regressions by comparing equivalent production builds/conditions on the
same host, with repeated baseline/candidate runs and actual variability. Investigate
new origins/resources, unexpected authored hydration, shifts, long tasks or cost
changes that exceed observed noise and harm the reader. Derive any later budgets
from measured baseline, justified headroom and an explicit maintainer decision;
no arbitrary score or byte budget is an acceptance gate here.

## Regression coverage integrity

The [accepted migration matrix](m1-4-2-homepage-qualification.md#regression-migration-matrix)
is accurate for the current static informational surface. All ten scenarios per
engine remain meaningful; no independent product coverage count is inferred from
their repetition across engines.

| Existing scenario / source | Durable invariant and present qualification | Boundary |
| --- | --- | --- |
| `accessibility.spec.ts:4` | Complete actual homepage axe scan, five tags/no exclusions; E02 pass | No screen-reader/manual conformance proof; incomplete results still require review |
| `accessibility.spec.ts:18` | Actual skip/identity/main named focus, forward/reverse traversal, Enter fragment/home navigation | No Counter keyboard/state behavior |
| `framework-smoke.spec.ts:7` | JS-disabled exact copy/metadata/structure, sole main, two eligible links, native skip | Framework JS cost is a separate JS-enabled question |
| `framework-smoke.spec.ts:47` | JS-enabled approved output, HTML/RSC/loaded-script exclusion, no unexpected origin/API request, diagnostics | Fixed needles/loaded scripts do not exhaustively audit all artifacts |
| `framework-smoke.spec.ts:74` | Temporary root 307, query, preference fallback and cache semantics | No deployed edge qualification |
| `framework-smoke.spec.ts:89` | Unsupported identifiers and pseudo return production 404 without content | Development pseudo rendering needs its separate future probe |
| `security-headers.spec.ts:3` | Page/redirect/404 CSP and response protections | No HTTPS, accounts, penetration test or certification |
| `shell.spec.ts:42` | Actual text/identity/skip/main and controlled generic-link/button contrast states | Synthetic styling is not nonexistent homepage interaction |
| `shell.spec.ts:166` | Five widths, overflow and 200% font/spacing case plus keyboard targets | Manual whole-page reflow/overlap still needed |
| `shell.spec.ts:197` | Asserted forced-colors/reduced-motion preferences, real focus, synthetic boundary | No actual OS/device behavior, no fabricated animation |

All scenarios use production Next start, one worker and zero retries under
`playwright.config.ts`; diagnostics capture relevant console/page/CSP errors.
E02's 17 unit/fixture cases comprise six capability, nine language/message and
two retained presentation SSR cases. Seven supervisor regressions cover owned
process failures/signals/cleanup, not page accessibility.

**A142-02's human-accepted bounded retirement remains binding: before introducing
the next real application client island, restore appropriate production-browser
hydration, activation, state-update, keyboard and retained-focus coverage.**
`QualificationPresentationTest.res:22–31` tests Counter initial markup/labels/live
attribute only; it is not hydration evidence. No test-only public route or dormant
Counter is added to the homepage. Current coverage is adequate for its asserted
static-surface invariants; no additional scenario is justified merely to inflate
the count. The missing manual/performance/complete-output evidence remains explicit.

## Findings and obligation register

**No BLOCKER, MAJOR or MINOR implementation defect was substantiated within the
reviewed source and available evidence.** These NOTE entries are evidence gaps,
accepted tradeoffs or future obligations, not invented current failures.
Locations refer to E01 and linked canonical records. The maintainer owns decisions;
future operators/reviewers remain to be assigned.

| ID / severity | Condition, evidence and inspection method | Impact / minimum action / checkpoint | Acceptance impact and verification |
| --- | --- | --- | --- |
| A151-01 — NOTE | D13-01 actual AT result absent; E08, Q17 and canonical deferred record | Names/order/skip perception unverified. Obtain recorded actual AT observations in separately authorized M1.5.2 | M1.5 final accessibility evidence remains outstanding; verify full D13-01 protocol, do not automatically defer |
| A151-02 — NOTE | D13-02 no actual device result; Q18, accepted deferral | Touch usability/real-device layout unknown. Obtain physical-device observations in M1.5.2 | Outstanding qualification obligation; verify D13-02 or record unavailable environment and explicit human disposition |
| A151-03 — NOTE | D13-03 emulation only; `shell.spec.ts:197–242` / Q19 | OS theme response unknown. Obtain genuine OS contrast review in M1.5.2 | Outstanding qualification obligation; actual environment/results required, emulation cannot close it |
| A151-04 — NOTE | No FCP/LCP/CLS/transfer/main-thread baseline; Q21 | No measured performance conclusion justified. Execute proposed production-build protocol in M1.5.2 | M1.5 measurement evidence pending; raw repetitions/settings required, no fabricated budgets |
| A151-05 — NOTE | `framework-smoke.spec.ts:47–71` checks loaded outputs; E07 local output has incomplete exact-build provenance | No leak found, but full graph/public-artifact proof limited. Fresh exact-SHA output/manifests/maps inspection in M1.5.2 | Pending final output qualification; attach build identity, search scope/results and client-reference inventory |
| A151-06 — NOTE | Counter live browser tests retired, `QualificationPresentationTest.res:22–31` and A142-02 acceptance | SSR does not qualify live behavior. Restore applicable tests before next real application client island | Does not block this static baseline; future island cannot rely on old SSR result |
| A151-07 — NOTE | `next.config.ts` / security baseline retain accepted inline CSP; Q20/Q26 | Known policy limits and unverified deployment edge. Retain controls; revisit before sensitive surfaces and qualify edge only after separate deployment authorization | No new current defect; no security/deployment certification; verify changed policy in the applicable future scope |
| A151-08 — NOTE | E08 manual PASS metadata incomplete; Q11/Q16; earlier parity A13-03 limitation | Precise environment reproduction unavailable. Record whole-page keyboard/text/native-zoom environment and observations in M1.5.2 | Existing acceptance not rewritten; detailed qualification still required, no inferred AT/device PASS |
| A151-09 — NOTE | Pinned ESLint 9.39.5 exception in quality/CI and M1 plan; Q22 | Maintenance obligation, not permission to upgrade now. Maintainer reviews targeted lint-stack updates and no later than January 8, 2027 | Preserve deadline/controls; qualify any separately authorized update |

## Prioritized M1.5.2 evidence checklist

This list proposes execution scope; it does not authorize it.

1. Confirm the exact qualification SHA, authorized operations, supported host,
   available AT/device/OS-theme combinations, operator and evidence location.
   Capture build/tool/environment provenance before drawing new conclusions.
2. Under that authorization, obtain canonical production quality and unchanged
   three-browser results (17 unit/fixture, seven supervisor, ten scenarios per
   engine, one worker, zero retries) with successful source cleanliness.
   Inspect fresh static/client manifests and complete relevant public artifacts,
   including unrequested chunks/maps/discovery surfaces.
3. Complete actual D13-01, D13-02 and D13-03 protocols; record unavailable
   environments and decisions explicitly. Review keyboard, visible/unobscured
   focus, native zoom, all content at the five widths, text enlargement/spacing
   and axe incomplete/manual items. Preserve original PASS observations separately.
4. Reproduce controlled development pseudo rendering of all homepage messages
   and metadata, noindex/nofollow and expanded layout/skip behavior; recheck
   production pseudo exclusion. Do not introduce a genuine second language.
5. Perform the performance protocol on the actual production build and record
   raw repetitions, transfer/execution scope, origins and lab limitations.
6. Reconcile observations with exact content approvals/security controls;
   triage only reproducible defects with location, impact, smallest correction
   and necessary requalification. Submit results for independent/human review.

## Potential M1.5.3 corrective-work triggers

M1.5.3 requires a separate human execution instruction. Only substantiated defects
such as wrong copy/metadata, actual exposure, broken route/focus/reading behavior,
real clipping, theme unreadability, a client/server leak or measured unnecessary
cost can justify bounded corrective work. A hypothesis first needs reproduction
under an identified environment. A new performance number alone is not proof of a
defect; compare variability and practical reader impact.

No current defect was found that warrants code changes now. Missing marketing
pages, additional components, a second language, CMS, Counter or commerce are not
qualification defects. New real client islands/child routes still require their
respective restoration/current-state gates and separate implementation approval.

## Unverified areas and human responsibilities

The maintainer must identify actual M1.5.2 operators and environments, decide how
to obtain missing AT/device/OS evidence, approve measurement conditions and review
any proposed correction. If evidence cannot be obtained, keep it UNVERIFIED and
request a reasoned explicit disposition; no waiver or new deferral is inferred.

Fedora ARM64 local WebKit native compatibility remains unqualified; Ubuntu
x86_64 CI is the supported three-engine environment. Browser engine tests do not
establish all installed browser/OS/device combinations. Actual translations/RTL,
protected workflows, live HTTPS/HSTS, deployment caches/monitoring, field
performance and commercial readiness remain outside demonstrated scope.

## M1.5.1 validation and review gates

Nonmutating validation passes: 42 Markdown documents, 374 local inline links,
102 heading-anchor references, changed/new-file whitespace and final newlines,
and `git diff --check`. Complete documentation diff/new-file contents, current
status and exact evidence provenance were reviewed. Four tracked Markdown files
and this new record are the only changes; the root README receives a narrow stale
authorization correction alongside AGENTS, the documentation map and M1 plan.
All non-document tracked hashes, Git refs/index/config/HEAD and the 561-file
generated/build/report inventory match their initial state. Historical dated
M1.4 scope/acceptance sections remain byte-identical; no runtime artifact is
regenerated. Link validation covers local inline destinations and Markdown headings,
not external URL availability.

Next gates: independent M1.5.1 audit, explicit human review/acceptance, human-signed
commit/integration and existing supported Ubuntu CI on that future exact SHA.
Historical E02 is not qualification of this documentation candidate.
No M1/M1.5 acceptance is recorded by this checkpoint.

**M1.5.2 and M1.5.3: NOT AUTHORIZED FOR EXECUTION.**
**Production deployment/public release: NOT AUTHORIZED.**
No application correction, Git integration or deployment occurs here.

## Formal M1.5.1 acceptance — October 9, 2026 (UTC)

**M1.5.1 — Qualification Baseline & Adversarial Review: FORMALLY ACCEPTED October 9, 2026 (UTC).**

The human maintainer reviewed the independent adversarial audit's PASS decision,
accepted the qualification evidence inventory and proposed procedures, integrated
the signed implementation, reviewed successful exact-commit main CI and explicitly
accepted M1.5.1. This records an already-issued human decision, not acceptance
inferred from green CI. It supersedes the original pending implementation/review
statements above; their starting SHA, evidence classifications and chronology
remain intact.

### Independent audit disposition

The original decision remains
**M1.5.1 INDEPENDENT AUDIT — PASS, READY FOR HUMAN REVIEW**.
No BLOCKER, MAJOR or MINOR defect was substantiated. The independent review
upheld all 26 inventory classifications and all nine NOTE obligations; acceptance
does not change those obligations to PASS or mark them fulfilled.

### Signed integration and exact-commit main qualification

Accepted signed implementation:
[`35e4fd72c170f0f4a28286044bf890ab69f33cfc`](https://github.com/adarj/grocery-pos-website/commit/35e4fd72c170f0f4a28286044bf890ab69f33cfc),
`docs(web): establish M1.5 qualification baseline`.
Read-only GitHub verification reports a valid signature for this commit.

[Main run 37883330881](https://github.com/adarj/grocery-pos-website/actions/runs/37883330881)
and [Quality and browsers job 113667723774](https://github.com/adarj/grocery-pos-website/actions/runs/37883330881/job/113667723774)
completed successfully on supported Ubuntu. Retrieved job steps/logs identify
the exact implementation SHA and establish the following results; the unchanged
Playwright configuration specifies zero retries.

| Gate | Accepted implementation-commit result |
| --- | --- |
| Unit / fixture tests | PASS: 17/17 |
| Development-supervisor regressions | PASS: 7/7 |
| Chromium | PASS: 10/10 |
| Firefox | PASS: 10/10 |
| WebKit | PASS: 10/10 |
| Browser aggregate / execution policy | PASS: 30/30; one worker, zero retries |
| Lint / formatting / ReScript and TypeScript typechecking | PASS |
| Production build | PASS |
| Source cleanliness | PASS |

These results qualify the merged implementation commit, not this future
administrative acceptance-record commit. No local build or browser suite is rerun
to record acceptance. The eventual human-signed administrative commit requires
its own successful exact-SHA supported Ubuntu CI with the unchanged gates.

### Accepted deliverables and remaining obligations

Acceptance validates the baseline and planning methodology: the 26-requirement
inventory; ten evidence sources with exact provenance; evidence classifications;
architecture, security and disclosure assessments; nine NOTE obligations;
reproducible manual protocols; proposed performance methodology; regression
coverage assessment; and prioritized prospective M1.5.2 checklist.
It does not establish that the proposed manual tests or measurements occurred.

- **D13-01 — Screen-reader verification: DEFERRED, UNVERIFIED — M1.5.**
- **D13-02 — Physical touch/device verification: DEFERRED, UNVERIFIED — M1.5.**
- **D13-03 — Actual OS high-contrast verification: DEFERRED, UNVERIFIED — M1.5.**

Production performance measurements, fresh exact-build artifact qualification
and the other recorded NOTE follow-ups remain outstanding. Earlier human-reported
homepage observations retain their original scope; no new AT/device/OS result,
WCAG conformance, production performance certification or security certification
is claimed.

A142-02's approved retirement remains binding: **before introducing the next real
application client island, restore appropriate production-browser regression
coverage for hydration, activation, state updates, keyboard interaction and
retained focus, as applicable to that component.** Counter initial-state SSR
tests are not browser hydration evidence; restoration is not complete.
Before the first additional public child route, make the identity link's
current-page indication route-aware and qualify the resulting navigation.
Preserve the exactly pinned ESLint 9.39.5 bounded exception and January 8, 2027
review deadline.

### Current milestone and authorization boundaries

| Scope | Current disposition |
| --- | --- |
| M1.4 — Reviewed Templates & Content | FORMALLY ACCEPTED AND COMPLETE |
| M1.5 — Final Qualification | AUTHORIZED, IN PROGRESS |
| M1.5.1 — Qualification Baseline & Adversarial Review | FORMALLY ACCEPTED October 9, 2026 (UTC) |
| M1.5.2 | NOT AUTHORIZED FOR EXECUTION |
| M1.5.3 | NOT AUTHORIZED FOR EXECUTION |
| Corrective application changes | NOT AUTHORIZED |
| Production deployment/public release | NOT AUTHORIZED |

M1 and M1.5 overall are not formally accepted. M1.5.2 requires a separate execution
decision identifying actual environments, responsible operators and
evidence-recording arrangements. No new product copy, routes, capabilities,
commercial maturity assertions or broader disclosure approval are granted.
Only the exact previously approved homepage subset remains eligible; other
substantive assertions and P02–P08 remain withheld.

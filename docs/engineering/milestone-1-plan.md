# Milestone 1 plan

**MILESTONE 1 — WEBSITE FOUNDATION: FORMALLY ACCEPTED AND COMPLETE October 10, 2026 (UTC).**
The [canonical acceptance record](milestone-1-acceptance.md) records the maintainer's explicit
human decision, approved M1.1–M1.5 scope, retained limitations and future gates.
The decision is effective; this new administrative record's independent review,
human signed integration and exact-SHA CI remain pending. No additional
implementation, public release or deployment is authorized.

**Status: M1.1 planning specification approved by the human maintainer on
October 8, 2026 (UTC).** The initial M1.2 internal engineering-preview scope below
is implemented, merged and qualified on main. The maintainer confirmed completion
of the visual review and formally accepted M1.2 on October 8, 2026 (UTC).
A12-01/A12-02 are resolved; the original adversarial CONDITIONAL PASS remains
historical evidence.
**M1.3 — Design Tokens & Reusable Primitives: FORMALLY ACCEPTED October 8, 2026 (UTC).**
The bounded M1.3.1 semantic-token slice is accepted, merged
and qualified on main (30/30). Its [qualification record](m1-3-1-token-qualification.md)
owns measured and remote evidence. The [M1.3.2 assessment](m1-3-2-primitives-qualification.md)
finds existing CSS reuse sufficient; the maintainer accepted the no-extraction
decision October 8, 2026 (UTC), and merged main CI passes 30/30.
M1.3.3 is merged and main-qualified (30/30), with adversarial audit PASS.
The [formal acceptance record](m1-3-3-design-system-qualification.md#formal-m13-acceptance-2026-10-08-utc)
identifies signed main closeout `ad69f632129231bb2604a3a71678ac959900046c`
and successful main run 37827607606 (30/30 and source cleanliness).
M1.3.4's historical CONDITIONAL PASS is preserved; five human-reported PASS
observations and three explicitly approved M1.5 deferrals resolved its human gates.
At M1.3 acceptance, D13-01–D13-03 were **DEFERRED, UNVERIFIED — M1.5**;
the later scoped human observations and accepted limitations are recorded in
the M1.5.2 acceptance linked below.
**M1.4 — Reviewed Templates & Content: FORMALLY ACCEPTED AND COMPLETE October 9, 2026 (UTC).**
**M1.4.1 — Content Readiness & Publication Matrix: FORMALLY ACCEPTED October 8, 2026 (UTC).**
The [content-readiness register](../product/m1-4-1-content-readiness.md) owns the internal
candidate inventory and claim/evidence decisions. The maintainer subsequently
authorized M1.4.2 October 8, 2026 (UTC): only the exact four-section homepage and
metadata in the [scoped approval](../product/m1-4-1-content-readiness.md#post-acceptance-homepage-approval-2026-10-08-utc).
**M1.4.2 — First Reviewed Homepage Template: FORMALLY ACCEPTED October 8, 2026 (UTC).**
The [formal homepage acceptance record](m1-4-2-homepage-qualification.md#formal-m142-acceptance--october-8-2026-utc)
owns signed main commit `017fa33125310fb2d6bbc3bcd517ce9af738254d`, successful
main run 37848845430 (30/30 and source cleanliness), the preserved conditional
audit, resolved A142-01, human-accepted Counter coverage retirement and human
manual observations. The maintainer approved no additional content or navigation
October 8, 2026 (UTC); the [dated scope decision](#m14-no-expansion-scope-closeout--october-8-2026-utc)
preserves that history. The [formal M1.4 acceptance](#formal-m14-acceptance--october-9-2026-utc)
records the October 9, 2026 (UTC) outcome, signed closeout
`8729179ee18b0d154d8fa63b144d1d98212f8f39` and successful main run 37877425523
(30/30 and source cleanliness). **M1.4.3 — Additional Reviewed Content & Navigation:
REVIEWED AND DEFERRED; NO IMPLEMENTATION AUTHORIZED** is part of the accepted scope,
not implemented work.
**M1.5 — Final Qualification: FORMALLY ACCEPTED AND COMPLETE October 10, 2026 (UTC).**
The [canonical M1.5 acceptance record](m1-5-final-qualification-acceptance.md)
owns the cumulative evidence and accepted limitations. Signed main acceptance record
`2195fcc938ca7eeafc0cc6c3a8b287dd03d170f8` passed exact-SHA
[run 38047244927](https://github.com/adarj/grocery-pos-website/actions/runs/38047244927)
on supported Ubuntu 24.04 x86_64. The subsequent independent audit returned
**PASS — M1.5 CLOSEOUT VERIFIED; M15R-01 RESOLVED**. Its preparation-time
integration/CI statements are historical; this repository closeout is complete.
**M1.5.1 — Qualification Baseline & Adversarial Review: FORMALLY ACCEPTED October 9, 2026 (UTC).**
The [canonical acceptance record](m1-5-1-qualification-baseline.md#formal-m151-acceptance--october-9-2026-utc)
owns independent audit PASS, signed integration and exact-commit main CI.
**M1.5.2 — Accessibility & Performance Qualification: FORMALLY ACCEPTED AND COMPLETE October 9, 2026 (UTC).**
The [formal acceptance record](m1-5-2-qualification-results.md#formal-m152-acceptance--october-9-2026-utc)
owns the maintainer's explicit decision, signed main integration
`b5c090709145d3fc48efef0f12e3aa8630f7d07e`, successful exact-SHA main run
37978959204, independent audit PASS outcomes and scoped human observations.
Windows forced-colors remains **UNVERIFIED**; its absence and the missing
manual-test provenance metadata are human-accepted bounded limitations for
this homepage. Acceptance establishes neither Windows compatibility nor WCAG
conformance. **Milestone 1 overall: FORMALLY ACCEPTED AND COMPLETE October 10,
2026 (UTC).** The [canonical acceptance record](milestone-1-acceptance.md) owns that separate
human decision; its new administrative record still requires independent review,
human signed integration and its own exact-SHA CI.
Signed M1.5.2 acceptance-record commit
`335a31187284956f2a8eb6e23deecee0e12ed3fe` is integrated on main and
[run 37981808698](https://github.com/adarj/grocery-pos-website/actions/runs/37981808698)
passed on that exact SHA.
**M1.5.3 — FORMALLY ACCEPTED AND COMPLETE; NO CORRECTIVE APPLICATION IMPLEMENTATION REQUIRED.**
The [formal acceptance record](m1-5-3-correction-assessment.md#formal-m153-acceptance--october-10-2026-utc)
records the maintainer's October 10, 2026 (UTC) decision. Its signed
acceptance-record commit `1067bd0d21ac45890dcf8e94a3afdf353f372bde` is
integrated on main; [run 38044969571](https://github.com/adarj/grocery-pos-website/actions/runs/38044969571)
passed on that exact SHA on Ubuntu 24.04 x86_64: 17/17 fixtures, 7/7 supervisor
regressions, Chromium/Firefox/WebKit 10/10 each, one worker, zero configured
retries and quality/typecheck/build/source-cleanliness gates.
The accepted conclusion remains **A — NO CORRECTION JUSTIFIED**. A153A-01 is
independently **RESOLVED** by the focused PASS audit; the original CONDITIONAL
PASS remains historical. The separate M1.5 overall decision is recorded above;
Milestone 1 acceptance and release authorization remain separate.
**Corrective application implementation remains NOT AUTHORIZED.**
Later implementation, public release and deployment remain unauthorized.
Later checkpoints retain their scope and human review gates. Specification approval grants no publication or
production deployment authorization. Milestone 0 is complete and accepted;
see the [qualification record](milestone-0-qualification.md).

Historical D13 and M1/M1.5 checkpoint/overall pending-status statements in the
tables and dated records below retain their earlier evidence state. The linked
checkpoint acceptances, [formal M1.5 outcome](#formal-m15-acceptance--october-10-2026-utc)
and [formal Milestone 1 outcome](#formal-milestone-1-acceptance--october-10-2026-utc)
supersede those statuses. Signed M1.5 acceptance integration, exact-SHA CI and
independent closeout are completed as recorded above; their preparation-time
pending statements remain historical. These outcomes expand neither earlier
evidence nor later implementation, content or deployment authorization.

## M1.1 approval and qualification record

| Evidence / decision | Status |
| --- | --- |
| Human specification/design approval | Approved October 8, 2026 (UTC); leading direction: **Modern infrastructure for the independent grocer** |
| Independent adversarial specification audit | **M1.1 PASS — READY FOR HUMAN DESIGN APPROVAL**; no BLOCKER, MAJOR or MINOR defects; A11-01–A11-03 carried below |
| Signed specification commit / feature CI | [Run 37728971554](https://github.com/adarj/grocery-pos-website/actions/runs/37728971554) passes at `efa76de8dc5afec83c7f4858afa2cbfcfeeab2e1`; Chromium/Firefox/WebKit 7/7 each, 21/21, one worker, zero retries; source cleanliness passes |
| M1.1 branch integration / main CI | Merged; [main run 37749346349](https://github.com/adarj/grocery-pos-website/actions/runs/37749346349) passes at `cea8dea94bafe182af40ef30fe390cc9b667ac07`, including 21/21 and source cleanliness |
| M1.2 | ACCEPTED by the maintainer October 8, 2026 (UTC); visual review completed, A12-01/A12-02 resolved, ESLint retention approved; [shell record](m1-2-shell-qualification.md) preserves history and final main run 37780086710 at `e5f690977273ce721998f6f778b946924b5a443f`: 27/27 and source cleanliness PASS |
| M1.3 | FORMALLY ACCEPTED October 8, 2026 (UTC); tokens and no-extraction architecture retained; signed main closeout `ad69f632129231bb2604a3a71678ac959900046c`, run 37827607606 (30/30 and source cleanliness); historical M1.3.4 CONDITIONAL PASS and subsequent gate resolution preserved in the [acceptance record](m1-3-3-design-system-qualification.md#formal-m13-acceptance-2026-10-08-utc); D13-01–D13-03 remain DEFERRED, UNVERIFIED — M1.5 |

## Objective and implementation starting point

Develop a truthful, accessible public shell and reviewed information templates
on the accepted foundation. M1 is not auth, commerce, provider integration, real
multilingual rollout or deployment qualification.

The current app has thin /[lang] layout/page seams, typed Language/Messages,
a server-rendered ReScript homepage and identity/skip shell, and the accepted
43-property CSS foundation. Capability projection and Counter remain isolated
qualification fixtures tested through Node SSR; the homepage has no application
client island. Tests protect policy/decoding, i18n, exact approved output,
SSR/HTML/RSC/script exposure, headers/CSP, keyboard/axe, contrast/reflow and
supervisor cleanup. The homepage record explicitly documents retired live
Counter hydration/activation coverage and its future reintroduction gate. No multi-destination
public navigation or broader design system exists.

Future shell composition should consume public-safe, reviewed navigation/content
and typed messages; Next retains route/metadata ownership. ReScript owns UI and
appropriate application decisions. Retain or deliberately replace qualification
artifacts when their regression purpose is superseded; never rebrand fictional
samples as product claims or delete unique coverage without replacement.

## Checkpoint scopes and review gates

| Checkpoint | Scope and dependencies | Acceptance evidence | Explicit exclusions | Human gate |
| --- | --- | --- | --- | --- |
| M1.1 — Specifications | Approved audience/IA, target navigation and templates, visual direction and component contracts; accepted M0 baseline | Adversarial audit PASS; exact feature CI PASS; working document links; documentation-only scope | No components, assets, public copy, routes or M1.2 execution | Specification/design approval recorded October 8, 2026 (UTC); merged main CI passes |
| M1.2 — Internal engineering-preview shell | Approved identity header, skip link, responsive container, existing qualification proof and minimal footer; essential accessible styling; navigation/disclosure only when eligible destinations justify them | Server-first/client-reference review; JS-disabled usability; keyboard/focus/axe; measured actual contrast/control states; narrow-to-wide/pseudo checks; preserved security/hydration/publication regressions; typecheck/build; full supported CI | No fabricated marketing content, unavailable routes/links, pricing, commerce, accounts, contact forms, backend services, speculative features, mega-menu/search, real second language or broad token library | Maintainer visual review and formal acceptance recorded October 8, 2026 (UTC); first-implementation ESLint review satisfied by explicit retention approval |
| M1.3 — Tokens/primitives | Measure palette pairs; consolidate minimal M1.2 styling into semantic tokens and demonstrated container/section/link/button/card/callout patterns | Contrast/state pairing sheet; responsive/expanded-text/forced-colors/reduced-motion checks; proportionate tests and canonical gates | No UI framework, remote fonts, generic component factory, complex forms/data grids or commerce controls | FORMALLY ACCEPTED October 8, 2026 (UTC); measured 43-property system and no-extraction composition retained; merged closeout/main CI 30/30; three approved, unverified M1.5 deferrals remain obligations |
| M1.4 — Reviewed templates/content | Authorized October 8, 2026 (UTC); M1.4.1 assesses content/evidence first; later template work requires an approved exact set, M1.3 and explicit checkpoint authorization | M1.4.1 documentation review, links/anchors and scope integrity; later implementation retains claim/exposure, SSR, content-specific accessibility/performance and CI gates | No runtime work in M1.4.1; no requirement to populate every area, fake claims, CMS, pricing, commerce/account or backend | M1.4.1 FORMALLY ACCEPTED October 8, 2026 (UTC); approve each disclosure set separately; M1.4.2 FORMALLY ACCEPTED October 8, 2026 (UTC) only for the exact reviewed homepage; signed main commit `017fa33125310fb2d6bbc3bcd517ce9af738254d`, run 37848845430 (30/30); M1.4 FORMALLY ACCEPTED AND COMPLETE October 9, 2026 (UTC); signed scope closeout `8729179ee18b0d154d8fa63b144d1d98212f8f39`, main run 37877425523 (30/30 and source cleanliness); M1.4.3 reviewed and deferred, no implementation authorized; [formal outcome](#formal-m14-acceptance--october-9-2026-utc) |
| M1.5 — Final qualification | Authorized October 9, 2026 (UTC), IN PROGRESS; M1.5.1 baseline accepted; M1.5.2 technical/manual qualification authorized; M1.5.3 separately gated | Existing exact-commit evidence, sourced classifications, findings and reproducible M1.5.2 protocols; later authorized execution retains three-browser/manual/graph/performance gates | No runtime/artifact changes, correction implementation, browser processes or new measurements in M1.5.1; no deployment certification or automated WCAG claim | M1.5.1 FORMALLY ACCEPTED October 9, 2026 (UTC); [canonical acceptance](m1-5-1-qualification-baseline.md#formal-m151-acceptance--october-9-2026-utc). M1.5.2 AUTHORIZED October 9, 2026 (UTC), under review/not accepted; [fresh results](m1-5-2-qualification-results.md) retain missing manual evidence. M1.5.3 and corrective application changes remain unauthorized; M1/M1.5 acceptance and deployment remain separately gated |

The maintainer explicitly approved D13-01 screen-reader, D13-02 physical-device
and D13-03 actual OS high-contrast deferrals to M1.5 on October 8, 2026 (UTC).
All remain **DEFERRED, UNVERIFIED**, with required future checks and the obligation
to correct discovered current defects in the [canonical deferral record](m1-3-3-design-system-qualification.md#explicitly-approved-m15-deferrals).
These bounded deferrals do not establish WCAG conformance or authorize M1.4.

The order is deliberate: shell work has only necessary provisional styles;
M1.3 consolidates actual repeated needs. M1.4's content dependencies may reduce
the published area set; do not create empty pages to satisfy the target sitemap.
M1.5 sets measured performance follow-ups from real shell/content assets rather
than demanding an arbitrary M1.1 score. Human review may revise checkpoint scopes
before each implementation instruction.

## M1.4 checkpoint boundary

The maintainer authorized M1.4 and M1.4.1 on October 8, 2026 (UTC).
[M1.4.1 content readiness](../product/m1-4-1-content-readiness.md#formal-m141-acceptance-2026-10-08-utc) is the canonical
documentation-only page/claim/source/asset planning artifact, formally accepted
October 8, 2026 (UTC). Acceptance validates the assessment and governance; it
grants no claim, content, route, asset or publication approval.

M1.4.2 was authorized and is now formally accepted October 8, 2026 (UTC) for one
server-rendered homepage at the existing `/en` route, exact approved
headings/paragraphs and title/description, and a minimal identity/skip shell.
No extra navigation, assets, routes, claims or client component is approved.
Pure publication/language tests and the
[documented regression migration](m1-4-2-homepage-qualification.md#regression-migration-matrix)
remain controls. The maintainer accepted bounded retirement of Counter browser
coverage; its retained SSR fixture is not hydration evidence. Before the next real
application client island, restore appropriate production-browser regression tests
for hydration, activation, state updates, keyboard interaction and retained focus,
as applicable to that component. This restoration is a future gate, not completed work.
M1.4.3 is reviewed and deferred without implementation authorization under the
[no-expansion decision](#m14-no-expansion-scope-closeout--october-8-2026-utc). Further content and
public release/deployment require separate human decisions. Maintain route-aware identity handling before the first additional
public child route and qualify actual new-content accessibility.

## M1.4 no-expansion scope closeout — October 8, 2026 (UTC)

The human maintainer explicitly approved not expanding M1.4 with additional public
content or navigation, deferred M1.4.3 without authorizing its implementation, and
authorized this documentation-only scope closeout on October 8, 2026 (UTC).
This is approval of the scope decision, not formal acceptance or CI qualification
of the closeout record or overall milestone.

Starting branch: `docs/m1-4-no-expansion-closeout`; HEAD/main/origin-main:
`60d3a18789ef74bba3b010e16306f3c49c50f535`, 0/0 ahead/behind, clean worktree
and staging. [Baseline main CI run 37850439012](https://github.com/adarj/grocery-pos-website/actions/runs/37850439012)
passed 30/30 Chromium/Firefox/WebKit scenarios and source cleanliness on that exact
SHA. This accepted baseline evidence does not qualify the uncommitted closeout.

| Scope / authority | Maintainer decision |
| --- | --- |
| M1.4.1 — Content Readiness & Publication Matrix | **FORMALLY ACCEPTED** October 8, 2026 (UTC) |
| M1.4.2 — First Reviewed Homepage Template | **FORMALLY ACCEPTED** October 8, 2026 (UTC) |
| M1.4.3 — Additional Reviewed Content & Navigation | **REVIEWED AND DEFERRED; NO IMPLEMENTATION AUTHORIZED** |
| M1.4 overall | **NO-EXPANSION CLOSEOUT AUTHORIZED; administrative acceptance/qualification pending** |
| M1.5 — Final Qualification | **NOT YET AUTHORIZED**; not started |
| Production deployment/public release | **NOT AUTHORIZED** |

M1.4.3 has not been implemented, tested, completed or formally accepted. M1.4
overall and this closeout record are not yet formally accepted.

### Accepted checkpoints and implemented boundary

- **M1.4.1:** the [accepted content-readiness matrix](../product/m1-4-1-content-readiness.md#formal-m141-acceptance-2026-10-08-utc)
  owns eight assessed page candidates, twelve claim subjects, seven source groups,
  separate evidence/maturity/disclosure/readiness decisions, the lightweight
  approval workflow and withholding of unsupported information. Its accepted
  checkpoint is `cf6ce944ce081366a6470f91500c116d11dff9de`, qualified by main
  run 37836356422.
- **M1.4.2:** the [accepted homepage record](m1-4-2-homepage-qualification.md#formal-m142-acceptance--october-8-2026-utc)
  owns the server-rendered `/en` homepage: four exact approved substantive
  statements, four-section composition/headings and exact title/description,
  existing English routing and development-only pseudo-localization, and the
  accepted design-system foundation. No public child route, contact form or
  commercial feature was added. Its signed implementation is
  `017fa33125310fb2d6bbc3bcd517ce9af738254d`, qualified by main run 37848845430.

These canonical records retain their original audits, local/remote evidence and
human decisions; this closeout does not duplicate or rewrite their histories.
**Next routes. ReScript models. React presents. APIs connect.** Server-first
composition and the existing 43-property design system remain unchanged.

### Why additional content is deferred

The accepted homepage communicates Grocery POS identity and intended audience,
pre-production maturity and live-retail limitations, the bounded internal checkout
foundation, the local-first architectural objective, and separation of the
website from operational POS software. These five facts are distributed across
the four approved sections; no fifth section or new wording is proposed.

A separate page must add distinct, trustworthy information. More pages are not
justified by the sitemap or a milestone quota. The current candidate decisions are:

| Candidate | No-expansion rationale |
| --- | --- |
| Platform | More verified, appropriately scoped product detail is needed before a distinct overview adds value |
| Solutions | Intended audiences do not establish demonstrated store/workflow fit |
| Hardware | Qualified physical compatibility evidence is not yet available for publication |
| Resources | One educational article remains possible but requires a named topic, sources, editorial responsibility and exact approval |
| Documentation | Customer-facing, versioned instructions and maintenance ownership are not established |
| Company | Public organizational facts remain insufficiently verified |
| Contact | No approved channel, privacy scope or response commitments are established |

Developers, Support, Pricing, Commerce and Account retain their existing evidence,
authority and security prerequisites in the
[content-readiness register](../product/m1-4-1-content-readiness.md#readiness-decisions-and-deferred-areas).
These are current deferrals, not permanent product exclusions.

### Publication and maturity boundaries

Only the exact M1.4.2 homepage subset of C01, C02, C04 and C05 has disclosure
approval; no entire claim category is approved. Other substantive assertions
remain **WITHHELD**. P02–P08 remain **WITHHELD AND UNIMPLEMENTED**.

No-expansion approval grants no commercial product availability, customer
deployment, pilot enrollment, demo booking, contact/support commitments, hardware
compatibility/certification, additional integration/developer access, pricing,
commerce/accounts, new company facts or publication of internal engineering
documentation. Product maturity, particular content disclosure, implementation
acceptance and deployment authorization remain separate. Unknown maturity stays
unresolved; accepted homepage disclosure does not establish commercial release.
The [claims policy](../product/public-capability-claims.md) remains governing.

### Binding engineering obligations

Before the next real application client island, restore appropriate
production-browser tests for **hydration, activation, state updates, keyboard
interaction and retained focus**, as applicable to that real component. The
maintainer accepted Counter browser-coverage retirement only within M1.4.2;
retained SSR fixtures are not browser hydration evidence. Restoration is not
complete, and no public testing route or new harness is authorized here.

Before the first additional public child route, make identity-link
`aria-current` handling route-aware and qualify current-page semantics on home
and the new route. Use only genuinely approved destinations; preserve language
validation and appropriate metadata, and add meaningful route, keyboard,
accessibility and responsive regression coverage. This remains a future safeguard,
not work performed in this closeout.

- D13-01 — Screen reader: **DEFERRED, UNVERIFIED — M1.5**.
- D13-02 — Physical touch/device: **DEFERRED, UNVERIFIED — M1.5**.
- D13-03 — Actual OS high contrast: **DEFERRED, UNVERIFIED — M1.5**.

The [homepage manual observations](m1-4-2-homepage-qualification.md#human-reported-manual-homepage-review)
remain human-reported PASS results within their recorded scope, including
keyboard, visual presentation and native zoom. They establish neither the deferred
checks nor WCAG 2.2 AA conformance and do not excuse discovered defects.
Keep the exactly pinned ESLint 9.39.5 bounded maintenance exception, its existing
controls and January 8, 2027 review deadline; no lint, dependency or CI change
is authorized.

### Future content re-entry criteria

Reconsider a deferred candidate only when the applicable inputs exist:

1. A defined audience question and distinct information value.
2. Authoritative factual sources and exact revisions.
3. Verified maturity and product/version/market scope for capability assertions;
   non-capability facts need their relevant evidence rather than an invented status.
4. Explicit approval of the particular disclosure.
5. Exact reviewed wording and necessary qualifications.
6. Confirmed asset rights when assets are needed.
7. Legitimate destinations and eligible navigation.
8. Separate implementation authorization.
9. Content-specific accessibility, security and performance qualification.
10. Separate release approval when deployment becomes relevant.

A future editorial article may be reconsidered after topic, source material and
editorial authority are established; no article or implementation is approved
by this closeout. Use the existing lightweight Git-based review, not another
register, CMS, template engine or approval service.

### Proposed next checkpoint and closeout gates

M1.5 — Final Qualification is proposed next, **subject to separate authorization**.
Its candidate scope is architecture/security qualification of the implemented site,
exact content/disclosure review, Chromium/Firefox/WebKit regressions, server/client
import-graph verification, accessibility/actual-device checks, responsive/manual
review, measured performance/asset review, D13-01–D13-03 and recorded acceptance
decisions. No M1.5 verification is begun by this closeout.

M1.5 is not a production deployment project and must not invent missing content
or add features merely to make the website appear complete. Vercel configuration,
DNS/domains, origin/HTTPS and production infrastructure remain outside this work.

Remaining gates for this closeout are independent audit, human review, a
human-controlled signed commit, exact-SHA supported Ubuntu CI with the unchanged
blocking 30-scenario three-browser matrix (one worker, zero retries and source
cleanliness), and explicit final administrative M1.4 acceptance. Do not mark
the record accepted or CI-qualified until those events occur. Neither successful
baseline CI nor approval of no expansion authorizes M1.5, release or deployment.

## Canonical specifications

- [Information architecture](../product/website-information-architecture.md):
  audiences, eligible navigation, target sitemap, publication review and templates.
- [Visual direction](../design/visual-direction.md): leading hypothesis and alternatives.
- [Design-system contract](../design/design-system-specification.md):
  semantic roles, candidate measurements, component/state scope and test scenarios.

These M1.1 specifications are human-approved. Approval is not evidence that a
public route, capability or approved asset exists. Only the implemented token
combinations in the M1.3.1 record have local and main-CI evidence; the wider candidate
palette remains exploratory and requires contrast/state qualification.

## Verification and maintenance

Documentation-only checkpoints require link/anchor, whitespace and scope/hash
checks, not unrelated build execution. Implementation uses the existing Nix/pnpm
and sequential generated-type contract: pure rules need direct tests; meaningful
UI changes need browser/keyboard checks; route changes need canonical typecheck
and production validation. just check includes the local Chromium gate; Firefox
regression and supported Ubuntu just ci qualify all three blocking engines with
one worker and zero retries. Add tests for actual shell behavior; do not freeze
the old page's wording as permanent product acceptance.

The approved ESLint 9.39.5 exception is unchanged. The human maintainer explicitly
approved continued retention on October 8, 2026 (UTC), satisfying the M1.2
first-implementation-checkpoint review. Review remains required at targeted
lint-stack updates and no later than January 8, 2027 unless explicitly revised.
Check stable plugin
support, active rules and coverage; use no forced peer overrides. If a supported
migration remains unavailable at review, record explicit renewal or a supported
alternative per the [accepted exception](milestone-0-qualification.md#approved-eslint-9-maintenance-exception).
The [M1.2 compatibility review](quality-and-ci.md#m12-eslint-compatibility-review-2026-10-08)
finds the stable plugin stack still unsuitable for an unsupported forced migration.
The maintainer's approved checkpoint disposition retains the exact qualified pin
under all existing controls; it is not an unrestricted exception or deadline
extension. No tooling upgrade is authorized by this closeout.

## Hosting and deployment boundary

The maintainer identifies **Vercel as the intended strategic hosting provider**.
The former “Vercel vs DigitalOcean vs other” deferred entry was stale at provider
selection level; [the register](deferred-decisions.md) now reserves the actual
implementation decisions. Accepted ADRs constrain authority, rendering and
dependency direction, not a different mandatory hosting provider; no contradiction
was found, and no ADR is silently superseded.

Strategic provider intent does not select production architecture, canonical
domain/origin, regions/runtime, caching/customer-data isolation, previews,
HTTPS/HSTS profile, secrets, operations or costs. Those require a bounded deployment
decision and actual qualification. No Vercel file, deployment project, DNS,
account, credential, metadataBase or canonical/hreflang URL is created here.

## Approved M1.2 boundary and acceptance checklist

The maintainer approved an initial **internal engineering-preview shell** on
October 8, 2026 (UTC), consisting of:

- Server-rendered Grocery POS identity header.
- Keyboard-accessible skip link and responsive content container.
- Existing ReScript architecture/qualification proof with its fictional-data status.
- Minimal footer and essential accessible, responsive styling.
- Existing security, hydration and publication-boundary regression coverage.

This scope does not approve public marketing copy, unavailable routes, customer
claims or assets. No pricing, commerce, accounts, contact forms, backend services
or speculative product features belong in M1.2. An internal-preview designation
is neither access control nor production deployment authorization. The [M1.2 shell qualification](m1-2-shell-qualification.md)
records local/feature CI history, the original adversarial CONDITIONAL PASS,
resolved A12-01/A12-02, final main qualification (27/27), completed human visual
review and formal M1.2 acceptance on October 8, 2026 (UTC).
The current identity link assumes one page per language root. Before the first
additional public child route, make its current-page treatment route-aware.

Carry the independent audit notes into M1.2 acceptance:

- **A11-01 — Navigation eligibility:** only actual approved destinations may appear.
  Omit empty primary/utility/footer groups, unavailable links and an unnecessary
  mobile disclosure. Do not fabricate destinations to exercise navigation.
- **A11-02 — Accessible provisional styling:** verify actual text/background
  contrast, meaningful control boundaries, focus indicators and interactive states
  during M1.2. M1.3 may consolidate tokens but cannot defer accessibility correctness.
- **A11-03 — Navigation interaction:** when genuine destinations justify a
  disclosure, test native/enhanced behavior, keyboard dismissal, focus restoration,
  route changes and responsive transitions. Do not implement a disclosure merely
  to exercise hypothetical behavior.

The first-implementation ESLint 9.39.5 review is satisfied by the maintainer's
October 8, 2026 (UTC) approval of continued retention. The unchanged conditions
above, targeted-update review triggers and January 8, 2027 maximum review date remain.
Actual content owners, public destination sets, contact channels and assets still
require separate approval. Later checkpoint scope and deployment decisions remain
human gates; neither specification approval nor green CI grants publication.

## Formal M1.4 acceptance — October 9, 2026 (UTC)

**M1.4 — Reviewed Templates & Content: FORMALLY ACCEPTED AND COMPLETE October 9, 2026 (UTC).**

The human maintainer explicitly accepted M1.4 after reviewing the independent
no-expansion closeout audit, integrating the signed closeout commit and verifying
successful exact-SHA main CI. This records an already-issued human decision;
it does not authorize further implementation, M1.5 or deployment.

### Acceptance chronology and audit disposition

- **October 8, 2026 (UTC):** M1.4.1 and M1.4.2 were individually formally accepted.
  The maintainer also approved no additional M1.4 content/navigation, deferred
  M1.4.3 and authorized the documentation-only scope closeout.
- **October 9, 2026 (UTC):** the signed closeout commit and successful main CI
  were verified; the maintainer explicitly declared M1.4 accepted and complete.

The independent audit's original decision remains
**M1.4 NO-EXPANSION CLOSEOUT — PASS, READY FOR HUMAN REVIEW**.
No BLOCKER, MAJOR or MINOR findings were substantiated. This formal outcome
supersedes the then-pending acceptance/qualification statements in the
[October 8 scope-closeout record](#m14-no-expansion-scope-closeout--october-8-2026-utc);
its starting baseline, decision dates and historical evidence remain unchanged.

### Signed closeout and exact-commit main qualification

Accepted signed closeout:
[`8729179ee18b0d154d8fa63b144d1d98212f8f39`](https://github.com/adarj/grocery-pos-website/commit/8729179ee18b0d154d8fa63b144d1d98212f8f39),
`docs(web): close M1.4 scope without content expansion`.
The maintainer verified signed integration and main qualification on October 9,
2026 (UTC). Read-only inspection confirms the commit identity, subject and
embedded signature; the GitHub job log checks out that exact SHA from main.

[Main run 37877425523](https://github.com/adarj/grocery-pos-website/actions/runs/37877425523)
and its [Quality and browsers job](https://github.com/adarj/grocery-pos-website/actions/runs/37877425523/job/113649110848)
completed successfully on supported Ubuntu. Job steps and logs establish:

| Gate | Accepted closeout-commit result |
| --- | --- |
| Nix/toolchain, frozen dependency installation and browser provisioning | PASS |
| Unit / retained SSR fixture tests | PASS: 17/17 |
| Development-supervisor regressions | PASS: 7/7 |
| Chromium | PASS: 10/10 |
| Firefox | PASS: 10/10 |
| WebKit | PASS: 10/10 |
| Browser aggregate / execution policy | PASS: 30/30, one browser worker, zero test retries |
| Lint / formatting / canonical typecheck / production build | PASS |
| Source cleanliness | PASS |

These results qualify the merged no-expansion closeout commit, not this subsequent
administrative acceptance-record change. The future human-signed acceptance-record
commit requires its own successful exact-SHA Ubuntu CI with the unchanged gates.
No local build or browser suite is rerun merely to record the acceptance decision.

### Accepted milestone scope

| Checkpoint | Accepted disposition and boundary |
| --- | --- |
| M1.4.1 — Content Readiness & Publication Matrix | FORMALLY ACCEPTED October 8, 2026 (UTC). The [canonical register](../product/m1-4-1-content-readiness.md#formal-m141-acceptance-2026-10-08-utc) retains page-candidate analysis, claim/evidence provenance, independent maturity/disclosure controls and withholding decisions. |
| M1.4.2 — First Reviewed Homepage Template | FORMALLY ACCEPTED October 8, 2026 (UTC). The [canonical homepage record](m1-4-2-homepage-qualification.md#formal-m142-acceptance--october-8-2026-utc) retains the approved four-section `/en` homepage, exact wording/metadata, server-first architecture, scoped accessibility evidence and regression migration. |
| M1.4.3 — Additional Reviewed Content & Navigation | **REVIEWED AND DEFERRED; NO IMPLEMENTATION AUTHORIZED.** It was not implemented, qualified or independently accepted as a completed implementation. Its intentional deferral is part of the accepted M1.4 scope decision and does not prevent milestone completion. |

M1.3 remains formally accepted. Additional content may be reconsidered only through
the existing [re-entry criteria](#future-content-re-entry-criteria): new evidence,
exact disclosure approvals and separate implementation authorization.
**Next routes. ReScript models. React presents. APIs connect.**
The accepted 43-property token foundation and no-extraction composition remain unchanged.

### Publication boundaries and binding future obligations

Only the exact M1.4.2 homepage statements under the bounded C01/C02/C04/C05 subset,
their approved composition and metadata retain disclosure approval. No entire claim
category is approved; other assertions and P02–P08 remain **WITHHELD**.
Acceptance establishes neither production retail suitability, commercial product
availability, customer deployment, pilot access, verified hardware compatibility,
support commitments, public pricing/commerce nor additional public routes.
Unknown maturity remains unresolved.

**M1.4 acceptance is not permission to deploy the website.**
**M1.5 — Final Qualification: NOT AUTHORIZED; not started.**
**Production deployment/public release: NOT AUTHORIZED.**

Before the next real application client island, restore appropriate
production-browser coverage for hydration, activation, state updates, keyboard
behavior and retained focus, as applicable to that component. Counter SSR tests
are not equivalent to live browser hydration tests; restoration remains a future gate.

Before the first additional public child route, make the shared identity link's
current-page indication route-aware and qualify the resulting navigation behavior,
including current-page semantics, language/metadata, keyboard, accessibility and reflow.

- D13-01 — Screen reader: **DEFERRED, UNVERIFIED — M1.5**.
- D13-02 — Physical touch/device: **DEFERRED, UNVERIFIED — M1.5**.
- D13-03 — Actual OS high contrast: **DEFERRED, UNVERIFIED — M1.5**.

Human-reported homepage observations retain their recorded scope and do not
complete those deferrals or establish full WCAG conformance. Correct discovered
current defects; no deferred check is silently waived.
Preserve exactly pinned ESLint 9.39.5, its bounded exception controls and the
January 8, 2027 review deadline. No runtime, test, configuration, dependency or
publication change is authorized by this administrative acceptance record.

## M1.5 authorization and M1.5.1 boundary — October 9, 2026 (UTC)

The human maintainer formally authorized **M1.5 — Final Qualification** on
October 9, 2026 (UTC), with immediate execution limited to **M1.5.1 — Qualification
Baseline & Adversarial Review**. This subsequent decision supersedes earlier dated
M1.5-not-authorized statements; those historical records remain intact.
M1.4 remains formally accepted and complete.

The [M1.5.1 baseline assessment](m1-5-1-qualification-baseline.md) owns the current
evidence inventory, source/adversarial assessment, qualification gaps, proposed
D13-01–D13-03 actual-environment protocols and performance measurement method.
Starting accepted main baseline is `bd865a81740c3d890c80989123ce72c07b3fdcc9`;
[run 37880289907](https://github.com/adarj/grocery-pos-website/actions/runs/37880289907)
qualifies that exact formal M1.4 acceptance commit, not the new documentation
candidate. M1.5.1 is under review and not formally accepted.

This checkpoint authorizes qualification documentation and nonmutating inspection
only. No runtime correction, build/browser execution, artifact regeneration or
new manual/performance measurement is authorized here. **M1.5.2 and M1.5.3 require
separate execution authorization.** D13-01–D13-03 remain **DEFERRED, UNVERIFIED —
M1.5** until actual observations and explicit dispositions are recorded.
Retain the client-island regression restoration and first-child-route current-state
gates, exact content-disclosure boundaries and ESLint 9.39.5 maintenance deadline.

M1 and M1.5 are not formally accepted. **Production deployment/public release
remain NOT AUTHORIZED.** Human review, signed integration and the existing Ubuntu
workflow on the future exact documentation SHA remain required.

## M1.5.1 formal acceptance — October 9, 2026 (UTC)

The human maintainer formally accepted **M1.5.1 — Qualification Baseline &
Adversarial Review** on October 9, 2026 (UTC), after independent audit PASS,
signed integration and successful exact-commit main CI. The
[canonical dated acceptance](m1-5-1-qualification-baseline.md#formal-m151-acceptance--october-9-2026-utc)
owns the decision, commit/run evidence and accepted deliverables; it supersedes
the earlier pending status in the authorization record above without rewriting it.

M1.4 remains formally accepted and complete. M1.5 is **AUTHORIZED, IN PROGRESS**;
M1 and M1.5 are not formally accepted. Acceptance of the baseline does not complete
the nine NOTE obligations, D13-01–D13-03, performance measurements or fresh
exact-build artifact qualification. **M1.5.2 and M1.5.3: NOT AUTHORIZED FOR
EXECUTION.** Responsible operators, actual environments and evidence-recording
arrangements require a separate execution decision. Corrective application
changes and production deployment/public release remain **NOT AUTHORIZED**.

## M1.5.2 authorization and qualification boundary — October 9, 2026 (UTC)

The human maintainer separately authorized **M1.5.2 — Accessibility & Performance
Qualification** on October 9, 2026 (UTC). This supersedes earlier historical
M1.5.2-not-authorized statements without rewriting those records. Authorization
permits existing exact-build tests, ignored artifact regeneration, public-output
and client-import inspection, controlled development pseudo-localization,
temporary private laboratory measurements and genuine manual evidence collection.

The accepted starting source is `e5db9126e57b39aa120004d684f7af78e229fc7b`;
[prior main run 37884329332](https://github.com/adarj/grocery-pos-website/actions/runs/37884329332)
is exact-SHA supported Ubuntu evidence, not new CI for the uncommitted report.
The [M1.5.2 results](m1-5-2-qualification-results.md) own commands, environment,
raw-evidence references, fresh local Chromium/Firefox qualification, WebKit host
limitations, artifact provenance, pseudo expansion, repeated performance data
and the nine carried NOTE dispositions.

**Technical execution is complete; manual evidence remains incomplete.
M1.5.2 is UNDER REVIEW, NOT ACCEPTED.** The maintainer supplied current
Firefox/Chrome keyboard, focus and native-400%-zoom/reflow PASS observations
with desktop environment details. D13-01 screen reader, D13-02 physical
touch/device and D13-03 actual OS high contrast remain **DEFERRED, UNVERIFIED —
M1.5**. Host Safari/iPhone access and genuine assistive/theme observations remain
missing; this report neither grants renewed deferral nor claims WCAG conformance.

Only qualification documentation and authorized temporary/generated execution
effects are permitted. No application, test, content, route, dependency, security,
Nix or CI correction is authorized. Before the next real client island, restore
applicable production-browser hydration, activation, state, keyboard and
retained-focus coverage; Counter SSR is not equivalent. Before an additional
public child route, make identity current-state handling route-aware.

Independent audit, human review, signed integration, unchanged exact-SHA
supported Ubuntu CI and explicit acceptance remain required.
**M1.5.3 and corrective implementation: NOT AUTHORIZED. M1.5/M1 remain incomplete.
Production deployment/public release: NOT AUTHORIZED.** M1.4's accepted scope
and exact C01/C02/C04/C05 approvals are unchanged; other assertions/P02–P08 remain
withheld. The ESLint 9.39.5 bounded exception and January 8, 2027 deadline remain.

## M1.5.3 no-correction closeout candidate — October 10, 2026 (UTC)

The preceding read-only necessity assessment recommended **A — NO CORRECTION
JUSTIFIED**: no substantiated present BLOCKER, MAJOR or MINOR application defect
requires corrective implementation for the current approved pre-production
homepage. The maintainer authorized preparation of a documentation-only candidate;
the [M1.5.3 assessment](m1-5-3-correction-assessment.md) owns its evidence,
finding dispositions, retained limitations and proposed acceptance criteria.

**M1.5.3 — NO-CORRECTION CLOSEOUT PROPOSED; FORMAL HUMAN ACCEPTANCE PENDING.**
This supersedes earlier M1.5.3-not-authorized statements only for administrative
preparation, preserving their historical meaning. Corrective application
implementation remains **NOT AUTHORIZED**.

Signed M1.5.2 acceptance-record commit `335a31187284956f2a8eb6e23deecee0e12ed3fe`
is integrated on main; [exact-SHA run 37981808698](https://github.com/adarj/grocery-pos-website/actions/runs/37981808698)
passed. That fulfilled its previously pending integration/CI requirement.
The signed M1.5.3 assessment is now integrated on main at
`f2db122136675e21133cb4c3c0443d87f6dd41b2`;
[run 38042793882](https://github.com/adarj/grocery-pos-website/actions/runs/38042793882)
passed on that exact SHA. Its integration and CI gates are complete. The
subsequent independent audit returned **CONDITIONAL PASS — A153A-01 MINOR correction required**.
The [dated reconciliation](m1-5-3-correction-assessment.md#post-integration-ci-and-independent-audit-reconciliation)
records **A153A-01: CORRECTED IN DOCUMENTATION CANDIDATE; INDEPENDENT FOLLOW-UP CONFIRMATION PENDING**.
Independent follow-up, human review and explicit M1.5.3 acceptance remain gates.
This correction's eventual signed commit requires human integration and its
own successful exact-SHA supported Ubuntu CI; run 38042793882 does not qualify it.

M1.5.1 and M1.5.2 acceptance remain intact; M1.5 is **IN PROGRESS, NOT FORMALLY
COMPLETE**, and M1 is **NOT FORMALLY COMPLETE**. Accepted Windows/provenance
limitations, future client-island and child-route gates, CSP/security controls
and the ESLint 9.39.5 exception/January 8, 2027 deadline remain binding.
Additional content/routes/P02–P08 and production deployment/public release remain
**NOT AUTHORIZED**. This candidate grants no further implementation or release
authority.

## Formal M1.5.3 acceptance — October 10, 2026 (UTC)

**M1.5.3 — FORMALLY ACCEPTED AND COMPLETE; NO CORRECTIVE APPLICATION IMPLEMENTATION REQUIRED.**

The maintainer explicitly accepted the no-correction closeout on October 10,
2026 (UTC). The [canonical acceptance record](m1-5-3-correction-assessment.md#formal-m153-acceptance--october-10-2026-utc)
owns the verbatim decision, signed main revision
`7aec4feaae90afa946565adb17fe60c6e230fccf`, successful
[exact-SHA run 38044259857](https://github.com/adarj/grocery-pos-website/actions/runs/38044259857),
the original independent audit's CONDITIONAL PASS and focused
**PASS — A153A-01 RESOLVED** outcome.

This formal outcome supersedes the earlier proposed/pending M1.5.3 statuses
without changing their historical meaning. The accepted conclusion is
**A — NO CORRECTION JUSTIFIED** for the approved pre-production homepage;
no corrective application implementation was performed or warranted.

M1.5.1 remains **FORMALLY ACCEPTED** and M1.5.2 **FORMALLY ACCEPTED AND COMPLETE**.
M1.5 overall remains **IN PROGRESS, NOT FORMALLY COMPLETE**; M1 overall remains
**NOT FORMALLY COMPLETE**. Accepted qualification limitations and future
client-island, child-route, security/deployment and ESLint maintenance gates remain
binding. No application changes, expanded disclosures, new content/routes/languages,
P02–P08 implementation or production deployment/public release are authorized.
The eventual signed administrative acceptance-record commit requires its own
successful exact-SHA supported Ubuntu CI; run 38044259857 qualifies the integrated
revision above.

## Formal M1.5 acceptance — October 10, 2026 (UTC)

On October 10, 2026 (UTC), the human maintainer explicitly stated:

> I formally accept M1.5 — Final Qualification.

**M1.5 — FINAL QUALIFICATION: FORMALLY ACCEPTED AND COMPLETE October 10, 2026 (UTC).**

The [canonical M1.5 acceptance record](m1-5-final-qualification-acceptance.md)
owns the cumulative checkpoint evidence, 26-requirement reconciliation,
accepted limitations, carried finding dispositions and future obligations.
M1.5.1, M1.5.2 and M1.5.3 are individually formally accepted; the accepted
M1.5.3 conclusion remains **A — NO CORRECTION JUSTIFIED**, with no corrective
application implementation required or performed.

Signed M1.5.3 acceptance-record commit
`1067bd0d21ac45890dcf8e94a3afdf353f372bde` is integrated on main;
[run 38044969571](https://github.com/adarj/grocery-pos-website/actions/runs/38044969571)
succeeded on that exact SHA on supported Ubuntu 24.04 x86_64. This completes
that record's previously pending integration/CI step; it does not qualify the
new overall acceptance-record candidate.

M15R-01's stale current-summary statements are **CORRECTED IN DOCUMENTATION
CANDIDATE; INDEPENDENT CONFIRMATION PENDING**. The human acceptance is effective;
repository closeout remains in progress, requiring independent review, human
review, signed integration and the resulting commit's own exact-SHA Ubuntu CI.
This dated outcome supersedes earlier pending M1.5 and acceptance-record
integration/CI statements without rewriting their contemporaneous meaning.

Windows forced-colors and missing manual provenance remain unverified within
their explicit human-accepted bounded limitations. Scoped human observations,
laboratory-only performance, original evidence loss and independently audited
replacement evidence retain their boundaries. Future client-island, route-aware
identity, security/deployment and ESLint 9.39.5 maintenance obligations remain
binding, including the January 8, 2027 review deadline.

**Milestone 1 overall remains NOT FORMALLY ACCEPTED.** No application changes,
corrective implementation, additional homepage content, public routes/languages,
P02–P08, expanded maturity/commercial claims or production deployment/public
release are authorized by M1.5 acceptance.

## Formal Milestone 1 acceptance — October 10, 2026 (UTC)

On October 10, 2026 (UTC), the human maintainer explicitly stated:

> I formally accept Milestone 1 — Website Foundation.

**MILESTONE 1 — WEBSITE FOUNDATION: FORMALLY ACCEPTED AND COMPLETE October 10, 2026 (UTC).**

The decision followed the independent overall review's
**A — READY FOR FORMAL MILESTONE 1 ACCEPTANCE** recommendation. The
[canonical acceptance record](milestone-1-acceptance.md) owns the approved and
explicitly revised M1.1–M1.5 scope, prerequisite/checkpoint evidence, final
finding dispositions, accepted limitations and binding future obligations.
M1.1 retains its October 8 human specification/design approval, not an invented
separate formal-acceptance declaration. M1.2–M1.5 retain their formal outcomes;
M1.4.3 remains deliberately reviewed and deferred without implementation.
M1.5.3's accepted conclusion remains **A — NO CORRECTION JUSTIFIED**.

Signed M1.5 overall acceptance-record commit
`2195fcc938ca7eeafc0cc6c3a8b287dd03d170f8` is integrated on main.
[Run 38047244927](https://github.com/adarj/grocery-pos-website/actions/runs/38047244927)
succeeded on that exact SHA, push to main, attempt 1, Ubuntu 24.04 x86_64:
17/17 fixtures, 7/7 supervisor regressions, Chromium/Firefox/WebKit 10/10 each,
one worker, zero configured retries and quality/typecheck/build/source-cleanliness
gates. The subsequent independent closeout returned **PASS — M1.5 CLOSEOUT
VERIFIED; M15R-01 RESOLVED**. The earlier M1.5 preparation-time pending
integration/CI/review statements in the dated M1.5 outcome are superseded by this
record; they do not reopen M15R-01 or introduce another defect identifier.

This formal Milestone 1 decision is effective and supersedes the earlier
M1-not-accepted statuses without changing their historical meaning. Independent
audit and human review of this new administrative candidate, human signed
integration and its own successful exact-SHA Ubuntu CI remain closeout gates;
run 38047244927 qualifies the preceding M1.5 record, not this candidate.

Scoped human observations, unverified Windows forced-colors and manual provenance
within their explicit accepted limitations, laboratory-only performance,
original evidence loss and independently reviewed replacement evidence remain
bounded. Q11/Q12/Q16–Q19 retain applicable partial/provenance limits;
Q23–Q25 remain not applicable; Q26 deployment-edge verification remains unverified.
Future client-island, route-aware identity, content-disclosure, security/deployment
and ESLint 9.39.5 maintenance gates remain binding, including January 8, 2027.

**No new application implementation, additional homepage disclosures, public
routes/languages, P02–P08, accounts/commerce/support portals, external integrations,
expanded maturity/commercial claims, Vercel/hosting/domain operations, production
deployment or public release is authorized.** Subsequent website milestones
require separate scope, authorization and qualification decisions.

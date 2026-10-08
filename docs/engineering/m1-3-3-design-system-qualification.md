# M1.3.3 design-system qualification

## Scope, baseline and current status

**M1.3 — Design Tokens & Reusable Primitives: FORMALLY ACCEPTED October 8, 2026 (UTC).**
The [formal acceptance section](#formal-m13-acceptance-2026-10-08-utc) records the
maintainer's explicit decision, signed merged closeout
`ad69f632129231bb2604a3a71678ac959900046c` and successful main run
37827607606 (30/30 and source cleanliness). M1.3.3's independent audit PASS and
M1.3.4's historical CONDITIONAL PASS are preserved below. Five human-reported
manual PASS observations and three explicitly approved deferrals resolved the
human acceptance gates; D13-01–D13-03 remain **DEFERRED, UNVERIFIED — M1.5**.
**M1.4 remains unauthorized.** Acceptance applies to the internal engineering-preview
subset and grants no public product or deployment approval.

### Historical local qualification and starting baseline

The following preserves M1.3.3's pre-merge report and its evidentiary scope.

**LOCAL QUALIFICATION COMPLETE — READY FOR M1.3.3 ADVERSARIAL AUDIT.**
This checkpoint independently inspects the accepted token/presentation foundation,
reviews exact-baseline three-browser evidence and performs bounded local probes.
No implementation deficiency requiring a code or test change was found.
The diff is documentation-only; no additional primitive, token, route or test is
introduced. At this pre-merge reporting point, M1.3.3 was not human-accepted or
remotely qualified at its future commit. M1.3 remained incomplete; M1.3.4 had not
begun and M1.4 was unauthorized. Later outcomes are recorded in the closeout below.

Starting branch: `feat/m1-3-3-design-system-qualification`; HEAD/main/origin-main:
`e14416956296233844b833526ccc32d21b86f47e`, with clean worktree and staging, 0/0
ahead/behind. Fedora ARM64 runs the website Nix environment: Nix 2.34.7,
Node 24.21.0, pnpm 12.9.0 and just 1.51.0. Node/pnpm/just resolve through
`/nix/store`; no substitute toolchain or host-library modification is used.

The maintainer accepted [M1.3.2's no-extraction decision](m1-3-2-primitives-qualification.md#independent-audit-human-acceptance-and-main-qualification--october-8-2026-utc)
and authorized M1.3.3 on October 8, 2026 (UTC).
[ADR 0006](../adr/0006-css-and-design-system-foundation.md), the approved
[design-system contract](../design/design-system-specification.md) and
[M1 plan](milestone-1-plan.md) govern this qualification. The
[token record](m1-3-1-token-qualification.md) remains canonical for token values and
historical experiments; this record owns the independent qualification and limits.

## Coverage inventory and qualification decisions

This historical local inventory preceded the decision to retain the unchanged
implementation. Later human outcomes are recorded in the
[dated closeout](#final-acceptance-readiness-closeout-2026-10-08-utc).
Passing a suite is evidence for its actual assertions, not every design requirement.

| Requirement | Direct evidence reviewed | Coverage / decision |
| --- | --- | --- |
| Token ownership/resolution | Entire stylesheet, definitions/reference graph and actual selectors | 43 referenced properties; no missing reference, cycle, fallback or raw palette reference outside semantic definitions |
| Text/actions/focus contrast | Computed-style contrast scenario, its parser/state setup, independent arithmetic | 24 pairing/state results per engine in accepted CI; relevant text >=4.5:1 and essential non-text >=3:1; no redundant scenario |
| Current-page/link eligibility | Real identity href, aria-current, underline, focus and no-navigation assertions | Existing language-root surface qualified; route-aware handling still required before a child route |
| Responsive/type/spacing | Five-width and 200% root-font/text-spacing scenario; fresh artifact probe | Automated reflow/visibility and control bounds covered; native browser zoom remains manual |
| Keyboard/native semantics | Production JS-disabled skip scenario, activation/focus tests; fresh forward/reverse probe | Existing all-engine forward/Enter/Space coverage; reverse traversal additionally observed in local Chromium/Firefox, not newly verified in WebKit |
| Forced colors/reduced motion | Media-emulation scenario and actual CSS overrides | All-engine automated evidence; actual OS/device/assistive technology remains manual |
| Development pseudo expansion | Historical actual dev-browser experiment; current language/messages source | Prior Chromium/Firefox evidence retained; no fresh dev session or RTL qualification |
| SSR/hydration/security/withholding | Production scenarios, exact main logs and existing artifacts | Qualified baseline retained; no fresh production build or server suite claimed |
| Visual consistency | Accepted M1.3.1 source comparison, current compiled CSS and A13-03 limits | No presentation source change; no new screenshot/parity machinery justified |
| Screen reader/native zoom/device | Manual checklist | Outstanding human evidence, not inferred from axe, viewport or browser emulation |

## Tokens, colors and interaction-state contrast

The 43 authored properties remain five raw palette values, thirteen semantic colors,
nine typography/measure values, seven spacing steps, two layout values and seven
geometry/border/focus values. All have references. Raw ink/paper/evergreen/sage/white
values feed semantic roles only. Selectors use understandable text, surface, action,
link, divider, essential boundary and focus roles; equal present values do not erase
those separate responsibilities. Harvest and unused status/theme families remain deferred.

The existing contrast regression samples actual computed colors, asserts `:active`
before active measurement and asserts the named focused element before measuring
its focus indicator. It emits 24 results: six page/header/footer/identity text
results, six action-label/boundary results, six controlled generic-link states,
one skip-text result and five focus-adjacency results. The temporary anchors are
removed in `finally` before traversal; they qualify generic CSS, not published
navigation. The real identity and skip anchors are independently checked.

Fresh independent opaque-sRGB arithmetic reproduces the following ratios from
the exact stylesheet values. Rendered state coverage comes from the unchanged
computed-style assertions passing on all three engines in baseline CI; this
checkpoint does not claim a fresh 24-result browser run.

| Implemented consumers / states | Foreground / background | Ratio | Applied threshold |
| --- | --- | --- | --- |
| Page text; generic-link hover/active on page | Ink #152B30 / paper #F7F8F4 | 13.86:1 | 4.5:1 text |
| Header/footer text; identity default/hover/active; generic-link hover/active on surface | Ink / white #FFFFFF | 14.79:1 | 4.5:1 text |
| Generic link default on page | Evergreen #236D58 / paper | 5.79:1 | 4.5:1 text |
| Generic link default on surface | Evergreen / white | 6.18:1 | 4.5:1 text |
| Action label default | White / evergreen | 6.18:1 | 4.5:1 text |
| Action label hover/active | White / ink | 14.79:1 | 4.5:1 text |
| Essential action boundary default; hover/active | Evergreen / paper; ink / paper | 5.79:1; 13.86:1 | 3:1 non-text |
| Skip text | Ink / sage #DDEBE4 | 12.03:1 | 4.5:1 text |
| Skip focus against header / skip fill; identity focus against header | Ink / white; ink / sage | 14.79:1; 12.03:1 | 3:1 non-text |
| Main and Counter focus against page | Ink / paper | 13.86:1 | 3:1 non-text |

The parser linearizes sRGB at 0.04045, applies luminance weights
0.2126/0.7152/0.0722 and uses the lighter/darker ratio with 0.05 offsets.
Unrounded values decide pass/fail. It accepts computed opaque rgb/rgba only and
rejects transparency/unsupported spaces; it does not implement alpha compositing
or wide-gamut conversion. Its current opaque colors are within that scope.

Focus remains a 3px outline at 4px offset. Counter/main indicators neighbor paper,
not the button fill. Skip focus is checked against both its fill and header.
Sage dividers are decorative, not essential control boundaries. Identity's
emphasized underline conveys current state without color alone.
Forced-colors checks use resolved Highlight/ButtonText system colors rather than
pretending the fixed-palette ratios describe every user's high-contrast palette.

## Typography, responsive and keyboard results

System sans, 1rem body at 1.6 line height, 1.25rem identity, 1.5rem h2, fluid
1.75–2.75rem h1, 68ch prose and the 60rem shell remain unchanged. Logical gutters,
header wrapping, section rhythm, intrinsic button wrapping and rem-based geometry
retain user scaling; there are no fixed one-line labels or external fonts.
Global section/button defaults cause no present defect. Review their scope when
new nested sections or different controls actually arrive.

A bounded in-memory HTTP probe served the existing production HTML and compiled
CSS with JavaScript disabled, using installed Playwright 1.64.0:
Chromium 156.0.8078.4 and Firefox 157.0 on local Fedora ARM64. It did not start Next,
build files, create a permanent script or use substitute browsers.
Each browser and the ephemeral server were closed in `finally`; the probe exited 0.
It is an artifact/native-behavior probe, not fresh Next HTTP/hydration qualification.

| Viewport CSS px | Container width, Chromium / Firefox | Left margin, Chromium / Firefox | Observation |
| --- | --- | --- | --- |
| 320 | 288 / 288 px | 16 / 16 px | No page overflow; Counter bounds within viewport |
| 375 | 343 / 343 px | 16 / 16 px | Same |
| 768 | 706.55 / 706.57 px | 30.72 / 30.72 px | Same; subpixel rounding differs |
| 1024 | 960 / 960 px | 32 / 32 px | Same; 60rem maximum |
| 1440 | 960 / 960 px | 240 / 240 px | Same; centered bounded measure |

Both engines independently passed first Tab to the visible skip link, Tab to
identity, reverse Tab to skip, Tab to Counter and reverse Tab to identity.
Native Enter on skip focused main; Tab then reached Counter and reverse Tab
returned to identity. The named skip/identity focus targets were asserted before
reading their 3px outline, 4px offset and full viewport bounds.
The identity retained /en and aria-current=page. The landmark order was
header, main, footer; existing HTML has one main and h1/h2/h2 hierarchy.

Baseline production tests additionally prove JS-disabled skip navigation, Counter
hydration, native Enter/Space increments and retained focus. Their reflow scenario
covers 320/375/768/1024/1440 widths and a 320px viewport with 200% root text plus
WCAG text-spacing overrides. Those assertions check overflow, visibility, focused
control position and activation; they do not establish absence of every possible
overlap or actual browser-chrome zoom. The new reverse probe is not a replacement
for manual keyboard/screen-reader review.

## Forced colors, reduced motion and internationalization

The unchanged all-engine media-emulation scenario checks active forced-colors and
reduced-motion queries, no animations/transitions, keyboard skip/Counter behavior,
Highlight focus, ButtonText 2px control boundaries, Enter/Space and retained focus.
The CSS leaves forced-color adjustment enabled; no decorative motion exists and
no reduced-motion override is necessary. Emulation is not actual device/OS testing.

The [historical pseudo experiment](m1-3-1-token-qualification.md#local-qualification--october-8-2026-utc)
used the real development /en-XA page in Chromium/Firefox at five widths with
enlarged text/spacing, native skip/Counter, current identity, noindex/nofollow,
unchanged IDs/PREVIEW and withheld-data exclusion. Current registry, messages and
layout still enforce that separation; no fresh development browser session is
claimed. Production CI rejects pseudo and unsupported routes; public static params
contain only en. Language still implies no formatting locale, country, market,
currency or tax jurisdiction. Logical CSS is future-ready intent, not RTL qualification.

## Cross-browser assessment and visual consistency

[Main run 37797004595](https://github.com/adarj/grocery-pos-website/actions/runs/37797004595)
was independently verified: push to main, exact SHA
`e14416956296233844b833526ccc32d21b86f47e`, attempt 1, successful job/steps.
GitHub verifies the commit signature. Ubuntu 24.04 x86_64 passes repository Nix
tools, frozen install, lint/format, 15 pure tests, seven supervisor cases,
canonical typecheck/build and Chromium/Firefox/WebKit **10/10 each, 30/30**.
One worker, zero browser retries and successful source cleanliness remain enforced.

The ten scenarios per engine are four framework/routing scenarios, two axe/keyboard
scenarios, three shell contrast/reflow/media scenarios and one security-header
scenario. The diagnostics fixture rejects console/page/hydration/CSP errors.
Named focus checks, explicit active-state checks, fixture cleanup and actual
adjacent surfaces provide meaningful coverage. Responsive visibility assertions
and synthetic links have the limits stated above; no important demonstrated
failure requires another permanent test or a changed assertion.

CSS, shell/proof source, shell tests and browser configuration are byte-identical
to accepted M1.3.1 commit `61784aec86d53f35aa839c9ef7fce780d3cd4805`.
Current compiled CSS retains those token definitions/consumers. No unexpected
presentation change is present and no fresh visual-equivalence run is claimed.
A13-03 remains a historical NOTE: its fourth parity snapshot did not assert the
focused target. That limitation is preserved; this checkpoint's named keyboard
probes do not retroactively strengthen the old parity evidence.

## Architecture, security and performance preservation

**Next routes. ReScript models. React presents. APIs connect.** The Next layout/page
validate typed language context before rendering the server ReScript shell/proof.
Publication projection precedes localized presentation; fixtures remain explicitly
fictional and default withholding is preserved. No commercial authority is added.

Existing artifacts, inspected without rebuilding, contain static /en and no
generated pseudo page. The sole ReScript application client reference remains
ui/qualification/Counter.res.mjs; it receives resolved labels, not server catalogs
or publication policy. Neither withheld sample identifier appears in 25 inspected
public HTML/RSC/client-JS artifacts. Authored source uses no raw-HTML injection,
remote scripts/fonts, privileged browser data or provider SDK. HTML script sources
are same-origin framework chunks.

CSP/security configuration is unchanged. Baseline response tests enforce page,
redirect and 404 headers and reject production unsafe-eval/WebSocket allowances;
browser diagnostics qualify hydration under the static-compatible policy.
Inline script/style compromises and sensitive-surface review triggers remain in
the [security baseline](security-baseline.md). No deployment or HTTPS/HSTS claim
is made. Static content, minimal client ownership and no new dependencies preserve
the present performance properties; real-world Core Web Vitals and deployment
behavior have not been measured here.

## Defects, validation and outstanding manual qualification

The results and validation counts below describe the original M1.3.3 local report;
the dated closeout separately records later human decisions.

No runtime, styling, token or test defect was substantiated; no implementation
correction was needed. Stale M1.3.2 approval/CI and M1.3.3-not-started summaries
are reconciled with the human instruction and verified main evidence.
Dependency, lockfile, Nix, CI, security, routing, application and test files stay
unchanged. Canonical build/browser suites are not rerun for this documentation-only
diff. Validation comprises source/artifact inspection, independent color arithmetic,
the bounded local probe, links/anchors, whitespace and scope/generated-state hashes.

Documentation validation passes: 39 Markdown documents, 249 local links and 24
heading-anchor references, with no errors. Tracked/new-document whitespace checks
pass, including git diff --check. Scope hashes show only documentation changes;
all 561 inspected generated/build artifacts remain byte-identical. Nothing is
staged and no diagnostic output or permanent probe file was left in the repository.

At local qualification, human evidence was still needed for appropriate
screen-reader names/reading/status behavior, native browser 400% zoom, real
device/touch use, focus visibility/overlap and text-spacing review.
The [dated closeout](#final-acceptance-readiness-closeout-2026-10-08-utc) records
subsequent human PASS observations and explicitly approved, unverified deferrals.
The [manual checklist](accessibility-and-performance.md#manual-review-checklist)
remains governing. No full WCAG 2.2 AA conformance, screen-reader/device or general
RTL support, production hosting, HTTPS/HSTS, product readiness, security certification
or real-world Core Web Vitals is asserted. Fedora ARM64 WebKit native runtime stays
unqualified; the supported Ubuntu baseline provides WebKit evidence.

## M1.3.4 audit handoff and remaining M1.3 acceptance

This historical handoff preceded M1.3.4 authorization and execution; its completed
audit disposition and later human decisions are preserved in the closeout below.

The subsequent adversarial audit was to challenge the mapping from current code
to inherited evidence, contrast adjacency/state sampling, controlled-link limits,
reverse-probe scope, unchanged visual boundaries and explicit manual nonclaims.
Do not reopen the human-accepted no-extraction decision without concrete new
evidence. At that point, M1.3.4 had not started and required separate authorization.

The historical acceptance plan required the eventual signed M1.3.3 commit to pass
the unchanged Ubuntu Chromium/Firefox/WebKit matrix with one worker and zero
retries. Before M1.3
acceptance: resolve substantive audit findings, record human review and the
disposition of outstanding manual requirements, qualify the reviewed feature
commit, perform human integration and main CI, and obtain explicit maintainer
acceptance of the measured system/inventory. None occurs merely because the
baseline suite passed. M1.4 publication scope still requires separate authorization.

Future consumers must justify new component APIs or states and qualify actual
contrast/keyboard/reflow/client boundaries. Make identity current-page composition
route-aware before the first additional public child route. The approved pinned
ESLint 9.39.5 maintenance exception retains all controls, targeted-update review
and its January 8, 2027 maximum review date.

## Final acceptance-readiness closeout (2026-10-08 UTC)

This historical preparation record was merged at
`ad69f632129231bb2604a3a71678ac959900046c`. Its candidate status and pending
gates below describe the period before the maintainer's explicit final decision;
the [formal acceptance section](#formal-m13-acceptance-2026-10-08-utc) records their subsequent disposition.

**M1.3 CLOSEOUT CANDIDATE — READY FOR HUMAN REVIEW.**
**Formal overall M1.3 acceptance: PENDING final maintainer sign-off.**
The maintainer supplied the manual observations and approved the bounded deferrals
below on October 8, 2026 (UTC). Those decisions support an acceptance recommendation;
they do not constitute an explicit overall M1.3 acceptance decision.

This documentation-only closeout starts on `docs/m1-3-acceptance-closeout` at
HEAD/main/origin-main `b3175b473710279152e78598019812ff43e15a08`, with clean
worktree/staging and 0/0 ahead/behind. It changes no runtime, CSS, tests,
dependencies or configuration. Historical starting SHAs, local results and
conditional audit decisions above and in the linked records remain evidence
of their original checkpoints.

### Reconciled merged checkpoints and exact-commit CI

| Checkpoint | Signed main commit | Main CI | Completed work |
| --- | --- | --- | --- |
| M1.3.1 | `61784aec86d53f35aa839c9ef7fce780d3cd4805` | [Run 37791509300](https://github.com/adarj/grocery-pos-website/actions/runs/37791509300): PASS, 30/30 | Accepted [semantic token foundation](m1-3-1-token-qualification.md) |
| M1.3.2 | `e14416956296233844b833526ccc32d21b86f47e` | [Run 37797004595](https://github.com/adarj/grocery-pos-website/actions/runs/37797004595): PASS, 30/30 | Maintainer-approved [no-extraction decision](m1-3-2-primitives-qualification.md); existing CSS patterns and ReScript composition retained |
| M1.3.3 | `b3175b473710279152e78598019812ff43e15a08` | [Run 37804897764](https://github.com/adarj/grocery-pos-website/actions/runs/37804897764): PASS, 30/30 | Completed independent design-system qualification; adversarial **M1.3.3 PASS — READY FOR HUMAN REVIEW**, no BLOCKER, MAJOR or MINOR findings |

Each independently verified main run tests its listed commit on Ubuntu 24.04
x86_64. Repository Nix/toolchain, frozen installation, lint/format, 15 pure tests,
seven supervisor cases, canonical typecheck/production build, static /en and source
cleanliness pass. Chromium, Firefox and WebKit each pass 10/10 scenarios using one
worker and zero browser retries. These runs qualify the merged checkpoints;
they do not qualify this future signed documentation commit. No fresh build or
browser run is claimed by this closeout.

The accepted foundation remains 43 properties: five raw palette values, thirteen
semantic colors, nine typography/measure values, seven spacing steps, two layout
values and seven geometry/border/focus values. The seven resolved opaque-sRGB
combinations are ink/paper 13.86:1, ink/white 14.79:1, evergreen/paper 5.79:1,
evergreen/white 6.18:1, white/evergreen 6.18:1, white/ink 14.79:1 and ink/sage
12.03:1. The 24 state/context assertions per engine measure rendered consumers,
not 24 unique colors; the detailed thresholds and parser limits remain above.

A13-01 is RESOLVED in the merged token record. A13-02 remains a nonblocking NOTE:
the semantic base-link role is legitimate and qualified with controlled fixtures
despite current anchor overrides. A13-03 remains a nonblocking historical NOTE:
the fourth in-memory parity snapshot did not assert a named focused target.
Later named keyboard probes do not retroactively strengthen that experiment.
No CSS correction or additional extraction follows from either NOTE.

### Final M1.3.4 audit and subsequent dispositions

The maintainer authorized M1.3.4 on October 8, 2026 (UTC). Its original decision is
preserved: **M1.3.4 CONDITIONAL PASS — ACCEPTANCE GATES OUTSTANDING.**
No BLOCKER, MAJOR or MINOR implementation defects were found. The conditional
decision concerned human evidence and administrative reconciliation; it is not
rewritten as an unconditional PASS.

| Obligation | Subsequent disposition |
| --- | --- |
| A134-01 — Human accessibility observations and dispositions | Addressed by the five human-reported PASS observations and three explicitly approved, unverified M1.5 deferrals below; no independent reproduction or complete accessibility claim |
| A134-02 — Final milestone documentation reconciliation | Addressed in this closeout candidate and linked current-status summaries; remains subject to human review and exact-commit CI |

### Human-reported manual observations

The human maintainer reported all five results on **October 8, 2026 (UTC)**.
They are manual observations supplied by the maintainer, not newly automated
results or independent agent reproduction.

| Manual check | Human-reported result |
| --- | --- |
| Keyboard-only navigation | PASS |
| Navigation without JavaScript | PASS |
| Native 400% browser zoom | PASS |
| Focus visibility and overlap | PASS |
| Text enlargement and spacing | PASS |

The exact browser version, operating system and detailed test configuration were
not supplied. This metadata limitation remains part of the record; no values or
additional browser/device coverage are inferred. The reported native-zoom result
is separate from historical 320 CSS-pixel viewport simulation. None of these
observations establishes screen-reader verification or full WCAG 2.2 AA conformance.

### Explicitly approved M1.5 deferrals

For each item below, the human maintainer explicitly approved bounded deferral
on **October 8, 2026 (UTC)**. Each remains **DEFERRED, UNVERIFIED**, is owned for
follow-up by the human repository maintainer and must be revisited at **M1.5**.

| ID / check | Status / target | Required future review |
| --- | --- | --- |
| D13-01 — Screen-reader verification | DEFERRED, UNVERIFIED; M1.5 | Landmarks and heading navigation; accessible names; skip-link destination; Counter status announcement; reading and focus order |
| D13-02 — Physical touch/device verification | DEFERRED, UNVERIFIED; M1.5 | Real-device control usability; touch targets and spacing; narrow-screen layout; portrait/landscape behavior where supported; no accidental neighboring activation |
| D13-03 — Actual OS high-contrast verification | DEFERRED, UNVERIFIED; M1.5 | Actual OS contrast theme; text and control visibility; keyboard focus appearance; meaningful boundaries; relevant browser behavior |

The reason for each bounded deferral is the current internal engineering-preview
scope and the distinction between automated browser evidence and actual
assistive-technology/device/OS qualification. Browser media emulation does not
establish screen-reader, physical-device or actual OS contrast-theme support.
These approvals neither waive the checks nor convert any item to PASS.
Record the M1.5 environment, observations and dispositions, and correct discovered
current defects. No WCAG conformance claim accompanies any deferral.

### Acceptance recommendation and preserved boundaries

> Recommend formal acceptance of M1.3's implemented engineering-preview subset:
> the accepted semantic tokens, approved no-extraction architecture, completed
> qualification and exact-commit CI, independent final audit, five human-reported
> manual PASS observations and three explicitly approved M1.5 deferrals provide
> an evidence-backed basis. No outstanding known implementation defect remains.
> Formal overall M1.3 acceptance is PENDING the maintainer's explicit final sign-off.

**Next routes. ReScript models. React presents. APIs connect.** Server-first
composition, static /en, English-only public authorization, development-only pseudo
content, Counter-only application client ownership, fictional-data withholding,
CSP/security headers and the accepted token/pattern inventory remain unchanged.
Make identity-link current-page handling route-aware before the first additional
public child route. New components, surfaces, states and real content still
require genuine consumers and appropriate contrast/interaction/reflow qualification.

Fedora ARM64 WebKit native runtime remains unqualified. General RTL support,
production hosting, HTTPS/HSTS, real-world Core Web Vitals, security certification
and public product readiness are not established here. No marketing pages,
product disclosures, public claims, CMS, deployment or backend functionality are
authorized. M1.4 remains unauthorized. The approved exactly pinned ESLint 9.39.5
exception retains all controls, targeted lint-stack review and its January 8, 2027
maximum review date.

### Remaining human and CI gates

- Human review of this closeout candidate and explicit final overall M1.3 sign-off;
  the manual PASS reports and deferral approvals alone do not supply that decision.
- Human-controlled signed closeout commit and push, followed by successful CI on
  that exact commit: all 30 Chromium/Firefox/WebKit scenarios, one worker, zero
  retries and source cleanliness. The existing workflow does not automatically
  run on a `docs/**` branch push; qualify this branch through a pull request
  targeting main or manual workflow dispatch without changing CI policy.
- Human integration into main and successful main-branch CI at the integrated
  closeout commit; preserve these exact run/commit references in the acceptance
  record when available.
- Revisit D13-01–D13-03 at M1.5 and correct discovered current defects. Any M1.4
  implementation or publication set requires separate explicit authorization.

No final overall acceptance date, future closeout SHA or CI run is invented.

## Formal M1.3 acceptance (2026-10-08 UTC)

**M1.3 — Design Tokens & Reusable Primitives: FORMALLY ACCEPTED October 8, 2026 (UTC).**
The human repository maintainer explicitly issued this final overall acceptance
decision on October 8, 2026 (UTC). It supersedes the pending-sign-off status of the
historical closeout candidate above.

The final closeout commit is `ad69f632129231bb2604a3a71678ac959900046c`,
signed and merged into main. GitHub verifies its signature. Independently verified
[main run 37827607606](https://github.com/adarj/grocery-pos-website/actions/runs/37827607606)
tests that exact SHA and succeeds on Ubuntu 24.04 x86_64: repository Nix toolchain,
frozen installation, normal quality/typecheck/production-build gates, Chromium
10/10, Firefox 10/10, WebKit 10/10, aggregate **30/30**, one worker, zero browser
retries and source cleanliness. This is qualification of the merged closeout,
not a new execution or qualification of this later administrative recording diff.

The accepted scope is the existing internal engineering-preview design system:
the approved 43-property semantic token foundation, measured implemented pairings,
M1.3.2's maintainer-approved no-extraction decision and existing CSS patterns/
server-rendered ReScript composition. No additional primitive or runtime change
is required by this acceptance.

### Historical audit and resolved acceptance gates

M1.3.4's original **CONDITIONAL PASS — ACCEPTANCE GATES OUTSTANDING** remains
the audit decision. No BLOCKER, MAJOR or MINOR implementation defect was found;
the final maintainer decision does not rewrite that historical audit as PASS.

- **A134-01 — RESOLVED through documented human dispositions:** five human-reported
  PASS observations (keyboard-only navigation, navigation without JavaScript,
  native 400% browser zoom, focus visibility/overlap, text enlargement/spacing)
  and three explicitly approved M1.5 deferrals addressed the human acceptance
  gates. The exact browser version, OS and detailed manual test configuration
  remain unspecified; no independent reproduction is claimed.
- **A134-02 — RESOLVED:** the final closeout was signed, merged and main-qualified
  at the exact commit/run above. Current-status summaries now record the
  maintainer's explicit formal M1.3 acceptance.

### Retained unverified obligations and boundaries

| Obligation | Current disposition |
| --- | --- |
| D13-01 — Screen-reader verification | **DEFERRED, UNVERIFIED — M1.5** |
| D13-02 — Physical touch/device verification | **DEFERRED, UNVERIFIED — M1.5** |
| D13-03 — Actual OS high-contrast verification | **DEFERRED, UNVERIFIED — M1.5** |

The original October 8, 2026 (UTC) deferral approvals, bounded rationale and
[required future checks](#explicitly-approved-m15-deferrals) remain unchanged.
These items are not PASS and are not waived. Revisit them at M1.5, record actual
environments/results and correct any discovered current defect.

**M1.4 remains unauthorized.** Formal M1.3 acceptance does not authorize public
marketing pages, claims, product disclosures, assets, commerce, backend work or
deployment. It establishes neither WCAG conformance, actual device or assistive
technology qualification, production deployment readiness nor public product
readiness. Server-first/static /en, English-only public language authorization,
development-only pseudo content, Counter-only application client ownership,
fictional-data withholding and CSP/security controls remain intact. Make identity
current-page handling route-aware before the first additional public child route.
The pinned ESLint 9.39.5 exception and all controls retain the January 8, 2027
maximum review date.

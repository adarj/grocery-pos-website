# M1.4.2 reviewed homepage implementation and qualification

Current status: **FORMALLY ACCEPTED October 8, 2026 (UTC).** The
[dated formal acceptance](#formal-m142-acceptance--october-8-2026-utc) below
supersedes the historical implementation-time pending statements; the original
baseline, local evidence and review gates are preserved.

## Authorization, baseline and status

**M1.4.2 — First Reviewed Homepage Template: AUTHORIZED October 8, 2026 (UTC).**
The maintainer's exact checkpoint instruction approves four paragraphs, their
headings/order, an Introduction label, one Grocery POS H1, and exact title and
description. The [post-acceptance content update](../product/m1-4-1-content-readiness.md#post-acceptance-homepage-approval-2026-10-08-utc)
records the authoritative payload, bounded C01/C02/C04/C05 scope and remaining
withholding. No additional maturity or availability classification is assigned.
This approval allows implementation, not deployment or public release.

Starting branch `feat/m1-4-2-first-reviewed-homepage`; HEAD/main/origin-main
`abdef6e3b19151b2da96765dea6b9c6bd90d69f2`, 0/0 relationship and clean worktree/staging.
Local Nix tools: Node 24.21.0, pnpm 12.9.0, just 1.51.0 on Linux aarch64.
Installed Next 16.3.8 page/layout, Server/Client Component and metadata guides were
read before changing the framework seam. Dependencies, security/routing policy,
Nix, CI, browser configuration, one worker and zero retries are unchanged.

**Status: implemented and locally qualified; independent adversarial audit,
human review, signed exact-commit remote CI and final main acceptance pending.**
No result for this uncommitted candidate is attributed to baseline CI.

## Implementation and presentation

`Homepage.res` composes four native sections with typed messages and a sole
focusable `main#main-content`. Introduction is a visible label preceding the sole
H1; the remaining three sections use H2. Next's page only validates language and
renders Homepage. Existing layout metadata still resolves the ReScript semantic
catalog and marks the development pseudo language nonindexable.

EngineeringShell retains its historical module name, identity/home and native
skip link. Its obsolete preview status/footer are removed; no approved meaningful
footer content exists. The sole eligible identity link has the non-substantive
name “Grocery POS home”, valid language-root destination, `aria-current="page"`
and emphasized underline. No menu, disclosure, CTA, route or provider is added.
Current-state handling must become route-aware before the first public child route.

The 43 tokens, color values, 60rem container, 68ch prose, fluid gutters/heading,
logical properties and focus/control geometry are unchanged. A narrow first-section
rule removes an introductory separator/gap; existing between-section rhythm remains.
There are no assets, remote fonts, animations or dependencies. Homepage and shell
are server-rendered with no application-source client island.

## Regression migration matrix

| Baseline regression | Original invariant | Replacement / retained evidence |
| --- | --- | --- |
| Whole-page axe | Actual rendered proof page has no tagged violations | Scan actual reviewed homepage with identical tags, no exclusions |
| Counter keyboard/focus | Skip first, target main, native Counter Enter/Space and retained focus | Actual skip/identity forward and reverse traversal, Enter fragment/home navigation, named focused targets; Counter-specific activation retired from public browser suite |
| JS-disabled SSR | Proof, projected authorized sample, metadata and skip behavior without JS | All exact approved sections/order/headings, metadata, sole main, eligible links and native skip; fixture projection/withholding also retained in pure and Node SSR tests |
| Counter hydration | Generated client directive, initial count and live updates through Next | Replaced by JS-enabled exact homepage + HTML/RSC/loaded-script fixture exclusion and diagnostics; Counter source/directive retained, Node SSR tests initial state/resolved labels; no live hydration claim |
| Root redirect | 307, query, preference fallback and cache semantics | Unchanged production assertions |
| Invalid/pseudo language | Strict 404 before exposing proof | Strict 404 before exposing homepage or qualification content |
| Response security | Headers/CSP on page, redirect and 404 | Existing test unchanged |
| Contrast/state sheet | Actual page/shell plus retained action/generic-link styles | Actual homepage text/identity/skip/main focus; controlled removable anchors/buttons qualify retained CSS without implying real homepage controls |
| Reflow/enlargement | Five widths, enlarged/spaced text and keyboard controls | Actual longer homepage and identity/skip/main focus at same widths and overrides |
| Forced colors/reduced motion | Active emulation, focus/control boundary and Counter input | Actual native links/main focus, system colors/no animation and removable control-boundary fixture; no Counter activation claim |
| Pure publication/decoder/i18n | Default withholding, all maturities, strict language and pseudo/machine facts | Existing 15 cases retained/updated; new semantic keys included in pseudo expansion; two Node SSR fixture cases added |

**Explicit tradeoff:** live ReScript Counter hydration, Enter/Space updates and
focus retention through Next are no longer exercised. The real homepage needs no
client island. A new public testing endpoint, embedded invisible Counter or a
separate bundling/hydration harness would add unjustified runtime or testing scope.
The retained Counter directive/source and SSR initial-state test are not evidence
of current browser hydration. Independent/human review must assess this migration;
before reintroducing any actual client island, restore version-matched production
hydration, native keyboard activation, state and retained-focus coverage.

## Local qualification evidence

Results are recorded after execution; comprehensive supported Ubuntu qualification
must test the eventual signed commit across all three engines.

| Check | Result |
| --- | --- |
| Clean regeneration / lint / formatting | PASS: targeted authored ReScript formatting, `just clean`, then `just check`; lint has zero warnings, format check is non-mutating |
| Pure and retained fixture SSR tests | PASS: 15 retained pure cases + 2 Node SSR fixture cases, 17/17 |
| Supervisor / canonical typecheck / production build | PASS: 7/7 supervisor cases, ReScript compilation, `next typegen`/strict TypeScript, production build with static `/en` |
| Chromium / Firefox | PASS: `just check` Chromium 10/10; `just test-e2e --project=firefox` 10/10; one worker, zero retries |
| Production artifacts / client references / withholding | PASS: 24 production JS/HTML/RSC artifact files checked, no qualification identifiers/labels; zero application-source client references; only `/en` plus framework error pages prerendered |
| Development pseudo probe | PASS: in-memory JS-disabled Chromium/Firefox against owned Next dev on port 3101; all four expanded paragraphs/headings and metadata, noindex/nofollow, five widths without overflow, native skip/main focus, `/en-XA` identity-current and `/zz` 404; owned server stopped |
| Documentation / diff / scope integrity | PASS: 41 Markdown documents, 321 local links, 62 heading references; changed/new-file whitespace and trailing newlines; `git diff --check` and staged-diff check; unchanged package/lockfile/Nix/CI/security/routing/configuration hashes |

Both production browser runs passed all ten migrated scenarios; axe reported zero
tagged violations with no exclusions, and shared diagnostics reported no browser,
hydration or CSP errors. The 24 state/context contrast measurements passed, including
controlled test-only generic links/buttons. Supported-host WebKit/full 30/30 remote
qualification is still pending, not supplied by the local results.
No fresh installation or frozen-install claim is made locally; unchanged package
metadata/lockfile and the normal future CI frozen-install gate remain the controls.

Measured opaque-sRGB combinations use the accepted relative-luminance method:
ink/paper 13.86:1, ink/white 14.79:1, evergreen/paper 5.79:1,
evergreen/white and white/evergreen 6.18:1, white/ink 14.79:1, ink/sage 12.03:1.
The browser report state sheet distinguishes actual homepage consumers from removable
test controls/anchors; it does not assert that the homepage has action controls.
Normal text uses 4.5:1; meaningful focus/control boundaries use 3:1 against actual
adjacent surfaces. Decorative dividers are not essential control boundaries.
The parser supports computed opaque sRGB only, not alpha compositing/wide gamut.

## Retained limits and acceptance gates

Five-width and 200% root-font/text-spacing checks are viewport/font simulations,
not fresh native 400% browser-zoom or physical-device evidence. Axe does not establish
WCAG conformance. M1.3's human-reported observations remain historical evidence;
D13-01 screen-reader, D13-02 physical touch/device and D13-03 actual OS high-contrast
remain **DEFERRED, UNVERIFIED — M1.5** and do not waive new homepage defects.
General RTL, deployment HTTPS/HSTS and real-content field performance are unqualified.
Fedora ARM64 WebKit native runtime remains unqualified; supported Ubuntu must
retain all three blocking engines. No scanner, retry or WebKit relaxation is added.

Other claims/sets/assets and commercial routes remain withheld. Internal planning
sources are never application imports. No CMS, API, persistence, account, commerce,
analytics, metadataBase, canonical origin, hreflang, sitemap or structured company
data is added. The ESLint 9.39.5 exception and January 8, 2027 deadline are unchanged.

Remaining: independent adversarial audit, maintainer review of exact content,
visual/accessibility behavior and regression tradeoff; human signed commit/push,
exact-SHA full CI, human main integration/main CI and checkpoint acceptance.
M1.4.3 and later implementation are unauthorized. No deployment occurred or is approved.

## Formal M1.4.2 acceptance — October 8, 2026 (UTC)

**M1.4.2 — First Reviewed Homepage Template: FORMALLY ACCEPTED October 8, 2026 (UTC).**

The human maintainer explicitly accepted the implemented homepage after reviewing
the independent adversarial audit and bounded correction, accepting the Counter
coverage tradeoff, merging the signed implementation, reviewing successful main
CI and reporting all requested manual homepage checks passing. This dated outcome
supersedes the implementation-time pending statements above; their local evidence,
starting baseline and original scope remain historical records.

### Signed implementation and exact-commit main qualification

Accepted implementation commit:
[`017fa33125310fb2d6bbc3bcd517ce9af738254d`](https://github.com/adarj/grocery-pos-website/commit/017fa33125310fb2d6bbc3bcd517ce9af738254d),
`feat(web): implement reviewed pre-production homepage`. Local
`git verify-commit` returned a good signature from the maintainer.

[Main CI run 37848845430](https://github.com/adarj/grocery-pos-website/actions/runs/37848845430)
and its [Quality and browsers job](https://github.com/adarj/grocery-pos-website/actions/runs/37848845430/job/113556439870)
completed successfully on supported Ubuntu. The job log checks out the exact
implementation SHA from main and records the following results:

| Gate | Exact implementation-commit evidence |
| --- | --- |
| Nix toolchain / frozen dependency installation / browser provisioning | PASS |
| Lint / ReScript formatting | PASS; zero-warning lint gate retained |
| Pure / retained SSR fixture tests | PASS: 17/17 |
| Development-supervisor regressions | PASS: 7/7 |
| Canonical typecheck / production build | PASS; static `/en` retained |
| Chromium | PASS: 10/10 |
| Firefox | PASS: 10/10 |
| WebKit | PASS: 10/10 |
| Aggregate / browser execution policy | PASS: 30/30, one worker, zero browser retries |
| Source cleanliness | PASS: tracked diff, staged diff and nonignored untracked checks |

These are supported-host results for the accepted implementation commit. Earlier
local results remain local historical evidence; neither run qualifies the future
administrative acceptance-record commit, which requires its own exact-SHA CI.

### Original adversarial decision and final dispositions

The independent audit's actual decision remains
**M1.4.2 CONDITIONAL PASS — BOUNDED CORRECTIONS OR HUMAN DECISIONS REQUIRED**.
It is not retroactively changed to an unconditional PASS.

| Finding | Final disposition |
| --- | --- |
| A142-01 — MINOR | **RESOLVED.** Current internationalization/accessibility guidance was reconciled with the server-rendered homepage; obsolete current Counter/hydration claims were corrected and historical qualification preserved. |
| A142-02 — NOTE | **HUMAN-ACCEPTED BOUNDED RETIREMENT.** The maintainer explicitly approved retirement of live Counter browser interaction coverage for this checkpoint, subject to the binding restoration gate below. |
| A142-03 — NOTE | **SATISFIED.** Supported Ubuntu exact-SHA main CI passed all three browsers. |

No substantiated BLOCKER, MAJOR or outstanding MINOR implementation finding remains.

Counter implementation/fixture source and its initial SSR tests remain. Live
browser hydration, state updates, Enter/Space activation and retained-focus
behavior are no longer exercised. SSR-only tests are not equivalent to browser
interaction tests; the accepted homepage has no authored application client island.

**Before introducing the next real application client island, restore appropriate
production-browser regression tests covering hydration, activation, state updates,
keyboard interaction and retained focus as applicable to that component.**

This restoration remains a future obligation, not completed work. Acceptance
does not authorize a test-only public route, homepage Counter or new harness.

### Human-reported manual homepage review

The maintainer explicitly reported all requested checks passing on October 8,
2026 (UTC):

| Requested review | Human-reported outcome |
| --- | --- |
| Exact visible content and section hierarchy | PASS |
| Narrow-layout presentation | PASS |
| Keyboard Tab/Shift+Tab behavior | PASS |
| Skip-link behavior and focus visibility | PASS |
| Native 400% browser zoom and content reflow | PASS |
| Absence of misleading commercial-availability presentation | PASS |

These are maintainer observations, not independent reproduction or new automated
evidence. Exact browser/version, operating system and detailed test configuration
were not supplied. No assistive-technology combination, screenshot, measurement
or instrumentation is inferred. These results do not complete the separate
M1.5 deferrals or establish WCAG conformance.

### Accepted scope and retained obligations

Acceptance covers only the four exact approved homepage statements, four-section
composition/headings, exact title/description and existing `/en` implementation
linked in the [scoped content approval](../product/m1-4-1-content-readiness.md#post-acceptance-homepage-approval-2026-10-08-utc).
Other substantive assertions and P02–P08 publication sets remain **WITHHELD**.
No additional routes, assets, commercial services, purchase opportunities, pilot
enrollment, customer accounts, support channels or availability classifications
are approved.

**Acceptance does not authorize production deployment, public release or Vercel
configuration.** Exact content disclosure approval remains separate from the
future deployment gate.

- D13-01 — Screen-reader verification: **DEFERRED, UNVERIFIED — M1.5**.
- D13-02 — Physical touch/device verification: **DEFERRED, UNVERIFIED — M1.5**.
- D13-03 — Actual OS high-contrast verification: **DEFERRED, UNVERIFIED — M1.5**.

These [retained deferrals](m1-3-3-design-system-qualification.md#explicitly-approved-m15-deferrals)
do not waive defects in new content. Keep identity-link current state route-aware
before the first additional public child route. The exactly pinned ESLint 9.39.5
maintenance exception and January 8, 2027 review deadline remain unchanged.

M1.3 and M1.4.1 remain formally accepted. M1.4 is authorized and incomplete;
M1.4.3 is **NOT AUTHORIZED**, and M1.5 has not started. This documentation-only
closeout leaves runtime behavior unchanged and requires human review, a
human-controlled signed commit and successful existing supported Ubuntu CI on
that future exact SHA. No Git integration or deployment is performed here.
